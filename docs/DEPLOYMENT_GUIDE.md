# Deployment Guide

## 🚀 Quick Start Deployment

Your Japanese Operating Lease website is now ready for deployment! This guide will help you get it live.

## Option 1: Netlify (Recommended)

Netlify is pre-configured and ready to go with this project.

### Method A: Deploy via Git (Best for continuous deployment)

1. **Initialize Git Repository** (if not already done):
```bash
cd "/Users/markkroh/Documents/Inizio/Clients/Burnham Sterling/japanese-operating-lease"
git init
git add .
git commit -m "Initial commit - Japanese Operating Lease website"
```

2. **Push to GitHub** (or GitLab/Bitbucket):
```bash
# Create a new repository on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

3. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select your repository
   - Netlify will auto-detect settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Done!** Netlify will:
   - Build your site
   - Deploy it to a URL like `your-site-name.netlify.app`
   - Auto-deploy on every push to main branch

### Method B: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Login to Netlify**:
```bash
netlify login
```

4. **Deploy**:
```bash
# For draft deploy (preview)
netlify deploy

# For production deploy
netlify deploy --prod
```

### Method C: Drag & Drop (Quickest for testing)

1. **Build the project**:
```bash
npm run build
```

2. **Deploy**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Get instant URL!

## Option 2: Vercel

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

Vercel will auto-detect the Vite configuration.

## Option 3: GitHub Pages

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

3. **Update vite.config.js** to set the base path:
```js
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

## Option 4: AWS S3 + CloudFront

### S3 Static Website Hosting

1. **Build the project**:
```bash
npm run build
```

2. **Create S3 bucket**:
   - Go to AWS S3 Console
   - Create new bucket
   - Enable "Static website hosting"
   - Set `index.html` as index document

3. **Upload dist folder**:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. **Configure bucket policy** for public access:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-bucket-name/*"
  }]
}
```

5. **(Optional) Add CloudFront** for CDN and HTTPS

## Option 5: Traditional Web Hosting

For traditional shared hosting (cPanel, etc.):

1. **Build the project**:
```bash
npm run build
```

2. **Upload via FTP/SFTP**:
   - Upload contents of `dist` folder to your web root
   - Typically: `public_html` or `www` folder

3. **Configure .htaccess** (for Apache servers):
Create a `.htaccess` file in the root with:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures SPA routing works correctly.

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `npm run build` completes successfully
- [ ] No console errors in production build
- [ ] Test with `npm run preview` locally
- [ ] All images load correctly
- [ ] Navigation works on all pages
- [ ] Mobile responsive design verified
- [ ] Accessibility tested
- [ ] SEO meta tags are correct

## 🌐 Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions
4. SSL certificate auto-configured

### Vercel
1. Go to Project Settings → Domains
2. Add custom domain
3. Configure DNS records as shown
4. SSL auto-configured

### Cloudflare (Recommended for any host)
1. Add site to Cloudflare
2. Update nameservers at domain registrar
3. Configure DNS records
4. Enable SSL/TLS (Flexible or Full)
5. Enable caching and optimization

## 📊 Post-Deployment

### Verify Deployment
- [ ] Visit your live URL
- [ ] Test all navigation links
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Test accessibility features

### Optional Enhancements
- [ ] Set up Google Analytics or Plausible
- [ ] Configure form backend (Netlify Forms, Formspree, etc.)
- [ ] Add custom 404 page
- [ ] Set up contact form submission handling
- [ ] Configure email notifications

## 🔍 Monitoring & Analytics

### Google Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly alternative)
Add to `index.html` before `</head>`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🛠️ Troubleshooting

### Issue: Pages show 404 on refresh
**Solution**: Ensure SPA routing redirects are configured:
- Netlify: `netlify.toml` (already included) ✅
- Vercel: `vercel.json` with rewrites
- Apache: `.htaccess` with rewrite rules (see above)
- Nginx: Configure location blocks

### Issue: Images not loading
**Solution**: 
- Check images are in `public` folder
- Verify image paths start with `/` (e.g., `/jollogo.png`)
- Clear browser cache

### Issue: Styles not applying
**Solution**:
- Run `npm run build` again
- Check for console errors
- Verify Tailwind CSS is configured correctly

### Issue: Build fails
**Solution**:
- Check Node.js version (20.17.0+ works, 20.19+ recommended)
- Run `npm install` to ensure all dependencies installed
- Check for ESLint errors: `npm run lint`
- Review build error messages carefully

## 📱 Testing After Deployment

### Quick Tests
1. **Homepage**: Visit root URL
2. **Navigation**: Click all menu items
3. **Mobile**: Test on actual mobile device
4. **Forms**: Try submitting contact form
5. **Performance**: Run Lighthouse audit in Chrome DevTools

### Lighthouse Audit
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit for mobile and desktop
5. Target scores: 90+ in all categories

### Browser Testing
Test in:
- Chrome (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Firefox
- Edge

## 🎉 You're Live!

Once deployed, your website will be accessible to the world!

### Share Your Site
- Update business cards
- Add to email signatures  
- Share on social media
- Submit to search engines

### Maintenance
- Monitor analytics
- Update content as needed
- Keep dependencies updated: `npm outdated`
- Review accessibility regularly
- Monitor performance metrics

## 📞 Support

For deployment issues:
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Vite**: [vitejs.dev/guide](https://vitejs.dev/guide)

---

**Quick Deploy Command** (Netlify CLI):
```bash
npm run build && netlify deploy --prod
```

**Estimated Deployment Time**: 3-5 minutes (after initial setup)

Good luck with your deployment! 🚀

