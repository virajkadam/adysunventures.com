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

# Create and switch to temporary deployment branch
echo "Creating temporary deployment branch..."
git checkout --orphan temp-deployment

# Clear the working directory except build folder
git rm -rf --cached .
git clean -df
mv build/* .
rm -rf build

# Create CNAME file
echo "adysunventures.com" > CNAME

# Stage all files
git add -A

# Commit
git commit -m "Deploy: $1"

# Force push to main branch
echo "Force pushing to main branch..."
git push origin HEAD:main --force

# Switch back to master
git checkout master

# Clean up
git branch -D temp-deployment

echo "Successfully deployed to main branch!"
