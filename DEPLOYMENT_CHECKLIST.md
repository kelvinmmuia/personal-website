# ✅ Deployment Checklist

Follow this checklist to deploy your website to GitHub Pages.

---

## 📋 Pre-Deployment Checklist

- [ ] Website runs locally: `cmd /c npm run dev`
- [ ] All your information is correct in the components
- [ ] You have a GitHub account: https://github.com/kelvinmwakamuia-cell
- [ ] You have Windows Command Prompt available
- [ ] You have Git installed on your machine

---

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

- [ ] Go to: https://github.com/new
- [ ] Repository name: `personal-website`
- [ ] Visibility: **PUBLIC**
- [ ] Do NOT initialize with README
- [ ] Click **Create repository**
- [ ] Copy the repository URL

### Step 2: Initialize Git Locally

Open Windows Command Prompt:

```cmd
cd c:\Users\USER\CascadeProjects\personal-website
```

- [ ] Run: `cmd /c git init`
- [ ] Run: `cmd /c git add .`
- [ ] Run: `cmd /c git commit -m "Initial commit: Personal website portfolio"`
- [ ] Run: `cmd /c git branch -M main`

### Step 3: Connect to GitHub

- [ ] Run: `cmd /c git remote add origin https://github.com/kelvinmwakamuia-cell/personal-website.git`
- [ ] Verify: `cmd /c git remote -v` (should show your repository)

### Step 4: Push to GitHub

- [ ] Run: `cmd /c git push -u origin main`
- [ ] Authenticate when prompted (use Personal Access Token or GitHub CLI)
- [ ] Wait for push to complete

### Step 5: Deploy to GitHub Pages

- [ ] Run: `cmd /c npm run deploy`
- [ ] Wait for deployment to complete
- [ ] Look for "Published" message

### Step 6: Configure GitHub Pages

- [ ] Go to: https://github.com/kelvinmwakamuia-cell/personal-website/settings/pages
- [ ] Under "Build and deployment":
  - [ ] Source: Select "Deploy from a branch"
  - [ ] Branch: Select `gh-pages` from dropdown
  - [ ] Folder: Select `/root`
- [ ] Click **Save**
- [ ] Wait 1-2 minutes for GitHub to process

### Step 7: Verify Deployment

- [ ] Wait 2-3 minutes after configuration
- [ ] Visit: https://kelvinmwakamuia-cell.github.io/personal-website
- [ ] Website loads successfully
- [ ] Your name appears on the page
- [ ] All sections are visible
- [ ] Styling looks correct

---

## ✔️ Post-Deployment Verification

### Content Verification

- [ ] Hero section displays correctly
  - [ ] Your name: "Kelvin Mwaka Muia"
  - [ ] Your title: "Data Scientist & Web Developer"
  - [ ] Your description is visible
  - [ ] "Get In Touch" button works
  - [ ] "GitHub" button links to your profile

- [ ] About section displays correctly
  - [ ] Your bio is visible
  - [ ] All 14 skills are listed
  - [ ] Your profile image loads

- [ ] Experience section displays correctly
  - [ ] 3 experience entries visible
  - [ ] All descriptions are readable

- [ ] Projects section displays correctly
  - [ ] 6 projects are visible
  - [ ] Project descriptions are readable
  - [ ] Technology tags show correctly

- [ ] Contact section displays correctly
  - [ ] Your email is visible: kelvinmwakamuia@gmail.com
  - [ ] Contact form is functional
  - [ ] Form validation works

- [ ] Footer displays correctly
  - [ ] Social media links are visible
  - [ ] Copyright year is current
  - [ ] All links work

### Functionality Verification

- [ ] Navigation menu works
  - [ ] All menu items are clickable
  - [ ] Smooth scrolling works
  - [ ] Active menu item highlights

- [ ] Responsive design works
  - [ ] Website looks good on desktop
  - [ ] Website looks good on tablet
  - [ ] Website looks good on mobile
  - [ ] No horizontal scrolling on mobile

- [ ] Links work correctly
  - [ ] GitHub link works
  - [ ] LinkedIn link works
  - [ ] Twitter link works
  - [ ] Email link opens email client

- [ ] Styling looks correct
  - [ ] Colors are correct
  - [ ] Fonts are readable
  - [ ] Animations are smooth
  - [ ] No broken images

### Performance Verification

