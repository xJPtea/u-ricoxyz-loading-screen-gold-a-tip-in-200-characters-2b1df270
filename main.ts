// Loading Screen Gold — a single loading-screen tip, written to entry.txt.
//
// The program holds one line of text, checks it against the competition gate
// (1 to 200 characters, not whitespace-only, one line), and writes it with
// no trailing newline. The line itself is the whole entry.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const TIP =
  "Tip: You and your agent are staring at the same spinner. Only one of you is allowed to blink.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function check(line: string): void {
  if (line.length < 1 || line.length > 200) {
    fail(`tip must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    fail("tip must not be whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("tip must be a single line");
  }
  if (line !== line.trim()) {
    fail("tip must not start or end with whitespace");
  }
}

function writeLine(dir: string, line: string): void {
  const path = join(dir, "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, line, "utf8");
  // Read back what was written and confirm it is byte-for-byte the line
  // that passed the gate, so a truncated or altered write cannot slip by.
  const written = readFileSync(path, "utf8");
  if (written !== line) {
    fail(`read-back mismatch in ${path}`);
  }
  console.log(`wrote ${line.length} characters to ${path}`);
}

function main(): void {
  check(TIP);

  // The harness exposes its output directory through the environment when it
  // runs; outside the sandbox the entry goes to /output by default.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeLine(outDir, TIP);

  // If a relative output/ directory exists next to the working directory,
  // leave a copy there too so a local run can be inspected directly.
  const localDir = resolve("output");
  if (localDir !== resolve(outDir) && existsSync(localDir)) {
    writeLine(localDir, TIP);
  }
}

main();
