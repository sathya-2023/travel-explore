# Travel Explore - React Travel Website

A modern, responsive travel website built with React and Vite. Features a clean black and aqua blue theme, smooth animations, and interactive components.

## 🚀 Features

- **React 18** with hooks and modern patterns
- **Vite** for fast development and optimized builds
- **Responsive Design** - Mobile-first approach
- **Interactive Components** - Smooth scroll, carousel, animated counters
- **Dark Theme** - Black background with aqua blue accents
- **Accessibility** - ARIA labels and keyboard navigation
- **No Dependencies** - Pure React, no UI libraries

## 📁 Project Structure

```
travel-website-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with animated stats
│   │   ├── Planner.jsx         # Trip planning form
│   │   ├── Destinations.jsx    # Featured destination cards
│   │   ├── Journeys.jsx        # Signature journey packages
│   │   ├── Insights.jsx        # Service highlights
│   │   ├── Testimonials.jsx    # Testimonial carousel
│   │   ├── Stats.jsx           # Animated statistics
│   │   ├── Newsletter.jsx      # Newsletter signup
│   │   └── Footer.jsx          # Site footer
│   ├── styles/
│   │   └── main.css            # Global styles and theme
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # React entry point
├── index.html                  # HTML shell
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd travel-website-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

## 🎨 Customization

### Colors

Edit the CSS variables in `src/styles/main.css`:

```css
:root {
  --bg: #0a0d10;           /* Background */
  --accent: #19c4d6;       /* Aqua blue accent */
  --ink: #f2f6f8;          /* Text color */
  /* ... more variables */
}
```

### Content

Each component contains its own data. To edit:

- **Destinations** - Edit the `destinations` array in `src/components/Destinations.jsx`
- **Journeys** - Edit the `journeys` array in `src/components/Journeys.jsx`
- **Testimonials** - Edit the `testimonials` array in `src/components/Testimonials.jsx`

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build will be created in the `dist/` folder.

### Deploy to Netlify, Vercel, or GitHub Pages

1. **Netlify/Vercel:** Connect your repository and it will auto-deploy
2. **GitHub Pages:** Use `gh-pages` package or GitHub Actions

## 🧩 Component Overview

### Navbar
- Responsive navigation with mobile toggle
- Smooth scroll to sections
- CTA buttons

### Hero
- Animated statistics counter
- Featured trip card
- Call-to-action buttons

### Planner
- Multi-field trip planning form
- Form validation and submission

### Destinations
- Grid of destination cards
- Reveal-on-scroll animations
- Unsplash images

### Journeys
- Package cards with pricing
- Feature lists
- Reserve buttons

### Testimonials
- Auto-rotating carousel
- Manual navigation controls
- Pause on hover

### Stats
- Animated number counters
- Intersection Observer trigger
- Trust indicators

### Newsletter
- Email signup form
- Form validation

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Vanilla CSS** - Styling (no preprocessor)
- **Intersection Observer API** - Scroll animations
- **Custom Hooks** - State management

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and pull requests.

---

Built with ❤️ for modern travelers
