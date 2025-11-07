# Personal Website - Kelvin Mwaka Muia

A modern, responsive personal website built with React, TypeScript, and Vite. Optimized for hosting on GitHub Pages.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful UI with smooth animations
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🔧 TypeScript for type safety
- 🚀 GitHub Pages ready

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- GitHub account

## Installation & Setup

### 1. Clone the repository (if you haven't already)
```cmd
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

### 2. Install dependencies
```cmd
npm install
```

### 3. Start the development server
```cmd
npm run dev
```

The website will open automatically at `http://localhost:3000`

## Development

### Build for production
```cmd
npm run build
```

### Preview the production build
```cmd
npm run preview
```

### Run linting
```cmd
npm run lint
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub repository

1. Go to [GitHub](https://github.com) and create a new repository named `personal-website`
2. Make sure the repository is public

### Step 2: Update configuration

Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/personal-website"
```

Replace `yourusername` with your actual GitHub username.

### Step 3: Initialize Git and push to GitHub

```cmd
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/personal-website.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```cmd
npm run deploy
```

This command will:
1. Build your project
2. Deploy the `dist` folder to the `gh-pages` branch

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** and **/root**
5. Click **Save**

Your website will be live at: `https://yourusername.github.io/personal-website`

## Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
   - Update your name, title, and description
   - Add your social media links

2. **About Section** - Edit `src/components/About.tsx`
   - Update your bio and skills
   - Add your profile image to `public/profile.jpg`

3. **Experience Section** - Edit `src/components/Experience.tsx`
   - Add your work experience and achievements

4. **Projects Section** - Edit `src/components/Projects.tsx`
   - Add your projects with descriptions and links
   - Add project images to `public/` folder

5. **Contact Section** - Edit `src/components/Contact.tsx`
   - Update your email address

### Styling

- Global styles: `src/App.css`
- Base styles: `src/index.css`
- CSS Variables: Defined in `:root` in `src/index.css`

### Color Scheme

Modify the CSS variables in `src/index.css`:
```css
:root {
  --primary: #64ffda;        /* Teal accent color */
  --secondary: #112240;      /* Dark blue */
  --dark: #0a192f;           /* Very dark blue */
  --light: #e6f1ff;          /* Light blue */
  --gray: #8892b0;           /* Gray text */
  /* ... more variables ... */
}
```

## Project Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── public/
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Troubleshooting

### Issue: Website not showing at GitHub Pages URL

**Solution:**
1. Check that the `homepage` field in `package.json` matches your GitHub Pages URL
2. Verify the `gh-pages` branch exists in your repository
3. Go to Settings > Pages and ensure it's set to deploy from the `gh-pages` branch

### Issue: Styles not loading

**Solution:**
1. Clear your browser cache
2. Check that the `base` in `vite.config.ts` is set to `/personal-website/`
3. Rebuild and redeploy: `npm run deploy`

### Issue: Images not showing

**Solution:**
1. Place images in the `public/` folder
2. Reference them as `/image-name.jpg` in your components
3. Rebuild and redeploy

## Performance Tips

- Optimize images before adding them to `public/`
- Use lazy loading for images
- Minify CSS and JavaScript (already configured in Vite)
- Use the production build for deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Happy coding! 🚀**
