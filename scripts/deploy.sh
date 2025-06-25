#!/bin/bash

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Check if environment is provided
if [ -z "$1" ]; then
    print_message $RED "Error: Environment not specified"
    echo "Usage: ./scripts/deploy.sh [staging|production]"
    exit 1
fi

ENVIRONMENT=$1

# Validate environment
if [ "$ENVIRONMENT" != "staging" ] && [ "$ENVIRONMENT" != "production" ]; then
    print_message $RED "Error: Invalid environment. Use 'staging' or 'production'"
    exit 1
fi

print_message $GREEN "🚀 Starting deployment to $ENVIRONMENT environment"

# Load environment variables
if [ -f ".env.$ENVIRONMENT" ]; then
    export $(cat .env.$ENVIRONMENT | xargs)
fi

# Build the application
print_message $YELLOW "📦 Building application..."
npm run build

# Export static files
print_message $YELLOW "📂 Exporting static files..."
npm run export

# Get S3 bucket and CloudFront distribution ID from AWS Systems Manager
S3_BUCKET=$(aws ssm get-parameter --name "/eu-frontend/$ENVIRONMENT/s3-bucket" --query 'Parameter.Value' --output text)
CLOUDFRONT_DISTRIBUTION_ID=$(aws ssm get-parameter --name "/eu-frontend/$ENVIRONMENT/cloudfront-distribution-id" --query 'Parameter.Value' --output text)

# Sync to S3
print_message $YELLOW "☁️  Uploading to S3..."

# Upload assets with long cache
aws s3 sync out/_next/static s3://$S3_BUCKET/_next/static \
    --cache-control "public, max-age=31536000, immutable" \
    --delete

aws s3 sync out/assets s3://$S3_BUCKET/assets \
    --cache-control "public, max-age=604800" \
    --delete

# Upload HTML files with no cache
aws s3 sync out/ s3://$S3_BUCKET/ \
    --exclude "_next/static/*" \
    --exclude "assets/*" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html; charset=utf-8" \
    --delete

# Invalidate CloudFront cache
print_message $YELLOW "🔄 Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

print_message $GREEN "✅ Deployment to $ENVIRONMENT complete!"
print_message $GREEN "CloudFront invalidation ID: $INVALIDATION_ID"

# Get the website URL
if [ "$ENVIRONMENT" == "production" ]; then
    WEBSITE_URL="https://euholidays.com.sg"
else
    WEBSITE_URL="https://staging.euholidays.com.sg"
fi

print_message $GREEN "🌐 Website URL: $WEBSITE_URL"