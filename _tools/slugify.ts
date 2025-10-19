import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

interface FileMetadata {
  kind: string;
  room: string;
  title: string;
  start: string;
  speakers: string;
}

interface ProcessedFile {
  originalPath: string;
  slugKind: string;
  slugRoom: string;
  slugTitle: string;
  slugSpeakers: string;
  start: string;
}

interface GroupedFile {
  start: string;
  slugTitle: string;
  slugSpeakers: string;
  file: string;
}

// Slugify function to handle French accents and special characters
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâä]/g, 'a')
    .replace(/[ç]/g, 'c')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/[ÿ]/g, 'y')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '');
};

const extractMetadata = (content: string): FileMetadata => {
  const getValue = (pattern: RegExp): string => {
    const match = content.match(pattern);
    return match ? match[1].trim() : '';
  };

  const speakersMatch = content.match(/^speakers:\n((?:  - .*\n)*)/m);
  const speakers = speakersMatch
    ? speakersMatch[1].split('\n').filter(line => line.trim()).map(line => line.replace(/  - /, '')).join('-')
    : '';

  return {
    kind: getValue(/^kind: (.*?)$/m),
    room: getValue(/^room: (.*?)$/m),
    title: getValue(/^title: (.*?)$/m),
    start: getValue(/^start: (.*?)$/m),
    speakers
  };
};

const processFiles = (force: boolean): void => {
  const filesPath = 'content/talks/**/*.mdx';
  console.log(`Slugifying files in [${filesPath}]`);
  const files = glob.sync(filesPath);
  const filesData = new Map<string, ProcessedFile>();
  const groupedFiles = new Map<string, GroupedFile[]>();

  // Process files
  files.forEach(file => {
    const filename = path.basename(file);
    console.log(`\tProcessing file: ${filename}`);
    if (filename.startsWith('pause') || filename.startsWith('pleniere')) {
      return;
    }
    const metadata = extractMetadata(fs.readFileSync(file, 'utf-8'));
    filesData.set(file, {
      originalPath: file,
      slugKind: slugify(metadata.kind),
      slugRoom: slugify(metadata.room),
      slugTitle: slugify(metadata.title),
      slugSpeakers: slugify(metadata.speakers),
      start: metadata.start
    });
  });

  // Group files
  filesData.forEach((data, file) => {
    const groupKey = `${data.slugKind}-${data.slugRoom}`;
    if (!groupedFiles.has(groupKey)) {
      groupedFiles.set(groupKey, []);
    }
    groupedFiles.get(groupKey)?.push({
      start: data.start,
      slugTitle: data.slugTitle,
      slugSpeakers: data.slugSpeakers,
      file
    });
  });

  // Process grouped files
  groupedFiles.forEach((files, groupKey) => {
    files.sort((a, b) => a.start.localeCompare(b.start));
    files.forEach((fileData, index) => {
      const counter = index + 1;
      const newFilename = `${groupKey}-${counter}-${fileData.slugTitle}-${fileData.slugSpeakers}.mdx`;
      const newPath = path.join('../content/talks', newFilename);
      if (force) {
        fs.renameSync(fileData.file, newPath);
        console.log(`\t\tRenamed: ${path.basename(fileData.file)} -> ${newFilename}`);
      } else {
        if (path.basename(fileData.file) != newFilename ) {
          console.log(`\t\tDry run: ${path.basename(fileData.file)} -> ${newFilename}`);
        }
      }
    });
  });
};

// Main execution
const force = process.argv.includes('--force');
processFiles(force);
