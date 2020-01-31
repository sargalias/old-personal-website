---
title: 'Code should be optimised for maintainability'
slug: code-should-be-optimised-for-maintainability
date: 2019-10-18
author: 'Spyros Argalias'
featuredImage: './code-should-be-optimised-for-maintainability.png'
---

Video version of this article: [https://youtu.be/hF2E6QCORug](https://youtu.be/hF2E6QCORug)

This is a short series of posts on clean code:
- [A tale of unclean code](/blog/tale-of-unclean-code/)
- [Why clean code matters](/blog/why-clean-code-matters/)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/) (this post)

---


In my opinion this is the second most important principle in all programming: Code should be optimised for maintainability.

The first principle, which is even more important, is that [code must work](/blog/code-must-work) as intended in all ways (functionally, performance, security, etc.).

So as long as optimising code for maintainability still allows the code to work as intended, then you should do it.


## Why optimise for maintainability

I've written blog posts about this before, so the majority of the why is there. Check them out for more information:
- For reasons in general why clean code matters (read: maintainable code matters), see [why clean code matters](/blog/why-clean-code-matters/).
- For an example of what bad code can do to your codebase and how much it can slow you down, see [a tale of unclean code](/blog/tale-of-unclean-code/).


However people do provide counter-arguments to writing maintainable code. Here are some of them:
- Projects with messy code still make a lot of money.
- It takes significantly longer to write clean code, which is a waste of time.
- Unclean code doesn't slow you down very much anyway.

Let's tackle them one by one.


## Objection - Projects with messy code still make a lot of money

I don't think there is any denying on this one.

Obviously as long a the correct product is delivered to the customer, the customer will pay for it. This is regardless of whether the code is clean or unclean.

Writing clean code has more to do with development efficiency of the product and minimising bugs, rather than what the end product will be like.

So in the end this is a neutral point in terms of whether you should have clean code or not.


## Objection - Writing clean code takes significantly longer

So, this one is probably true... for some people.

### My personal experience with writing clean code

To be perfectly honest, personally, it hardly takes me any additional time to write clean code.

Maybe I'm biased, and maybe it's because I've practiced so much and I regard clean code as being very important. However writing what I consider to be clean code takes me pretty much the same amount of time as writing unclean code.

The kind of code that I write is usually my "default" code.

The only difference is that at the end of it all, I spend some time refactoring. I do this pretty much always.

Overall, the only extra time I spend compared to writing unclean code is the little amount of time that I spend refactoring. Probably 10% additional time or so.

### People who promote unclean code

So again this is just my personal experience.

In a few cases, the people I usually hear this objection from tend to not be able to write very clean code even if given infinite time...

I don't know how much else I've got to say about this one. This is just my personal experience.

I'll leave it up to you to consider whether it's important or not.


## Unclean code doesn't slow you down very much anyway

So this one I find absolutely ludicrous.

I've encountered unclean code plenty of times.

It doesn't always slow me down a lot. But sometimes it can take something that should take 15 minutes to an hour to code (a simple change) to multiple days.

**Warning, incoming rant**

Why would that be?

Well first of all you can't actually make a change until you understand what the thing does.

Now, reading it is easy. Maybe it takes an hour or so to read the code for multiple files.

However remembering and understanding the code requires more time.

But whatever, you spend the time and you have somewhat of an idea of what you need to do.

But the code is very messy, so it takes some time to do the thing without breaking a lot of stuff.

However you break something unrelated a few files later anyway.

But it's okay, you fix it.

You've done your change, all is good.

But it's not, because it turns out that a little while later your change gets overwritten by this other thing 3 files later and you had no idea. It's not that file's responsibility to change that thing, there was no indication whatsoever that the thing would change there, and this is now the third day you've spent trying to get the piece of code to work. It should have taken 15 minutes, not three days.

Oh and things weren't even working. On the way here you already fixed three things that were not working and surprisingly the program worked anyway. Like those three things were not even needed. But you didn't know that at first, so you were stuck figuring out why that third party module is not working as expected. It wasn't being initialised correctly in the first place and it was silently failing.

**Anyway, rant over...**

And just for the record, I'm generally considered fast in terms of completing stories, so the problem is not just me being unable to handle unclean code. Plenty of people I've worked with have just as much difficulty.

Finally, the slowdown happens pretty much immediately. From the first time you have to come back to the piece of code. It's even worse if a different developer has to work on the code (who didn't write it and doesn't know it as well as the original developer), or if a lot of time has passed and you've forgotten how the code works.

In general, slowdown of this kind appears in weeks, not months.

So no... I don't buy it that unclean code doesn't slow you down very much, it can slow you down significantly. In some cases, it slows you down a crazy amount.


## Overall

I believe that code should be optimised for maintainability, except in the very rare cases that it can't be.

In my personal experience, the objections to writing clean code don't really hold weight. Let me emphasize however that this is just my personal experience. At the end of the day I could be wrong, so please consider your personal experience as well.


This is a short series of posts on clean code:
- [A tale of unclean code](/blog/tale-of-unclean-code/)
- [Why clean code matters](/blog/why-clean-code-matters/)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/) (this post)
