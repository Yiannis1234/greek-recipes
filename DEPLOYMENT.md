# Deployment Instructions

This document provides step-by-step instructions to deploy your Greek Recipe Generator application to GitHub Pages, giving you a public URL that anyone can access.

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account (or create one if you don't have it)
2. Click the "+" icon in the top right and select "New repository"
3. Name the repository `greek-recipes`
4. Make it public
5. Do not initialize with README (we'll upload our own)
6. Click "Create repository"

### 2. Upload Files to GitHub

There are two ways to upload your files:

#### Option 1: Using GitHub Website (Easiest)

1. In your new repository, click "uploading an existing file" link
2. Drag and drop all files from your project folder or click to select files
3. Commit the changes with a message like "Initial commit"

#### Option 2: Using Git Command Line

1. Open Terminal/Command Prompt
2. Navigate to your project folder:
   ```
   cd /Users/ioannisvamvakas/ad_scheduler/game/fresh-greek-recipes
   ```
3. Initialize a Git repository:
   ```
   git init
   ```
4. Add your files:
   ```
   git add .
   ```
5. Commit your files:
   ```
   git commit -m "Initial commit"
   ```
6. Add the remote repository:
   ```
   git remote add origin https://github.com/Yiannis1234/greek-recipes.git
   ```
7. Push your files:
   ```
   git push -u origin main
   ```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for your site to be published
7. The URL will appear in the GitHub Pages section (typically https://yiannis1234.github.io/greek-recipes/)

### 4. Verify Deployment

1. Visit the provided GitHub Pages URL
2. Ensure all features work as expected:
   - Check that the homepage loads correctly
   - Verify language toggle functionality works
   - Test recipe search functionality
   - Make sure recipe details display properly

### 5. Sharing Your Application

You can now share your application with others by providing them the GitHub Pages URL:

```
https://yiannis1234.github.io/greek-recipes/
```

## Troubleshooting

- **Files not appearing**: Make sure all files were uploaded correctly
- **CSS/JS not loading**: Check that file paths in HTML are relative (no leading slash)
- **Page not found (404)**: Ensure the repository name and username in the URL are correct
- **Functionality not working**: Open browser console (F12) to check for JavaScript errors

## Updating Your Application

To update your application after initial deployment:

1. Make changes to your local files
2. Upload new files using the GitHub website, or
3. If using Git command line:
   ```
   git add .
   git commit -m "Update description"
   git push
   ```
4. Changes should be visible on the site within a few minutes 