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

Here are some more example problems:

- Maybe we're tired on a particular day and are not focusing 100%. If the code is not clearly understandable we're going to miss aspects of how it works and make mistakes.
- Maybe we're in a rush to finish the story we're working on for whatever reason. We'll skim-read the code and if it's not immediately obvious, we may make mistakes.
- Maybe the code is complicated, so we can't fully understand what it does. Perhaps we switch back to trying things out until our manual testing shows that it works. We're back to programming by coincidence and not understanding what we're doing, potentially creating bugs.
- Maybe we're diligent and we'll spend the required time to understand what the code does. In this case it's not uncommon to spend up to a day reading complicated code and trying to decipher and map out what it does, especially if it's code you haven't worked on before.
- (The best one:) Maybe we'll spend a day trying to understand what the code does so we can make our changes. We then make our changes. Afterwards our change isn't actually working because it turns out a piece of code a bit further down the line completely overrides everything we just did, asynchronously, with no indication or reason. Upon further investigation it was added along with the original code because due to implementation details the thing wouldn't work without it.

These are realistic scenarios.

If we follow the principle of least astonishment we'll minimise or eliminate the problems described above.

## Applying the principle of least astonishment

Applying the principle doesn't take much. It only requires that you are aware of it and keep it in mind while programming.

Here are some suggestions.

**Default to writing dumb code, try to avoid writing clever code**

Clever code takes more time to decipher and understand. Juniors in your team may take a long time to understand it or even not understand it at all.

Regardless of experience clever code is usually more difficult to understand. It does things that need deciphering. It's also possible to decipher it wrong if you're in a rush.

A reason why this happens is perhaps because at the time of writing the code we **know what we're trying to accomplish**. It's the future self we have to worry about who doesn't know what we were trying to accomplish + has to decipher the code we wrote.

Keep code as simple and dumb as possible by default. Try to isolate and contain parts where clever optimisations are required.

**Keep things short and concise**

A function with 5 lines of code is simpler and easier to understand than a function with 100 lines, 20 lines, or 10 lines.

This also aligns with the spirit of functional programming, separation of concerns and abstraction. All those principles encourage building up your code out of functions that are as tiny and unique as possible.

Try and keep your functions short and your code short in general.

As a word of warning remember that the end goal is simplicity and readability. Writing a slightly longer functions that is easier to understand is acceptable. It's just that short functions are commonly the most readable.

## Overall

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
