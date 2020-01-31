---
title: 'Programming first principles - 3. Requirements of software'
slug: programming-first-principles-requirements-of-software
date: 2019-11-29
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-requirements-of-software.png'
---

Video version of this article: [https://youtu.be/tCdNyce-shQ](https://youtu.be/tCdNyce-shQ)

Now we get to the good stuff.

We need to start with what it is that we even want in software.

Let's start with the definition.

## Definition of software

"Software" is a combination of two words:

- Soft
- Ware

Soft means malleable, easy to change etc. In our case, it means that the code we produce must be easy to change.

Ware means a product, goods, etc. In our case the product we produce is a system of code.

## Requirements

Both of those words perfectly describe our requirements / what we're aiming to achieve when making software:

- A system of code.
- Which must work as intended.
- Which is easy to modify.

## Explanation for our requirements

The "ware" part should be pretty clear. Obviously we produce systems of code and the product has to work as intended.

The "soft" part may not be immediately obvious. So I'll try to explain it a bit more.

Code needs to change all the time, for many reasons.

1. Requirements change all the time.
2. While developing the code in the first place, we do not know its final form. We constantly re-design and re-write it.
3. Software needs constant maintenance and improvement, both in terms of bugs and new features.

Because it needs to change so often, we must make sure it is easy for us to change.

Here are the reasons code needs to change in more detail:

### Requirements change all the time

Point 1 is just how it goes. Stakeholders come up with new features or changes they want. Scope creep is a common occurrence. See [feature creep](https://en.wikipedia.org/wiki/Feature_creep) and [scope creep](https://en.wikipedia.org/wiki/Scope_creep).

### We constantly revise the code during development

Point 2 is also just how it goes.

If we could design the code upfront perfectly and then just write it, we would be done significantly faster. We would also use [waterfall](https://en.wikipedia.org/wiki/Waterfall_model) and be happy.

The reason we have to use [agile](https://en.wikipedia.org/wiki/Agile_software_development) at all is because we don't know the final form of the code. We are constantly revising and modifying it.

[Gall's law](<https://en.wikipedia.org/wiki/John_Gall_(author)>) also supports this. It essentially states that we can't create a system of code in one go, we have to continually revise and build it up.

### Software needs constant maintenance

Even after initial development is finished and the stakeholders have accepted the product, software still needs constant maintenance and improvement. See [software evolution](https://en.wikipedia.org/wiki/Software_evolution).

## Conclusion

Our requirements are:

- A system of code.
- Which must work as intended.
- Which is easy to modify.
