# Quick Start Guide - Windows CMD Commands

## 🚀 First Time Setup (One-time only)

```cmd
cd c:\Users\USER\CascadeProjects\personal-website

cmd /c git init
cmd /c git add .
cmd /c git commit -m "Initial commit: Personal website with portfolio"
cmd /c git branch -M main
cmd /c git remote add origin https://github.com/kelvinmwakamuia-cell/personal-website.git
cmd /c git push -u origin main
cmd /c npm run deploy
```

Then configure GitHub Pages:
1. Go to: https://github.com/kelvinmwakamuia-cell/personal-website/settings/pages
2. Set Source to: `gh-pages` branch, `/root` folder
3. Click Save

**Your website is live at:** `https://kelvinmwakamuia-cell.github.io/personal-website`

---

## 💻 Local Development

```cmd
cd c:\Users\USER\CascadeProjects\personal-website
cmd /c npm run dev
```

Open: `http://localhost:5173`

Press `Ctrl + C` to stop the server.

---

## 📦 Build for Production

```cmd
cd c:\Users\USER\CascadeProjects\personal-website
cmd /c npm run build
```

Creates optimized files in `dist/` folder.

---

## 🌐 Deploy Updates to GitHub Pages

After making changes:

```cmd
cd c:\Users\USER\CascadeProjects\personal-website

cmd /c git add .
cmd /c git commit -m "Update: [your message]"
cmd /c git push
cmd /c npm run deploy
```

Wait 1-2 minutes for changes to appear online.

---

## 📝 File Locations to Edit

| What to Change | File |
|---|---|
| Your name, title, description | `src/components/Hero.tsx` |
| About section, skills | `src/components/About.tsx` |
| Experience/work history | `src/components/Experience.tsx` |
| Projects | `src/components/Projects.tsx` |
| Contact email | `src/components/Contact.tsx` |
| Social media links | `src/components/Footer.tsx` |
| Colors/styling | `src/App.css` or `src/index.css` |

---

## ✅ Current Status

- ✅ Website built and running locally
- ✅ All your information added (name, email, tech stack)
- ✅ Projects section ready for your real projects
- ✅ GitHub Pages configured
- ⏳ Ready to deploy!

---

## 🎯 Next Steps

1. **Deploy now:**
   ```cmd
   cd c:\Users\USER\CascadeProjects\personal-website
   cmd /c npm run deploy
   ```

2. **Configure GitHub Pages** (see instructions above)

3. **Visit your live website:**
   ```
   https://kelvinmwakamuia-cell.github.io/personal-website
   ```

4. **Update projects** with your real GitHub repositories

5. **Share your website!** 🎉

---

## 🆘 Common Issues

**Website not showing?**
- Wait 2-3 minutes after deployment
- Hard refresh: `Ctrl + Shift + R`
- Check GitHub Pages settings

**Port 5173 already in use?**
```cmd
cmd /c npm run dev -- --port 3000
```

**Need to reinstall dependencies?**
```cmd
cmd /c rmdir /s /q node_modules
cmd /c npm install
```

---

**Your website is ready! Deploy now and start showcasing your work! 🚀**
