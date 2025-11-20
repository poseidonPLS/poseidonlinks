# QWEN.md

This file provides guidance to Qwen Code when working with code in this repository.

## Project Overview

A React-based web application that serves as a hub for PulseChain ecosystem tools and resources. The app provides links to various PulseChain utilities, browser extensions, social channels, and experimental applications. Created to help with onboarding PulseChain.

### Main Technologies
- **React 18.2.0** with functional components and hooks
- **Create React App** setup with default configuration
- **Web3.js 1.9.0** for blockchain interactions (not currently used)
- **@metamask/detect-provider** for wallet detection (not currently used)

### Key Features
- **Dark/Light Theme Toggle** - Persistent theme using localStorage
- **Fun Mode** - Adds playful messages when opening links
- **Responsive Grid Layout** - Organized sections for different resource types
- **External Link Navigation** - All links open in new tabs
- **Animated Transitions** - Fade-in effects for content sections
- **Donation Banner** - Prominent call-to-action for project support

## Architecture

### Core Structure
```
src/
├── App.js          # Main application component
├── App.css         # Styling with theme support
├── logo.png        # Poseidon logo
├── logoPulseX.png  # PulseX logo
└── logoHEX.png     # HEX logo
public/
├── index.html      # HTML template with theme support
├── manifest.json   # PWA configuration
└── ...
```

### Component Structure
- `App.js` - Main component with theme management, animated sections, and link navigation
- `AnimatedSection` - Intersection Observer-based fade-in animation wrapper
- `Section` - Reusable component for organizing links into categorized grids

### Sections Structure
The app organizes resources into these categories:
1. **Chrome Extensions** - Browser extensions for PulseChain
2. **Socials** - YouTube, Twitter, Telegram channels
3. **Telegram Bots** - Price tracking and buy notifications
4. **Tools** - Validators, token explorers, bridge status
5. **Experimental Apps** - Simulators and calculators

## Development Commands

- `npm start` - Start development server on localhost:3000
- `npm run build` - Build production bundle to `/build` directory
- `npm test` - Run tests in interactive watch mode
- `npm run eject` - Eject from Create React App (irreversible)

### Build Configuration
- Standard Create React App ESLint configuration
- Browser compatibility targeting modern browsers
- No custom webpack configuration (CRA defaults)
- Production builds output to `/build` directory

## Styling

- CSS-based styling with dark/light theme support
- Responsive grid layouts for buttons and sections
- CSS animations for fade-in effects
- Theme controlled via `data-theme` attribute on HTML element
- CSS variables for consistent color management
- Mobile-responsive design with media queries

## Key Files

- `src/App.js` - Main application logic and component structure
- `src/App.css` - Styling for themes and layouts
- `public/index.html` - HTML template with theme support
- `package.json` - Project dependencies and scripts
- `public/manifest.json` - PWA configuration

## Development Conventions

- Functional components with React hooks
- CSS variables for theming
- LocalStorage for persisting user preferences
- Responsive design with mobile-first approach
- Animated sections using Intersection Observer API
- External links open in new tabs for user convenience
- Playful, engaging UI with fun mode toggle