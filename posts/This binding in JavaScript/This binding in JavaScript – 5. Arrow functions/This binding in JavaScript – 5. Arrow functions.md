---
title: 'This binding in JavaScript – 5. Arrow functions'
slug: this-binding-in-javascript-arrow-functions
date: 2019-11-08
author: 'Spyros Argalias'
featuredImage: './this-binding-in-javascript-5-arrow-functions.png'
category: 'JavaScript'
excerpt: Arrow functions are a way to avoid `this` binding. In my opinion this is one of the most important features of JavaScript, it makes things much easier.

seoTitle: 'This binding in JavaScript – Arrow functions'
seoDescription: Arrow functions are a way to avoid `this` binding. In my opinion this is one of the most important features of JavaScript, it makes things much easier.
---

Video version of this article: [https://youtu.be/l4vyKjRL3ms](https://youtu.be/l4vyKjRL3ms)

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/) (this post)
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

In this post we'll talk about arrow functions.

---


## How arrow functions work with this binding

Remember the old trick using `self` to make `this` use lexical scope?

Arrow functions basically do exactly that without needing the separate variable `self`.

It works this way because arrow functions don't bind the value of `this`, so they just use lexical scope.

The value of `this` remains whatever it was at the time when the arrow function was defined.


## Examples

Here are some examples and use cases.


### Example of arrow function and window object

Consider the following code.

```js
'use strict';

const obj = {
  foo: () => console.log(this)
};

obj.foo();
```

What will the code above output?

Answer: `undefined`

Explanation:

If we write `console.log(this)` at the global level, `this` is `window` or `undefined` depending on if we're using strict mode. `undefined` in this case.

So in the surrounding code `this` is `undefined`.

Arrow functions take the value of `this` as it is in the surrounding code.

Therefore `this` is undefined in this case.

In comparison, if we were using a normal function, the call `obj.foo` would assign `this` to `obj` inside the function. In that case the code would output `obj`. However with arrow functions we don't get that binding.


### Example of arrow function defined in function

Consider the following code.

It's a bit tricky.

```js
function Person() {
  const foo = () => console.log(this);
  this.foo = foo;
}

const person = new Person();
person.foo();
```

What does the code above output?

Answer: `person`

Explanation:

The arrow function doesn't bind `this`, instead it picks up the value of `this` from what it was when the arrow function was defined.

Here's what happens in the code above:
1. We call `new Person()`. This creates a new empty object and binds it as the value of `this`.
2. Inside the `Person` constructor, we define an arrow function. The arrow function body has the code `console.log(this)`. The value of `this` is the same as whatever it is in the surrounding code. From step 1, `this` is currently the object that `new` created.


### Example of trying to overwrite this in arrow function by using default binding

Arrow functions ignore default, implicit and explicit binding. So even if we try to use something like default binding, `this` won't be affected.

```js
'use strict';

function Person() {
  const foo = () => console.log(this);
  this.foo = foo;
}

const person = new Person();
const plainFoo = person.foo;

plainFoo(); // still logs person to the console, not window or undefined
```


## Comparison to using a self variable

How arrow functions behave with `this` is exactly the same as if we used a separate variable `self`.

For example:

```js
'use strict';

function Person() {
  const self = this;
  function foo() {
    console.log(self);
  }
  this.foo = foo;
}

const person = new Person();
const plainFoo = person.foo;

plainFoo(); // still logs person to the console, not window or undefined
```

The code above has the same effect as defining an arrow function and using `this` directly. Just like we use `self` to capture `this` in lexical scope, we use arrow functions to capture `this` in lexical scope without the use of another variable.


## Next up

Next up we have some gotchas and final notes

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/) (this post)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/)