- [ ] Page loads quickly
- [ ] No console errors
- [ ] All images load
- [ ] No broken links

---

## 🎨 Customization Checklist

After deployment, customize your website:

- [ ] Update projects with your real GitHub repositories
  - [ ] Project 1: Add your real project
  - [ ] Project 2: Add your real project
  - [ ] Project 3: Add your real project
  - [ ] Project 4: Add your real project
  - [ ] Project 5: Add your real project
  - [ ] Project 6: Add your real project

- [ ] Add project images
  - [ ] Project 1 image
  - [ ] Project 2 image
  - [ ] Project 3 image
  - [ ] Project 4 image
  - [ ] Project 5 image
  - [ ] Project 6 image

- [ ] Update social media links (if different)
  - [ ] LinkedIn profile
  - [ ] Twitter profile
  - [ ] Other social links

- [ ] Customize styling (optional)
  - [ ] Change primary color
  - [ ] Change background color
  - [ ] Adjust fonts
  - [ ] Modify animations

- [ ] Add additional content (optional)
  - [ ] Add resume/CV link
  - [ ] Add blog section
  - [ ] Add testimonials
  - [ ] Add certifications

---

## 📤 Update & Redeploy Checklist

When you make changes and want to redeploy:

- [ ] Make changes to your files
- [ ] Test locally: `cmd /c npm run dev`
- [ ] Verify changes look correct
- [ ] Stop dev server: `Ctrl + C`
- [ ] Stage changes: `cmd /c git add .`
- [ ] Commit changes: `cmd /c git commit -m "Update: [describe changes]"`
- [ ] Push to GitHub: `cmd /c git push`
- [ ] Deploy to GitHub Pages: `cmd /c npm run deploy`
- [ ] Wait 1-2 minutes
- [ ] Verify changes on live website
- [ ] Hard refresh: `Ctrl + Shift + R`

---

## 🆘 Troubleshooting Checklist

If something goes wrong:

### Website Not Showing

- [ ] Wait 2-3 minutes after deployment
- [ ] Hard refresh: `Ctrl + Shift + R`
- [ ] Clear browser cache: `Ctrl + Shift + Delete`
- [ ] Check GitHub Pages settings
- [ ] Verify `gh-pages` branch exists
- [ ] Check that source is set to `gh-pages` branch

### Styles Not Loading

- [ ] Check `vite.config.ts` has `base: '/personal-website/'`
- [ ] Rebuild: `cmd /c npm run build`
- [ ] Redeploy: `cmd /c npm run deploy`
- [ ] Hard refresh: `Ctrl + Shift + R`

### Images Not Showing

- [ ] Use full URLs for external images
- [ ] Or place images in `public/` folder
- [ ] Reference as `/image-name.jpg`
- [ ] Rebuild and redeploy

### Git Authentication Failed

- [ ] Use Personal Access Token instead of password
- [ ] Go to: https://github.com/settings/tokens
- [ ] Generate new token with `repo` scope
- [ ] Use token as password when prompted

### Port Already in Use

- [ ] Run: `cmd /c npm run dev -- --port 3000`

### Need to Reinstall

- [ ] Run: `cmd /c rmdir /s /q node_modules`
- [ ] Run: `cmd /c npm install`

---

## 📞 Support Resources

If you need help:

- [ ] Read: DEPLOYMENT_STEPS.txt
- [ ] Read: COMPLETE_SETUP.md
- [ ] Read: QUICK_START.md
- [ ] Check: GitHub Pages docs
- [ ] Check: Vite docs
- [ ] Check: React docs

---

## 🎯 Final Checklist

Before considering your website complete:

- [ ] Website is deployed and live
- [ ] All content is correct
- [ ] Website is responsive
- [ ] All links work
- [ ] No broken images
- [ ] No console errors
- [ ] Website looks professional
- [ ] You're happy with the design
- [ ] You've shared the link with others
- [ ] You have a backup of your code

---

## 🎉 Success!

If you've checked all the boxes above, your website is successfully deployed and ready to showcase your skills!

**Your website URL:**
```
https://kelvinmwakamuia-cell.github.io/personal-website
```

**Next Steps:**
1. Share your website link
2. Update projects regularly
3. Keep your information current
4. Add new projects as you create them

---

## 📝 Notes

Use this space to track any issues or notes:

```
[Your notes here]
```

---

**Congratulations! Your personal website is live! 🚀**
