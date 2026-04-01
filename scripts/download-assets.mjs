#!/usr/bin/env node
/**
 * Asset downloader for databricks.com clone
 * Downloads logos from Brandfetch/public sources
 */
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;
    protocol
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`✓ ${path.relative(ROOT, dest)}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlinkSync(dest);
        reject(err);
      });
  });
}

const assets = [
  // Databricks logo from Wikipedia commons SVG (public domain)
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
    dest: path.join(ROOT, "public/images/databricks-logo.png"),
  },
  // Customer logos from Wikipedia commons (public domain, representative)
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Comcast_Logo.svg/320px-Comcast_Logo.svg.png",
    dest: path.join(ROOT, "public/images/logo-comcast.png"),
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Shell_logo.svg/120px-Shell_logo.svg.png",
    dest: path.join(ROOT, "public/images/logo-shell.png"),
  },
];

for (const asset of assets) {
  try {
    await download(asset.url, asset.dest);
  } catch (err) {
    console.warn(`✗ Failed: ${asset.url} — ${err.message}`);
  }
}

console.log("Asset download complete.");
