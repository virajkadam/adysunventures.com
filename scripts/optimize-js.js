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

async function optimizeJs() {
  console.log('Optimizing JavaScript files...');
  
  if (jsFiles.length === 0) {
    console.log('No JavaScript files found to optimize.');
    return;
  }
  
  for (const file of jsFiles) {
    try {
      const code = fs.readFileSync(file, 'utf8');
      
      // Skip files that are already highly minified
      if (code.includes('/*! For license information please see')) {
        console.log(`Skipping already minified file: ${path.relative(buildDir, file)}`);
        continue;
      }
      
      // Minify with terser
      const result = await minify(code, {
        compress: {
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
          unused: true,
        },
        mangle: true,
        output: {
          comments: false
        }
      });
      
      // Write minified code back to file
      if (result.code) {
        fs.writeFileSync(file, result.code);
        console.log(`Optimized: ${path.relative(buildDir, file)}`);
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