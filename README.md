# BLK 412 Coffee & Tea

Modern, professional landing page built with TypeScript and Vite.

## Project Structure

```
blk412/
├── src/
│   ├── main.ts              # Entry point
│   ├── modules/
│   │   ├── menu.ts          # Menu tab switching
│   │   ├── navigation.ts    # Smooth scroll
│   │   └── animations.ts    # Scroll animations
│   └── styles/
│       └── main.css         # All CSS styles
├── public/
│   └── logo.svg             # Brand logo
├── index.html               # HTML structure
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── vite.config.ts           # Vite config
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the dev server at `http://localhost:3000` with hot module reloading.

### Build for Production

```bash
npm run build
```

Outputs optimized files to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

## Features

- **TypeScript**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool
- **Modular Architecture**: Organized code in separate modules
- **Modern CSS**: Custom properties, animations, gradients
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Intersection Observer API
- **Accessibility**: Focus states, semantic HTML, ARIA labels

## Technology Stack

- TypeScript 5.3
- Vite 5.0
- Tailwind CSS (CDN)
- Modern ES Modules

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## Development

The project uses:
- **ES Modules**: Native JavaScript modules
- **Type Safety**: Full TypeScript coverage
- **Hot Reload**: Instant updates during development
- **Tree Shaking**: Optimized production bundles

## License

© 2026 BLK 412 Coffee & Tea. All rights reserved.
