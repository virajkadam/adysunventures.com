#!/bin/bash

# Build the React app
npm run build

# Stash any changes in master if needed
git stash

# Switch to main branch (create if doesn't exist)
git checkout main 2>/dev/null || git checkout -b main

# Pull latest changes from main
git pull origin main --rebase

# Remove everything except .git and build folder
find . -maxdepth 1 ! -name 'build' ! -name '.git' ! -name '.' -exec rm -rf {} +

# Copy build contents to root
cp -r build/* .

# Remove the build folder
rm -rf build

# Add all files
git add -A

# Commit
git commit -m "Deploy to main"

# Force push to main
git push origin main --force

# Switch back to master
git checkout master

# Restore any stashed changes if needed
git stash pop 2>/dev/null || true

echo "Deployment complete!"