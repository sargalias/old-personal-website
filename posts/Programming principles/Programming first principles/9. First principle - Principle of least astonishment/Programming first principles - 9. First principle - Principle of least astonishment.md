---
title: 'Programming first principles - 9. First principle - Principle of least astonishment'
slug: programming-first-principles-first-principle-principle-of-least-astonishment
date: 2020-01-06
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-first-principle-principle-of-least-astonishment.png'
category: 'Programming principles'
excerpt: 'The principle of least astonishment is one of the fundamental principles in software development. Possibly the most important there is.'

seoTitle: 'Programming first principles - First principle - Principle of least astonishment'
seoDescription: 'The principle of least astonishment is one of the fundamental principles in software development. Possibly the most important there is.'
---

Video version of this article: [https://youtu.be/hjJkIb1nX6g](https://youtu.be/hjJkIb1nX6g)

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/) (this article)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/)
13. [Side effects](/blog/programming-first-principles-side-effects/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)

---

The principle of least astonishment means that the thing should behave exactly as we expect it to at first glance.

This isn't just a programming principle, it's the life principle also referred to as [KISS (keep it simple stupid)](https://en.wikipedia.org/wiki/KISS_principle). I personally consider them analogous in programming.

It applies to everything in life, and it applies tremendously in programming as well.

## Why it's needed

To see why it's needed, we need to recap our premises:

- Minimal information. We can only handle limited information at any one time and can be aware of limited things only... Especially after not reading the particular code for a few months.
- We must understand what we're doing at all times.

The principle of least astonishment is necessary, almost by definition, for meeting our premises. If things don't behave as we expect, it means we must spend more brain-power to understand them, spend more time reading, etc. This breaks our premise of minimal information.

Also the more complicated something is, the less likely it is that we'll understand it. This breaks our premise that we must understand what we're doing at all times.

Consider:

**Maybe you're tired on a particular day and are not focusing 100%.**

If the code is not clearly understandable, it's possible to miss aspects of how it works and make mistakes.

**Maybe you're in a rush to finish the story you're working on for whatever reason.**

You may skim-read the code. If what it does is not immediately obvious, it's possible to make mistakes.

**Maybe the code is complicated, so it's difficult to fully understand what it does.**

The easiest thing to do in this case is to switch to just trying things out until manual testing shows that it works. That's programming by coincidence and not understanding what we're doing, potentially creating bugs.

**Maybe you're diligent and you'll spend the required time to understand what the code does.**

In this case it's not uncommon to spend up to a day reading complicated code and trying to decipher and map out what it does, especially if it's code you haven't worked on before.

**Maybe you'll spend a day reading and understanding the code, making your changes, then realise they get overridden later.**

This has happened to me. I made a change which ended up not working because a piece of code a bit further down the line overrode everything I changed, asynchronously, with no indication. Upon further investigation it was added along with the original code to fix a problematic implementation detail in the particular code.

These are realistic scenarios.

If we follow the principle of least astonishment we'll minimise or eliminate the problems described above.

## Applying the principle of least astonishment

Applying the principle doesn't take much. It only requires that you are aware of it and keep it in mind while programming.

Here are some suggestions.

**Default to writing dumb code, try to avoid writing clever code**

Clever code takes more time to decipher and understand. Juniors in your team may take a long time to understand it or even not understand it at all.

Regardless of experience, clever code is usually more difficult to understand. It does things that need deciphering. It's also possible to decipher it wrong if you're in a rush.

A reason why this happens is perhaps because at the time of writing the code we **know what we're trying to accomplish**. It's the future self we have to worry about who doesn't know what we were trying to accomplish + has to decipher the code we wrote.

Keep code as simple and dumb as possible by default. Try to isolate and contain parts where clever optimisations are required.

**Keep things short and concise**

A function with 5 lines of code is simpler and easier to understand than a function with 100 lines, 20 lines, or 10 lines.

This also aligns with the spirit of functional programming, separation of concerns and abstraction. All those principles encourage building up your code out of functions that are as tiny and unique as possible.

Try and keep your functions short and your code short in general.

As a word of warning remember that the end goal is simplicity and readability. Writing a slightly longer function that is easier to understand is acceptable. It's just that short functions are commonly the most readable.

## Summary

To summarize, it's essential that we follow the principle of least astonishment (making the code work exactly as would be expected, keeping it as simple as possible, etc.).

It follows naturally from our premises that we as humans need our systems to be as understandable and simple as possible for us to work with them.

Some basic guidelines for applying the principle are things like writing code that is as dumb and simple as possible, with no clever tricks, and keeping functions and code short in general.

At the end of the day the most important thing is focusing on the principle. If we keep it in mind we'll naturally apply it and actively search for ways to apply it better.

---

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/) (this article)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/)
13. [Side effects](/blog/programming-first-principles-side-effects/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)
