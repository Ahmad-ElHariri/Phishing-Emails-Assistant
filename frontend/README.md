# PhishGuardAI - Phishing Awareness Platform

A modern, responsive web application designed to educate users about phishing attacks and train them to recognize suspicious emails. Built as a final year project.

## 🎯 Project Overview

PhishGuardAI is an educational platform that combines:
- **Interactive Learning**: Comprehensive modules teaching phishing tactics and indicators
- **Training Lab**: Realistic email examples for hands-on practice
- **Quiz System**: Test your phishing detection skills with immediate feedback
- **Real Cases**: Case studies of documented phishing attacks
- **Professional Design**: Modern cybersecurity-themed UI with dark mode

## 🚀 Features

### Pages
- **Home**: Landing page showcasing the platform with compelling call-to-actions
- **Learn**: Educational modules covering phishing basics, signs, types, and best practices
- **Training Lab**: Interactive email analysis with detailed feedback
- **Quiz**: 8-question assessment with scoring and explanations
- **Real Cases**: 5 real-world phishing attack case studies
- **About**: Project information, team, technology stack, and architecture

### Components
- Sticky responsive navigation with mobile menu
- Professional footer with quick links
- Reusable card components
- Risk assessment badges
- Email preview cards
- Quiz question cards
- Stats display strips
- Responsive grid layouts

### Design
- **Color Scheme**: Deep navy/blue with cyan/teal accents
- **Responsive**: Fully mobile-friendly (desktop, tablet, mobile)
- **Modern**: Gradient backgrounds, smooth animations, clean typography
- **Accessible**: Good color contrast, semantic HTML, keyboard navigation

## 💻 Tech Stack

- **React 18** - UI component framework
- **Vite** - Lightning-fast build tool
- **React Router v6** - Client-side routing
- **CSS Modules** - Scoped styling
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Card.jsx
│   ├── Button.jsx
│   ├── EmailCard.jsx
│   ├── QuizCard.jsx
│   ├── RiskBadge.jsx
│   ├── SectionHeader.jsx
│   ├── StatsStrip.jsx
│   └── PhishingAnalysisCard.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── Learn.jsx
│   ├── TrainingLab.jsx
│   ├── Quiz.jsx
│   ├── RealCases.jsx
│   └── About.jsx
├── data/                # Mock data
│   └── mockData.js
├── styles/              # Global styles
│   └── globals.css
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🎓 Content Included

### Learning Materials
- Introduction to phishing
- 8 common phishing indicators
- 6 phishing attack types
- Email inspection steps
- 8 cybersecurity best practices

### Training Data
- 5 sample emails (mix of phishing and legitimate)
- 8 quiz questions with detailed explanations
- 5 real-world case studies
- 4 real-impact statistics

## 🎨 Design Highlights

- **Color Palette**:
  - Primary: Deep Navy (#0f1729)
  - Accent: Cyan (#06b6d4)
  - Safe: Green (#10b981)
  - Warning: Amber (#f59e0b)
  - Danger: Red (#ef4444)

- **Typography**: System fonts with fallbacks
- **Spacing**: Consistent 1rem base unit
- **Shadows**: Layered depth with 3 shadow levels
- **Animations**: Subtle transitions and hover effects

## 📱 Responsive Breakpoints

- Desktop: 1400px maximum width
- Tablet: Optimized for 768px and above
- Mobile: Full responsive below 768px

## 🔮 Future Enhancements

### Browser Extension
- Real-time email analysis in Chrome
- One-click link verification
- Inline threat indicators

### Backend API (Planned)
- Advanced ML-powered phishing detection
- User authentication and progress tracking
- Enterprise analytics and reporting
- API for third-party integrations

### Features
- Detailed user performance analytics
- Personalized learning recommendations
- Organization-wide training programs
- Advanced phishing detection models

## 📊 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🔒 Security Considerations

This is a **frontend-only** educational application. For production use:
- Implement proper backend authentication
- Use HTTPS for all connections
- Validate and sanitize all user inputs
- Implement CSRF protection
- Add rate limiting for API endpoints
- Regular security audits

## 📄 License

This project is created as an educational final year project.

## 👨‍💼 Team

- **Fadi** - Frontend Development & Chrome Extension
- **Ahmad** - Feature Engineering & ML Models
- **Ali** - Datasets & Data Processing
- **Team** - Backend API & Deployment

## 🤝 Contributing

This is an educational project. For improvements or suggestions, please contact the team.

## ⚠️ Disclaimer

PhishGuardAI is an educational tool designed to increase phishing awareness. If you encounter a real phishing email, report it to:
- Your IT department
- The FBI at [ic3.gov](https://ic3.gov)
- The impersonated organization's security team

---

**Built with ❤️ for cybersecurity awareness**
