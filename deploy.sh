#!/bin/bash
cd /home/amuuuuu/ameya-site

# Fetch the latest info from GitHub without downloading yet
git fetch origin main

# Check if the local code is behind the GitHub code
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ $LOCAL != $REMOTE ]; then
    echo "New code found! Deploying..."
    
    # 1. Get the new code
    git pull origin main
    
    # 2. Build the new React app
    npm install
    npm run build
    
    # 3. Reload Nginx
    sudo systemctl reload nginx
    
    echo "Deployment complete."
else
    echo "No changes detected. Skipping deployment."
fi
