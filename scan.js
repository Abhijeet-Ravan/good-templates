const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'public', 'templates');
const outputFile = path.join(__dirname, 'public', 'templates.json');

try {
  const folders = fs.readdirSync(templatesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const templates = folders.map(folder => {
    return {
      id: folder,
      name: folder.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      path: `/templates/${folder}/`,
      files: {
        html: `/templates/${folder}/index.html`,
        markdown: `/templates/${folder}/SKILL.md`
      }
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(templates, null, 2));
  console.log(`Successfully scanned ${templates.length} templates and updated public/templates.json`);
} catch (error) {
  console.error('Error scanning templates:', error);
}
