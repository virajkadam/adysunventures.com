#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./command.sh 'your commit message'"
    exit 1
fi

# Initialize git if needed
git init

# Configure git settings
git config core.fileMode false
git config core.autocrlf false

# Commit code to master
echo "Committing to master branch..."
git add .
git commit -m "$1"

# Pull latest changes from master
echo "Pulling from master..."
git pull origin master || {
    echo "Warning: Unable to pull from master, continuing..."
}

# Push code to master
echo "Pushing code to master..."
git push origin HEAD:master || {
    echo "Error: Failed to push to master"
    exit 1
}

# Build the React app
echo "Building React app..."
npm run build || {
    echo "Error: Build failed"
    exit 1
}

# Prepare main branch for deployment
echo "Preparing deployment to main..."
git checkout main 2>/dev/null || git checkout -b main

# Remove everything except .git and build
find . -maxdepth 1 ! -name '.git' ! -name 'build' ! -name '.' -exec rm -rf {} +

# Create CNAME file for custom domain
echo "adysunventures.com" > CNAME

# Copy build contents
cp -r build/* .
rm -rf build

# Add and commit build files
git add -A
git commit -m "Deploy: $1"

# Push to main
echo "Deploying to main branch..."
git push origin main --force || {
    echo "Error: Failed to deploy to main"
}

# Switch back to master
git checkout master

echo "Successfully pushed code to master and deployed to main!"
