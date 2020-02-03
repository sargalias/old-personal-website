---
title: 'This binding in JavaScript - 3. Explicit binding'
slug: this-binding-in-javascript-3-explicit-binding
date: 2019-11-01
author: 'Spyros Argalias'
featuredImage: './this-binding-in-javascript-3-explicit-binding.png'
category: 'JavaScript'
excerpt: Next we have explicit binding. This has plenty of uses in JavaScript, including hard binding. It's important to know how it works.

seoTitle: 'This binding in JavaScript - Explicit binding'
seoDescription: Next we have explicit binding. This has plenty of uses in JavaScript, including hard binding. It's important to know how it works.
---

Video version of this article: [https://youtu.be/0tPQRbWpbBY](https://youtu.be/0tPQRbWpbBY)

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/) (this post)
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


In this post we'll talk about explicit binding.

---

## How explicit binding works

Explicit binding has even higher precedence than implicit binding.

We use it by using one of the three functions `call`, `apply` or `bind`, present in function objects.

`call`, `apply` and `bind` explicitly provide the value of `this`.

For example, when calling `foo.call(obj)`, the value of `this` in `foo` becomes `obj`. The first argument passed in `.call` is the value of `this` you want the function to have.

`call`, `apply` and `bind` do the same thing in essence. They all bind the value of `this`, which they accept as their first argument.

But they have some slight differences.


### .call

`.call` accepts additional arguments that are comma separated. They will be passed to the function call.

For example: `foo.call(obj, argument1, argument2)` does two things.
  1. It makes `this` inside the function be `obj`.
  2. It passes arguments to the function as though it was called with `foo(argument1, argument2)`.


### .apply

`.apply` is very similar, the only difference being that it accepts arguments in an array.

For example: `foo.apply(obj, [argument1, argument2])` is how you would call the function using `apply`. It does two things.
  1. It makes `this` inside the function be `obj`.
  2. It passes arguments to the function as though it was called with `foo(argument1, argument2)`.


### .bind

`.bind` is slightly different. It returns your target function with the correct `this`. It doesn't call it immediately.

`.bind` is also referred to as "hard binding".

For example:
```js
const obj = {};
function foo() {
  console.log(this);
}

const functionWithBoundThis = foo.bind(obj); // nothing is logged to the console
functionWithBoundThis(); // now we log obj to the console
```

It can also accept additional arguments. However that's a side point so I'll have to refer you to the MDN documentation for [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind).


### Precedence

Out of these, `.bind` has the highest precedence.

For example if you use both `.bind` first and `.call` second, `.bind` is going to win.

For example:
```js
const objForBind = {name: 'objForBind'};
const objForCall = {name: 'objForCall'};

function foo() {
  console.log(this);
}

const boundFunction = foo.bind(objForBind);
boundFunction.call(objForCall); // logs objForBind to the console, not objForCall
```

As mentioned, these methods also have higher precedence than implicit binding.

```js
const obj = {
  foo() {
    console.log(this);
  }
};

obj.foo.call(objForCall); // logs objForCall to the console, not obj
```

That's the gist for `.call`, `.apply` and `.bind`.


## Next up

Next up we have new binding.

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/) (this post)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/)
