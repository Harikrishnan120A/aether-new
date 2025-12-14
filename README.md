# Aether Glass UI - Premium Glassmorphism Website

A top-class, production-ready glassmorphism website featuring advanced animations, comprehensive accessibility, and modern web design patterns.

## 🚀 Live Demo

View the app in AI Studio: https://ai.studio/apps/drive/1IW1J3xiS-kH3_o93Mz7hpddkm6jDR-E_

## ✨ Key Features

### Design & Aesthetics
- **Glassmorphism Effects** - Multi-layered depth with backdrop blur and translucency
- **Gradient Accents** - Beautiful cyan → purple → pink color palette  
- **Parallax Scrolling** - Animated background orbs with scroll-based movement
- **3D Transforms** - Interactive card tilting with mouse tracking
- **Custom Cursor** - Smooth, animated cursor with hover states (desktop only)

### Animations (Framer Motion)
- **Scroll-Triggered Reveals** - Sections animate into view as you scroll
- **Stagger Animations** - Feature cards and pricing tiers cascade in
- **3D Card Tilt** - Hero dashboard responds to mouse movement
- **Micro-Interactions** - Hover effects, button animations, smooth transitions
- **Carousel** - Testimonials with swipe gestures and navigation

### Accessibility (WCAG AA Compliant)
- **ARIA Labels** - Comprehensive labeling for screen readers
- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Skip to Content** - Quick navigation link
- **Reduced Motion** - Respects `prefers-reduced-motion` preference
- **Semantic HTML** - Proper heading hierarchy and landmarks

### Interactive Sections
1. Hero with animated headline & floating widgets
2. Features grid with 6 feature cards
3. Analytics dashboard with Recharts integration
4. Testimonials carousel (swipeable)
5. Pricing plans with annual/monthly toggle
6. FAQ accordion with smooth animations
7. Newsletter signup with validation
8. Scroll to top button

## 📦 Tech Stack

- React 19.2.0 + TypeScript
- Vite 6.2.0 (Build tool)
- Tailwind CSS 3.4 (Styling)
- Framer Motion 11.15 (Animations)
- Recharts 3.5 (Charts)
- Lucide React (Icons)

## 🛠️ Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set `GEMINI_API_KEY` in `.env.local` for AI features

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
components/
├── Background.tsx       # Parallax background
├── Navbar.tsx          # Sticky navbar
├── Hero.tsx            # Hero with 3D effects
├── Features.tsx        # Feature grid
├── DashboardPreview.tsx # Analytics charts
├── Testimonials.tsx    # Review carousel
├── Pricing.tsx         # Pricing plans
├── FAQ.tsx             # FAQ accordion
├── Newsletter.tsx      # Email signup
├── Footer.tsx          # Site footer
├── GlassCard.tsx       # Reusable card
├── ScrollToTop.tsx     # Scroll button
└── CustomCursor.tsx    # Custom cursor
```

## 🎨 Customization

Edit `tailwind.config.js` to customize colors, animations, and more.

## 🌐 Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## 📝 License

MIT License

---

**Built with ❤️ using modern web technologies**
