# Cache Configuration Files

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

```
include /path/to/your/project/nginx-cache.conf;
```

## Verifying Cache Headers

After deploying, you can verify the headers are working by running:

```
curl -I https://yourdomain.com/path/to/image.jpg
```

Look for "Cache-Control" in the response headers.
