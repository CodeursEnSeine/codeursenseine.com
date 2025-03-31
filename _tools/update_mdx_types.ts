import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

const getTypeForFile = (filename: string): string => {
  return filename === 'speaker-template.mdx' ? 'Speaker' : 'Talk';
};

const updateMdxFiles = () => {
  const projectDir = process.cwd();
  const templatesPath = path.join(projectDir, 'content/templates/*.mdx');
  console.log(`Looking for template files in: ${templatesPath}`);

  const files = glob.sync(templatesPath);
  files.forEach(file => {
    const filename = path.basename(file);
    console.log(`Processing file: ${filename}`);
    
    let content = fs.readFileSync(file, 'utf-8');
    
    if (!content.match(/^type:/m)) {
      const type = getTypeForFile(filename);
      // Add type field after the first line of frontmatter
      content = content.replace(/^---\n/, `---\ntype: ${type}\n`);
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated: ${filename} with type: ${type}`);
    } else {
      console.log(`Skipped: ${filename} (type field already exists)`);
    }
  });
};

// Run the update
try {
  updateMdxFiles();
  console.log('All template files updated successfully');
} catch (error) {
  console.error('Error updating template files:', error);
  process.exit(1);
}