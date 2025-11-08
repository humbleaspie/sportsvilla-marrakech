#!/bin/bash
# Push Tally.so contact form integration to GitHub for Cloudflare deployment

echo "🚀 Pushing Tally.so form integration to GitHub..."
echo ""

# Remove any lock file
rm -f .git/index.lock

# Stage all changes
git add -A

# Commit with a clear message
git commit -m "Replace contact form with Tally.so - no API keys needed"

# Push to GitHub
git push origin main

echo ""
echo "✅ Done! Cloudflare will rebuild in 2-3 minutes."
echo "The Tally.so form will be live on your site!"
