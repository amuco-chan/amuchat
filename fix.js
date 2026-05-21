const fs = require('fs');
const glob = require('glob');
const files = glob.sync('src/**/*.{js,jsx}');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\\`/g, '\`');
  content = content.replace(/\\\$/g, '$');
  content = content.replace(/\\\\n/g, '\\n');
  content = content.replace(/\\\\\\[/g, '\\[');
  content = content.replace(/\\\\\\]/g, '\\]');
  content = content.replace(/\\\\s/g, '\\s');
  content = content.replace(/\\\\d/g, '\\d');
  content = content.replace(/\\\\\\*/g, '\\*');
  fs.writeFileSync(file, content);
});
