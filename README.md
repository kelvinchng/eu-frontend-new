# EU Holidays Frontend

[![Deploy to AWS](https://github.com/kelvinchng/eu-frontend-new/actions/workflows/deploy.yml/badge.svg)](https://github.com/kelvinchng/eu-frontend-new/actions/workflows/deploy.yml)

This is a [Next.js](https://nextjs.org) project for EU Holidays travel website.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

The project is configured for static export and will generate files in the `out` directory.

## Deployment

This project is automatically deployed to AWS S3 + CloudFront on push to:
- `main` branch → Production environment
- `develop` branch → Staging environment

See `/docs/DEPLOYMENT_SETUP.md` for deployment configuration details.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4
- AWS S3 + CloudFront for hosting

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - React components
- `/src/lib` - Utilities and helpers
- `/public` - Static assets