# Setup & Deployment Guide - Windows CMD

This guide covers all commands to run your personal website locally and deploy it to GitHub Pages using Windows Command Prompt (CMD).

## Quick Start (Local Development)

### 1. Install Dependencies
```cmd
cmd /c npm install
```

### 2. Start Development Server
```cmd
cmd /c npm run dev
```

The website will be available at `http://localhost:5173`

### 3. Stop the Development Server
Press `Ctrl + C` in the command prompt

## Building for Production

### Build the Project
```cmd
cmd /c npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build
```cmd
cmd /c npm run preview
```

## GitHub Pages Deployment

### Step 1: Initialize Git Repository
```cmd
cmd /c git init
cmd /c git add .
cmd /c git commit -m "Initial commit"
cmd /c git branch -M main
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Create a repository named `personal-website`
3. Make it public
4. Copy the repository URL

### Step 3: Add Remote and Push
Replace `yourusername` with your GitHub username:
```cmd
cmd /c git remote add origin https://github.com/yourusername/personal-website.git
cmd /c git push -u origin main
```

### Step 4: Update Homepage URL
Edit `package.json` and update the homepage field:
```json
"homepage": "https://yourusername.github.io/personal-website"
```

### Step 5: Deploy to GitHub Pages
```cmd
cmd /c npm run deploy
```

This command:
- Builds your project
- Deploys to the `gh-pages` branch
- Your site will be live at: `https://yourusername.github.io/personal-website`

### Step 6: Configure GitHub Pages (One-time)
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** and **/root**
5. Click **Save**

## Updating Your Website

### Make Changes
Edit files in `src/components/` and save. The dev server auto-refreshes.

### Deploy Updates
After making changes:
```cmd
cmd /c git add .
cmd /c git commit -m "Update website"
cmd /c git push
cmd /c npm run deploy
```

## Useful Commands

### Lint Code
```cmd
cmd /c npm run lint
```

### Check Dependencies
```cmd
cmd /c npm list
```

### Update Dependencies
```cmd
cmd /c npm update
```

### Clear Cache
```cmd
cmd /c npm cache clean --force
```

## Troubleshooting

### Port 5173 Already in Use
```cmd
cmd /c npm run dev -- --port 3000
```

### Build Fails
```cmd
cmd /c npm run build -- --force
```

### Clear node_modules and Reinstall
```cmd
cmd /c rmdir /s /q node_modules
cmd /c npm install
```

### GitHub Pages Not Updating
1. Check that `gh-pages` branch exists in your repository
2. Verify the `homepage` URL in `package.json` is correct
3. Redeploy:
```cmd
cmd /c npm run deploy
```

## File Structure
```
personal-website/
├── src/
│   ├── components/          # React components
│   ├── App.tsx             # Main app component
│   ├── App.css             # App styles
│   ├── index.tsx           # Entry point
│   └── index.css           # Global styles
├── public/                 # Static files (images, etc.)
├── dist/                   # Production build (created by npm run build)
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Customization Checklist

- [ ] Update your name in `src/components/Hero.tsx`
- [ ] Update your bio in `src/components/About.tsx`
- [ ] Add your profile image to `public/profile.jpg`
- [ ] Update experience in `src/components/Experience.tsx`
- [ ] Add your projects in `src/components/Projects.tsx`
- [ ] Update contact email in `src/components/Contact.tsx`
- [ ] Update social media links in components
- [ ] Update GitHub username in `package.json` homepage field
- [ ] Deploy to GitHub Pages with `npm run deploy`

## Performance Tips

- Optimize images before adding them (use tools like TinyPNG)
- Keep component files small and focused
- Use lazy loading for images
- Monitor bundle size with `npm run build`

---

**Your website is ready! Happy coding! 🚀**
