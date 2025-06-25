# GitHub Actions CI/CD

This directory contains GitHub Actions workflows for automated CI/CD.

## Workflows

### 1. Deploy (`deploy.yml`)

Automated deployment to AWS S3 + CloudFront.

**Triggers:**
- Push to `main` → Production deployment
- Push to `develop` → Staging deployment

**Jobs:**
1. **Test**: Runs linting and type checking
2. **Build**: Creates production build and static export
3. **Deploy**: Uploads to S3 and invalidates CloudFront

### 2. PR Checks (`pr-checks.yml`)

Runs on all pull requests to ensure code quality.

**Checks:**
- ESLint
- TypeScript type checking
- Build test
- Lighthouse performance audit
- Security vulnerability scan

## Required Secrets

Configure these in Settings → Secrets and variables → Actions:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `AWS_DEPLOY_ROLE_ARN` | IAM role for deployment | `arn:aws:iam::123456789:role/GitHubActionsDeployRole` |
| `PROD_S3_BUCKET` | Production S3 bucket | `eu-frontend-production-123456789` |
| `STAGING_S3_BUCKET` | Staging S3 bucket | `eu-frontend-staging-123456789` |
| `PROD_CLOUDFRONT_DISTRIBUTION_ID` | Production CloudFront ID | `E1234567890ABC` |
| `STAGING_CLOUDFRONT_DISTRIBUTION_ID` | Staging CloudFront ID | `E0987654321XYZ` |
| `PROD_API_URL` | Production API endpoint | `https://api.euholidays.com.sg` |
| `STAGING_API_URL` | Staging API endpoint | `https://staging-api.euholidays.com.sg` |
| `GA_TRACKING_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

## Setting Up AWS OIDC

1. Create OIDC provider in AWS:
```bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
```

2. Create IAM role with trust policy allowing GitHub Actions

3. Add role ARN to GitHub Secrets as `AWS_DEPLOY_ROLE_ARN`

## Workflow Status Badges

Add these to your main README:

```markdown
![Deploy](https://github.com/YOUR_ORG/eu-frontend/actions/workflows/deploy.yml/badge.svg)
![PR Checks](https://github.com/YOUR_ORG/eu-frontend/actions/workflows/pr-checks.yml/badge.svg)
```

## Manual Workflow Trigger

You can manually trigger deployments from the Actions tab:
1. Go to Actions → Deploy workflow
2. Click "Run workflow"
3. Select branch and environment