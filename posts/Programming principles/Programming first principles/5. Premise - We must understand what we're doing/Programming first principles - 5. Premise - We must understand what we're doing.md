---
title: "Programming first principles - 5. Premise - We must understand what we're doing"
slug: programming-first-principles-premise-we-must-understand-what-were-doing
date: 2019-12-06
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-premise-we-must-understand-what-were-doing.png'
category: 'Programming principles'
excerpt: This premise says that we must understand what we're doing at all times. We can't program by coincidence until we stumble upon something that works.

seoTitle: "Programming first principles - Premise - We must understand what we're doing"
seoDescription: This premise says that we must understand what we're doing at all times. We can't program by coincidence until we stumble upon something that works.
---

Video version of this article: [https://youtu.be/\_SVpX6Q-6zs](https://youtu.be/_SVpX6Q-6zs)

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/) (this article)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/)
13. [Side effects](/blog/programming-first-principles-side-effects/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)

---

Our next premise is that we must understand what we're doing when programming.

This is also mentioned in the book [The Pragmatic Programmer](https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition). It's the tip "don't program by coincidence".

## We must understand what we're doing

It means that we must program deliberately.

We should not be "trying things out" until we get something that _seems_ to work.

## Why must we understand?

From the definition of software, our requirement is to produce a system of code that works as intended.

As we build systems we need to understand what we're doing, because we're the ones doing it and building the system.

If we don't understand what we're doing, then it follows that we're programming by coincidence.

Therefore we are unaware of whether we're doing the wrong thing or creating something useful out of absolute luck.

This is a slope.

At first we're only missing a small bit of understanding and have faith that things will work. We do some manual testing and see that things are working and we're satisfied. When the project is small, it's easy to verify things work using manual testing.

As the system grows bigger, there is a higher chance of error, missing something crucial and breaking something unrelated.

This goes against our requirement that we must create a working system.

However, if we understand what we're doing, it means we have the highest possible confidence that our code works as intended and does not break anything.

This is the closest we can get to fulfilling our requirement.

Therefore, ideally we should understand what we're doing at all times.

Here's an alternative way of looking at it.

Deliberate approach: "To the best of my ability, I am confident the code works as intended and that I didn't break anything."

Luck approach: "I randomly tried some stuff until the new feature seemed to work. Did I break anything? I have absolutely no clue, but I didn't find anything in my little manual testing."

Which one provides more confidence that the code works as intended and nothing was broken? Obviously the deliberate approach.

Therefore understanding what we're doing is more likely to fulfill our requirement that our software works as intended.

Therefore, ideally we should understand what we're doing at all times.

---

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/) (this article)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/)
13. [Side effects](/blog/programming-first-principles-side-effects/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)
