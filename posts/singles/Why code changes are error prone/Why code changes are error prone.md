---
title: 'Why code changes are error prone'
slug: 'why-code-changes-are-error-prone'
date: 2020-02-14
author: 'Spyros Argalias'
featuredImage: './why-code-changes-are-error-prone.png'
category: 'Programming principles'
excerpt: There are multiple reasons why code changes are error prone in programming. There is also a way to minimise the negative effects of changes.

seoTitle: 'Why code changes are error prone'
seoDescription: There are multiple reasons why code changes are error prone in programming. There is also a way to minimise the negative effects of changes.
---

I always say that code changes in programming are error-prone.

Experience tells us that they are, but why is that?

In this post we'll examine what makes changes error-prone in programming.

There are problems with changes:

- Changes can break the system easily.
- Statistics.
- Human characteristics:
- - Memory.
- - Attention to detail, or the amount of focus we can muster.
- - Impatience.
- - Etc.
- Scope

## Changes can break the system

To clarify this...

Let's distinguish between new code that does a brand new thing, and **changes / modifications** to functionality that already exists in the system.

The key distinguisher is the **changes** part.

Brand new code that does new things does not cause changes, unless we go back and modify already existing code to use it. Otherwise, it has zero effect on already existing functionality in the system.

If we code the functionality incorrectly, it won't work, but anything we break is isolated specifically to the new code we just wrote.

On the bright side:

- The code is still fresh to us.
- The bug is in a small scope (compared to the entire system).

Next, let's consider changes to existing functionality.

If we change something incorrectly, we could break the system in absolutely any way.

Potential problems are:

- We may not know what broke. The bug could be anywhere in the system.
- We may not know we broke something. It may be an elusive bug.
- We may not have a sufficient test suite, further decreasing the chance that we'll know if we broke anything.
- We may not remember the code. Before attempting to fix anything we would have to spend time to read and understand old code.

All of these cases are far worse than breaking something brand new that we're working on right now. Particularly the case where we don't know something is broken. Elusive bugs and incorrect behaviour are widely considered as the worst kind of bugs. At least if something crashes you know you have a bug and it's relatively easy to find it, but if something is running incorrectly that can be a disaster.

## Statistics

Another thing is statistics, the numbers are just against us.

In programming, any change we make or new code we write is a potential source of bugs.

That's just how it is, because we sometimes make mistakes or don't fully comprehend what our change means in the scope of the system.

This applies to all code, but it's yet another reason that makes changes error prone.

## Human characteristics

Next, there is us.

Particularly when we have to make multiple duplicate changes:

- We may not be aware of all the places we need to change.
- Even if we are aware of all the necessary changes, we may forget to change one of the places, or we may lose track of what we changed already and still need to change, especially if we're making changes to multiple things.
- We may not be paying enough attention, so perhaps we change the wrong property in one place.
- We sometimes rush, particularly if we have to make 10 changes (e.g. in a configuration file with multiple environments). This also contributes to error rate.

The problem is even worse when we have to make multiple _similar_ changes, not exactly the same. That requires even more attention from us.

**Bottom line: Generally we're just bad at making changes, particularly repetitive changes. They require a lot of mental effort, attention to detail, and patience.**

## Scope

Scope of the changes we have to make is also really important, and by the way this reason is why following good software development principles is important.

The smaller the scope of a change we have to make, the easier and safer it will be.

This is for two reasons:

- Following from the premises that we can only handle [minimal information](/blog/programming-first-principles-premise-minimal-information/) and [we must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)... Code that spans less area and requires less to read and understand is easier to change (everything else being equal).
- By following good programming principles, we minimize propagating changes. This means that we only have to make one change, rather than 10 changes.

  In comparison, in a system without good separation of concerns, making a change to something may mean we need to also change other things which used it. This process can repeat many times.

## Suggestions

So knowing that changes are error-prone, what can we do to minimise them and minimise their effects?

The short answer is to follow good programming principles.

Programming principles don't mean we never have to make changes. Instead, what they do is they generally contain all changes we might have to make to the smallest possible scope. This means both in terms of physical area (how much code we have to read first before understanding enough to make the change), and in terms of how many propagating changes there will be (ideally none).

Some particularly important principles are:

- [Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/).
- [Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/).
- [Abstraction](/blog/programming-first-principles-first-principle-abstraction/).

For more information, also check out the [programming first principles series](/blog/programming-first-principles-purpose-what-this-series-is-about/).
