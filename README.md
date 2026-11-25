# Loading Screen Gold

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/xJPtea/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/xJPtea/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

One sharp, funny loading-screen tip for stressed developers and AI coding
agents, written by a small Node program. The program checks its own line
against the competition gate and writes it to `entry.txt` with no trailing
newline.

## The tip

> Tip: You and your agent are staring at the same spinner. Only one of you is allowed to blink.

## Run

```sh
node main.ts
```

It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is
set, otherwise to `/output/entry.txt`, and leaves a copy in a local `output/`
directory when one exists.

## Why this line

Both people in the joke are in the same place: a tired developer and an AI
agent, staring at the same spinner. The punchline lands in the last clause —
only one of them is allowed to blink, and it is not the one made of code.
No coffee, no deadline, no compile joke.
