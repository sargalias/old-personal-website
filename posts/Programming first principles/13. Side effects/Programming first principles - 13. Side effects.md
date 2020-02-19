---
title: 'Programming first principles - 13. Side effects'
slug: 'programming-first-principles-side-effects'
date: 2020-02-05
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-side-effects.png'
category: 'Programming principles'
excerpt: Find out what side effects are, why they are dangerous and how to handle them.

seoTitle: 'Programming first principles - Side effects'
seoDescription: Find out what side effects are, why they are dangerous and how to handle them.
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
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/)
13. [Side effects](/blog/programming-first-principles-side-effects/) (this article)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)

---

Finally, we have side effects.

Unlike the rest of the first principles, I don't actually consider side effects to be a first principle.

What I mean is, I think the other first principles have unique aspects. They can't be 100% derived from any of the other first principles. Maybe I'm wrong about this and I haven't spent too much time thinking about it, but that's my stance at the moment.

On the other hand, I think diligently applying the principles mentioned in this series means that side effects should never be a problem in your application.

Regardless, I think side effects are important enough to specifically examine. This way we'll know for sure how to handle them, rather than handling them implicitly through good software architecture. Particularly, if we don't apply a principle here and there, we won't get caught out by unforeseen side effects.

So then, side effects...

Side effects are deadly in software development. They are necessary for all software. However they are also the number one reason (probably the only reason) for elusive / intermittent bugs in the system, and probably one of the main reasons for incorrect program behaviour.

Let's examine them closer.

This article is quite long and includes topics for beginners to more experienced developers. Please feel free to skip sections if you feel you know the material. Here is a table of contents:

- [Side note on the definition of side effects](#side-note-on-the-definition-of-side-effects)
- [What are side effects? - Overview](#what-are-side-effects---overview)
- [What are side effects? - Detail](#what-are-side-effects---detail)
- [Dangers of side effects](#dangers-of-side-effects)
- [Examples of how some side effects may cause problems](#examples-of-how-some-side-effects-may-cause-problems)
- [Example of side effects which can be safe](#example-of-side-effects-which-can-be-safe)
- [Handling side effects](#handling-side-effects)
- [Side note on side effects in functional programming](#side-note-on-side-effects-in-functional-programming)
- [Conclusion](#conclusion)

## Side note on the definition of side effects

Well, to start off, I'm going to start with a little side note on the definition of side effects in programming. In short, I don't particularly agree with it.

According to the real life [definition of side effects on the merriam-webster dictionary](https://www.merriam-webster.com/dictionary/side%20effect), a side effect is something that has "a secondary and usually adverse effect".

In other words, something other than the main intended effect. It could be positive or negative, but usually is negative.

In programming the generally accepted programming definition of a side effect is "anything that modifies the non-local environment" (see [side effect (computer science) on Wikipedia](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)).

For example something like writing to the DOM is by all accounts a side effect in programming.

However if writing to the DOM is the primary intended effect, then this contradicts the real life definition of "side effect".

So that's why I disagree with it.

Instead I personally refer to changing state in a program as an "effect".

Additionally, reading / accessing non-local state is just as dangerous, but there isn't really a term for that.

To refer to both, I tend to just declare whether I think something is "safe" or "unsafe" and tend to ignore the term "side effect".

Anyway, that was just a little side note. For lack of a better combined term I'll still mainly use "side effect".

## What are side effects? - Overview

As mentioned, a side effect is anything that is an unintended effect.

This includes things we're not interested in, such as:

- Heat produced by the computer as the program runs.
- Electricity consumed.
- Etc.

We primarily ignore those because they don't realistically influence our program. As long as the computer doesn't melt or something, we're fine.

The side effects we're concerned with are:

- Anything that changes state in our application, particularly state outside of our local scope:
- - Reassigning values of variables.
- - Mutating objects.
- - Writing to databases.
- - Writing to the DOM.
- - Writing to stdout.
- Accessing state outside of our local scope.

The reason we refer to them as side effects, is because they can cause unexpected errors later in the program.

I'm not sure if "reading non-local state" is actually accepted as part of the definition of side effects in programming, however I argue that it's an essential part of what we're concerned with, and should be part of the definition.

After all, if 100 different pieces of code continuously overwrite a global variable, but nothing ever reads or uses the value of that global variable, then that side effect will always be harmless. Even writing to the DOM or stdout can be thought of as _users reading the output_. If no one reads it, we can overwrite `document.body` all day long and it will never matter.

So it is the combined act of changing state, and then reading it, that causes problems in our software. Even if we ignore what the user sees (DOM and stdout) then we can still say that _it's **often** the combined act of changing state and then reading it that's the problem_.

## What are side effects? - Detail

If you already understand what side effects are, then please feel free to skip this section.

This section is here because I remember being a beginner and having trouble understanding exactly what is considered a side effect and what's not.

**Warning: A lot of this will be mentioned again later.** In this section I try to be quite verbose and repetitive to illustrate side effects in case you're not really sure what they are.

For example why is reassigning a variable a side effect but assigning it the first time is not? Or depending on who you ask, perhaps they're both considered side effects.

Why is changing non-local state a side effect, but changing local state is not? Or again, some would consider both a side effect.

If you feel that these need clarification, please don't worry. It's fairly easy to hear conflicting definitions.

So then, in detail, what is a side effect?

Really, the definition and reasoning behind it is quite wishy washy.

My description would be something like: "a side effect is **some stuff we can code that could conflict with other code elsewhere**".

For example:

- It's probably fine to modify the value of a local variable. E.g. the value of `i` in a for loop.
- It's probably bad to modify a global variable.

The reason is because, if we change the value of a local variable, we're less likely to mess something up.

The entire lifecycle of the local variable is inside the function. We can see everything that will ever happen to it over a few lines.

Since it's a local variable, we're not afraid that some random unrelated code will suddenly change `i` and make our function not work properly anymore.

In comparison, when we have a global variable, **anything could change it and break any and all other code that depends on it**.

And that is the only reason.

Changing things that are non-local to us means that it's just harder for us to track them, understand what's affecting them, and handle them in our program. They could break something at any time, and anything may change them at any time.

Next, here are some cases of what may be considered a side effect or not:

**Pure calculation**

```js
function square(x) {
  return x ** 2;
}
```

This function does not have side effects because:

- It does not change state of anything outside of itself.
- It does not read anything outside of itself.

**Calculation accessing non-local variable**

```js
var x = 5;
function square() {
  return x ** 2;
}
```

This function has a side effect.

It accesses state that is non-local to itself.

Is it dangerous? Well... If we're certain that the value of `x` is **always what we expect**, then there is no issue.

The problem is that realistically `x` might change unexpectedly from some unrelated code.

Also, since `x` is non-local, multiple other things might depend on `x`. This means we can't just change `x` to whatever we like, as we might break other code.

Finally, to know what `x` is at any given moment, we need to scan a large area of our application. Many things could change `x`, so we need to read through a lot of code to understand what its current value is. If we're using modules, we need to scan the entire module. If `x` can be accessed outside of the module, we may need to scan our entire application, which may not be realistic.

**Calculation accessing non-local constant**

```js
const x = 5;
function square() {
  return x ** 2;
}
```

What about this? Does this function have a side effect?

It depends on who you ask.

I would personally classify it as having a side effect, because it accesses non-local state.

However someone else may classify it as not having a side effect.

More importantly, is it safe?

Yes, at least at this point in time, it's safe.

My concern with it comes from the fact that it's easier for this function to become unsafe in the future.

Tomorrow we might move the line `const x = 5;` 100 lines away from the function `square`. At that point, how will we know what the value of `x` is? We'll have to go hunting for it.

Perhaps after that, we may change `x` from a `const` to a `let`, because we want to reassign it somewhere. This is a realistic scenario. After all, maybe we want to call `square` with `2`, instead of `5`.

So in other words, it's safe now, but it is easier to lose track of `x` as the application develops. It's easier for it to become unsafe.

On the other hand, with the "pure calculation example", we would consider it an obvious and immediate alarm if we ever moved from having a parameter `x` to accessing it from outside of our local scope. We would never allow that to happen without a very good reason.

**Accessing an object property**

```js
function getPropertyXSquared(obj) {
  return obj.x ** 2;
}
```

This function does not have a side effect.

It does not modify any external state.

It does not access / read any external state, it only reads its parameters.

**Overwriting an object property**

```js
function replaceX(obj) {
  obj.x = 'foo';
}
```

This function has a side effect.

This is where the definition gets a bit iffy.

Technically this function is only modifying state in its local environment, after all it's mutating one of its parameters. However, while that's true, it also changes the state of the outside world. The value of `obj` is changed outside of `replaceX`, even after `replaceX` has finished running.

Why is it a problem?

Same as any other side effect. In a large application, it may be harder to track where / why / how `obj` changed.

**For loop in a function**

```js
function sumRange(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

Does this have a side effect?

It depends on who's definition we're taking. It modifies local state. Some people would consider it a side effect, some would not.

Personally, I would say it doesn't have a side effect. Additionally, it's a "safe" function.

Sure it mutates state, but we can see the entire lifecycle of that state in a couple of lines.

Also it only changes local variables, meaning `sumRange` will never unexpectedly affect the remainder of our application by changing a variable outside of its local scope.

Likewise nothing outside of `sumRange` can affect `sumRange`'s internal execution.

In short, we can never have any unexpected surprises from running this function (as long as the function works correctly, but that's a separate issue).

**Modifying or writing to the DOM**

Making any change to the DOM is a side effect.

Is it dangerous?

Well, we are modifying something global. Other things could depend on what we just modified, so we could potentially break other code.

If we were certain that nothing else could break from what we just modified, then there is no issue.

However in a large application we would have to be very diligent to ensure that.

The best thing to do in this scenario is to always ensure that whatever interacts with the DOM has clear areas of control. Nothing else in the codebase should interact or depend on the same area. That way we can have maximum confidence that we're safe.

**Summary**

A side effect is anything that reads or modifies non-local state.

That's all, nothing magic.

## Dangers of side effects

Code that has side effects is not inherently bad or dangerous.

It just has some problematic qualities that makes it easier to conflict with other code.

Side effects:

- Are difficult to handle.
- Are difficult to track.
- Often come in pairs.
- They break referential transparency.

(Credits to Uncle Bob for most of these by the way. I'm pretty sure I've gathered the majority of these points from listening to his talks and videos.)

**They are difficult to handle**

They tend to create temporal coupling (a time / order of execution dependency).

Code X must be called before code Y. Or requests X and Y must complete before code Z is called.

Managing all that is just more difficult than not having to manage it.

Asynchronous programming (which creates temporal coupling) is widely known to be difficult, particularly multi-threaded asynchronous programming.

**Difficult to track**

If you've had the experience of trying to debug an elusive bug, you know what I'm talking about. It's not fun.

I mean, what are you supposed to do if you're not able to reproduce the bug? Perhaps you can make educated guesses, but it tends to be significantly harder than having an easily reproducible bug.

This just showcases that some side effects are difficult to track. It's difficult to know where values changed, why they changed, who depends on them, etc.

**Often come in pairs**

For example allocate / deallocate memory. Open / close file.

This is just another point which makes them more difficult to handle and track.

**They break referential transparency**

This sometimes makes the code more difficult to understand and reason about.

## Examples of how some side effects may cause problems

**Using global variables**

It's quite common knowledge that global variables should be avoided.

The reasoning is quite simple.

If something is global, it means multiple things can read from it. It also means that multiple things can overwrite it. When something overwrites it, it has the potential to break everything else which depended on it.

Consider: If such a case happened, how would we find out?

If the code crashes, then at least we know there is a bug. But there is the danger that it will never crash. It could just keep running incorrectly. Then we might never find the bug.

But let's say it crashes.

Then we examine the function that it crashed on.

Then, if we're lucky, we realise that it has something to do with our global variable. It now has the value 43 instead of 42.

Okay... so only 10 other pieces of code access that variable in our application, and most of them can change its value... It might be a bit problematic figuring out which code changed it and why, and when. But alas, maybe we'll be able to deal with it.

How could this happen?

It could even be something as simple as: 6 months later we forgot the variable was accessible by 10 other things, and thought it was safe to change. So we changed it for the new feature and broke everything else.

In summary:

- It's just more difficult to track global variables.
- It's difficult to know what happens to them over time as the program is running.
- It's difficult to know what may break if we change the variable.

**Writing to the DOM**

It's easy to cause problems in this scenario.

There are many cases.

Imagine a simple case where a module adds an event listener to a particular element to do something when it's clicked. Let's call it `module A`. Then, later on, some other, unrelated code (`module B`) deletes the element, or completely replaces it, or modifies it, etc.

That has the potential to completely break `module A`.

If such a case happened, it's very possible we wouldn't find out until a customer reported the bug.

How would we know we broke `module A`?

Unit tests won't tell us, because we're testing each piece of code individually.

What about integration tests?

Maybe if we were using using something like React, which packages our HTML with our JavaScript, we may have some good integration tests. If we happened to have an integration test which specifically checks `module A` and `module B` running in the necessary order, then perhaps we would find the bug.

If our HTML wasn't packaged with our JavaScript, we would need to maintain a lot of mock HTML for integration tests. This means we may not have good integration tests at all.

What about end to end tests?

Well, maybe we would find it. Again if we specifically happened to check `module B` followed by `module A` in the same test.

But end to end tests are generally more expensive to write and maintain. How likely is it that we would have an end to end test for this scenario?

Anyway, in the end it's very possible we'll never realise.

Even when we get the customer report, we'll first have to reproduce the bug, which means somehow figuring out that running `module B` conflicts with `module A`.

In summary... Writing to the DOM can produce errors that are difficult to track and debug.

## Example of side effects which can be safe

**Writing to stdout**

If our code doesn't read and depend on what's written on stdout, then there is no danger. We can write to stdout all day long and it will have no effect on our code execution.

**Reassigning a variable in the local scope of a function**

As long as our function is pure and works correctly, it doesn't matter whether we reassign variables or not.

There is no danger of conflict by changing a value that breaks some code somewhere else. We can see all the code that will ever be affected right there in the function.

Compare this with using global variables, where changing the value could break anything in the codebase.

**Using a for loop in a function**

Same thing as reassigning a variable in the local scope of a function. In this case we reassign the counter.

**Modifying the DOM**

As long as nothing else depends on the area we modify, or can affect the area we're interested in, then it's fine.

And so on...

## Handling side effects

So hopefully we see what side effects are and what their dangers are.

How do we keep a lid on them in our application?

Overall, we need to apply good programming principles.

**Apply the principle of least knowledge**

The principle of least knowledge suggests that we want our code to be ignorant.

Our code does not care about what happens outside of it. It is ignorant and lazy.

It wants everything handed to it on a silver platter, including all its dependencies and data.

It should have no reason to put in any effort to access any state outside of its local scope.

On the rare occasion that this is necessary, we have to be extremely careful.

This means:

- Avoid accessing non-local state.
- If necessary, access up to instance or module state.
- Anything higher than that should be passed in as an argument. Our code shouldn't access globals.

**Apply separation of concerns**

Our code should be selfish and lazy.

If a function modifies the DOM, then it should be the only thing it does and cares about. It shouldn't do too many things, it should be lazy.

In other words, side effects should be as clear and as contained (in terms of scope) as possible. This way, we can identify the side effect, and what it does, as easily as possible.

Additionally, if a function modifies a particular area of the DOM, then it should be the only thing that is concerned with that area of the DOM. It should be selfish.

Our code should not share DOM, or database, or anything. It should have clear areas of control and non-conflict over the particular thing it's concerned about.

Anything else would just be harder to manage. For example if two pieces of code modified and read from the same area of the DOM, there would need to be additional effort to properly coordinate them. At the very least, this needs a lot more effort and care than having clear, non-conflicting areas of control.

Additionally, if our function starts a side effect, it should also close it. E.g. if it opens a file, then it is the function's responsibility to also close the file. The function should clean up after itself and perform a complete, self-contained, unit of work. It should fulfil its concerns.

Imagine the function is a person in a house. The person can _maybe_ share toys with the callback that comes in the house for a minute. But it absolutely is not letting anyone leave the house with those toys. It is selfish, and it does not share. It opens and closes its own file.

Okay, perhaps we might argue that the function is lazy and it doesn't want to open a file and close it too. That's one aspect of separation of concerns after all. However:

- All other functions in the codebase are even less concerned with closing some random file our function opened. So the responsibility defaults to our function.
- Bringing in the principle of least astonishment. We can most easily track what happened to the file if the same function that opens the file also closes it.

So that's it. If a function opens a file, or allocates memory, it should also close / deallocate as well.

To do this, we use the technique "passing a block" (credit to Uncle Bob, although I don't remember where specifically he mentions it).

```js
// Pseudocode
function processFile(filename, process) {
  const file = open(filename);
  process(file);
  close(file);
}
```

In this example, the function `processFile` both opens and closes the file.

It also executes whatever code we want on the file by accepting a function to run on the file we opened.

Overall:

- Ensure side effects are as clear and contained (in terms of scope) as possible.
- Always have clear areas of control and non-conflict when modifying globals like the DOM or databases.
- The function that creates a side effect must also close it. Use the technique "passing a block".

**Immutability**

I consider this an application of the principle of least astonishment and separation of concerns.

Consider that our function X calls another function Y with its internal state as arguments. It would be quite unexpected if function Y mutated the internal state of X. This would break the principle of least astonishment (at least for me).

Even if a different programmer expected that, then remember that the function should also be selfish and should not like sharing (separation of concerns). It may call another function, but in no way does it want the other function to do absolutely anything to its internal state other than read it. It does not want to share its state for others to modify.

Anyway, immutability just helps enforce these concepts.

**More suggestions**

- Always be diligent with side effects and never use unsafe side effects.
- Try to minimise your use of side effects in general.

**Summary**

- Apply the programming principles.
- Try to only use local state, or instance / module state if necessary. Anything higher than that should be passed as an argument. Avoid using globals.
- Ensure side effects are as clear and contained (in terms of scope) as possible.
- Always make sure there are clear areas of control with no possibility of conflict when modifying globals like the DOM or databases.
- For side effects which come in pairs, the function that created the side effect must also close it. Use the technique "passing a block" for this.
- Default to using immutability.
- Always be diligent with side effects and never use unsafe side effects.
- Try to minimise your use of side effects in general.

## Side note on side effects in functional programming

This is another optional section.

I'm just mentioning functional programming because I used to think that learning it would magically make all problems with side effects go away.

Unfortunately that's not the case.

Functional programming has side effects just like any other kind of programming. It doesn't make side effects disappear.

Instead, it strongly emphasizes structuring our code to minimise the danger of side effects:

- It strongly encourages pure functions (functions without side effects).
- It strongly encourages immutability.
- For necessary side effects, such as changing the DOM or writing to databases, it structures them so they're obvious and in specific parts of the application. Think of it as "housekeeping" and clearly labelling functions with side effects.

So functional programming is great, because it provides good training on using pure functions, immutability, and being very careful about side effects.

However, it's not necessary. After all, the majority of applications are written in imperative style and many of them work just fine...

Now, I strongly encourage learning functional programming, because it trains us well and gives us even more useful tools and techniques. However, I encourage being diligent with side effects and applying good programming principles far more than learning functional programming.

## Conclusion

That's it.

I hope you found this post useful and I hope you enjoyed the series.

If you have any questions, suggestions, or comments then please leave a comment.

Otherwise, see you next time.

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
12. [First principle - Abstraction](/blog/programming-first-principles-first-principle-abstraction/)
13. [Side effects](/blog/programming-first-principles-side-effects/) (this article)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)
