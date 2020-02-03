---
title: 'This binding in JavaScript - 1. Default binding'
slug: this-binding-in-javascript-1-default-binding
date: 2019-10-26
author: 'Spyros Argalias'
featuredImage: './this-binding-in-javascript-1-default-binding.png'
category: 'JavaScript'
excerpt: We start off with default binding, which is what happens if no other 'this' binding applies.

seoTitle: 'This binding in JavaScript - Default binding'
seoDescription: We start off with default binding, which is what happens if no other 'this' binding applies.
---

Video version of this article: [https://youtu.be/bEcODp35k8I](https://youtu.be/bEcODp35k8I)

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/) (this post)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
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

In this post we'll talk about default binding.


---


## How default binding works

Default binding is what happens if you don't use any other kind of binding.

If we call any function **plain / without a "." before it**, we will get default binding.

An example of a plain function call is `foo()`. Notice that the function call does not have a "." before it.

An example of a function call that's not plain is `obj.foo()`.

In the plain function call `foo()`, default binding applies.

When default binding applies, `this` is the `window` object in normal mode and `undefined` in strict mode.


## Examples for default binding

Here are some examples for default binding to illustrate the point a bit more.


### Plain function call

Consider the following code.

```js
'use strict'
function foo() {
  console.log(this);
}

foo();
```

What will the code above output?

Answer: `undefined`

Explanation:

We call our function with this code: `foo()`.

The code `foo()` is a plain function call. It does not have a "`.`" before it. Therefore default binding applies. So the answer is `window` in normal mode or `undefined` in strict mode.

As we are in strict mode, the answer is `undefined`.



### Synchronous function reference call

Consider the following code.

```js
'use strict';

const obj = {
  foo() {
    console.log(this);
  }
}

const foo = obj.foo;
foo();
```

What will the code above output?

Answer: `undefined`

Explanation:

We call our function with this code: `foo()`.

That code decides everything.

As it is a plain function call, we're using default binding, so `this` is `undefined`.

In combination with the line above it, it may be more difficult to see.

```js
const foo = obj.foo;
foo();
```

We might understandably think that it should result in `this` being `obj`.

However that's not what happens. The only thing that matters is the function call, and the function call is plain and without a "." before it.

Therefore we are using default binding and `this` becomes undefined.


## Next up

Next up we have implicit binding.

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/) (this post)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/)
