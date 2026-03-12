# Showcase

A modern, responsive personal portfolio page built with React, TypeScript, and Tailwind CSS.

## Features

- Clean grayscale design with Inter font
- Fully responsive — sidebar layout on desktop, stacked on mobile
- Smooth fade-in animation
- Easy customization through environment variables
- Google Analytics support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Fork this repository
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/showcase.git
   cd showcase
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your information:

   #### Projects
   ```env
   VITE_PROJECT_1_TITLE=Your Project Title
   VITE_PROJECT_1_DESCRIPTION=Project description
   VITE_PROJECT_1_GH_URL=GitHub repository URL
   VITE_PROJECT_1_APP_URL=Live application URL (optional)
   VITE_PROJECT_1_TAGS=Comma,Separated,Tags

   VITE_PROJECT_2_TITLE=Your Second Project
   VITE_PROJECT_2_DESCRIPTION=Second project description
   VITE_PROJECT_2_GH_URL=Second project GitHub URL
   VITE_PROJECT_2_APP_URL=Second project live URL (optional)
   VITE_PROJECT_2_TAGS=Tag1,Tag2,Tag3
   ```

   #### Writing
   ```env
   VITE_MEDIUM_ARTICLE_1_TITLE=Your Article Title
   VITE_MEDIUM_ARTICLE_1_URL=Article URL
   VITE_MEDIUM_ARTICLE_1_DATE=Publication Date

   VITE_MEDIUM_ARTICLE_2_TITLE=Second Article Title
   VITE_MEDIUM_ARTICLE_2_URL=Second Article URL
   VITE_MEDIUM_ARTICLE_2_DATE=Publication Date
   ```

   #### Social Media
   ```env
   VITE_LINKEDIN_URL=Your LinkedIn Profile URL
   VITE_GITHUB_URL=Your GitHub Profile URL
   VITE_MEDIUM_URL=Your Medium Profile URL
   VITE_GITHUB_USERNAME=Your GitHub Username
   VITE_GITHUB_REPOSITORIES_URL=Your GitHub Repositories URL
   ```

   #### Analytics
   ```env
   VITE_GA_MEASUREMENT_ID=Your Google Analytics Measurement ID
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Deployment to GitHub Pages

1. Configure GitHub Pages in your repository settings:
   - Navigate to Settings → Pages
   - Select `gh-pages` branch as the source

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Your site will be available at:
   ```
   https://your-username.github.io/showcase/
   ```

### Custom Domain Setup

1. Update `base` in `vite.config.ts` to `"/"`:
   ```typescript
   export default defineConfig({
     base: "/",
   });
   ```

2. Remove the `basename` from `BrowserRouter` in `src/App.tsx`.

3. Configure your custom domain in GitHub Pages settings and add the required DNS records at your domain registrar.

4. Redeploy:
   ```bash
   npm run deploy
   ```

## Project Structure

```
showcase/
├── public/              # Static assets (profile.jpg, favicon.svg)
├── src/
│   ├── components/      # Page section components
│   ├── pages/           # Routed pages
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Customization

- **Content**: All text and URLs are configured via environment variables in `.env`
- **Styling**: Tailwind CSS utility classes throughout — tweak colors/spacing directly in components
- **Profile photo**: Replace `public/profile.jpg` with your own image
- **Favicon**: Replace `public/favicon.svg` with your own icon

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
