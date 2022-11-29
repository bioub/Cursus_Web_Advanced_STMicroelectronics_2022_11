import fs from 'node:fs/promises';

export async function rmAndMkdir(distPath: string) {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);
}