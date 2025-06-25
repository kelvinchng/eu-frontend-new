# Deployment Setup Guide

This guide explains how to set up the GitHub Actions deployment workflow for AWS S3 and CloudFront.

## Required GitHub Secrets

### AWS Credentials

You can use either OIDC (recommended) or Access Keys:

#### Option 1: OIDC (Recommended)
- `AWS_DEPLOY_ROLE_ARN`: The ARN of the IAM role to assume (e.g., `arn:aws:iam::123456789012:role/GitHubActionsRole`)

#### Option 2: Access Keys
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key

### S3 Buckets
- `PROD_S3_BUCKET`: Production S3 bucket name
- `STAGING_S3_BUCKET`: Staging S3 bucket name

### CloudFront Distributions
- `PROD_CLOUDFRONT_DISTRIBUTION_ID`: Production CloudFront distribution ID
- `STAGING_CLOUDFRONT_DISTRIBUTION_ID`: Staging CloudFront distribution ID

### Optional
- `PROD_API_URL`: Production API URL (if needed)
- `STAGING_API_URL`: Staging API URL (if needed)
- `GA_TRACKING_ID`: Google Analytics tracking ID

## Setting Up Secrets in GitHub

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each secret listed above

## AWS IAM Permissions

The IAM user or role needs the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name/*",
        "arn:aws:s3:::your-bucket-name"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": [
        "arn:aws:cloudfront::your-account-id:distribution/your-distribution-id"
      ]
    }
  ]
}
```

## Setting Up OIDC (Optional but Recommended)

To use OIDC instead of access keys:

1. Create an IAM Identity Provider in AWS for GitHub
2. Create an IAM role with trust relationship for GitHub Actions
3. Add the role ARN as `AWS_DEPLOY_ROLE_ARN` secret

See [GitHub's guide](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) for detailed instructions.