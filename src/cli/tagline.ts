import { BRAND } from "../branding.js";

export interface TaglineOptions {
  env?: NodeJS.ProcessEnv;
}

export function formatCliTagline(version: string): string {
  return `${BRAND.productName} ${version}\nby JediTeck`;
}
