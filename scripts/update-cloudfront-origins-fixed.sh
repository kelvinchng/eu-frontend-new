#!/bin/bash

# Configuration
AWS_REGION="ap-southeast-1"

echo "🔧 Updating CloudFront distributions to use S3 website endpoints..."

# Find distribution IDs
echo "📋 Finding CloudFront distribution IDs..."

PROD_DIST_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?DomainName=='d3b1dndgqrts0z.cloudfront.net'].Id" --output text)
STAGING_DIST_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?DomainName=='di16jbtvptky0.cloudfront.net'].Id" --output text)

echo "  Production Distribution ID: $PROD_DIST_ID"
echo "  Staging Distribution ID: $STAGING_DIST_ID"

# Function to update distribution
update_distribution() {
    local DIST_ID=$1
    local BUCKET=$2
    local ENV=$3
    
    if [ -z "$DIST_ID" ]; then
        echo "❌ Could not find distribution ID for $ENV environment"
        return 1
    fi
    
    echo ""
    echo "📦 Updating $ENV distribution: $DIST_ID"
    
    # Get current distribution config
    echo "  ➤ Getting current configuration..."
    aws cloudfront get-distribution-config --id $DIST_ID > /tmp/dist-config.json
    
    # Extract ETag
    ETAG=$(jq -r '.ETag' /tmp/dist-config.json)
    
    # Update the origin to use S3 website endpoint and remove OAC
    jq --arg bucket "$BUCKET.s3-website-$AWS_REGION.amazonaws.com" \
       '.DistributionConfig.Origins.Items[0] |= {
            "Id": .Id,
            "DomainName": $bucket,
            "OriginPath": .OriginPath,
            "CustomHeaders": .CustomHeaders,
            "CustomOriginConfig": {
                "HTTPPort": 80,
                "HTTPSPort": 443,
                "OriginProtocolPolicy": "http-only",
                "OriginSslProtocols": {
                    "Quantity": 3,
                    "Items": ["TLSv1", "TLSv1.1", "TLSv1.2"]
                },
                "OriginReadTimeout": 30,
                "OriginKeepaliveTimeout": 5
            }
        }' /tmp/dist-config.json > /tmp/dist-config-updated.json
    
    # Remove OriginAccessControlId if it exists
    jq 'del(.DistributionConfig.Origins.Items[0].OriginAccessControlId)' /tmp/dist-config-updated.json | \
    jq '.DistributionConfig' > /tmp/updated-config.json
    
    # Update the distribution
    echo "  ➤ Updating distribution..."
    aws cloudfront update-distribution \
        --id $DIST_ID \
        --if-match $ETAG \
        --distribution-config file:///tmp/updated-config.json
    
    if [ $? -eq 0 ]; then
        echo "  ✅ Distribution $DIST_ID updated successfully!"
    else
        echo "  ❌ Failed to update distribution $DIST_ID"
        return 1
    fi
}

# Update both distributions
update_distribution "$PROD_DIST_ID" "eu-frontend-prod" "production"
update_distribution "$STAGING_DIST_ID" "eu-frontend-stag" "staging"

# Clean up
rm -f /tmp/dist-config.json /tmp/dist-config-updated.json /tmp/updated-config.json

echo ""
echo "✨ CloudFront distributions updated!"
echo ""
echo "⏳ Note: CloudFront distribution updates take 15-20 minutes to deploy globally."
echo "   Your sites will be fully accessible once the deployment completes."
echo ""
echo "🌐 Your sites:"
echo "   Production: https://d3b1dndgqrts0z.cloudfront.net"
echo "   Staging: https://di16jbtvptky0.cloudfront.net"