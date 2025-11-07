# Complete GitHub Pages Deployment Guide

This guide will walk you through every step to deploy your personal website to GitHub Pages.

## Prerequisites

- Git installed on your machine
- Node.js and npm installed
- A GitHub account (you already have: kelvinmwakamuia-cell)
- Your repository is ready at: `https://github.com/kelvinmwakamuia-cell`

## Step-by-Step Deployment Instructions

### STEP 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name:** `personal-website`
   - **Description:** "My personal portfolio - Data Scientist & Web Developer"
   - **Visibility:** Public
   - **Initialize with:** Leave unchecked (we'll push existing code)
3. Click **Create repository**

### STEP 2: Initialize Git in Your Local Project

Open Windows Command Prompt and navigate to your project:

```cmd
cd c:\Users\USER\CascadeProjects\personal-website
```

Initialize Git and add your files:

```cmd
cmd /c git init
cmd /c git add .
cmd /c git commit -m "Initial commit: Personal website with portfolio"
cmd /c git branch -M main
```

### STEP 3: Connect to GitHub Repository

Add the remote repository (replace with your GitHub URL):

```cmd
cmd /c git remote add origin https://github.com/kelvinmwakamuia-cell/personal-website.git
```

Verify the remote was added:

```cmd
cmd /c git remote -v
```

You should see:
```
origin  https://github.com/kelvinmwakamuia-cell/personal-website.git (fetch)
origin  https://github.com/kelvinmwakamuia-cell/personal-website.git (push)
```

### STEP 4: Push Code to GitHub

Push your code to the main branch:

```cmd
cmd /c git push -u origin main
```

You'll be prompted to authenticate. Use one of these methods:
- **Personal Access Token** (recommended)
- **GitHub CLI authentication**
- **SSH key**

### STEP 5: Install gh-pages Package

The `gh-pages` package is already in your `package.json`. Install it:

```cmd
cmd /c npm install
```

### STEP 6: Deploy to GitHub Pages

Build and deploy your website:

```cmd
cmd /c npm run deploy
```

This command:
1. Builds your project (`npm run build`)
2. Creates a `dist` folder with optimized files
3. Deploys to the `gh-pages` branch
4. Your site will be accessible at: `https://kelvinmwakamuia-cell.github.io/personal-website`

### STEP 7: Configure GitHub Pages Settings

1. Go to your repository: https://github.com/kelvinmwakamuia-cell/personal-website
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `gh-pages` and `/root`
5. Click **Save**

Wait 1-2 minutes for GitHub to process.

### STEP 8: Verify Your Website

Visit your live website:
```
https://kelvinmwakamuia-cell.github.io/personal-website
```

🎉 **Your website is now live!**

---

## Updating Your Website

### Make Changes Locally

Edit any files in your project, then:

```cmd
cmd /c npm run dev
```

Test locally at `http://localhost:5173`

### Commit and Push Changes

```cmd
cmd /c git add .
cmd /c git commit -m "Update: [describe your changes]"
cmd /c git push
```

### Redeploy to GitHub Pages

```cmd
cmd /c npm run deploy
```

Your changes will be live in 1-2 minutes.

---

## Customization Checklist

Before final deployment, update these files with your real information:

### 1. **Update Your Profile Image**
- Replace the GitHub avatar URL in `src/components/About.tsx`
- Or add your own image to `public/` folder

### 2. **Add Your Real Projects**
Edit `src/components/Projects.tsx`:
- Replace placeholder project descriptions
- Add links to your actual GitHub repositories
- Update project images (use placeholder service or upload your own)

### 3. **Update Social Links**
All social links are already set to your GitHub profile. Update if needed:
- LinkedIn: `https://linkedin.com/in/kelvin-mwaka-muia`
- Twitter: `https://twitter.com/kelvinmwakamuia`

### 4. **Verify Contact Information**
- Email: `kelvinmwakamuia@gmail.com` ✓ (Already updated)

### 5. **Update Meta Information**
Edit `index.html`:
- Title: "Kelvin Mwaka Muia - Data Scientist & Web Developer" ✓
- Description: Already updated ✓

---

## Troubleshooting

### Issue: Website not showing at GitHub Pages URL

**Solution:**
1. Verify the `gh-pages` branch exists in your repository
2. Check GitHub Pages settings point to `gh-pages` branch
3. Wait 2-3 minutes for GitHub to process
4. Clear browser cache (Ctrl + Shift + Delete)

### Issue: Styles not loading or images broken

**Solution:**
1. Verify `vite.config.ts` has `base: '/personal-website/'`
2. Rebuild and redeploy:
```cmd
cmd /c npm run build
cmd /c npm run deploy
```

### Issue: 404 errors on page refresh

**Solution:**
This is normal for single-page applications on GitHub Pages. The routing is handled by React, so direct URL access may show 404. This is expected behavior.

### Issue: Changes not appearing after deployment

**Solution:**
1. Hard refresh your browser (Ctrl + Shift + R)
2. Clear browser cache
3. Wait 2-3 minutes for GitHub to update
4. Check that `gh-pages` branch has latest changes

### Issue: Git authentication fails

**Solution:**
Use a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token"
3. Select `repo` scope
4. Copy the token
5. When prompted for password, paste the token instead

---

## Useful Commands Reference

### Development
```cmd
cmd /c npm run dev          # Start dev server (http://localhost:5173)
cmd /c npm run build        # Build for production
cmd /c npm run preview      # Preview production build
```

### Git
```cmd
cmd /c git status           # Check git status
cmd /c git log --oneline    # View commit history
cmd /c git branch -a        # View all branches
```

### Deployment
```cmd
cmd /c npm run deploy       # Build and deploy to GitHub Pages
```

### Maintenance
```cmd
cmd /c npm update           # Update dependencies
cmd /c npm audit            # Check for vulnerabilities
cmd /c npm cache clean --force  # Clear npm cache
```

---

## Next Steps

1. ✅ Deploy to GitHub Pages (you're here!)
2. 📝 Add your real projects to the Projects section
3. 🖼️ Add project screenshots/images
4. 📧 Test the contact form
5. 🔗 Share your website link
6. 📱 Test on mobile devices
7. 🚀 Keep updating with new projects!

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation: https://docs.github.com/en/pages
3. Check Vite documentation: https://vitejs.dev/
4. Review React documentation: https://react.dev/

---

**Your website is ready to showcase your skills to the world! 🚀**
