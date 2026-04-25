---
layout: post
title: "Taming the PR Review Avalanche: A Structured Workflow for AI-Assisted Review"
date: 2026-04-26
categories: [devin, ai, workflow, pr-review]
---

This is the post I promised at the end of the last one. The previous article explained *why* structured prompts transformed code generation. This one covers the *how*—the parallel system I built to handle AI-assisted code review.

![Split comparison: chaotic live review vs structured batch review](https://craigdfrench.ca/assets/images/generated-image-3.png)

## The problem: context switching on steroids

The trigger for all of this was simple: I was spending more time managing GitHub's automated feedback than actually building. On a typical morning, I'd open a batch of PRs and spend the rest of the afternoon triaging GitHub's automated feedback. On a bad day, I'd open a PR, see 50+ comments from the bot, lose my train of thought, and end up context-switching across half a dozen tickets just trying to figure out what was actually broken versus what was a false alarm from partial context.

The root cause wasn't GitHub being overly aggressive. The root cause was that I had no structure for *how* to process the comments. I was reacting to them live, as they arrived, which meant they were constantly pulling me out of whatever I was building.

## The rule: no live engagement

The first design decision was also the simplest: I don't engage with review comments as they arrive. Every comment—whether from a human reviewer, a bot, or Devin's self-review pass—goes into a single triage queue. I process the queue in a dedicated session, never during a build session.

## The triage pipeline

When I process the queue, each comment falls into one of three buckets:

- **Valid concern**: The comment points to a real issue. The AI also suggests a fix.
- **Context issue**: The comment would be valid *if* the reviewer had more context—like knowing that a related change lives in a different repo. The AI flags these for follow-up rather than immediate action.
- **Noise**: The comment is a false alarm, often caused by GitHub's repo-scoped view missing the bigger picture.

I triage each one: respond, ignore, or fix. No code changes happen yet. Every decision is stored as a deferred action for the overnight pipeline.

## The overnight pipeline

Devin picks up the deferred actions overnight. For each valid concern, it generates a fix, runs the build, and updates the PR. If the build passes, the fix is ready for a second review pass. If it fails, Devin iterates until it clears.

![Overnight pipeline dashboard showing queued fixes](https://craigdfrench.ca/assets/images/generated-image-4.png)

## The self-review pass

Before I ever see a PR, Devin runs a self-review. It reads its own changes the way an external reviewer would—no knowledge of the intent, just the diff. It generates a set of comments on its own PR, which then flows through the same triage pipeline.

![Self-review: Devin commenting on its own PR](https://craigdfrench.ca/assets/images/generated-image-5.png)

## The FZF dashboard

The entire triage queue lives in a single FZF-based dashboard. One fuzzy search, one keystroke to action. No tabs, no context switching.

![FZF dashboard showing triage queue](https://craigdfrench.ca/assets/images/generated-image-6.png)

## The result

The noise is reduced, and I'm not starting my day chasing build failures. The overnight pipeline handles the mechanical work. The triage queue keeps the decisions structured. And the self-review pass means Devin catches its own mistakes before I ever see them.

If the first post was about the *generation* side of structured prompts, this one is about the *review* side. Together, they form a loop: Devin generates with structure, reviews itself with structure, and I triage the results with structure. The code quality improves, the build stays green, and I spend more time thinking about the problem than wrestling with tooling.
