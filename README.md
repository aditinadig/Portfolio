# Aditi's Portfolio Website 🎨

A modern, responsive portfolio website built with React, showcasing my work experience, projects, and technical skills. Designed with attention to detail and a focus on clean, maintainable code.

## ✨ Features

- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and scroll animations
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **Clean UI/UX**: Thoughtfully designed with custom color palette and typography
- **Performance Optimized**: Fast load times and smooth interactions
- **Accessible**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11, DaisyUI
- **Build Tool**: Vite 7.0.4
- **Animations**: Framer Motion 12.23.12
- **Linting**: ESLint with React Hooks & React Refresh plugins

## 📂 Project Structure

```
aditi/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Main page sections
│   │   ├── Hero.jsx
│   │   ├── AboutMe.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── Values.jsx
│   │   └── HireMe.jsx
│   ├── data/               # JSON data files (clean separation of content)
│   │   ├── workExperience.json
│   │   ├── projects.json
│   │   ├── techStack.json
│   │   ├── values.json
│   │   └── beliefBlocks.json
│   ├── assets/             # Fonts and images
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles with custom theme
├── public/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎯 Code Organization Highlights

### Clean Data Management
- All content is stored in structured JSON files under `/src/data/`
- Easy to update and maintain without touching component code
- Clear separation between presentation and content

### Component Architecture
- **Modular components**: Each section is a self-contained component
- **Reusable UI elements**: Navbar and Footer used across the app
- **Consistent patterns**: Similar structure across all page components for maintainability

### Styling Approach
- Custom theme with brand colors defined in `index.css`
- Tailwind utility classes for rapid, consistent styling
- Custom animations defined in CSS and enhanced with Framer Motion
- Responsive breakpoints handled consistently across all components

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/aditinadig/aditi.git
cd aditi
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design System

### Color Palette
- **Canvas**: `#f7f4ef` - Warm background
- **Ink**: `#2b2a2a` - Primary text
- **Sunbeam**: `#ffca13` - Accent yellow
- **Lilac**: `#B477ED` - Secondary accent
- Light variants available for subtle backgrounds

### Typography
- **Font Family**: "All Round Gothic" (custom font)
- Multiple weights (300, 400, 500, 600, 700) for hierarchical text

### Animations
- Smooth fade-in effects on scroll
- Staggered animations for lists
- Hover states with scale transforms
- Custom keyframe animations (float, wiggle, fadeInUp)

## 💡 Key Implementation Details

### Performance Optimization
- Vite for lightning-fast HMR and optimized builds
- Code split by pages for better load times
- Optimized images and assets
- Minimal dependencies to keep bundle size small

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios for text

### Code Quality
- ESLint configuration for consistent code style
- React Hooks best practices
- Proper prop validation
- Clean, readable code with comments where needed

## 🔄 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add more interactive project demos
- [ ] Integrate analytics
- [ ] Add contact form with backend integration

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or reach out.

## 📧 Contact

**Aditi Arun Nadig**
- Email: aditiarunnadig@gmail.com
- LinkedIn: [linkedin.com/in/aditi-arun-nadig](https://www.linkedin.com/in/aditi-arun-nadig-78540b214/)
- GitHub: [github.com/aditinadig](https://github.com/aditinadig)


---

**Note**: This portfolio is built to showcase clean code practices, thoughtful UI/UX design, and modern web development skills. Every component is crafted with attention to detail, from pixel-perfect spacing to smooth animations.
