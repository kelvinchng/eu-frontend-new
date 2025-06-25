#!/bin/bash

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

print_message $BLUE "🚀 Initializing EU Frontend Repository"
echo ""

# Check if git is already initialized
if [ -d .git ]; then
    print_message $YELLOW "Git repository already initialized"
else
    print_message $GREEN "Initializing git repository..."
    git init
fi

# Create main and develop branches
print_message $GREEN "Setting up branches..."
git checkout -b main 2>/dev/null || git checkout main
git checkout -b develop 2>/dev/null || git checkout develop

# Add all files
print_message $GREEN "Adding files to git..."
git add .

# Create initial commit
if git rev-parse HEAD >/dev/null 2>&1; then
    print_message $YELLOW "Repository already has commits"
else
    print_message $GREEN "Creating initial commit..."
    git commit -m "feat: initial commit - EU Frontend Next.js application

    - Next.js 15 with App Router and TypeScript
    - Tailwind CSS v4 for styling
    - Responsive design implementation
    - Tour details, listings, and country pages
    - GitHub Actions CI/CD workflows
    - AWS S3 + CloudFront deployment setup
    - Terraform infrastructure as code"
fi

# Set up remote (if provided)
if [ ! -z "$1" ]; then
    REMOTE_URL=$1
    print_message $GREEN "Adding remote origin: $REMOTE_URL"
    git remote add origin $REMOTE_URL 2>/dev/null || git remote set-url origin $REMOTE_URL
    
    print_message $GREEN "Setting up branch tracking..."
    git branch --set-upstream-to=origin/main main 2>/dev/null || true
    git branch --set-upstream-to=origin/develop develop 2>/dev/null || true
else
    print_message $YELLOW "No remote URL provided. Add it later with:"
    echo "  git remote add origin YOUR_GITHUB_REPO_URL"
fi

print_message $BLUE "\n📋 Repository Status:"
git status

print_message $GREEN "\n✅ Repository initialized successfully!"
print_message $BLUE "\n📝 Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Add the remote: git remote add origin YOUR_GITHUB_REPO_URL"
echo "3. Push the code:"
echo "   git push -u origin main"
echo "   git push -u origin develop"
echo "4. Configure GitHub Secrets for deployment (see DEPLOYMENT.md)"
echo "5. Set up AWS infrastructure with Terraform (see infrastructure/terraform/)"
echo ""
print_message $YELLOW "📚 Documentation:"
echo "- Deployment Guide: DEPLOYMENT.md"
echo "- GitHub Actions: .github/README.md"
echo "- Project Instructions: CLAUDE.md"