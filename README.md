# Bitcoin Ed - E-commerce Store

![App Preview](https://imgix.cosmicjs.com/7b9e0290-3ebd-11f1-87af-df14c42b5b1f-autopilot-photo-1639762681485-074b7f938ba0-1776911896881.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Bitcoin education e-commerce store built with Next.js 16 and Cosmic CMS.

## Features
- Product catalog with categories and variants
- Customer reviews with star ratings
- Dual pricing (USD and BTC)
- Responsive design with Tailwind CSS
- Server-side rendering for SEO

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e985d2e7db2e70c67e63fc&clone_repository=69e986b1e7db2e70c67e6432)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online course platform with courses (including thumbnail, description, lessons, and pricing), instructors, and student testimonials."

### Code Generation Prompt

> Build a Next.js application for an online business called "Bitcoin Ed". The content is managed in Cosmic CMS with the following object types: categories, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: An e-commerce store with products, categories, variants, and customer reviews to learn about Bitcoin

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account with bucket configured

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch products with category
const { objects } = await cosmic.objects
  .find({ type: 'products' })
  .depth(1)
```

## Cosmic CMS Integration
Uses [Cosmic](https://www.cosmicjs.com/docs) for all content management.

## Deployment
Deploy to Vercel with environment variables: COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY.
<!-- README_END -->