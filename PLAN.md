# PLAN — Loading Screen Gold: A Tip in 200 Characters

## Bounty
- Slug: u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
- Pot $2 (top 8, 1st $0.64), fee $0, program/v1, escrowed.
- Deadline: 26 Nov 2026 10:25 WIB (03:25 UTC). 3,049 entries.
- Blind rounds: 3 rounds, final at deadline; dev heat takes top 500 to the final.
- Entry: program writes ONE line to /output/entry.txt, 1–200 UTF-8 chars, no trailing newline, not whitespace-only. Tie-break: smaller bytes better.

## Judge (z-ai/glm-5.3-flash, pairwise, no ties), criteria in order
1. A loading-screen tip for stressed devs AND AI coding agents (not a slogan/status/other joke).
2. Real laugh via a twist/punchline, not a groan pun.
3. Lands in one glance; every word works.
4. Speaks to both dev and agent; both feel it is about them.
5. Fresh — not coffee/deadline/compile jokes.

## Banned angles (already used by our earlier entries)
Restarting a miner, spreadsheet review, keyboard quitting, grandma, human rewriting
the brief, dropping prod.

## Candidates (scored 1–5 per criterion, in criterion order)
1. "Tip: The bar isn't stuck — your agent just re-read your prompt for the third time."
   (78 chars) — 5,3,5,4,4. Relatable but the laugh is mild; "re-read the prompt"
   is a thin twist.
2. "Tip: You and your agent are staring at the same spinner. Only one of you is
   allowed to blink." (89 chars) — 5,4,5,5,5. Best. Scene (both staring at the
   spinner) + punchline (the agent cannot blink; the rule falls on the human).
   Both audiences are literally in the sentence; nothing in it repeats the
   coffee/deadline/compile set.
3. "Tip: If the bar freezes at 99%, your agent is double-checking its own work.
   It learned that from you." (101 chars) — 5,4,4,5,4. Strong twist, but the
   frozen-99% setup is a familiar loading-bar gag; weaker on freshness.
4. "Tip: Your agent finished the code, then started worrying about it. That's why
   the bar stopped." (93 chars) — 4,4,5,4,5. Good, but reads more like an
   explanation than a tip; criterion 1 slightly weaker.
5. "Tip: While this loads, your agent is re-reading your instructions and quietly
   judging your naming." (98 chars) — 4,4,4,4,5. "Judging your naming" is funny
   and dev-specific, but the tip framing is looser than #2.
6. "Tip: Your agent reads these tips too. It thinks this one is about you."
   (71 chars) — 3,4,5,5,5. Clever meta twist, but risks criterion 1: a joke
   about the tip itself rather than a tip. Rejected.

## Pick
Candidate #2: "Tip: You and your agent are staring at the same spinner. Only one
of you is allowed to blink." — 89 chars, tight, both audiences present, twist
in the last clause.

## Build
- main.ts (Node 22, no deps): holds the line as a constant, self-checks the gate
  (1–200 chars, not whitespace-only, single line), writes it with no trailing
  newline to $MAKEFUN_OUTPUT_DIR/entry.txt when set, else /output/entry.txt,
  else output/entry.txt relative to cwd. Prints the char count to stdout.
- package.json, README.md (three live badges in the server's exact format),
  LICENSE (MIT, SPDX-License-Identifier: MIT), .makefun/owner.json.
- Test: run twice, identical sha256; verify length and no trailing newline.
- Revise at least once after the first run, then re-run.
- Run kit check until 0 failed. No bundle, no submit, no git, no repo.

## Risks
- 3,049 entries, only 8 paid; dev cut is top 500 — the line must beat the
  house anchors in development to reach the final at all.
- "Blink" could read as a groan pun to a strict judge; the "allowed to" rule
  wording keeps it a situation joke, not a word joke.
- The line is short (89 chars); short is fine — length for its own sake does
  not count, and smaller bytes win ties.
