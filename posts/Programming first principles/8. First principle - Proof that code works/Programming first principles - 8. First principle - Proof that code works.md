---
title: 'Programming first principles - 8. First principle - Proof that code works'
slug: programming-first-principles-first-principle-proof-that-code-works
date: 2019-12-15
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-first-principle-proof-that-code-works.png'
---

Video version of this article: [https://youtu.be/k8Swf3apDVg](https://youtu.be/k8Swf3apDVg)

We require proof that code works.

## Why we need proof that code works

It follows from our basic requirement that what we produce must work:

1. Without proof that the system works, we do not know whether it works or not.
2. If we do not know whether it works, it means it may not work.
3. If it does not work, we have failed the requirement that the system must work.
4. On the other hand, if we have proof that the system works then we know that it works and we have fulfilled our requirement.

Therefore we require proof that the system works.

## Requirements for our proof

Our proof must:

- Be reproducible on demand, because we need it for every single change we make, because we must know the system works at all times.
- Must be as effective as possible.

## Suggested proof

Currently the only thing I know of is a good test suite.
