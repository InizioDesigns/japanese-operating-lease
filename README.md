# Japanese Operating Lease Website

A modern, accessible website providing comprehensive information about Japanese Operating Leases (JOL) and JOLCO structures for aircraft financing.

## 🚀 Features

- **Modern React Architecture** - Built with React 19 and Vite for optimal performance
- **Fully Responsive** - Looks great on all devices from mobile to wide desktop monitors
- **WCAG 2.2 AA Compliant** - Meets web accessibility standards
- **Semantic HTML** - Proper document structure for SEO and accessibility
- **Fast Navigation** - Client-side routing with React Router
- **Professional Design** - Modern UI with Tailwind CSS
- **SEO Optimized** - Proper meta tags and semantic structure

## 📋 Prerequisites

- Node.js (v20.17.0 or higher recommended)
- npm (v11.0.0 or higher)

## 🔧 Installation

```bash
# Install dependencies
npm install
```

## 💻 Development

```bash
# Start development server
npm run dev

# Development server will be available at http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
japanese-operating-lease/
├── public/
│   ├── jollogo.png          # Site logo
│   └── works1.png            # Transaction structure diagram
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Global navigation header
│   │   └── Footer.jsx        # Global footer
│   ├── pages/
│   │   ├── Home.jsx          # Homepage with overview and contact form
│   │   ├── JolVsJolco.jsx    # Comparison of JOL and JOLCO structures
│   │   ├── HowItWorks.jsx    # Transaction structure and process
│   │   ├── RecentTrends.jsx  # Current market trends
│   │   ├── ActiveParticipants.jsx  # Key market players
│   │   ├── Parties.jsx       # Transaction parties and roles
│   │   └── Economics.jsx     # Financial mechanics
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and accessibility utilities
├── index.html                # HTML entry point
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
├── netlify.toml              # Netlify deployment configuration
└── package.json              # Project dependencies
```

## 📄 Pages

### Home (`/`)
- Overview of Japanese Operating Leases
- Historical background
- Contact form for inquiries
- About the author section

### JOL vs. JOLCO (`/jol-vs-jolco`)
- Detailed comparison between JOL and JOLCO structures
- Key distinguishing factors
- Benefits for airlines
- Visual comparison cards

### How It Works (`/how-it-works`)
- Step-by-step transaction process
- Transaction structure diagram
- Key participants
- Party relationships

### Recent Trends (`/recent-trends`)
- Current market developments
- JOLCO adoption trends
- Geographic diversification
- Post-pandemic recovery
- ESG considerations

### Active Participants (`/active-participants`)
- Japanese trading companies
- Financial institutions
- Leasing companies
- Global airlines
- Market dynamics
- Entry requirements

### Parties (`/parties`)
- Detailed role descriptions for all transaction parties
- Special Purpose Companies (SPC)
- Equity investors
- Senior lenders
- Airlines
- Advisors and service providers

### Economics (`/economics`)
- Tax economics and benefits
- Financing structure
- Airline economics
- Comparative pricing
- Risk and return profiles
- Value proposition

## ♿ Accessibility

This website meets **WCAG 2.2 Level AA** standards:

- **Keyboard Navigation** - All interactive elements accessible via keyboard
- **Screen Reader Support** - Proper ARIA labels and semantic HTML
- **Color Contrast** - All text meets minimum contrast ratios (4.5:1 for normal text)
- **Focus Indicators** - Clear visual focus states on all interactive elements
- **Responsive Text** - Readable at up to 200% zoom
- **Skip Links** - Jump to main content functionality for keyboard users
- **Motion Preferences** - Respects `prefers-reduced-motion` setting

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed compliance documentation.

## 🛠️ Technology Stack

- **React 19** - Modern UI framework
- **React Router DOM 7** - Client-side routing
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## 🌐 Deployment

### Netlify (Configured)

This project is configured for Netlify deployment with `netlify.toml`:

**Option 1: Deploy via Git (Recommended)**

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

**Option 2: Deploy via Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

**Option 3: Manual Deploy**

```bash
# Build the project
npm run build

# Drag and drop the dist folder at https://app.netlify.com/drop
```

### Other Platforms

**Vercel:**
```bash
vercel --prod
```

**Static Hosting:**
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🎨 Design Principles

### Color Palette
- **Primary Blue**: #2563eb (Blue 600) - Brand color, navigation
- **Dark Blue**: #1e40af (Blue 800) - Headers and hero sections
- **Gray Scale**: Various grays for text and backgrounds
- All colors tested for WCAG AA contrast compliance

### Typography
- **Headings**: Bold, clear hierarchy (h1 → h6)
- **Body Text**: 1.6 line height for optimal readability
- **Font Sizes**: Responsive sizing using Tailwind's scale

### Layout
- **Maximum Width**: Content constrained to 7xl (80rem) for readability
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Cards**: Rounded corners (rounded-2xl), subtle shadows for depth
- **Gradients**: Professional blue gradients for visual interest

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (sm)
- **Tablet**: 641px - 768px (md)
- **Desktop**: 769px - 1024px (lg)
- **Wide Desktop**: 1025px+ (xl, 2xl)

## 🔍 SEO Features

- Semantic HTML5 structure
- Descriptive page titles with keywords
- Meta descriptions for each page
- Keyword-rich, SEO-friendly URLs
- Alt text for all images
- Fast page load times (Vite optimization)
- Mobile-friendly responsive design

## 📝 Content Updates

To update content on any page:

1. Navigate to the appropriate file in `src/pages/`
2. Edit the JSX content
3. Changes will hot-reload in development
4. Build and deploy for production

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: { ... }
    }
  }
}
```

### Layout
Adjust max-width classes in page components (e.g., `max-w-7xl`)

### Navigation
Edit `src/components/Navigation.jsx` to add/remove menu items

## 📄 License

All rights reserved © 2025 Japanese Operating Lease - JOL

## 🤝 Contributing

This is a client project. For inquiries about contributing or licensing, please contact through the website form.

## 🙏 Acknowledgments

- [Vite](https://vite.dev/) - Build tool
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Router](https://reactrouter.com/) - Routing solution
- [Netlify](https://www.netlify.com/) - Hosting platform

---

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Original Site:** http://japaneseoperatinglease.com
