const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Source image path
const sourceImage = path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg.jpg');

// Create optimized images for LCP improvement
async function createOptimizedImages() {
  console.log('Creating super-optimized images for LCP improvement...');
  
  try {
    // Create placeholder - tiny blurry image (even smaller than before)
    await sharp(sourceImage)
      .resize(10, 6, { fit: 'cover' })
      .jpeg({ quality: 20 })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-placeholder.jpg'));
    console.log('✅ Created placeholder image (extremely small for fast loading)');
    
    // Create more aggressively compressed WebP versions
    // Extra small (320px wide) - for mobile
    await sharp(sourceImage)
      .resize(320)
      .webp({ quality: 70, effort: 6 })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-320w.webp'));
    console.log('✅ Created 320w WebP (for mobile)');
    
    // Small (480px wide)
    await sharp(sourceImage)
      .resize(480)
      .webp({ quality: 75, effort: 6 })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-480w.webp'));
    console.log('✅ Created 480w WebP');
    
    // Medium (800px wide)
    await sharp(sourceImage)
      .resize(800)
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-800w.webp'));
    console.log('✅ Created 800w WebP');
    
    // Large (original size or max 1200px)
    await sharp(sourceImage)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg.webp'));
    console.log('✅ Created full-size WebP');
    
    // Create JPG fallbacks for browsers without WebP support
    // Extra small (320px wide) - for mobile
    await sharp(sourceImage)
      .resize(320)
      .jpeg({ quality: 70, mozjpeg: true })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-320w.jpg'));
    console.log('✅ Created 320w JPG (for mobile)');
    
    // Small (480px wide)
    await sharp(sourceImage)
      .resize(480)
      .jpeg({ quality: 75, mozjpeg: true })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-480w.jpg'));
    console.log('✅ Created 480w JPG');
    
    // Medium (800px wide)
    await sharp(sourceImage)
      .resize(800)
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-800w.jpg'));
    console.log('✅ Created 800w JPG');
    
    // Large (optimized original)
    await sharp(sourceImage)
      .resize(1200, null, { withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-optimized.jpg'));
    console.log('✅ Created optimized full-size JPG');
    
    console.log('✅ All images created successfully!');
    console.log('Stats for optimized images:');
    
    // Print file size comparisons
    const originalSizeInKB = fs.statSync(sourceImage).size / 1024;
    const optimizedSizes = {
      'Placeholder': fs.statSync(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-placeholder.jpg')).size / 1024,
      '320w WebP': fs.statSync(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-320w.webp')).size / 1024,
      '480w WebP': fs.statSync(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-480w.webp')).size / 1024,
      '800w WebP': fs.statSync(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg-800w.webp')).size / 1024,
      'Full WebP': fs.statSync(path.join(__dirname, '..', 'src/assets/images/bg/home-section-bg.webp')).size / 1024,
    };
    
    console.log(`Original image size: ${originalSizeInKB.toFixed(2)} KB`);
    Object.entries(optimizedSizes).forEach(([name, size]) => {
      const savings = ((originalSizeInKB - size) / originalSizeInKB * 100).toFixed(2);
      console.log(`${name}: ${size.toFixed(2)} KB (${savings}% smaller)`);
    });
    
  } catch (error) {
    console.error('❌ Error creating optimized images:', error);
  }
}

createOptimizedImages(); 