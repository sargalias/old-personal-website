---
title: 'A tale of unclean code'
slug: tale-of-unclean-code
date: 2019-10-13
author: 'Spyros Argalias'
featuredImage: './a-tale-of-unclean-code.png'
category: Programming principles
excerpt: Here is a story of some bad code in a codebase I worked at and the consequences it had.

seoTitle: 'A tale of unclean code'
seoDescription: Here is a story of some bad code in a codebase I worked at and the consequences it had.
---

Video version of this article: [https://youtu.be/CPM2Tb2AfRQ](https://youtu.be/CPM2Tb2AfRQ)

This is a short series of posts on clean code:
- [A tale of unclean code](/blog/tale-of-unclean-code/) (this post)
- [Why clean code matters](/blog/why-clean-code-matters/)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/)

---

Code should be clean and it should optimised for maintainability and readability.

Why?

Because if it's not, you're going to have a really hard time working with that code for the entire lifetime of the project.

I've worked with code that's easy to understand, and with code that's really difficult to understand.

Working with code that's difficult to understand is a nightmare, and it takes forever.


I remember one particular scenario where:
- I was working with a class with three responsibilities, as well as multiple other classes it interacted with where responsibilities were blurry and overlapped.
- The names describing what each thing did were awful.
- And it was a lot of code.

I legitimately had to read the entire code line by line, because there was no other way for me to know what the thing did... This took probably 45 minutes... Then at the end of it I didn't remember any of it. I mean it was a large piece of line by line code that had a very poor structure.

In a situation like this the only thing we can do is ask the original programmers what it does (if they're still working in the company), or actually try to decipher the thing and take notes on the structure and findings and refer back to them all the time.


## Problems

There were constantly problems with the code:
- That code was buggy all the time.

  Bugs were constantly created, even by the original developers (who understood the code best) requiring new fixes. And often the new fix broke something else and required another fix.

- The code missed requirements all the time.

  Common configuration wasn't even refactored. It was hardcoded each time.

  When there is a lot of code and duplication, it's very easy to forget to include something. The code would be submitted, and very often more coding had to go in.

- Changes were very slow.

  I remember the developers there were blaming the tests... However the real culprit was the unclean code which had the side-effect of making it very difficult to test.


## After we fixed it

Some time later we refactored the damn thing...
- We gave each class a single responsibility with clear boundaries.
- We refactored common configuration objects and imported them.
- Gave everything reasonable names so it was easy to understand what each thing was doing.

Then it was normal to work with.

Making new changes to it was normal (read: easy and with less chance of bugs).


## Moral of the story

Clean code matters.

For more concrete reasons on why it matters, please see the next blog post in the series [why clean code matters](/blog/why-clean-code-matters/).


---

This is a short series of posts on clean code:
- [A tale of unclean code](/blog/tale-of-unclean-code/) (this post)
- [Why clean code matters](/blog/why-clean-code-matters/)
- [Code should be optimised for maintainability](/blog/code-should-be-optimised-for-maintainability/)
