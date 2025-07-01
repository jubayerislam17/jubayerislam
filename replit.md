# Portfolio Website - MD. JUBAYER ISLAM

## Overview
A modern, minimalist portfolio website for a Computer Science graduate showcasing projects, skills, and research experience with dark mode support. Built with React, TypeScript, Tailwind CSS, and Express.js.

## Recent Changes
- **2025-01-07**: Fixed image import error in hero section (me.jpg → me.jpeg)
- **2025-01-07**: ✅ COMPLETED GitHub Pages deployment setup:
  - Modified contact form to use mailto links instead of backend API
  - Created GitHub Actions workflow for automatic deployment
  - Added static build script (build-static.js) for GitHub Pages
  - Fixed CSS import order issue (Google Fonts before Tailwind)
  - Created comprehensive README with deployment instructions
  - Added .nojekyll file for proper GitHub Pages asset serving

## Project Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom dark mode implementation
- **Animations**: Framer Motion + custom CSS animations
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **Backend**: Express.js with in-memory storage (being removed for GitHub Pages)

## User Preferences
- Simple, everyday language in communication
- Focus on practical solutions over technical details
- Prefer minimalist, clean design aesthetic

## GitHub Pages Deployment Notes
- Converting from full-stack to static site
- Removing backend dependencies and server-side functionality
- Contact form will use client-side solutions or external services
- All assets and components optimized for static hosting