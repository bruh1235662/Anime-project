# Minimal Anime Streaming Platform

A modern, minimal anime streaming platform UI inspired by Crunchyroll, built with Next.js 15, React 19, and the Jikan API. Features a clean Japanese web design aesthetic with Crunchyroll's signature branding.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![React](https://img.shields.io/badge/React-19.1-blue)

## Features

- **Modern Tech Stack**: Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS v4
- **Jikan API Integration**: Real-time anime data from MyAnimeList via the Jikan API
- **Minimal Japanese Design**: Clean, brutalist-inspired aesthetic with generous whitespace
- **Crunchyroll Branding**: Signature orange accent color and dark theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dynamic Routing**: Individual anime detail pages with comprehensive information
- **Rich Content Display**: 
  - Seasonal and popular anime grids
  - Detailed anime information (synopsis, episodes, characters, stats)
  - Episode listings with air dates
  - Character profiles with voice actors
  - Genre tags and ratings

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [Jikan API v4](https://jikan.moe/) (Unofficial MyAnimeList API)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd minimal-anime-streaming
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── anime/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic anime detail page
│   ├── layout.tsx                 # Root layout with fonts
│   ├── page.tsx                   # Homepage
│   └── globals.css                # Global styles and design tokens
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── anime-card.tsx             # Anime card component
│   ├── anime-details.tsx          # Detailed anime view
│   ├── anime-grid.tsx             # Grid layout for anime
│   ├── header.tsx                 # Navigation header
│   ├── hero-section.tsx           # Featured anime hero
│   └── footer.tsx                 # Site footer
├── lib/
│   └── utils.ts                   # Utility functions
└── public/                        # Static assets
\`\`\`

## API Usage

This project uses the [Jikan API v4](https://docs.api.jikan.moe/), a free and open-source unofficial MyAnimeList API. No API key is required.

### Key Endpoints Used

- `GET /seasons/now` - Current season anime
- `GET /top/anime` - Top/popular anime
- `GET /anime/{id}/full` - Detailed anime information
- `GET /anime/{id}/episodes` - Episode listings
- `GET /anime/{id}/characters` - Character information

### Rate Limiting

The Jikan API has rate limits:
- **3 requests per second**
- **60 requests per minute**

The application implements basic caching and request management to stay within these limits.

## Customization

### Branding & Colors

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
@theme inline {
  /* Crunchyroll Orange - change to your brand color */
  --color-primary: oklch(0.68 0.19 35);
  
  /* Background colors */
  --color-background: oklch(0.09 0 0);
  --color-surface: oklch(0.12 0 0);
  
  /* Text colors */
  --color-foreground: oklch(0.98 0 0);
  --color-muted-foreground: oklch(0.6 0 0);
}
\`\`\`

### Logo

Replace the logo in `components/header.tsx`:

\`\`\`tsx
<div className="text-2xl font-bold tracking-tight">
  YOUR LOGO HERE
</div>
\`\`\`

### Content

The application fetches content from the Jikan API. To use different data sources:

1. Replace API calls in components with your preferred anime API
2. Update TypeScript interfaces to match your API response structure
3. Modify the data mapping in components

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

### Other Platforms

This is a standard Next.js application and can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Any platform supporting Node.js

## Legal & Content Notice

**IMPORTANT**: This is a UI template for educational and portfolio purposes.

- This project uses the **Jikan API** which provides publicly available data from MyAnimeList
- **No video content** is hosted or streamed through this application
- This is a **frontend UI demonstration** only
- To create a legal streaming platform, you must:
  - Obtain proper licensing agreements with content owners
  - Implement a legal video streaming backend
  - Comply with copyright laws in your jurisdiction
  - Follow all applicable broadcasting regulations

**This template is NOT for piracy.** Always respect copyright and intellectual property rights.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by [Crunchyroll](https://www.crunchyroll.com/)
- Anime data provided by [Jikan API](https://jikan.moe/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with [Next.js](https://nextjs.org/) by Vercel

## Support

If you find this project helpful, please give it a star on GitHub!

For issues and questions, please use the GitHub Issues page.

---

**Note**: This is a portfolio/educational project. For production use, ensure you have proper content licensing and legal compliance.
