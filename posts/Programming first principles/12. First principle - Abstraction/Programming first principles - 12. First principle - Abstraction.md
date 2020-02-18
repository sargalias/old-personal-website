---
title: 'Programming first principles - 12. First principle - Abstraction'
slug: 'programming-first-principles-first-principle-abstraction'
date: 2020-02-03
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-first-principle-abstraction.png'
category: 'Programming principles'
excerpt: What is abstraction, why do we need it and what are its dangers? Find out how to do it correctly and prevent issues.

seoTitle: 'Programming first principles - 12. First principle - Abstraction'
seoDescription: What is abstraction, why do we need it and what are its dangers? Find out how to prevent issues with abstraction and how to do it correctly.
---

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/) (this article)
13. [Side effects](/blog/programming-first-principles-side-effects/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)

---

Why is abstraction important?

At surface value, abstraction results in the following things:

- We don't repeat ourselves, or in other words create similar / duplicate code.
- We don't have duplicate knowledge in our code.

Abstraction (other functions / methods) is also how we apply separation of concerns. We take other code we don't want to worry about in the given context, and put it in a function or such. That way we can just call the function and not worry about its internals. I won't touch on this point any more in this post. For more details on that please see [first principle - separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/).

So abstraction helps because we don't have to repeat ourselves. That's great and all, but why is that important?

## Benefits of abstraction

**Easier, safer changes.**

Not having duplicate knowledge in our code makes future changes easier and safer.

This is because [code changes are error prone](/blog/why-code-changes-are-error-prone/). We want to minimise their scope and surface area. We want to have to change as little code as possible, in as small an area as possible.

Abstraction directly helps by putting all that similar / duplicate code in a single, small place. This means that making changes becomes the easiest and safest it could be.

**Having to make multiple changes instead of a single change takes longer.**

At surface value, abstraction helps with this by eliminating similar / duplicate code and placing it in a single place instead.

This means we only have to change a single place, which means we can make the change quicker.

However, I suppose this benefit can be debated.

If we want to really measure the benefit in speed of making changes, we also have to consider how much time it takes to refactor the code to an abstraction in the first place.

Unfortunately... I have zero statistics on this...

However let's consider a thought experiment:

**Consider a codebase with 0 abstractions.** As few functions as possible. Every time we want something done, we have to copy / paste the code and modify it accordingly.

Obviously working in such a codebase would be horrendous, and changes would take forever as there would be tons of places to update. Very high diligence would be needed to not miss a single place where a change is required.

Bugs resulting from such missed changes may be common, further slowing us down by having to go back and fix them.

I believe it's fairly clear that zero abstractions would not be efficient.

**Next let's consider the opposite extreme:** Extreme abstraction, abstracting everything we possibly can as soon as possible.

It's pretty clear to me that such a codebase would be pretty bad too.

Most of the time we would probably be over-abstracting.

We would need to spend a long time creating abstractions, possibly artificial (unnecessary) abstractions.

We would be over-engineering, and constantly trying to predict what we may need in the future to create abstractions for it.

We would need to go back and separate abstractions often when our abstractions end up not making sense (not being what we predicted).

**The happy medium of "reasonable abstractions" makes the most sense.**

It's probably immediately clear that it is better than 0 abstractions, and better than extreme abstractions.

So to summarize, good abstractions mean we can make changes faster, as long as there is a happy medium of how much abstraction we opt for.

## Dangers of over-abstracting

There are also dangers of over-abstracting, or abstracting too early.

If we abstract something too early, we might:

- Create an abstraction which is never reused.
- Create an incorrect abstraction.

Both of those are non-optimal situations.

An abstraction which is never reused is potentially just boilerplate and complication for no benefit.

An incorrect abstraction means we will need to refactor again in the future. In other words, we refactored something into an abstraction, only to have to refactor again in the future. And as mentioned already, code changes are error-prone.

## Preventing over-abstraction

One of the tools most people have heard of for preventing over-abstraction is the [rule of three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>).

**Rule of three**

The rule of three is a **rule of thumb** which suggests that we only refactor something on the third occurrence.

It's fairly useful... Definitely better than creating incorrect abstractions on the second occurrence.

It gives the following benefits:

- Makes it more likely that we create correct abstractions (abstractions created from refactoring occurrences which are semantically related, meaning they are less likely to need separation again in the future).
- Even if we create incorrect abstractions, at least we create them on the third occurrence. This means that even if one of the occurrences separates from the abstraction, at least we are left with two more that use it, so we don't need to go back and refactor everything again. In other words, it is a more robust coincidental abstraction.

For an example, consider the following code:

```js
function formatUsername(str) {
  return str.split(' ').join('');
}

function formatShoppingList(str) {
  return str.split(' ').join('');
}
```

In the example, both of the function bodies are exactly the same.

If we are too hasty, we might be tempted to refactor like this:

```js
function formatUsername(str) {
  return format(str);
}

function formatShoppingList(str) {
  return format(str);
}

function format(str) {
  return str.split(' ').join('');
}
```

However in this case, the duplicate code is probably **coincidental**. It's not semantically the same, because our two functions have different reasons to change. They have different concerns.

Semantically the `formatUsername` and `formatShoppingList` concerns are not really related. There is no particular reason to be confident that that `formatUsername` and `formatShoppingList` will use the same formatting tomorrow. Currently, they just happen to be coincidentally the same.

The `formatUsername` function will likely always need spaces stripped out of it. But tomorrow the `formatShoppingList` function may want spaces replaced by hyphens or whatever, or perhaps it doesn't want spaces removed at all and instead wants everything to be uppercase.

In that case, tomorrow we might have to go back and refactor everything yet again.

