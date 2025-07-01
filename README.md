# Portfolio Website - MD. JUBAYER ISLAM

A modern, minimalist portfolio website showcasing projects, skills, and research experience with dark mode support.

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Follow these steps:

### Prerequisites
- GitHub account
- Git installed locally
- Node.js 20+ installed

### Deployment Steps

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy on push

3. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - Deployment usually takes 2-5 minutes

### Manual Build (Optional)
To build locally for testing:
```bash
npm run build
# or use the static build script
node build-static.js
```

## 🛠️ Development

### Local Development
```bash
npm install
npm run dev
```

### Project Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   └── lib/          # Utilities and types
├── attached_assets/      # Images and media files
├── .github/workflows/    # GitHub Actions deployment
└── dist/public/          # Build output (generated)
```

## 📧 Contact Form

The contact form uses a `mailto:` link approach for GitHub Pages compatibility. When users submit the form, it opens their default email client with the message pre-filled.

## 🎨 Features

- ⚡ Fast and responsive design
- 🌙 Dark/Light mode toggle
- 📱 Mobile-first responsive layout
- 🎭 Smooth animations and transitions
- 🔧 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📊 Interactive components with Radix UI

## 🔧 Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI Components
- **Animations**: Framer Motion, CSS Transitions
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod validation
- **Deployment**: GitHub Pages, GitHub Actions

## 📝 Customization

To customize for your own portfolio:

1. Update personal information in components
2. Replace profile image in `attached_assets/me.jpeg`
3. Modify project data in portfolio section
4. Update contact information
5. Customize colors in `client/src/index.css`

## 📄 License

MIT License - feel free to use this template for your own portfolio!