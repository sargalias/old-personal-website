---
title: 'When not to apply programming principles'
slug: 'when-not-to-apply-programming-principles'
date: 2020-02-15
author: 'Spyros Argalias'
featuredImage: './when-not-to-apply-programming-principles.png'
category: 'Programming principles'
excerpt: Sometimes applying programming principles can cause more harm than good. We shouldn't just apply them dogmatically. Find out when, why and what to do about it.

seoTitle: 'When not to apply programming principles'
seoDescription: Sometimes applying programming principles can cause more harm than good. We shouldn't just apply them dogmatically. Find out when, why and what to do about it.
---

When examining each principle, we focused on how to strictly apply it.

But we didn't really touch on pragmatism as much, or when we shouldn't apply some of the principles.

Well, except for the principle of abstraction. We touched on abstracting too early and over-generalizing a fair bit. For a lot more detail on that one, see [programming first principles - abstraction](/blog/programming-first-principles-first-principle-abstraction/).

As for the rest...

## When should we not apply programming principles?

Okay, so the real answer to this question is "never". We should always apply programming principles, unless for some reason it's impossible.

The subtlety is that sometimes the principle of least astonishment and KISS principle conflict with the others.

Particularly when the code we just wrote is quite small and simple, it may be detrimental to religiously apply separation of concerns or some of the other principles. It may actually make the code harder to understand and add more boilerplate.

Another reason is, as mentioned in the abstraction principle, we don't want to abstract or generalize the code too early, otherwise we might over-generalize. This means we might create an abstraction we'll never need to reuse, effectively making the code more complicated with no benefit, or an incorrect abstraction that will need refactoring again later.

## Downsides of not applying principles immediately

There are also downsides to waiting.

**(Future) code changes are error prone**

[Code changes are error prone](/blog/why-code-changes-are-error-prone/), meaning that a change to already existing functionality in the future is far more dangerous than changing brand new code when we first create it.

**Future changes are more difficult to make**

If we just wrote the code, it's still fresh to us.

We understand it well, we know what effect changes will have, etc.

It's easier to make changes now than make them in the future.

**Code may stay "difficult to understand"**

Code that doesn't follow good principles can be more difficult to understand.

This will slow down future efforts every time the code needs to be re-read and understood.

**Code potentially stays harder to test**

Easier testability is one of the advantages of following good software development principles and separation of concerns.

## Suggestions

**Rule of three**

Specifically for abstraction, use the [rule of three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>) as a good rule of thumb.

Its benefits are:

- Creates more robust abstractions.
- Increases the chance that the abstractions are semantically significant.

However remember that it is just a rule of thumb. Don't be afraid to break it in the rare cases where it's beneficial to do so.

**Consider whether the code is simple enough that splitting it further may make it more difficult to work with, rather than easier**

Sometimes this is a possibility. The code may be simple, and dogmatically applying separation of concerns may add boilerplate, split it into different files, etc. The end result may be that the code was easier to work with and understand in its original state.

In this case, it may be perfectly acceptable and preferable to leave the code as it is. We can always **refactor later**, if needed.

Additional factors to consider may be things like:

- Size of the project.
- Length of the project.
- Size of the team.

If a project is very large, long, or has a large team, it may be preferable to follow conventions and split things diligently even if it will add boilerplate and make the code less simple.

This is because convention and familiarity may be better for the codebase than the benefit of keeping the particular code as simple as possible. In other words, splitting the code may actually better apply the principle of least astonishment to the particular codebase.

[Unidirectional data flow](<https://en.wikipedia.org/wiki/Unidirectional_Data_Flow_(computer_science)>) is an example. All code is strongly encouraged to follow a particular path, architecture and structure. This sometimes greatly increases the boilerplate of some otherwise trivial things. However, considering the project as a whole, this architecture and adherence to it is very beneficial. It's generally very clear what's going on at all times. In comparison, the odd case where something doesn't follow the convention could be very confusing to developers.

So in the end, you and your team will decide. Sometimes it's best to leave the code simple and easy to work with. Sometimes it's best to diligently separate concerns regardless.

**If in doubt, I personally suggest leaning towards applying principles early, rather than applying them late**

## Summary

To summarize all the points...

Advantages of waiting before applying programming principles:

- If the code is simple enough, separating it may make it harder to understand and add more boilerplate.
- By abstracting early we may over-generalize, adding unnecessary boilerplate to code or creating incorrect abstractions that will need refactoring later.

Disadvantages to waiting before applying programming principles:

- Future code changes are error prone.
- Changes are easiest to make when the code is new.
- Code with clearly separated concerns is generally easier to understand. This will pay dividends for the duration of the project.
- Code with good programming principles is generally easier to test.

Suggestions:

- Use the rule of three, but remember that it's a rule of thumb which in rare cases is beneficial to break.
- Consider whether the code is simple enough that splitting it further may make it more difficult to work with, rather than easier.
- If in doubt, I personally suggest leaning towards applying principles early, rather than applying them late.
