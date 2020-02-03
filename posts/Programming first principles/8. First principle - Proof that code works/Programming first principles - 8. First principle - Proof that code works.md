---
title: 'Programming first principles - 8. First principle - Proof that code works'
slug: programming-first-principles-first-principle-proof-that-code-works
date: 2019-12-15
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-first-principle-proof-that-code-works.png'
category: 'Programming principles'
excerpt: 'Why do we test software? Why do we need proof that code works? It follows from our basic requirements of software.'

seoTitle: 'Programming first principles - First principle - Proof that code works'
seoDescription: 'Why do we test software? Why do we need proof that code works? It follows from our basic requirements of software.'
---

Video version of this article: [https://youtu.be/k8Swf3apDVg](https://youtu.be/k8Swf3apDVg)

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/) (this article)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)

---

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

---

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/) (this article)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
