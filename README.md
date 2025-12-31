# Community Forum Website

A modern, responsive community forum website template built with HTML, CSS, JavaScript, and TailwindCSS. Features beautiful animations and a comprehensive set of pages for a complete forum experience.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎯 Multiple page templates
- 🔐 Admin dashboard
- 📝 Blog functionality
- 👥 User management system

## Pages Included

1. **Home Page 1** (`index.html`) - General forum landing page with featured discussions and categories
2. **Home Page 2** (`pages/home2.html`) - Niche community layout (Dev Forum example)
3. **About Us** (`pages/about.html`) - Mission, team, history, and community values
4. **Categories** (`pages/categories.html`) - List of all categories and subforums
5. **Topics/Forums** (`pages/topics.html`) - Threads under a selected category
6. **Topic Details** (`pages/topic-details.html`) - Full thread with replies, comments, and likes
7. **Blog** (`pages/blog.html`) - Articles, updates, and announcements
8. **Blog Details** (`pages/blog-details.html`) - Full blog post with sidebar
9. **Contact Us** (`pages/contact.html`) - Contact form, info, and map placeholder
10. **Admin Dashboard** (`pages/admin-dashboard.html`) - Manage posts, categories, users, reports
11. **Users Management** (`pages/admin-users.html`) - Ban, promote moderators, manage roles

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build CSS**
   ```bash
   npm run build-css
   ```
   Or for production:
   ```bash
   npm run build-css-prod
   ```

3. **View the Site**
   - Open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

## Project Structure

```
Community Forum Website/
├── css/
│   ├── input.css          # TailwindCSS input file
│   └── style.css          # Compiled CSS (generated)
├── js/
│   ├── main.js            # Main JavaScript for animations
│   └── components.js     # Shared components
├── pages/
│   ├── home2.html        # Niche community home
│   ├── about.html        # About page
│   ├── categories.html   # Categories listing
│   ├── topics.html       # Topics/threads listing
│   ├── topic-details.html # Individual topic
│   ├── blog.html         # Blog listing
│   ├── blog-details.html # Individual blog post
│   ├── contact.html      # Contact page
│   ├── admin-dashboard.html # Admin dashboard
│   └── admin-users.html  # User management
├── index.html            # Main home page
├── package.json          # NPM dependencies
├── tailwind.config.js    # TailwindCSS configuration
└── README.md             # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling and animations
- **JavaScript** - Interactivity and animations
- **TailwindCSS** - Utility-first CSS framework
- **CDN TailwindCSS** - For quick development (can be replaced with compiled version)

## Animations

The site includes several smooth animations:
- Fade-in effects on scroll
- Slide-up and slide-down animations
- Hover effects and transitions
- Pulse animations for featured elements
- Scale transforms on hover

## Customization

### Colors
Edit the gradient colors in `tailwind.config.js` or directly in HTML files. The main color scheme uses blue and purple gradients.

### Content
All content is placeholder text. Replace with your actual content.

### Images
Currently using gradient placeholders. Replace with actual images as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a template project. Feel free to use and modify as needed.

## Notes

- The CSS file (`css/style.css`) needs to be generated using TailwindCSS
- All animations are CSS-based for performance
- The site is designed to be mobile-first and responsive
- Admin pages require authentication (not implemented in this template)


