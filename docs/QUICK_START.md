# Quick Start Guide

## 🚀 Get Up and Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Required Images
Place these images in `public/assets/`:
- **logo.png** - Main logo (48x48px recommended)
- **nova-logo.png** - Nova logo (44x44px recommended)  
- **preview.png** - Platform preview (380x420px recommended)

### Step 3: Start Development Server
```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

---

## 📂 Project Overview

### Main Files
- `src/App.jsx` - Main app with routing
- `src/pages/WelcomePage.jsx` - Landing page (/)
- `src/pages/RegisterPage.jsx` - Auth page (/register)
- `src/components/ParticleCanvas/ParticleCanvas.jsx` - Animated background

### Key Features
- ✨ Particle animations
- 🌐 Bilingual (English/Arabic)
- 📱 Fully responsive
- 🎨 Futuristic UI design
- 🔐 Form validation

---

## 🛠️ Common Tasks

### Build for Production
```bash
npm run build
```
Output will be in the `build/` folder.

### Run Tests
```bash
npm test
```

### Update Dependencies
```bash
npm update
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `src/pages/WelcomePage.jsx`:
```css
--blue:   #1ea7ff
--purple: #7a5cff
--cyan:   #53e0ff
```

### Update Social Links
- **WelcomePage**: Lines with Instagram, LinkedIn, GitHub links
- **RegisterPage**: `socialLinks` object

### Modify Content
- **English**: `content.en` object in RegisterPage
- **Arabic**: `content.ar` object in RegisterPage

---

## 📱 Pages

### Welcome Page (/)
- Animated particle background
- Typewriter effect
- Holographic frame
- Magnetic button
- Social media links

### Register Page (/register)
- Registration form
- Login form
- Language toggle
- Platform preview
- Quick access cards
- Contact section

---

## 🐛 Troubleshooting

### Images Not Showing?
Make sure images are in `public/assets/` with correct names:
- logo.png
- nova-logo.png
- preview.png

### Port Already in Use?
Change port by setting environment variable:
```bash
PORT=3001 npm start
```

### Dependencies Issues?
Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation

- **README.md** - Full project documentation
- **UI_STRUCTURE.md** - Detailed UI breakdown
- **PROJECT_REVIEW_SUMMARY.md** - Feature checklist
- **REORGANIZATION_SUMMARY.md** - Structure changes

---

## 💡 Tips

1. Use React DevTools browser extension for debugging
2. Check browser console for errors
3. Test on different screen sizes
4. Verify all links work correctly
5. Test both English and Arabic languages

---

**Happy Coding! 🎉**
