/**
 * This script generates appropriate cache headers for static assets
 * which can be used with various servers like Apache, Nginx, or in .htaccess files
 */

const fs = require('fs');
const path = require('path');

// Cache durations in seconds
const CACHE_DURATIONS = {
  images: 60 * 60 * 24 * 365, // 1 year for images
  css: 60 * 60 * 24 * 30,     // 30 days for CSS
  js: 60 * 60 * 24 * 7,       // 7 days for JS
  fonts: 60 * 60 * 24 * 365,  // 1 year for fonts
};

// Generate Apache .htaccess file
function generateHtaccess() {
  const htaccessContent = `# Cache-Control Headers for Static Assets
<IfModule mod_expires.c>
  ExpiresActive On

  # Images
  ExpiresByType image/jpeg "access plus ${CACHE_DURATIONS.images} seconds"
  ExpiresByType image/png "access plus ${CACHE_DURATIONS.images} seconds"
  ExpiresByType image/gif "access plus ${CACHE_DURATIONS.images} seconds"
  ExpiresByType image/webp "access plus ${CACHE_DURATIONS.images} seconds"
  ExpiresByType image/svg+xml "access plus ${CACHE_DURATIONS.images} seconds"
  ExpiresByType image/x-icon "access plus ${CACHE_DURATIONS.images} seconds"

  # CSS, JavaScript
  ExpiresByType text/css "access plus ${CACHE_DURATIONS.css} seconds"
  ExpiresByType text/javascript "access plus ${CACHE_DURATIONS.js} seconds"
  ExpiresByType application/javascript "access plus ${CACHE_DURATIONS.js} seconds"

  # Fonts
  ExpiresByType font/ttf "access plus ${CACHE_DURATIONS.fonts} seconds"
  ExpiresByType font/otf "access plus ${CACHE_DURATIONS.fonts} seconds"
  ExpiresByType font/woff "access plus ${CACHE_DURATIONS.fonts} seconds"
  ExpiresByType font/woff2 "access plus ${CACHE_DURATIONS.fonts} seconds"
  ExpiresByType application/font-woff "access plus ${CACHE_DURATIONS.fonts} seconds"
  ExpiresByType application/font-woff2 "access plus ${CACHE_DURATIONS.fonts} seconds"
</IfModule>

<IfModule mod_headers.c>
  # Set Cache-Control for specific LCP image
  <FilesMatch "home-section-bg.*\\.(jpg|webp)$">
    Header set Cache-Control "public, max-age=${CACHE_DURATIONS.images}, immutable"
  </FilesMatch>
  
  # Set Cache-Control for all images
  <FilesMatch "\\.(jpg|jpeg|png|gif|webp|svg|ico)$">
    Header set Cache-Control "public, max-age=${CACHE_DURATIONS.images}"
  </FilesMatch>
  
  # Set Cache-Control for CSS and JS files
  <FilesMatch "\\.(css)$">
    Header set Cache-Control "public, max-age=${CACHE_DURATIONS.css}"
  </FilesMatch>
  
  <FilesMatch "\\.(js)$">
    Header set Cache-Control "public, max-age=${CACHE_DURATIONS.js}"
  </FilesMatch>
  
  # Set Cache-Control for fonts
  <FilesMatch "\\.(ttf|otf|woff|woff2)$">
    Header set Cache-Control "public, max-age=${CACHE_DURATIONS.fonts}"
  </FilesMatch>

  # Disable caching for HTML files
  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "0"
  </FilesMatch>
</IfModule>

# Gzip compression for text files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript text/javascript application/json
</IfModule>
`;

  // Save to public directory
  fs.writeFileSync(path.join(__dirname, '..', 'public', '.htaccess'), htaccessContent);
  console.log('✅ Generated .htaccess file with cache headers in public directory');
  
  // Also save to build directory if it exists
  const buildPath = path.join(__dirname, '..', 'build');
  if (fs.existsSync(buildPath)) {
    fs.writeFileSync(path.join(buildPath, '.htaccess'), htaccessContent);
    console.log('✅ Generated .htaccess file with cache headers in build directory');
  }
}

// Generate Nginx configuration
function generateNginxConfig() {
  const nginxContent = `# Cache-Control Headers for Static Assets

# Images
location ~* \\.(?:jpg|jpeg|png|gif|webp|svg|ico)$ {
  expires ${CACHE_DURATIONS.images}s;
  add_header Cache-Control "public";
}

# LCP image gets special treatment
location ~* home-section-bg.*\\.(?:jpg|webp)$ {
  expires ${CACHE_DURATIONS.images}s;
  add_header Cache-Control "public, max-age=${CACHE_DURATIONS.images}, immutable";
}

# CSS files
location ~* \\.css$ {
  expires ${CACHE_DURATIONS.css}s;
  add_header Cache-Control "public";
}

# JavaScript files
location ~* \\.js$ {
  expires ${CACHE_DURATIONS.js}s;
  add_header Cache-Control "public";
}

# Fonts
location ~* \\.(?:ttf|otf|woff|woff2)$ {
  expires ${CACHE_DURATIONS.fonts}s;
  add_header Cache-Control "public";
}

# HTML files should not be cached
location ~* \\.(?:html|htm)$ {
  add_header Cache-Control "no-cache, no-store, must-revalidate";
  add_header Pragma "no-cache";
  expires 0;
}

# Enable Gzip compression
gzip on;
gzip_types text/plain text/css application/javascript application/json text/xml application/xml text/javascript;
gzip_min_length 256;
gzip_comp_level 6;
`;

  // Save to project root
  fs.writeFileSync(path.join(__dirname, '..', 'nginx-cache.conf'), nginxContent);
  console.log('✅ Generated nginx-cache.conf file with cache headers');
  
  // Also create a ReadMe file explaining how to use these configs
  const readmeContent = `# Cache Configuration Files

This directory contains configuration files to optimize caching for your web application.

## Files

- **.htaccess**: Apache configuration for cache control and compression
- **nginx-cache.conf**: Nginx configuration for cache control and compression

## Implementation Instructions

### For Apache Server

1. Copy the .htaccess file to your website's root directory
2. Make sure mod_expires and mod_headers are enabled in your Apache configuration
3. Ensure AllowOverride is set to All in your Apache configuration to allow .htaccess files

### For Nginx Server

Add the following line in your server block:

\`\`\`
include /path/to/your/project/nginx-cache.conf;
\`\`\`

## Verifying Cache Headers

After deploying, you can verify the headers are working by running:

\`\`\`
curl -I https://yourdomain.com/path/to/image.jpg
\`\`\`

Look for "Cache-Control" in the response headers.
`;

  fs.writeFileSync(path.join(__dirname, '..', 'CACHE-CONFIG.md'), readmeContent);
  console.log('✅ Generated CACHE-CONFIG.md with usage instructions');
}

// Generate all configurations
function generateAllConfigs() {
  try {
    // Create the public directory if it doesn't exist
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    generateHtaccess();
    generateNginxConfig();
    
    console.log('✅ Cache configuration files generated successfully');
    console.log('To implement these configurations:');
    console.log('1. For Apache: Use the .htaccess file in your web root directory');
    console.log('2. For Nginx: Include the nginx-cache.conf file in your server configuration');
    
  } catch (error) {
    console.error('Error generating cache config files:', error);
  }
}

generateAllConfigs(); 