const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Source image path
const sourceImage = path.join(__dirname, 'src/assets/images/bg/home-section-bg.jpg');

// Create optimized images if they don't exist
async function createOptimizedImages() {
  console.log('Creating optimized images for LCP improvement...');
  
  try {
    // Create placeholder - tiny blurry image
    await sharp(sourceImage)
      .resize(20, 12, { fit: 'cover' })
      .jpeg({ quality: 40 })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg-placeholder.jpg'));
    console.log('✅ Created placeholder image');
    
    // Create WebP versions
    // Small (480px wide)
    await sharp(sourceImage)
      .resize(480)
      .webp({ quality: 80 })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg-480w.webp'));
    console.log('✅ Created 480w WebP');
    
    // Medium (800px wide)
    await sharp(sourceImage)
      .resize(800)
      .webp({ quality: 80 })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg-800w.webp'));
    console.log('✅ Created 800w WebP');
    
    // Large (original size)
    await sharp(sourceImage)
      .webp({ quality: 80 })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg.webp'));
    console.log('✅ Created full-size WebP');
    
    // Create JPG fallbacks for browsers without WebP support
    // Small (480px wide)
    await sharp(sourceImage)
      .resize(480)
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg-480w.jpg'));
    console.log('✅ Created 480w JPG');
    
    // Medium (800px wide)
    await sharp(sourceImage)
      .resize(800)
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg-800w.jpg'));
    console.log('✅ Created 800w JPG');
    
    // Large (optimized original)
    await sharp(sourceImage)
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(__dirname, 'src/assets/images/bg/home-section-bg-optimized.jpg'));
    console.log('✅ Created optimized full-size JPG');
    
    console.log('✅ All images created successfully!');
    console.log('Please make sure to install the sharp package if not already installed:');
    console.log('npm install sharp --save-dev');
    
  } catch (error) {
    console.error('❌ Error creating optimized images:', error);
  }
}

createOptimizedImages(); 