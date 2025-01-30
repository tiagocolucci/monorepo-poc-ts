"use server";

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const monorepoRoot = path.resolve(__dirname, "../../../.."); 

const translationsDir = path.join(monorepoRoot, "translations");

export async function getTranslation(locale: string) {
  const filePath = path.join(translationsDir, `${locale}.json`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    return {}; 
  }
}