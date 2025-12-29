# NIOÉLIA Website

A modern, elegant single-page website for NIOÉLIA Premium Extra Virgin Olive Oil. Built with pure HTML, CSS, and JavaScript for easy deployment on GitHub Pages.

## Features

- **Responsive Design**: Works beautifully on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Scrolling Awards Ribbon**: Animated text ribbon showcasing awards
- **Scrolling Badge Ribbon**: Animated badge images displaying award logos
- **Modern Aesthetics**: Mediterranean-inspired design with organic feel
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Friendly**: Semantic HTML with proper meta tags
- **No Contact Form**: Direct contact information to avoid spam
- **Social Media Integration**: Instagram, LinkedIn, and Facebook links in footer

## Deployment to GitHub Pages

### Method 1: Direct Upload

1. Create a new repository on GitHub (e.g., `nioelia-website`)
2. Upload these files to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be live at: `https://[your-username].github.io/[repository-name]/`

### Method 2: Using Git (Command Line)

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NIOÉLIA website"

# Add remote repository
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings as described in Method 1.

## Customization Guide

### Updating Content

#### 1. Company Information
Edit `index.html` and update the contact details in the Contact Section:

```html
<!-- Find this section and update -->
<div class="contact-details">
    <div class="contact-item">
        <!-- Update location -->
        <p>Your Address Here</p>
    </div>
    <!-- Update phone numbers, email, etc. -->
</div>
```

#### 2. Colors and Theme
Edit `styles.css` at the top where CSS variables are defined:

```css
:root {
    /* Change these colors to match your brand */
    --olive-dark: #3d4f2f;
    --gold: #c4a962;
    /* ... more colors */
}
```

#### 3. Fonts
Current fonts used:
- **Headers**: Cormorant Garamond (elegant serif)
- **Body**: Lato (clean sans-serif)

To change fonts, update the Google Fonts link in `index.html` and the CSS variables in `styles.css`.

#### 4. Images
To add images:
1. Create an `images` folder in your repository
2. Add your images to this folder
3. Update the HTML to include images:

```html
<!-- Example: Add hero background image -->
<div class="hero-background" style="background-image: url('images/hero-bg.jpg');">
```

Or add product images:

```html
<div class="product-visual">
    <img src="images/bottle.png" alt="NIOÉLIA Olive Oil">
</div>
```

### Form Integration

The contact section displays contact information directly (phone, email, location) without a form to prevent spam. If you wish to add a contact form later, you can integrate with services like:

- **Formspree** (https://formspree.io/) - Easy, free tier available
- **EmailJS** (https://www.emailjs.com/) - JavaScript-based email sending
- **Netlify Forms** (if hosting on Netlify) - Built-in form handling

### Adding Google Analytics

Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Using a Custom Domain

1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. In your GitHub repository settings → Pages
3. Add your custom domain
4. Update DNS settings with your domain provider:
   - Add A records pointing to GitHub's IPs
   - Or add a CNAME record pointing to `[username].github.io`
5. Wait for DNS propagation (can take up to 24 hours)

## File Structure

```
nioelia-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/             # Award badge images
    ├── berlinAwardGold_quality_2025.png
    ├── SILVER-AWARD-2024-2025-247x296.png
    ├── SILVER_2023-2024-with-background.png
    ├── great_taste_stickers.png
    ├── JOOP_2023_Silver.jpg
    ├── ELITE-CIRCLE-2025-GLOBAL-INDEX_png.png
    ├── mediterrolio-gold-member.png
    ├── silver_2022-2023-with-background.png
    └── mediterrolio-silver-member.png
```

**IMPORTANT**: Make sure to upload the entire `images` folder along with the HTML, CSS, and JS files to your GitHub repository. The badge ribbon requires these images to display properly.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim before uploading
2. **Use WebP Format**: For better compression, convert images to WebP
3. **Enable Caching**: GitHub Pages automatically enables caching
4. **Minify CSS/JS**: Use online tools to minify before production

## Troubleshooting

### Site not appearing after deployment
- Wait 5-10 minutes after enabling GitHub Pages
- Check that `index.html` is in the root directory
- Verify the branch is set to `main` in Pages settings

### Mobile menu not working
- Ensure JavaScript is enabled
- Check browser console for errors
- Clear browser cache

### Awards ribbon not scrolling smoothly
- Check if browser supports CSS animations
- Try disabling hardware acceleration if jerky
- Hover over ribbon to pause animation

## Optional Enhancements

### Adding a Language Switcher
The original site has Greek translation. To add this:

1. Create `index-gr.html` with Greek content
2. Add language switcher buttons
3. Update navigation to switch between versions

### Adding Blog Section
Create a `blog.html` file and add link in navigation:

```html
<nav class="navbar">
    <a href="blog.html">Blog</a>
</nav>
```

### Adding E-commerce
Consider integrating:
- **Shopify Buy Button**: Easy integration
- **Snipcart**: Add to any HTML site
- **WooCommerce**: Requires WordPress

## Support

For issues or questions about this website:
- Email: info@nioelia.com
- Check GitHub Issues section

## Credits

- Design: Custom Mediterranean-inspired design
- Fonts: Google Fonts (Cormorant Garamond, Lato)
- Built with: HTML5, CSS3, JavaScript (Vanilla)

## License

This website template is created for NIOÉLIA. Modify and use as needed for your business.

---

**Happy hosting! 🫒**
