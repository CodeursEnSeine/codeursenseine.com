import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const speakersTxt = path.join(__dirname, './speakers.txt');
const templatePath = path.join(__dirname, '../content/templates/speaker.tpl');
const outputDir = path.join(__dirname, '../content/speakers');

async function main() {
  // Read speakers.txt
  const speakersRaw = await fs.readFile(speakersTxt, 'utf8');
  const template = await fs.readFile(templatePath, 'utf8');
  const lines = speakersRaw.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

  for (const line of lines) {
    // Expect format: Firstname Lastname
    const match = line.match(/^(\S+)\s+(.+)$/);
    if (!match) continue;
    const [_, first, last] = match;
    const filename = `${first.toLowerCase()}-${last.toLowerCase().replace(/\s+/g, '-')}.mdx`;
    const filePath = path.join(outputDir, filename);

    // Capitalize first/last name properly
    const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    const nameValue = `${cap(first)} ${cap(last)}`;
    const slugValue = `${first.toLowerCase()}-${last.toLowerCase().replace(/\s+/g, '-')}`;

    // Replace name and slug in template
    let content = template.replace(/name: Speaker Template/, `name: ${nameValue}`)
      .replace(/slug: speaker-template/, `slug: ${slugValue}`)
      .replace(/image: speaker-template.png/, `image: ${slugValue}.jpg`);

    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Created: ${filePath}`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
