/**
 * This script further optimizes JavaScript files after React build process
 * It uses terser to minify JS files more aggressively
 */

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const glob = require('glob');

// Build directory
const buildDir = path.join(__dirname, '../build');

// Find all JS files in the build directory - handle both glob v7 and v9+
function findJsFiles() {
  try {
    // For glob v9+
    if (typeof glob.sync !== 'function' && typeof glob.globSync === 'function') {
      return glob.globSync(`${buildDir}/**/*.js`);
    }
    // For glob v7 and earlier
    return glob.sync(`${buildDir}/**/*.js`);
  } catch (error) {
    console.error('Error finding JS files:', error);
    return [];
  }
}

const jsFiles = findJsFiles();

// List of external scripts that shouldn't be minified to avoid breaking them
const externalScriptPatterns = [
  'GTM-', // Google Tag Manager scripts
  'UA-', // Google Analytics scripts
  'fbevents.js', // Facebook Pixel
  'hotjar', // Hotjar scripts
  'clarity' // Microsoft Clarity
];

// Check if a file is an external script we should skip
const isExternalScript = (fileContent) => {
  return externalScriptPatterns.some(pattern => fileContent.includes(pattern));
}

// Minification options
const minifyOptions = {
  compress: {
    drop_console: true,
    drop_debugger: true,
    dead_code: true,
    unused: true,
    conditionals: true,
    booleans: true,
    if_return: true,
    sequences: true,
    properties: true,
    comparisons: true,
    evaluate: true,
    loops: true,
  },
  mangle: {
    toplevel: true
  },
  output: {
    comments: false,
    beautify: false
  }
};

async function optimizeJs() {
  console.log('Optimizing JavaScript files...');
  
  if (jsFiles.length === 0) {
    console.log('No JavaScript files found to optimize.');
    return;
  }
  
  for (const file of jsFiles) {
    try {
      const code = fs.readFileSync(file, 'utf8');
      
      // Skip files that are already highly minified or are external scripts
      if (code.includes('/*! For license information please see') || isExternalScript(code)) {
        console.log(`Skipping already minified/external file: ${path.relative(buildDir, file)}`);
        continue;
      }
      
      // Minify with terser
      const result = await minify(code, minifyOptions);
      
      // Write minified code back to file
      if (result.code) {
        fs.writeFileSync(file, result.code);
        
        // Calculate size reduction
        const originalSize = code.length;
        const minifiedSize = result.code.length;
        const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(2);
        
        console.log(`Optimized: ${path.relative(buildDir, file)} - reduced by ${reduction}%`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
  
  console.log('JavaScript optimization complete!');
}

optimizeJs().catch(err => {
  console.error('Optimization failed:', err);
  process.exit(1);
}); 