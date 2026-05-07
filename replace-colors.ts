import fs from 'fs';
import path from 'path';

function walk(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace generic grays and blacks with Meta theme equivalents
      content = content.replace(/#0a0a0a/ig, '#242526');
      content = content.replace(/bg-black/g, 'bg-[#18191A]');
      content = content.replace(/from-black/g, 'from-[#18191A]');
      content = content.replace(/via-black/g, 'via-[#18191A]');
      
      // Text black -> Text pure black (or white depending on context... let's leave text-black on blue buttons, that is ok. Wait, Meta blue buttons have white text)
      content = content.replace(/text-black/g, 'text-white');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

walk('./src');
