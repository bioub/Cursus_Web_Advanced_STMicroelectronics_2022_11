import fs from 'fs-extra';
import { parse, sep, resolve, dirname } from 'path';
import { globby } from 'globby';
import { kebabCase, deburr } from 'lodash-es';
import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

process.chdir(dirname(new URL(import.meta.url).pathname));

async function rmAndMkdir() {
  await fs.remove('dest');
  await fs.mkdir('dest');
}

async function copyOrResizeImage(srcImgPath, destImgPath, maxWidth) {
  let image = sharp(srcImgPath);

  const { width } = await image.metadata();

  if (width > maxWidth) {
    image = image.resize({ width: maxWidth });
  }

  await image.toFile(destImgPath);
}

async function copyImages() {
  const srcImgPaths = await globby('src/**/*.{png,svg}');
  const report = {};

  for (const srcImgPath of srcImgPaths) {
    const { name, ext, dir } = parse(srcImgPath);

    const segments = dir.split(sep);
    const parentSegment = segments[segments.length - 1];

    const destName = kebabCase(deburr(name));
    const destImgPath = resolve('dest', destName) + ext;

    if (ext === '.svg') {
      await fs.copy(srcImgPath, destImgPath);
    } else {
      await copyOrResizeImage(srcImgPath, destImgPath, 300);
    }

    if (!report[parentSegment]) {
      report[parentSegment] = [];
    }

    report[parentSegment].push({
      name: name,
      imgPath: destName + ext,
    });
  }

  await fs.writeJson('report.json', report);
}

async function reduceImagesSize() {
  await imagemin(['dest/*.{png,svg}'], {
    destination: 'dest',
    plugins: [imageminPngquant(), imageminSvgo()],
  });
}

(async function () {
  await rmAndMkdir();
  await copyImages();
  await reduceImagesSize();
})();
