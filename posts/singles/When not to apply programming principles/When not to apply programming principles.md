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

But we didn't really touch on pragmatism very much, or when we shouldn't apply some of the principles.

## When should we not apply programming principles?

Okay, so the real answer to this question is "never". We should always apply programming principles, unless for some reason it's impossible.

The subtlety is that sometimes the principle of least astonishment and KISS principle conflict with the others.

Particularly when the code we just wrote is quite small and simple, it may be detrimental to religiously apply separation of concerns or some of the other principles. It may actually make the code harder to understand and add more boilerplate.

Another reason is, by refactoring or generalizing the code too early, we may over-generalize. This means we might create an abstraction we'll never need to reuse, effectively making the code more complicated with no benefit, or an incorrect abstraction that will need refactoring again later.

## Downsides of not applying principles immediately

There are also downsides to waiting.

**(Future) code changes are error prone**

[Code changes are error prone](https://www.sargalias.com/blog/why-code-changes-are-error-prone/), meaning that a change to already existing functionality in the future is far more dangerous than changing brand new code right now.

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

The aim of the [rule of three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>) is to avoid refactoring / abstracting code which really doesn't belong together. In other words having very tight coupling between code that shouldn't have it.

This feels like a wishy-washy topic to discuss, but I believe the key here is **semantics**.

Code that is abstracted should be _semantically_ the same, rather than just coincidentally the same. It should have the same concerns. It should follow the single responsibility principle, meaning it only has one reason to change.

For example, consider this code:

```js
function formatUsername(str) {
  return str.split(' ').join('');
}

function formatShoppingList(str) {
  return str.split(' ').join('');
}
```

In the example, both of the function bodies are exactly the same.

However in this case, the duplicate code is probably **coincidental**.

The reason is because our two functions have different reasons to change.

The `formatUsername` function will likely always need spaces stripped out of it. However, tomorrow the `formatShoppingList` function may want spaces replaced by hyphens or whatever. Perhaps it doesn't want spaces removed at all, and instead wants everything to be uppercase.

If we saw the duplicate code and created a function `function format(str) { return str.split(' ').join(''); }`, and used it in both functions in the example, tomorrow when the shopping list changed we would have to go back and refactor everything again.

Anyway, the rule of three basically helps prevent those situations. The situation where we refactor today, only to realise tomorrow that we refactored the wrong things and need to refactor again.

But remember that the rule of three is a **rule of thumb**. Sometimes we may want to refactor things on the second occurrence. It may be too difficult to maintain both instances otherwise, and as long as we're confident that both instances have the same semantic meaning then it's fine.

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

- Consider the rule of three.
- Consider whether the code is simple enough that splitting it further may make it more difficult to work with, rather than easier.
- If in doubt, I personally suggest leaning towards applying principles early, rather than applying them late.
