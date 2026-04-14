# E-Learning Nova 🚀

A modern, futuristic e-learning platform built with React, featuring stunning animations, bilingual support (English/Arabic), and an intuitive user interface.

## ✨ Features

- **Futuristic UI Design** - Particle animations, holographic frames, and smooth transitions
- **Bilingual Support** - Full English and Arabic (RTL) language support
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Authentication System** - Registration and login with form validation
- **Interactive Components** - Magnetic buttons, typewriter effects, and animated elements
- **Platform Preview** - Quick access to courses, schedules, grades, and notifications

## 📁 Project Structure

```
elearning-nova/
├── public/
│   ├── assets/          # Static assets (images, logos)
│   ├── favicon.ico      # Browser tab icon
│   ├── index.html       # HTML template
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/
│   │   └── ParticleCanvas/
│   │       └── ParticleCanvas.jsx    # Animated particle background
│   ├── pages/
│   │   ├── WelcomePage.jsx           # Landing page with animations
│   │   └── RegisterPage.jsx          # Registration/Login page
│   ├── styles/
│   │   └── global.css                # Global styles
│   ├── App.jsx                       # Main app component with routing
│   └── index.js                      # App entry point
├── docs/
│   ├── UI_STRUCTURE.md               # Detailed UI documentation
│   └── PROJECT_REVIEW_SUMMARY.md     # Project status and features
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd elearning-nova
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets:
Place the following images in `public/assets/`:
- `logo.png` - Main logo (used in WelcomePage)
- `nova-logo.png` - Nova logo (used in RegisterPage)
- `preview.png` - Preview image (used in holographic frame)

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🎨 Key Components

### WelcomePage (/)
- Animated particle canvas background
- Typewriter text animation
- Magnetic button interaction
- Holographic frame with scan lines
- Floating geometric shapes
- Social media links (Instagram, LinkedIn, GitHub)

### RegisterPage (/register)
- Split layout with hero section and form
- Registration and login forms with validation
- Language toggle (English/Arabic with RTL support)
- Platform preview cards
- Quick access navigation
- Contact section with social links

## 🌐 Routing

- `/` - Welcome/Landing page
- `/register` - Registration and login page

## 🎯 Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **CSS-in-JS** - Inline styles with dynamic theming

## 🔧 Configuration

### Update Social Links

Edit the social links in:
- `src/pages/WelcomePage.jsx` - Navigation bar links
- `src/pages/RegisterPage.jsx` - Contact section links

### Customize Colors

The color palette is defined in CSS variables:
```css
--blue:   #1ea7ff
--purple: #7a5cff
--cyan:   #53e0ff
--bg:     #06101f
--surface:#0b1a30
--text:   #eef7ff
--muted:  #6e90b0
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1100px
- **Tablet**: 768px - 1100px
- **Mobile**: < 768px

## 🌍 Internationalization

The app supports English and Arabic with full RTL (Right-to-Left) support. Language can be toggled using the language button in the navigation bar.

## 🔐 Authentication

The registration and login forms include:
- Email validation
- Password strength validation (minimum 8 characters)
- Password confirmation matching
- Real-time error messages
- Success notifications

**Note**: Backend API integration required for full functionality. Update the API endpoint in `RegisterPage.jsx`:
```javascript
const endpoint = view === 'register' ? '/api/auth/register' : '/api/auth/login';
```

## 📄 License

© 2026 E-LEARNING NOVA

## 👥 Contact

- **Email**: alaa.f.elsayed@gmail.com
- **Telegram**: [@alaa_fawzy_eld](https://t.me/alaa_fawzy_eld)
- **WhatsApp**: [+201554194309](https://wa.me/201554194309)
- **Facebook**: [Alaa Fawzy Sayed](https://www.facebook.com/Alaa.Fawzy.Sayed)
- **Instagram**: [@alaaf.alsayed](https://www.instagram.com/alaaf.alsayed)

## 🎉 Acknowledgments

Built with modern web technologies and a focus on user experience and accessibility.
