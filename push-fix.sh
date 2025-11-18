#!/bin/bash
# Simple script to push the error handling fix to GitHub

echo "🚀 Pushing error handling fix to GitHub..."
echo ""

# Remove any lock files
rm -f .git/index.lock 2>/dev/null

# Push to GitHub
git push origin main

echo ""
echo "✅ Push complete!"
