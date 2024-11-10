#!/bin/bash

echo "Starting deployment process..."

# Store current state
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Stash any uncommitted changes
echo "Stashing any changes..."
git stash push -u -m "Temporary stash for deployment"

# Create a temporary directory outside git repo
echo "Creating temporary directory..."
TEMP_DIR="../temp_deploy_$(date +%s)"
mkdir -p "$TEMP_DIR"

# Copy build contents to temp directory
echo "Copying build files..."
cp -r build/* "$TEMP_DIR"/
cp -r build/.* "$TEMP_DIR"/ 2>/dev/null || true

# Create CNAME in temp directory
echo "Creating CNAME file..."
echo "adysunventures.com" > "$TEMP_DIR"/CNAME

# Create and switch to a temporary branch
echo "Creating temporary deployment branch..."
git checkout --orphan temp_deploy

# Clean the working directory
git rm -rf --cached .
git clean -fdx

# Copy files from temp directory
echo "Moving files to deployment branch..."
cp -r "$TEMP_DIR"/* .
cp -r "$TEMP_DIR"/.* . 2>/dev/null || true

# Cleanup temp directory
rm -rf "$TEMP_DIR"

# Add all files
echo "Adding files..."
git add -A

# Show what's being committed
echo "Files to be committed:"
git status

# Commit changes
echo "Committing files..."
git commit -m "Deploy: Production build $(date)"

# Force push to main branch
echo "Pushing to main branch..."
git push origin HEAD:main --force

# Switch back to original branch
echo "Returning to $CURRENT_BRANCH..."
git checkout -f "$CURRENT_BRANCH"

# Remove temporary branch
git branch -D temp_deploy

# Restore stashed changes if any
git stash pop 2>/dev/null || true

echo "Deployment complete! Build contents have been pushed to main branch."