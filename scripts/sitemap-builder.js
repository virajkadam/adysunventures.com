const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Your website URL
const baseUrl = 'https://adysunventures.com';

// Define your routes
const routes = [
  '/',                                // Homepage
  '/about-us',                        // About Us
  '/partners',                        // Partners
  '/contact-us',                      // Contact Us
  '/services',                        // Services
  '/technologies',                    // Technologies
  '/careers',                         // Careers
  '/clients',                         // Clients
  '/industries',                      // Industries main page
  '/industries/stock-exchange',       // Stock Exchange industry
  '/industries/ecommerce',           // E-commerce industry
  '/industries/transportation',       // Transportation industry
  '/gallery',                        // Gallery
  '/404'                             // 404 page
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: baseUrl });

// Return a promise that resolves with your XML string
const generateSitemap = async () => {
  try {
    // Create a list of URLs with additional data
    const links = routes.map(route => ({
      url: route,
      changefreq: route === '/' ? 'daily' : 'weekly', // Homepage changes more frequently
      priority: getPriority(route)
    }));

    // Write URLs to sitemap
    const data = Readable.from(links).pipe(stream);
    const sitemap = await streamToPromise(data);
    
    // Write the XML to file
    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

// Function to determine priority based on route depth and importance
function getPriority(route) {
  if (route === '/') return 1.0;                    // Homepage
  if (route === '/404') return 0.1;                 // 404 page (lowest priority)
  if (route.split('/').length - 1 === 1) return 0.8; // Main sections
  return 0.6;                                        // Nested pages
}

// Generate the sitemap
generateSitemap(); 