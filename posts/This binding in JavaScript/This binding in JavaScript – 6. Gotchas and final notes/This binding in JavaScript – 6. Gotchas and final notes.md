---
title: 'This binding in JavaScript – 6. Gotchas and final notes'
slug: this-binding-in-javascript-6-gotchas-and-final-notes
date: 2019-11-10
author: 'Spyros Argalias'
featuredImage: './this-binding-in-javascript-6-gotchas-and-final-notes.png'
category: 'JavaScript'
excerpt: There are a few gotchas, things that can catch us out, with `this` in JavaScript. It's important to know about them and how to handle them.

seoTitle: 'This binding in JavaScript – Gotchas and final notes'
seoDescription: There are a few gotchas, things that can catch us out, with `this` in JavaScript. It's important to know about them and how to handle them.
---

Video version of this article: [https://youtu.be/MNa2yHY6jFk](https://youtu.be/MNa2yHY6jFk)

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/) (this post)

In this series we talk about `this` binding in JavaScript.

This is a very important topic. It's also something that even experienced developers frequently get wrong and / or have to think about.

Basically in JavaScript there are 4 modes for `this` binding. Make that 5 if we include arrow functions.

In order of lowest priority to highest priority, here they are:
1. Default binding
2. Implicit binding
3. Explicit binding
4. New binding
5. Arrow functions
6. Gotchas and final notes

In this post we'll talk about some gotchas and final notes.

---


## Gotchas

If you understand the rules we already spoke about regarding `this` binding, then you'll be fine. However there are some easy to miss cases with `this` binding that are probably worth mentioning.


### Gotcha - Synchronous function references

This is the case we already examined in the default binding section.

Basically if we pass a function reference to a variable, and then call the function plain, without a "." before it, we lose our binding to `this`.

For example:

```js
  'use strict';

  const obj = {
    foo() {
      console.log(this);
    }
  }

  const foo = obj.foo;
  foo(); // logs out undefined
```

Remember that we are calling the function plain, which results in default binding.

The thing that may be confusing is that we're passing the function reference `obj.foo`. However note that we're not actually calling it, we're not using `()`. Instead we call it later with `foo()`.


### Gotcha - Function references in timeouts

Another tricky case is if we pass function references to things like `setTimeout`. When we do this we also lose our binding to `this`.

Here is an example:

```js
const obj = {
  foo() {
    console.log(this);
  }
};

setTimeout(obj.foo, 1000);
```

What does the code above log to the console?

Answer: `undefined`

This is surprising at first.

However it's really the same thing as the previous example.

We're passing `obj.foo` to `setTimeout`, so we might understandably think that implicit binding will occur and `this` will be bound to `obj`.

However that's not the case.

**The important thing to realise is that we're not calling the function right then and there with `obj.foo()`.**

Instead we're just pointing to a function. The location of that function is `obj.foo`.

In the meantime, we can imagine that `setTimeout` has this kind of definition.

```js
// Example setTimeout definition
function setTimeout(fn, ms) {
  // Wait ms miliseconds
  fn();
}
```

Note that inside our mock `setTimeout` implementation, we're calling the function plain.

Obviously the code for `setTimeout` is far more complicated, but the basic principle stays the same.

We are passing a function reference to `setTimeout`, we are not calling the function directly with the correct context.

The same applies to anything in JavaScript where we pass a function reference.


## Further reading

If you want to learn more about `this` binding, the best resource I know of is You Don't Know JS: this & Object Prototypes by Kyle Simpson. You can buy it at [eBooks.com](https://www.ebooks.com/en-gb/1734321/you-don-t-know-js-this-object-prototypes/simpson-kyle/) or read it for free on [GitHub](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)


## My thoughts on binding in JavaScript

This section is just my thoughts / rant on `this` binding in JavaScript.

In short, I don't like it.

The reason is because it goes against common programming principles such as the [principle of least astonishment](/blog/programming-first-principles-first-principle-principle-of-least-astonishment/) and [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)).

Basically when we program, we do not want to be thinking about implementation details for handling `this` binding correctly. We're thinking at a level above those details, how to make our program work, not on how to handle the details of `this`.

Additionally it's a feature that I've never used positively in any context. It has always been a feature which has gotten in my way, never a feature that has helped out.

I mean, sure, it's an implementation detail that's probably required for us to have dynamic classes. However I think things would be much easier for developers if the rest of the `this` binding details were hidden from us.

Anyway, to combat this, I always default to using arrow functions, especially whenever `this` is involved and I don't want to deal with unexpected behaviour.


And... That's all. I hope you enjoyed this series.


Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/) (this post)
