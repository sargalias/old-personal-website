---
title: 'Code must work'
slug: code-must-work
date: 2019-10-20
author: 'Spyros Argalias'
featuredImage: './code-must-work.png'
---

Video version of this article: [https://youtu.be/g8EzHTVLK0k](https://youtu.be/g8EzHTVLK0k).


In my opinion this is the most important principle in programming.

It's even more important than the principle that [code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/).

The code must work, as intended and in all ways.

Additionally, you must be certain that the code works at all times.


## Motivation

Why must code work?

Hopefully this doesn't really need answering.

If it does then perhaps the project you're working on isn't important and maybe it doesn't actually matter whether it works or not.

However for most commercial projects, if the code doesn't work (i.e. has bugs), it's probably losing money and losing customers.

For example, in an ecommerce application, pretty much anything that's broken results in lost money:
- Checkout
- Add to cart
- Being able to view a product
- Logging in to your account
- Etc.

In other applications, you may not be losing money directly, but if your product is not working it's probably frustrating customers, so you'll probably lose customers.

So code must work, otherwise it's bad for the company among other things.


## In what ways must code work?

The code must work in all ways. For example:
- Functionally
- Security
- Performance
- Accessibility
- Visually (UI)
- UX
- Etc.

All of these are concrete requirements of any project, even if not explicitly mentioned, therefore they all have to be considered.


## You must know that it works at all times

You must know for a fact that your code works. Otherwise, by definition, it may not work.

Basically this means that you need some kind of reproducible proof, such as tests.

A good test suite is absolutely necessary.


## Overall

Code must work at all times, and in all ways.

You must have a reproducible proof that the code is working as intended.
