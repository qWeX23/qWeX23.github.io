# qWeX23.github.io

Personal portfolio website for Benjamin Churchill, deployed at [qwex.co](https://qwex.co).

## Repository Structure

- `/app` - Main React application (Vite + React + Tailwind CSS)
- `/.github/workflows` - CI/CD pipelines for testing and deployment
- `/CNAME` - Custom domain configuration for GitHub Pages

## Development

All development happens in the `/app` directory:

```bash
cd app
npm install
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` or `master` branch. The deployment workflow builds the app and publishes the `/app/dist` directory.

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **React Router** - Navigation
- **React Markdown** - Blog post rendering

## License

All rights reserved.
