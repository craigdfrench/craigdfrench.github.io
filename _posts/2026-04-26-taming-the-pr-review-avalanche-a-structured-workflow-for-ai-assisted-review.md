---
layout: post
title: "Taming the PR Review Avalanche: A Structured Workflow for AI-Assisted Review"
date: 2026-04-26
categories: [devin, ai, workflow, pr-review]
---

This is the post I promised at the end of the last one. The previous article covered why structured prompts matter for code generation. If that post was the "why," this is the "how."

![Structured workflow: structured batch review replaces chaotic live review](/assets/generated-image (3).png)

## The problem: context switching on steroids

The trigger for all of this was simple: I was spending more time managing GitHub's automated feedback than actually building.

The root cause wasn't GitHub being overly aggressive. The root cause was that I had no structure for *how* to process the comments. I was reacting to them live, as they arrived, which meant they were constantly pulling me out of whatever I was building!

A typical morning would go like this: push a batch of PRs and spend the rest of the afternoon triaging GitHub's automated feedback. On a bad day, I'd open a PR, see 50+ comments from the bot, lose my train of thought, and end up context-switching across half a dozen tickets just trying to figure out what was actually broken versus what was a false alarm from partial context.

## The rule: no live engagement

The first design decision was also the simplest: I don't engage with review comments live. Every comment gets triaged into one of three buckets:

- **Valid concern**: The comment points to a real issue. The AI also suggests a fix.
- **Context issue**: The comment would be valid *if* the reviewer had more context—like knowing that a related change lives in a different repo. The AI flags these for follow-up rather than immediate action.
- **Noise**: The comment is a false alarm, often caused by GitHub's repo-scoped view missing the bigger picture.

I triage each one: respond, ignore, or fix. No code changes happen yet. Every decision is stored as a deferred action for the overnight pipeline.

## The overnight pipeline

The deferred actions feed into an automated overnight pipeline. Devin reads the triage decisions and applies the fixes in bulk. By morning, the PRs are updated and ready for a second pass.

This means I'm no longer starting my day chasing build failures or responding to bot comments. I'm reviewing the results of a structured process.

## Self-review before the human review

One of the biggest wins is the self-review step. Before Devin sends anything to a human reviewer, it reads its own changes through the lens of the project's review checklist.

It catches things like:

- Logically correct but stylistically messy—exactly the kind of thing GitHub's bots would flag
- Edge cases the original prompt didn't explicitly cover
- Missing recency bias and gives it a genuinely fresh perspective

This self-review layer means the PRs that reach human reviewers are already clean. Fewer rounds of feedback, faster merges.

## The result: noise is structural or material

When the overnight pipeline finishes, the review noise is reduced, and I'm not starting my day chasing build failures. If an issue is structural or material, the AI writes a note describing the problem.

The self-review step catches most of the low-hanging fruit before it ever reaches a human. That means when a reviewer does engage, it's because something genuinely needs their expertise—not because a bot got confused by a missing import in a cross-repo dependency.

## What changed

Before this workflow:
- Reactive, live engagement with every bot comment
- Constant context switching between PRs
- Build failures eating the first hour of every day
- Reviewers flagging style issues that should have been caught automatically

After:
- Structured triage of all comments into three categories
- Overnight automated fixes via the pipeline
- Self-review catches issues before human review
- Mornings start with results, not noise

## The takeaway

The problem wasn't the tools. GitHub's automation is aggressive but useful. The problem was the lack of structure around how to process that automation. Once I stopped reacting live and started batching, triaging, and deferring, the whole workflow transformed.

Structured prompts gave Devin the ability to generate better code. Structured workflows gave me the ability to review it without drowning in noise.

Both matter. Neither works without the other.
