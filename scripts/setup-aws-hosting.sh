#!/bin/bash

echo "🚀 Setting up AWS hosting for EU Frontend"
echo "========================================="
echo ""

# Check if AWS CLI is configured
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo "❌ AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

echo "✅ AWS CLI is configured"
echo ""

# Run S3 configuration
echo "Step 1: Configuring S3 buckets..."
echo "---------------------------------"
./scripts/configure-s3-website.sh

if [ $? -ne 0 ]; then
    echo "❌ S3 configuration failed"
    exit 1
fi

echo ""
echo "Step 2: Updating CloudFront distributions..."
echo "--------------------------------------------"
./scripts/update-cloudfront-origins.sh

if [ $? -ne 0 ]; then
    echo "❌ CloudFront update failed"
    exit 1
fi

echo ""
echo "🎉 AWS hosting setup complete!"
echo ""
echo "📝 Important notes:"
echo "1. CloudFront changes take 15-20 minutes to propagate globally"
echo "2. The GitHub Actions workflow will handle future deployments automatically"
echo "3. Your sites will be available at:"
echo "   - Production: https://d3b1dndgqrts0z.cloudfront.net"
echo "   - Staging: https://di16jbtvptky0.cloudfront.net"