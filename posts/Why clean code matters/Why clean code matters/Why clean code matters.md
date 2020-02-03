---
title: 'Why clean code matters'
slug: why-clean-code-matters
date: 2019-10-14
author: 'Spyros Argalias'
featuredImage: './why-clean-code-matters.png'
category: Programming principles
excerpt: Why does clean code matter for a project? What are the effects of bad code and what can we do to prevent them?

seoTitle: 'Why clean code matters'
seoDescription: Why does clean code matter for a project? What are the effects of bad code and what can we do to prevent them?
---

Video version of this article: [https://youtu.be/Fr_VsMLvHP8](https://youtu.be/Fr_VsMLvHP8)

This is a short series of posts on clean code:

- [A tale of unclean code](/blog/tale-of-unclean-code/)
- [Why clean code matters](/blog/why-clean-code-matters/) (this post)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/)

---

There are multiple reasons why having clean code matters.

For a particular use-case of the very real negative impact of unclean code, please see the previous post [a tale of unclean code](/blog/tale-of-unclean-code/).

So why does clean code matter?

When code is clean, it results in a codebase that's:

- Simple.
- Easy to understand.
- Less buggy.
- Easy to maintain.
- Easy to add features to.

The benefit of these things is tremendous.

On the other hand, unclean code is the opposite:

- Complicated.
- Difficult to understand.
- Has tons of bugs, and in general is fragile and difficult to add features without additional bugs.
- Difficult to maintain and add features to.

Here are the benefits / downsides in a bit more detail.

## Simplicity and ease of understanding

How easy is the code to read and understand?

**Problems with complex code**

If the code is complex and difficult to understand:

- It takes a significant amount of time for someone to understand it.
- It takes a long time to even start working on it, because it's necessary to understand it first.
- Less experienced programmers may not understand it at all.
- It could waste hundreds of hours throughout the lifetime of the project.

In more detail:

In terms of immediate time, it honestly could take someone hours to decipher and understand a large piece of complicated code. If it was clean, it could have taken as little as a few minutes.

The delay in development will be apparent immediately, because you'll be spending hours trying to understand the code.

However what's even worse is the delay that will be caused by the code in the entire lifetime of the project.

Consider it to be dozens of times per year that someone has to come back to this code, often having never seen this code before.

And if the code gets worse rather than better, the problem will become worse each time.

**Benefits if code is simple**

On the other hand, if the code is simple:

- It probably takes minutes, not hours, to understand what it's doing.
- You can start working on it immediately.
- A less experienced developer is likely to be able to work on it just as easily as an experienced developer.
- It will keep development throughout the entire lifetime of the project as quick as possible.

## Bugs and maintenance

Put simply, complex code tends to be much more buggy than simple code.

**Complicated code results in bugs**

The thing is, bugs come from incomplete reasoning in the programmer's mind.

The bugs are in our minds first. We're the ones who forget to account for scenario X and whatnot.

That problem is significantly amplified if we can't even understand the thing. How could we possibly account for the correct scenarios and edge cases, when we can't even sufficiently follow how the thing works?

**Code changes result in bugs, when code is not clean**

If code does not have clear separations of concerns and minimal knowledge of other code, it means that changes can affect multiple things at once.

In other words, changes will propagate.

In this situation, a code change becomes very difficult:

- We need to check multiple places to ensure we didn't make mistakes, and repetition is error-prone.
- We need to make changes in multiple places.
- The individual changes themselves may be complicated.

**Less bugs with clean code**

If code is simple, easy to understand and easy to reason about, and follows good programming principles in general, the chance of bugs is greatly reduced.

You have a lot more capacity to think about edge cases of the code, because you're not using all your capacity trying to understand how it works.

Another point is that simple code with clear responsibilities is much easier to test. Better tests will probably result in less bugs.

## Clean code is invisible

One more thing to note is that clean code is rarely praised.

No one really stops to think "gee, that code was really nice and simple, the original author did a good job".

The positive is somewhat ignored.

This isn't a bad thing, but it is worth pointing out.

You may have heard the phrase "good design is invisible". Well it's the same with code. Good code doesn't trip us up, but we don't really stop and think it's good code.

The reverse is true. When code is bad and unclean, that stops us in our tracks and it's frustrating.

The point I'm trying to make is, if you write clean code it's unlikely anyone will come and congratulate you. You probably won't get praise.

But that's fine, just keep going and keep writing good code.

## Overall

To summarize, clean code is very important.

When code is clean, it results in a codebase that's:

- Simple.
- Easy to understand.
- Less buggy.
- Easy to maintain.
- Easy to add features to.

---

This is a short series of posts on clean code:

- [A tale of unclean code](/blog/tale-of-unclean-code/)
- [Why clean code matters](/blog/why-clean-code-matters/) (this post)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/)
