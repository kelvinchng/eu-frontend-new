#!/bin/bash

# Configuration
PROD_BUCKET="eu-frontend-prod"
STAGING_BUCKET="eu-frontend-stag"
AWS_REGION="ap-southeast-1"

echo "🔧 Configuring S3 buckets for static website hosting..."

# Function to configure a bucket
configure_bucket() {
    local BUCKET=$1
    echo "📦 Configuring bucket: $BUCKET"
    
    # Enable static website hosting
    echo "  ➤ Enabling static website hosting..."
    aws s3 website s3://$BUCKET \
        --index-document index.html \
        --error-document 404.html \
        --region $AWS_REGION
    
    # Create bucket policy for public read access
    echo "  ➤ Setting bucket policy for public access..."
    cat > /tmp/bucket-policy.json <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET/*"
        }
    ]
}
EOF
    
    aws s3api put-bucket-policy \
        --bucket $BUCKET \
        --policy file:///tmp/bucket-policy.json \
        --region $AWS_REGION
    
    # Disable block public access settings
    echo "  ➤ Updating public access settings..."
    aws s3api put-public-access-block \
        --bucket $BUCKET \
        --public-access-block-configuration \
        "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
        --region $AWS_REGION
    
    # Set CORS configuration for the bucket
    echo "  ➤ Setting CORS configuration..."
    cat > /tmp/cors.json <<EOF
{
    "CORSRules": [
        {
            "AllowedHeaders": ["*"],
            "AllowedMethods": ["GET", "HEAD"],
            "AllowedOrigins": ["*"],
            "ExposeHeaders": []
        }
    ]
}
EOF
    
    aws s3api put-bucket-cors \
        --bucket $BUCKET \
        --cors-configuration file:///tmp/cors.json \
        --region $AWS_REGION
    
    echo "  ✅ Bucket $BUCKET configured successfully!"
    echo "  🌐 Website endpoint: http://$BUCKET.s3-website-$AWS_REGION.amazonaws.com"
    echo ""
}

# Configure both buckets
configure_bucket $PROD_BUCKET
configure_bucket $STAGING_BUCKET

# Clean up temporary files
rm -f /tmp/bucket-policy.json /tmp/cors.json

echo "✨ S3 static website hosting configuration complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update CloudFront origins to use the S3 website endpoints:"
echo "   - Production: $PROD_BUCKET.s3-website-$AWS_REGION.amazonaws.com"
echo "   - Staging: $STAGING_BUCKET.s3-website-$AWS_REGION.amazonaws.com"
echo ""
echo "2. Your sites will be accessible via CloudFront after the distribution updates."