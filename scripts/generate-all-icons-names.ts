import fs from 'node:fs';
import path from 'node:path';

type TreeFile = { type: 'file'; name: string };
type TreeDirectory = { type: 'directory'; name: string; contents: TreeNode[] };
type TreeNode = TreeFile | TreeDirectory;

const REACT_DIR = path.resolve('src/react');
const OUTPUT_FILE = path.join(REACT_DIR, 'allIconsNames.ts');

const buildTree = (dirPath: string, name: string): TreeDirectory => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true }).sort((a, b) => {
    if (a.isDirectory() !== b.isDirectory()) {
      return a.isDirectory() ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  const contents: TreeNode[] = entries.map((entry) => {
    if (entry.isDirectory()) {
      return buildTree(path.join(dirPath, entry.name), entry.name);
    }
    return { type: 'file', name: entry.name };
  });

  return { type: 'directory', name, contents };
};

const tree = [buildTree(REACT_DIR, '.')];
const output = `export const allIconsNames = ${JSON.stringify(tree, null, 2)};\n`;

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`Wrote ${OUTPUT_FILE}`);
