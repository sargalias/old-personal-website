---
title: 'Code should be optimised for maintainability'
slug: code-should-be-optimised-for-maintainability
date: 2019-10-18
author: 'Spyros Argalias'
featuredImage: './code-should-be-optimised-for-maintainability.png'
category: Programming principles
excerpt: Why code should be optimised for maintainability and common objections around the topic.

seoTitle: 'Code should be optimised for maintainability'
seoDescription: Why code should be optimised for maintainability and common objections around the topic.
---

Video version of this article: [https://youtu.be/hF2E6QCORug](https://youtu.be/hF2E6QCORug)

This is a short series of posts on clean code:
- [A tale of unclean code](/blog/tale-of-unclean-code/)
- [Why clean code matters](/blog/why-clean-code-matters/)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/) (this post)

---


In my opinion this is the second most important principle in all programming: Code should be optimised for maintainability.

The first principle, which is even more important, is that [code must work](/blog/code-must-work/) as intended in all ways (functionally, performance, security, etc.).

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

This one is interesting.

From one point of view, there is no denying it. Some projects, particularly projects that are on the smaller side, definitely make money as long as they make it to market.

Obviously as long a the correct product is delivered to the customer, the customer will pay for it. This is regardless of whether the code is clean or unclean.

However the failure rate for software projects is very high. Apparently around 14% in 2017 (https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2017.pdf?sc_lang_temp=en). Statistics also show that larger projects have higher failure rates than smaller projects (https://www.gartner.com/en/documents/2034616).

Now obviously there are many more reasons for projects failing than code quality.

So I suppose the jury is still out on whether code quality is important or not.

However I believe it still matters. After all my personal experience clearly tells me that bad code is very difficult to work with in terms of adding features and fixing bugs, whereas clean code is very easy to work with.


## Objection - Writing clean code takes significantly longer

So this one depends.

Absolutely on a small scale, just pumping out some code is much faster. You'll build features much quicker this way.

It's large projects where the opposite is true.

As the project grows larger, complexity increases exponentially.

With a bunch of spaghetti code everywhere, adding new features becomes nearly impossible, especially without breaking anything.

Imagine if you have a tight mesh of stuff and you need to add another string in there or modify one of the strings. That's what code without separation of concerns and other good principles is like. It becomes very difficult to modify things.

**My personal experience with writing clean code**

For me, at least when working on a large project, writing clean code doesn't feel like it takes any additional time.

If the code is already well structured, making clean changes to it seems fairly easy. Keeping those changes clean seems fairly easy as well.

Maybe I'm biased, and maybe it's because I've practiced so much and I regard clean code as being very important. However writing what I consider to be clean code takes me pretty much the same amount of time as writing unclean code on a good project.

The only difference is that at the end of it all, I spend some time refactoring. I do this pretty much always. Probably 10% more time or something?


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

This is all based on my personal experience, however the majority of people I've spoken to have just as much difficulty working with unclean code.

Another quick point. I always hear new developers complain about how "awful this code is that the previous developers wrote"... I've always heard it on every project I've ever worked on. This seems to imply that developers are slowed down by unclean code.

Finally, the slowdown happens very quickly. From the first time you have to come back to the piece of code. It's even worse if a different developer has to work on the code (who didn't write it and doesn't know it as well as the original developer), or if a lot of time has passed and you've forgotten how the code works.

In general, slowdown of this kind appears in weeks, not months.

So no... I don't buy it that unclean code doesn't slow you down very much, it can slow you down significantly. In some cases, it slows you down a crazy amount.


## Overall

I believe that code should be optimised for maintainability, except in the very rare cases that it can't be.

In my personal experience, the objections to writing clean code don't really hold weight. Let me emphasize however that this is just my personal experience. At the end of the day I could be wrong, so please consider your personal experience as well.


This is a short series of posts on clean code:
- [A tale of unclean code](/blog/tale-of-unclean-code/)
- [Why clean code matters](/blog/why-clean-code-matters/)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/) (this post)
