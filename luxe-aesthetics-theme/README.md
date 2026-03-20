# Luxe Aesthetics Agency WordPress Theme

A premium WordPress theme for Luxe Aesthetics Agency, converted from a React application. This theme helps beauty brands showcase their services and The Drop Surge System™.

## Features

- **Modern Design**: Beautiful, responsive design with Tailwind CSS styling
- **Scroll Animations**: Cinematic reveal animations powered by Intersection Observer
- **Custom Homepage Template**: Full landing page with multiple sections
- **Customizable**: Easy customization through WordPress Customizer
- **Performance Optimized**: Clean code and efficient asset loading
- **Mobile Responsive**: Fully responsive design that works on all devices

## Installation

1. Download or clone this repository into your WordPress `wp-content/themes/` directory
2. Activate the theme from the WordPress admin panel (Appearance > Themes)
3. Create a new page and assign it the "Homepage" template
4. Set this page as your homepage (Settings > Reading > Homepage displays > A static page)

## Theme Structure

```
luxe-aesthetics-theme/
├── assets/
│   ├── css/
│   │   └── custom.css          # Custom styles
│   ├── js/
│   │   └── main.js             # Main JavaScript file
│   └── images/                 # Theme images (place your images here)
├── template-parts/             # Reusable template sections
│   ├── hero-section.php
│   ├── pain-section.php
│   ├── solution-section.php
│   ├── benefits-section.php
│   ├── case-studies-section.php
│   ├── process-section.php
│   ├── why-us-section.php
│   ├── faq-section.php
│   └── final-cta-section.php
├── functions.php               # Theme functions and setup
├── style.css                   # Theme stylesheet (required)
├── header.php                  # Header template
├── footer.php                  # Footer template
├── index.php                   # Main template
├── page.php                    # Page template
├── template-homepage.php       # Custom homepage template
└── README.md                   # This file
```

## Customization

### Using the WordPress Customizer

Navigate to Appearance > Customize to modify:

- **CTA Button Text**: Change the call-to-action button text
- **CTA Button URL**: Set the destination for CTA buttons
- **Contact Email**: Update the footer contact email
- **Location**: Set your business location

### Adding Images

Place your images in the `assets/images/` directory and reference them in your templates using:

```php
<?php echo get_template_directory_uri(); ?>/assets/images/your-image.jpg
```

### Customizing Sections

Each section is a separate template part in the `template-parts/` directory. You can modify these files to change content, layout, or styling.

## Required Plugins

This theme works standalone but can be enhanced with:

- **Contact Form 7**: For contact forms
- **Yoast SEO**: For SEO optimization
- **WP Rocket**: For caching and performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

- **Fonts**: Playfair Display and Lato from Google Fonts
- **Icons**: Lucide Icons
- **CSS Framework**: Tailwind CSS (via CDN for development)

## Development

For production use, it's recommended to:

1. Compile Tailwind CSS locally instead of using the CDN
2. Optimize and minify CSS and JavaScript files
3. Add your own images to replace placeholders
4. Configure proper caching and optimization

## License

This theme is licensed under the GNU General Public License v2 or later.

## Support

For support or questions, please contact: hello@luxeaesthetics.agency

## Changelog

### Version 1.0.0
- Initial release
- Converted from React application
- Full homepage template with 9 sections
- Responsive design
- Scroll animations
- Mobile menu
- FAQ accordion
- Customizer integration
