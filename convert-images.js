import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images');

const convertImages = async () => {
  try {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(imagesDir, file);
        const fileName = path.parse(file).name;
        const webpPath = path.join(imagesDir, `${fileName}.webp`);
        
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        console.log(`Converted: ${file} -> ${fileName}.webp`);
        
        // Remove original file after successful conversion
        fs.unlinkSync(filePath);
      }
    }
    console.log('Image conversion to WebP complete!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
};

convertImages();
