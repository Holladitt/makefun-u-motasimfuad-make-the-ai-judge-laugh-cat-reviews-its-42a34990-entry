// One-star review, written by a house cat about its human.
// Deterministic: writes one fixed line to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. He fills my bowl at 5 a.m. sharp, then sleeps through my standing ovation on his chest at 5:05.";

// Guard the brief's hard limits: 1-200 chars, exactly one line, no trailing newline.
if (review.length < 1 || review.length > 200 || review.includes("\n")) {
  throw new Error(`review violates limits: ${review.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
