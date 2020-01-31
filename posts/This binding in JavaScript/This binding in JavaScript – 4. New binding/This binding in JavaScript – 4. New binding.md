---
title: 'This binding in JavaScript – 4. New binding'
slug: this-binding-in-javascript-4-new-binding
date: 2019-11-03
author: 'Spyros Argalias'
featuredImage: './this-binding-in-javascript-4-new-binding.png'
---

Video version of this article: [https://youtu.be/usVUJ_M5nnU](https://youtu.be/usVUJ_M5nnU)

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/) (this post)
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


In this post we'll talk about new binding.

---

## How new binding works


`new` is a special keyword in JavaScript.

It does a lot of things, but we'll only talk in detail about how it relates to binding.

To start off, note that `new` has even higher precedence than even hard binding. Another way of thinking about it is that it ignores the normal binding rules and does its own thing.

You can use `new` when calling functions like so: `new foo()`.

`new` does 4 things:
1. It creates a new empty object.
2. It makes `this` be the new object.
3. It makes `foo.prototype` be the prototype of the object.
4. It implicitly returns `this` if nothing else is returned from the function.

For now ignore points 3 and 4 until a different blog post. Let's focus on points 1 and 2, the binding.

To recap, when you call a function with `new` before it, you create a brand new empty object which is assigned to `this` inside the function.

For example:
```js
function foo() {
  console.log(this);
}

new foo(); // outputs an empty object
```


As mentioned, `new` has higher precedence than even hard binding.

```js
const objForBind = {name: 'objForBind'};

function foo() {
  console.log(this);
}

const boundFoo = foo.bind(objForBind); // hard bind foo to objForBind

new boundFoo(); // logs a new empty object to the console, not objForBind
```

Explanation:
`new` has higher precedence than explicit and implicit binding. It ignores them, creates a new object, and binds it to `this`.


## Next up

Next up we have arrow functions.

Posts in this series:
1. [Default binding](/blog/this-binding-in-javascript-1-default-binding/)
2. [Implicit binding](/blog/this-binding-in-javascript-2-implicit-binding/)
3. [Explicit binding](/blog/this-binding-in-javascript-3-explicit-binding/)
4. [New binding](/blog/this-binding-in-javascript-4-new-binding/) (this post)
5. [Arrow functions](/blog/this-binding-in-javascript-5-arrow-functions/)
6. [Gotchas and final notes](/blog/this-binding-in-javascript-6-gotchas-and-final-notes/)
