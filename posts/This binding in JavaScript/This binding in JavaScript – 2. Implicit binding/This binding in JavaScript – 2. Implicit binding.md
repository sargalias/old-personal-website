---
title: 'This binding in JavaScript - 2. Implicit binding'
slug: this-binding-in-javascript-2-implicit-binding
date: 2019-10-27
author: 'Spyros Argalias'
featuredImage: './this-binding-in-javascript-2-implicit-binding.png'
---

Video version of this article: [https://youtu.be/CCuZmJhi_FA](https://youtu.be/CCuZmJhi_FA)

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/) (this post)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/)

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


In this post we'll talk about implicit binding.

---

Implicit binding is what we get when we call a function with a "." before it, such as `obj.foo()`.


## How implicit binding works

Implicit binding has a higher precedence than default binding.

You use implicit binding by calling a function with a "." before it. For example `obj.foo()` results in implicit binding.

When using implicit binding, the value of `this` is the object just before the final "." before the function.

For example in `obj.foo()`, the value of `this` in `foo` is `obj`.

In `objA.objB.foo()`, the value of `this` in `foo` is `objB`.

In `objA.objB.objC.foo()`, the value of `this` in `foo` is `objC`.

Basically the value of `this` is the object at the very right of the function call before the actual function.


## Example for implicit binding

Consider the following code.

```js
'use strict'

const obj = {
  foo() {
    console.log(this);
  }
};

obj.foo();
```

What does the code above output?

Answer: `{foo: f}` (in Chrome), which is basically `obj`.

Explanation:

We are calling a function preceded by a "." before it, so we're using implicit binding.

The value of `this` inside our function becomes the object right before the final "." of the function call. In this case that is `obj`. Therefore `this` becomes `obj`.


## Next up

Next up we have explicit binding.

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/) (this post)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/)