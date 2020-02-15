---
title: 'Programming first principles - 10. First principle - Principle of least knowledge'
slug: 'programming-first-principles-first-principle-principle-of-least-knowledge'
date: 2020-01-12
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-first-principle-principle-of-least-knowledge.png'
category: 'Programming principles'
excerpt: 'The principle of least knowledge is an essential software development principle. The less software knows, the easier it is to work with.'

seoTitle: 'Programming first principles - First principle - Principle of least knowledge'
seoDescription: 'The principle of least knowledge is an essential software development principle. The less software knows, the easier it is to work with.'
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
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/) (this article)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)

---

Video version of this article: [https://youtu.be/IIECT7Q5-Gk](https://youtu.be/IIECT7Q5-Gk)

The principle of least knowledge means that code should know as little as possible about other code.

Before we start, a quick note. All the remaining first principles we'll be talking about from now on (principle of least knowledge, separation of concerns, abstraction, etc.) overlap quite a bit. Even the previous principle (principle of least astonishment) can be thought of as an application of this principle and vice-versa. I'll try to keep them as distinct as possible, but note that for the most part they're all applications of each other.

Back to the principle of least knowledge.

## What does it mean?

What does it mean that code should know as little as possible about other code?

Just saying that phrase may not mean much alone, so let's start with a few examples to get a better idea.

**Quick examples**

- A class or module should have as few public or exported functions as possible. The absolute minimum required to get the job done.
- A module / class should not expose any private functions.
- It should not expose any properties unless absolutely necessary.
- There should be a clear distinction between what's considered the "public API" of a module or class.
- Etc.

For example, if we were using a language like Java... Java is class based and has a formal notion of public and private methods. Private methods are not exposed to anything outside of the class they reside in. They are not accessible from elsewhere.

This applies the principle of least knowledge. Code using the class only knows about a few public functions and nothing else. Everything else is hidden and inaccessible.

Even though a language like JavaScript does not have a formal concept of private methods (yet), the principle and its importance are exactly the same. The same negative consequences will be paid by not adhering to the principle. The same concept should be introduced to avoid those consequences.

**HashMap example**

Another application of the principle is coding to [interfaces](<https://en.wikipedia.org/wiki/Protocol_(object-oriented_programming)>) instead of implementations.

When we use an interface we say something along the lines of "I don't care how you work internally or what other methods you have available, just that you have method X available on you".

The [interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle) takes it even further by effectively saying "your interfaces should be as small as possible". I.e. code should know as little as possible.

But let's talk about some code.

For example imagine some of our Java code needs a `Map` (equivalent to an `object` or `Map` in JavaScript). In Java, our code would accept an object which implements the `Map` interface, it wouldn't care about how the map is implemented internally. It could be a `HashMap`, `LinkedHashMap`, `CustomImplementation1`, `CustomImplementation2`, etc. That is an implementation detail.

All our code cares about is that it is _map-like_. That it has particular methods our code wants to use. In other words the minimal piece of information required. The internal implementation is something it does not need to know about.

**Array.from example**

A similar example of the Java HashMap in JavaScript is something like `Array.from`. If we look at the [MDN documentation for Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) (at the time of writing, January 2020) we see that under syntax it says:

> `Array.from(arrayLike[, mapFn[, thisArg]])`

Notice the "arrayLike" part. The function works with multiple things such as `Set`, `Array`, `HTMLCollection`, etc. It doesn't care what array-like thing we use. All it cares about is that it has an iterator / can be used in a for loop.

This is an application of the principle of least knowledge.

Imagine if instead we could only use `Array.from` with a `Set` and nothing else. We would lose the majority of the power of that function.

**Delivery example**

As another contrived example, let's consider an imaginary delivery company.

This will be more talk than code again, to try and get conceptual understanding first. The next example will have more code.

So we have our employee who has received the order, gets their team to prepare the product and now needs to send it out for delivery.

Does this person care about who delivers the product?

Not really. All they care about is that it goes to someone suitable to deliver it. But they don't care about whether it ends up in an airplane or car or whatever.

Let's translate the concept into some rough code.

Code such as this would be fine:

```js
function send(package, transporter) {
  transporter.send(package);
}
```

This code is probably not fine:

```js
function send(package, transporter) {
  switch (transporter.type) {
    case 'Car':
      if (!transporter.hasFuel()) {
        transporter.fuelUp();
      }
      transporter.startEngine();
      transporter.drive(package.destination);
      break;
    case 'Bicycle':
      if (transporter.isHungry()) {
        transporter.eatFood();
      }
      transporter.rideTo(package.destination);
      break;
  }
}
```

The code above knows far too much about the different transporters. We have a `switch` statement to ask the transporter what type it is and then give it specific instructions.

If we relate this back to our real-life example for a minute, that would be crazy. Our warehouse employee would not care at all how the thing gets transported. After all they are not a professional cyclist or driver. They trust the driver do their job professionally and they don't micromanage how they do it.

The warehouse employee does not need to know about or care what the driver will do.

We want our code to be the same.

**Shape example**

Let's examine a more code-like example. Still very simple and contrived...

The classic shape case.

Consider this code:

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.someImportantCircleProperty = 'something';
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  draw(canvas) {
    // Note: This implementation is fake and not important, don't spend time deciphering it
    canvas.draw({ shape: 'Circle', center: [0, 0], radius: this.radius });
  }

  _somePrivateCircleHelper() {
    return 'foo';
  }
}

class Square {
  constructor(width) {
    this.width = width;
    this.someImportantSquareProperty = 'something';
  }

  getArea() {
    return sideLength ** 2;
  }

  draw(canvas) {
    // Note: This implementation is fake and not important, don't spend time deciphering it
    canvas.draw({
      points: [
        [0, 0],
        [this.width, 0],
        [this.width, this.width],
        [0, this.width],
      ],
    });
  }

  _somePrivateSquareHelper() {
    return 'foo';
  }
}

// do stuff with shape
function main(shape, canvas) {
  console.log(shape.getArea());
  shape.draw(canvas);
}
```

The code above tries to follow the principle of least knowledge.

The main function knows the minimum required to work. The design is made in a way to try and minimize the knowledge required for our main function to work.

If the language supported interfaces, each class would implement a `Shape` interface with the methods required on each shape for our main function to work. Notice that no _private_ properties or helper methods will ever be used outside of those classes.

How about this code:

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.type = 'Circle';
  }
}

class Square {
  constructor(width) {
    this.width = width;
  }
}

// do stuff with shape
function main(shape, canvas) {
  if (shape.type === 'Circle') {
    const area = Math.PI * shape.radius ** 2;
    console.log(area);
    canvas.draw({ shape: 'Circle', center: [0, 0], radius: shape.radius });
  } else if (shape instanceof Square) {
    const { width } = shape;
    const area = width ** 2;
    console.log(area);
    canvas.draw({
      points: [
        [0, 0],
        [width, 0],
        [width, width],
        [0, width],
      ],
    });
  }
}
```

Above we have a main function that knows way too much:

- It has to specifically inquire what shape it's currently using.
- It needs to know about differently named properties about each shape (which should be private).
- It needs to know how to calculate the area of every shape.
- It needs to know how to draw every shape.

Also, it may not just be the main function. We may have multiple functions that need to work with shapes for different reasons. Maybe one needs the area, another needs the perimeter, etc. All of them would need code similar to what our main function has.

So we examined what the principle of least knowledge means. We also saw some examples.

But so what? Why does it matter if we break this principle? Why are the code examples above considered bad?

## Why is the principle of least knowledge important?

Let's consider some practical consequences.

**In the shape example, what if we needed to add another shape?**

We would have to go through every function like the `main` function and add logic for the new shape there.

Imagine what a `main` function with 10 shapes would look like.

This breaks the [principle of least astonishment / KISS](https://www.sargalias.com/blog/programming-first-principles-first-principle-principle-of-least-astonishment/).

Also [code changes are error prone](https://www.sargalias.com/blog/why-code-changes-are-error-prone/) so we want to contain them in as small a scope as possible, not have them meddled up with 10 other things in a function.

But with the clean example, we just add a new class for the shape and we're finished. Our `main` function only interfaces with the methods provided, so it doesn't need modification.

**What if we wanted to change how Circle works?**

E.g. we wanted to rename the `radius` to `diameter` for some reason.

Or in a more real example, we have a class where we're storing a list of items. E.g. `this.points = [point1, point2, point3];`. What if we wanted to change to a `Set` for performance reasons for example?

All the code that knows about these properties would have to be modified.

If we change the `radius` to `diameter` we have to change all the functions like `main` which use this property, and also modify the logic in every place to now divide it by 2 (because diameter is 2x the radius).

Similarly with changing from `Array` to `Set`. We would have to make changes in a lot of places to update the methods they are using.

Of course code that doesn't know about these properties won't be affected at all.

**So we need to change a lot of code, why is that a problem?**

Short answer: [Code changes are error prone](https://www.sargalias.com/blog/why-code-changes-are-error-prone/).

1. We won't remember what code we need to change. We'll have to scour the codebase to search for what will be affected.
2. It's very possible we'll miss something and break the system.
3. It's a lot of repetitive work. We are bad with repetition. It's easy for us to make mistakes when doing repetitive work.
4. It will take much longer than if we didn't need to change anything except the thing we're trying to modify.

Not to mention that if we have cascading changes in one area, it's likely we'll have them all over the codebase. The classic case of needing to modify every file in the system for a simple change.

So we only want to make the minimum changes possible.

In the good shape example, we don't need to change any code to create a new shape.

If we need to actually modify code, e.g. for performance, the necessary changes are as contained as possible.

## Relation to other principles

The principle of least knowledge is applied in different forms and also overlaps with other principles.

Using [interfaces](<https://en.wikipedia.org/wiki/Interface_(computing)>) is an application of the principle of least knowledge in classes. Applying an interface to many implementations is called [polymorphism](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>).

The [interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle) is a stricter application, encouraging even less knowledge.

Not accessing (or not being able to access) "private" properties of things is also known as [information hiding](https://en.wikipedia.org/wiki/Information_hiding) and is also an application of [encapsulation](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>).

The [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) applies the principle of least knowledge in the scope of methods and functions.

The [open-closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle) formally emphasises the importance of minimizing changes to code, which the principle of least knowledge facilitates.

The examples given above can also be thought of as applying separation of concerns or the principle of abstraction.

Another application is not accessing global variables and such, a strong encouragement / requirement in functional programming.

**Usage in non-OOP code**

Not everything uses interfaces, such as functions or modules, but everything should be treated as though it formally has an interface. In other words the principle of least knowledge in code is universal, regardless of whether the language provides interfaces for classes, interfaces / types for functions outside of a class (e.g. something like TypeScript), or anything else.

What all these principles have in common is that they can be thought of as applications of principle of least knowledge in different contexts.

What works for me personally is to think of the principle of least knowledge as one of the root principles. It can be used to derive others such as interfaces, interface segregation principle, law of Demeter, information hiding, etc. That way I know the **why**, the principle behind those principles, and can make intelligent decisions on how to apply it even in cases where the other principles may not specify. That's not necessarily what you have to do, it's just what works for me.

## Theory

Now for the theoretical treatment promised in this series. This will be much shorter because it's quite general.

To recap, our requirements for software are:

- It should work as intended.
- It should be easy to change.

Our premises are:

- We can only be aware of minimal information
- We must understand what we're doing
- We must minimize propagating changes
- Complexity increases exponentially with scale

**Motivation for the principle of least astonishment**

Case: Code X knows about Y and Z.

Action: We need to modify Y.

Problems:

1. We need to be aware and remember that X will be affected.
2. We potentially need to know **how** X will be affected, so we don't make changes that we would never be able to use with X, at least without modifying X in a way that's too large and out of scope for what we're trying to do.
3. We need to change X to accommodate the changes in Y.
4. X may have its own cascading changes in other code which would repeat the process.

Conclusion:

This conflicts with all our premises.

We need to be aware of more things and understand more of the code so we can make our changes. There will be propagating changes, potentially very complex ones and a large number at scale.

On the other hand, if any changes we made to Y never affected X or anything else, then we would fulfil our premises.

**Guidelines**

- Keep the principle in mind. By keeping it in mind you'll probably always make progress towards it. It will definitely be better than if you're not aware of the principle in the first place.
- It is important to create systems using code with minimal communication and knowledge between it and other code.
- Ideally code should either know nothing, or only know things that exist in its local scope and things it has explicitly received (arguments).
- Code should only know the minimum possible about its arguments, as the interface segregation principle and law of Demeter specify.
- All communication and knowledge should be under an agreed contract of non-change and non-conflict (a.k.a. an interface). An interface is just a way of saying that certain things will always be available on the object. They're safe for use and are not intended to change.

**Benefits**

- Minimal knowledge required by the programmer for what code knows and depends on.
- Minimal knowledge required between code.
- Minimal (possibly none) propagating changes when changing code.

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
10. [First principle - Principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/) (this article)
11. [First principle - Separation of concerns](/blog/programming-first-principles-first-principle-separation-of-concerns/)

Also suggested:

- [When not to apply programming principles](/blog/when-not-to-apply-programming-principles/)
- [Why code changes are error prone](/blog/why-code-changes-are-error-prone/)
