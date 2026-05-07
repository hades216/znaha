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
      content = content.replace(/#EAB308/ig, '#3B82F6');
      content = content.replace(/#FDE047/ig, '#93C5FD');
      content = content.replace(/#A16207/ig, '#1D4ED8');
      content = content.replace(/#422006/ig, '#1E3A8A');
      fs.writeFileSync(fullPath, content);
    }
  }
}

walk('./src');
