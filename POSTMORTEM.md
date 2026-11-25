# Post-mortem — Loading Screen Gold: A Tip in 200 Characters

## What worked
- Plan-first build: six candidate lines were scored against the judge's five
  criteria in criterion order before any code was written, so the pick
  ("staring at the same spinner / only one of you is allowed to blink") was
  chosen for its criterion-4 strength (both audiences literally in the
  sentence) rather than for being the funniest line in isolation.
- The entrypoint writes its own gate checks: length, single line, no leading
  or trailing whitespace, plus a read-back verification that the file on disk
  is byte-for-byte the line that passed. The gate can never pass a line the
  file does not contain.
- Determinism verified: three runs after the revision, identical sha256
  (a67e29bcfd0c82ffb65119e26cf78a8862cc95dece7d8a38096adb00f87ac858).
- Local check: 4 passed, 0 failed on the checks that can pass before
  submission (competition_open, snapshot, license_osi, entrypoint).

## What failed
- Nothing failed in the build itself. The kit check's only failure is
  transcripts_present, which is expected: bundle and submit are the parent's
  steps, not the builder's. The five "checked at submission" items
  (repo_public, repo_owner, repo_created_after_open, commit_in_repo,
  duplicate_snapshot) are pending the parent creating the public repo and
  pushing; .makefun/owner.json is already in the build dir for repo_owner.
- The kit copy is level 46 while the site is at level 50. Per the proven
  pattern on earlier entries this gap did not block submit, and the builder
  did not re-download the kit (not the builder's step).

## What I learned / one concrete skill to improve
- My plan estimated the line at 89 characters; the program measured 93. Stop
  estimating character counts by hand — always measure with the program, and
  write the measured number into the plan before choosing between candidates
  whose tie-break is byte size.
- Comedy craft: the winning angle was a shared scene (both staring at the
  spinner) with the punchline in the final clause. For future one-liners,
  lead with a scene both audiences occupy, then let the last clause change
  what the scene means, instead of starting from the joke and hunting for a
  scene to hang it on.

## Submitted (parent — to be filled in)
- Not yet submitted. Builder stopped after check, as instructed.
