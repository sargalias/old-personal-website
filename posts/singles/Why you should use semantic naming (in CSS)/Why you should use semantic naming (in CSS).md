---
title: 'Why you should use semantic naming in CSS'
slug: why-you-should-use-semantic-naming-in-css
date: 2019-09-18
author: 'Spyros Argalias'
featuredImage: './why-you-should-use-semantic-naming-in-css.png'
---

Video version of this article: [https://youtu.be/4Oo04kyM1Yg](https://youtu.be/4Oo04kyM1Yg).

In this post I want to talk about why semantic naming is important. It's important in programming in general, but particularly I want to discuss its importance in CSS.

## What semantic naming is

Basically, if you have a class `.color-red`, or even `.color-primary`, that is not semantically named.

It describes the style or look of the element, rather than its purpose.

A more semantic name may be `.page-heading` or `main-sidebar`. Something that describes the purpose of the element.

## Why semantic naming is important

It brings two important benefits:
- Maintainability
- Labels / notes for the programmer

### Problem - Maintainability

So with your `.color-red` class, obviously the `h1` you apply it to is going to be red.

But the designer comes back tomorrow and tells you to make it blue.

Now you have to go to **both** your HTML and CSS to make the change.

In the HTML you need to change the class, because it's going to be the ultimate confusion if it has the class `.color-red` and it looks blue. You also need to add a new class in your CSS as well: `.color-blue` this time.

**It works, but it's on cue to become a maintenance nightmare. Code should be optimised for maintainability.**

Having to change two things (HTML and CSS) instead of one is more error-prone.

### Solution - Maintainability

Instead, consider:

If it was just named `.page-heading`, then you only have to change the color in one place (in the CSS).

This has tons of benefits:
- Changes are only done in one place, so the process is simpler (read: harder to make a mistake).
- It opens up the path for white-labelling (having a website where you can change the styling purely from the CSS).
- Maintenance is much easier. The element has the class `.page-heading` today, and it will probably have the same class a year from now.


### Problem - Labels

Back to the HTML with the class `.color-red`...

Unless the HTML / JavaScript file has an amazing name, seeing `<div class="color-red">` doesn't tell you anything about what that component is.

Is it the sidebar? The page heading? The comment box? It's extremely difficult to tell.

Compare this with `<div class="page-heading">` or `<div class="main-sidebar">`.

You immediately know the purpose of the component. You can find it on the website (even with a simple search on the dev tools), and you can find it in the codebase.

And remember, you don't have 5 components, you have 1000 components for a large website.


## It's a programming standard

I'm sure you've heard the phrase "There are two difficult things in computer science: Naming and cache invalidation".

Yes naming is difficult, and it's not uncommon for programmers to spend a good amount of time thinking of a good name for something.

The reason this is necessary is because code must be optimised for maintainability. You will read code and modify it a huge number of times. Even if it takes 3x to write the code upfront, it will pay dividends in efficiency if the code is easily understandable. And it will not take 3x longer to write it, only 1.2x.


### Conclusion

Use semantic naming that describes the purpose of an element, rather than its look.

It provides lots of benefits:
- Maintainability
- Changes only happen in one place, so less error-prone.
- Changes only happen in CSS (+ opens up white labelling).
- Labels for easily identifying elements.

And remember the project tomorrow will have 1000s of components, so any problems you have today due to non-semantic names will greatly amplified tomorrow.