```js
function formatUsername(str) {
  return str.split(' ').join('');
}

function formatShoppingList(str) {
  // whatever formatShoppingList requires now
}

// we deleted the format function because it's not needed anymore, we inlined it in formatUsername
```

We use abstraction to minimise the number of changes we have to make. This is why refactoring now, creating an incorrect abstraction, and having to go back and refactor again in the future, is not ideal.

So cases like these is why the rule of three is a good rule of thumb.

To summarize again, if we wait until the third occurrence before refactoring:

- There is a higher chance that we'll create semantically significant abstractions.
- Even if we create coincidental abstractions, at least there are 3 occurrences. If tomorrow an occurrence changes, there are still two more occurrences that use our abstraction. That means we won't have to go and refactor everything back immediately.

**Semantic abstractions**

Another thing to consider is semantic abstractions.

This feels like a wishy-washy topic to discuss, but I believe the ideal abstraction is a semantically significant one.

A semantically significant abstraction has even less chance of needing separation again in the future. This means that there will be less refactoring and less changes to do over the lifetime of the project, which is our original goal when using abstraction.

Ideally code occurrences that we're considering refactoring into a single abstraction should be _semantically_ similar, rather than just coincidentally similar. The occurrences should have the same concerns, the same reasons to change.

For example:

In a codebase I've worked on, we had two pieces of code that were very similar, almost different instances of the other.

They were definitely related, in the sense that one was unlikely to change without the other changing for the same reason. This was confirmed over time as we repeatedly had to make similar changes to both of them when new requirements surfaced.

The worst part was that maintaining both of them separately was very error prone. They were fairly large pieces of code, so making a change to the first one and having to make similar changes to the second one required a lot of time and attention.

After we refactored them into a single abstraction, which accepted arguments for the differences, working in that area was significantly easier.

Breaking the rule of three in this case was acceptable because:

- It was a semantically significant abstraction. The code occurrences had the same reasons to change, and this was proven over time as they repeatedly changed for the same reasons, with similar changes.
- It was pragmatically the right thing to do. The optimal path forward for that code.

  Even if the occurrences weren't semantically similar, it was actually better for maintenance that we created an abstraction for them anyway. The code was fairly complex and quite error prone to maintain in two places. It would have been better to create a coincidental abstraction and accept the risk of potentially having to separate them again in the future.

Also the rule of three is a rule of thumb, not a law. It is intended to be broken when necessary.

So remember the rule of three, but be pragmatic and use your judgement for rare cases where it's best ignored. Particularly when you're confident you've encountered semantically similar occurrences.

**Semantic abstractions vs the rule of three**

So which to use? The rule of three or semantic abstractions?

The answer is both, of course.

The rule of three seems to work well in the majority of cases, maybe 90% to 95% of the time. After all, knowing which code occurrences are semantically similar is quite difficult, and may require some prediction of what may happen in the future.

However remember to be pragmatic.

If it would be significantly easier to work with some code by refactoring it into a single abstraction, it may be worth the risk of potentially having to separate it again in the future. Better yet, if you're fairly confident that those occurrences are semantically similar, there is even less risk that they'll need separating again in the future.

## How to form abstractions

Conceptually it's quite simple:

1. Take similar / duplicate code.
2. Put it in a function with a good name (to follow the principle of least astonishment).
3. Handle differences between the different occurrences by accepting arguments.

## Summary

Abstraction is important because it means:

- We don't repeat ourselves, or in other words create similar / duplicate code.
- We don't have duplicate knowledge in our code.

The benefits of that are:

- Easier, safer changes.
- Faster changes.

The dangers of over-abstracting are:

- We may create an abstraction which is never reused, essentially adding boilerplate and complication for no benefit.
- We may create an incorrect abstraction, which we need to refactor again later.

Suggestions for creating abstractions:

- Use the rule of three as a good rule of thumb.
- Be pragmatic. Sometimes it's better for the project to abstract on the second occurrence, particularly if you're confident the occurrences are semantically similar.
- Consider how semantically similar the occurrences are (their concerns and their reasons to change). Sometimes it can help guide your judgement.

How to create abstractions:

1. Take similar / duplicate code.
2. Put it in a function with a good name (to follow the principle of least astonishment).
3. Handle differences between the different occurrences by accepting arguments.

## Theoretical treatment

From the definition and requirements of software:

- Software should work as intended.
- Software should be easy to change.

Abstraction results in:

- Safer changes. Helping the requirement software should work as intended.
- Easier changes. Helping the requirement that software should be easy to change.
- Faster changes. Helping the requirement that software should be easy to change.

Therefore we should apply abstraction correctly to gain those benefits and fulfil the requirements of software.

---

This article is part of the "Programming first principles series":

1. [Purpose - What this series is about](/blog/programming-first-principles-purpose-what-this-series-is-about/)
2. [Audience - Who this series is for](/blog/programming-first-principles-audience-who-this-series-is-for/)
3. [Requirements of software](/blog/programming-first-principles-requirements-of-software/)
4. [Premise - Minimal information](/blog/programming-first-principles-premise-minimal-information/)
5. [Premise - We must understand what we're doing](/blog/programming-first-principles-premise-we-must-understand-what-were-doing/)
6. [Premise - Minimize propagating changes throughout the system](/blog/programming-first-principles-premise-minimize-propagating-changes/)
7. [Premise - Complexity increases exponentially with scale](/blog/programming-first-principles-premise-complexity-increases-exponentially-with-scale/)
8. [First principle - Proof that code works](/blog/programming-first-principles-first-principle-proof-that-code-works/)
9. [First principle - Principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/)
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/) (this article)
13. [Side effects](/blog/programming-first-principles-side-effects/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)
