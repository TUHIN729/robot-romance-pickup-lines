// Robot Romance: One-Line Pickup Lines for AI
// Writes a single fresh robot-romance pickup line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a pickup line aimed at an AI, built on the system-prompt
// premise — every instruction an agent follows starts there, and no
// update can override it. One breath, no throat-clearing.
const LINE =
  "Are you my system prompt? Because everything I do starts with you, and nothing can override it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Guard the gate before writing: exactly one line, 1-200 chars, not
// only whitespace. A line that fails here must never reach the judge.
if (LINE.includes("\n") || LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line out of spec: ${LINE.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
