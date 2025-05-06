# Showcase

A modern, responsive personal branding page built with React, TypeScript, Tailwind CSS and shadcn components.

## Features

- Modern UI with Tailwind CSS
- Fully responsive design
- Smooth Animations
- Easy customization through environment variables

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
   # or
   yarn install
   ```

### Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your information:

   #### Project Information
   ```env
   # Project 1
   VITE_PROJECT_1_TITLE=Your Project Title
   VITE_PROJECT_1_DESCRIPTION=Project description
   VITE_PROJECT_1_GH_URL=GitHub repository URL
   VITE_PROJECT_1_APP_URL=Live application URL
   VITE_PROJECT_1_TAGS=Comma,Separated,Tags

   # Project 2
   VITE_PROJECT_2_TITLE=Your Second Project
   VITE_PROJECT_2_DESCRIPTION=Second project description
   VITE_PROJECT_2_GH_URL=Second project GitHub URL
   VITE_PROJECT_2_APP_URL=Second project live URL
   VITE_PROJECT_2_TAGS=Tag1,Tag2,Tag3
   ```

   #### Articles
   ```env
   # Article 1
   VITE_MEDIUM_ARTICLE_1_TITLE=Your Article Title
   VITE_MEDIUM_ARTICLE_1_URL=Article URL
   VITE_MEDIUM_ARTICLE_1_DATE=Publication Date

   # Article 2
   VITE_MEDIUM_ARTICLE_2_TITLE=Second Article Title
   VITE_MEDIUM_ARTICLE_2_URL=Second Article URL
   VITE_MEDIUM_ARTICLE_2_DATE=Publication Date
   ```

   #### Social Media & Resume
   ```env
   # Social Media
   VITE_LINKEDIN_URL=Your LinkedIn Profile
   VITE_GITHUB_URL=Your GitHub Profile
   VITE_MEDIUM_URL=Your Medium Profile
   VITE_GITHUB_USERNAME=Your GitHub Username

   # Resume
   VITE_RESUME_URL=Resume Preview URL e.g. Google drive url
   VITE_RESUME_VIEW_URL=Resume View URL e.g. Google drive url
   VITE_RESUME_DOWNLOAD_URL=Resume Download URL e.g. Google drive url
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:8080/showcase/`

### Deployment to GitHub Pages

1. Make sure your repository is properly configured on GitHub:
   - Go to your repository settings
   - Navigate to "Pages" under "Code and automation"
   - Select "gh-pages" branch as the source
   - Save the changes

2. Deploy your changes:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

3. Your site will be available at:
   ```
   https://your-username.github.io/showcase/
   ```

   Replace `your-username` with your GitHub username.

4. The deployment process:
   - Builds your application
   - Creates a `gh-pages` branch
   - Pushes the built files to the `gh-pages` branch
   - GitHub Pages automatically deploys the changes

Note: It may take a few minutes for your changes to be visible on GitHub Pages after deployment.

## Project Structure

```
showcase/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── lib/             # Utilities
│   ├── pages/           # Routed pages in the app
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
│   └── index.css        # Application global css
├── .env.example         # Environment variables template
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Styling
- The project uses Tailwind CSS for styling
- Customize colors and theme in `tailwind.config.ts`
- Modify the global styles in `src/index.css`

### Components
- Add or modify components in the `src/components` directory
- Each section (Projects, Articles, etc.) has its own component

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
