# Apurv Kushwaha - Professional Portfolio

A modern, scalable, and responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Perfect for a Robotics Engineer or any tech professional.

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/
│   ├── variables.css         # CSS custom properties & design tokens
│   ├── base.css              # Global styles & typography
│   ├── header.css            # Navigation & header styles
│   ├── hero.css              # Hero section styles
│   ├── projects.css          # Projects grid & cards
│   ├── experience.css        # Experience timeline
│   ├── skills.css            # Skills grid
│   ├── education.css         # Education section
│   ├── contact.css           # Contact section
│   ├── footer.css            # Footer styles
│   └── responsive.css        # Media queries & breakpoints
├── js/
│   ├── main.js               # Core utilities & initialization
│   ├── navigation.js         # Mobile menu & nav management
│   └── interactions.js       # User interactions & effects
├── assets/
│   ├── img/                  # Project images
│   └── icons/                # SVG icons (optional)
└── pages/                    # Future: Additional pages (blog, etc.)
```

## 🎨 Design System

### Color Variables
All colors are defined in `css/variables.css`:
- **Primary**: `#10b981` (Green)
- **Secondary**: `#3b82f6` (Blue)
- **Accent**: `#f59e0b` (Amber)
- **Background**: `#0f172a` (Dark)

### Typography
- **Display Font**: Space Grotesk (headings)
- **Body Font**: Inter (default text)
- **Monospace**: JetBrains Mono (code)

### Spacing Scale
Uses CSS custom properties: `--space-1` through `--space-24`
- `--space-4` = 16px (base spacing)
- `--space-8` = 32px
- `--space-12` = 48px (section spacing)

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🚀 How to Use

### 1. Download/Clone the Portfolio
```bash
git clone <your-portfolio-repo>
cd portfolio
```

### 2. Deploy to GitHub Pages
```bash
# Add to your repo
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Your portfolio will be live at: `https://yourusername.github.io/portfolio-repo-name/`

### 3. Customize

#### Update Personal Info
Edit `index.html` and replace:
- Your name in hero section
- Project descriptions
- Experience details
- Skills
- Education
- Contact information

#### Update Colors
Edit `css/variables.css`:
```css
:root {
  --primary: #10b981;      /* Change to your color */
  --secondary: #3b82f6;
  --accent: #f59e0b;
}
```

#### Update Fonts
Edit `css/variables.css`:
```css
--font-sans: 'Inter', ...;     /* Body font */
--font-display: 'Space Grotesk', ...; /* Headings */
--font-mono: 'JetBrains Mono', ...;   /* Code */
```

#### Add Projects
In `index.html`, duplicate a project card:
```html
<article class="project-card">
  <div class="project-image">🎯</div>
  <div class="project-content">
    <h3>Your Project Name</h3>
    <p>Project description...</p>
    <div class="project-tags">
      <span class="tag">Technology</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/yourlink">Code →</a>
    </div>
  </div>
</article>
```

### 4. Add Project Images
- Place images in `assets/img/`
- Replace emoji with: `<img src="assets/img/your-image.jpg" alt="Project name">`

## 🔧 Features

✅ **Fully Responsive** - Mobile, tablet, desktop optimized
✅ **Fast Performance** - Vanilla JS (no frameworks)
✅ **Accessible** - WCAG compliant, keyboard navigation
✅ **SEO Optimized** - Proper meta tags, semantic HTML
✅ **Dark Theme** - Beautiful dark mode by default
✅ **Smooth Animations** - Fade-ins, transitions, parallax
✅ **Mobile Menu** - Hamburger menu for small screens
✅ **Active Link Highlighting** - Nav links update on scroll
✅ **Copy to Clipboard** - Email/phone copy functionality
✅ **Print Friendly** - Optimized print styles

## 📱 Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Introduction with stats and CTAs
3. **Projects** - Showcase with tags and links
4. **Experience** - Timeline of job history
5. **Skills** - Organized skill categories
6. **Education** - Academic background
7. **Contact** - Contact methods and links
8. **Footer** - Copyright and year

## 🎯 Optimization Tips

### 1. Add Favicon
```html
<link rel="icon" href="assets/icons/favicon.ico">
```

### 2. Add Google Analytics
In `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 3. Open Graph for Social Sharing
Already included in `index.html` - update the meta tags:
```html
<meta property="og:image" content="assets/img/preview.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### 4. Custom Domain
Set up GitHub Pages with custom domain:
1. Add `CNAME` file to repo with your domain
2. Update DNS settings with GitHub's IP

## 🧪 Testing

### Desktop
- Chrome, Firefox, Safari
- Test all sections scroll
- Verify all links work

### Mobile
- iPhone, Android
- Test menu toggle
- Verify touch interactions

### Accessibility
- Tab navigation
- Screen reader compatibility
- Color contrast

## 📝 Maintenance

### Update Content
1. Edit `index.html` directly for HTML content
2. Edit specific CSS file for style changes
3. Edit JS files in `js/` for interactions

### Add New Section
1. Create HTML in `index.html`
2. Create CSS file in `css/`
3. Link CSS in HTML `<head>`
4. Add JS if needed in `js/`

### Update Styling
- Colors: `css/variables.css`
- Fonts: `css/variables.css`
- Spacing: `css/variables.css`
- Section-specific: `css/[section-name].css`
- Responsive: `css/responsive.css`

## 🔐 Security

- ✅ No sensitive data in code
- ✅ No external API calls
- ✅ No user data collection (unless you add analytics)
- ✅ No XSS vulnerabilities (vanilla JS)

## 📄 License

Free to use and modify for your portfolio.

## 🤝 Support

For issues or questions:
1. Check the structure and file names
2. Verify all CSS files are linked in `index.html`
3. Check browser console for errors
4. Test responsive design with DevTools

## 🎓 Best Practices

1. **Keep it updated** - Add new projects regularly
2. **Optimize images** - Compress before uploading
3. **Write descriptions** - Clear, concise project details
4. **Mobile first** - Always test on mobile
5. **Monitor performance** - Check page speed regularly
6. **Keep backups** - Push to GitHub regularly

---

Built with ❤️ for Apurv Kushwaha
Last Updated: 2025
