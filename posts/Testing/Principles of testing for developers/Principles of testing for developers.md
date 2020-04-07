---
title: 'Principles of testing for developers'
slug: principles-of-testing-for-developers
date: 2020-04-07
author: 'Spyros Argalias'
featuredImage: './principles-of-testing-for-developers.png'
category: 'Testing'
excerpt: Learn the principles for writing great tests that ensure your code works properly. The principles of testing for developers are actually quite simple...

seoTitle: 'Principles of testing for developers'
seoDescription: Learn the principles for writing great tests that ensure your code works properly. The principles of testing for developers are actually quite simple...
---

There are different aspects we can test about software, such as performance, visual regression, internationalisation, and much more. This article focuses on the kind of testing developers do during development. This means end-to-end tests, integration tests, and unit tests.

Testing during development is not very difficult. At least the concepts behind testing are not. It's just based on a few common-sense principles, and we're literally talking about only 4 or 5 principles or so.

But it seems to be a topic that many developers struggle with.

I think all that's needed is a bit of deliberate practice and trying to understand and think about the principles. Additionally, if you work with someone who you consider good at testing, then arguably there is no better way to get started other than to work with them, ask them questions, and so on.

Now if the principles seem too abstract at the moment, that's fine. There are plenty of more beginner resources and many books written on testing for developers, with plenty of examples.

This article assumes you're already able to write basic unit tests for the majority of your work. Then, this article attempts to take you from someone who can write unit tests, to someone who understands the principles of testing very well. In turn, applying the principles will allow you to create a very good overall testing strategy, as well as write very good tests.

So, let's get started.

As a preview, the main principles of testing are:
- In software, we test the end result.
- Higher level tests (such as end to end tests) provide more confidence than lower level tests.
- Lower level tests are still essential, because higher level tests have limitations.
- Avoid testing implementation details and mocking (specifically monkey-patching).
- Be pragmatic. Sometimes testing implementation details is fine, if you know what you're doing.


## Goals of testing

When we test during development, we have a few goals. In fact the goals are exactly the same as the [requirements of software](/blog/programming-first-principles-requirements-of-software/):
- Code that works as intended / correctly.
- Code that is easy to change.

If we never made mistakes, we would never need tests. But we make mistakes all the time, so we need tests. Good tests reduce the chance that we'll miss mistakes and push them to production.

Additionally:
- Tests should ideally be reproducible with a single command.
- Test should be fast.

This allows us to ensure our code works as intended every single time we make a change. The faster feedback loop improves efficiency.


## The fundamental principle of testing

In all testing, there is one fundamental principle. This applies to everything, not just programming.

**We should always cross-check our work with a different method. We should never just repeat our work twice, except as a last resort.**

For example, in accounting, accountants don't just repeat their work twice. They have a process for assets, and a separate process for liabilities. At the end, the results for both must match. They are different methods that are used as cross-checking, which makes them very reliable.

Similarly in maths, we don't just do our work twice. We have a separate method of testing our work than just repeating the work and seeing if we get the same result again. The results from the two different methods must match, otherwise we know we have a mistake.

For example, we are asked to form an equation. After we do that, we test by substituting values into that equation and seeing if the answer matches. The testing method is different to the method we used to do the work.

**Why we test using a different method**

If we just repeat our work (have a test that exactly mirrors our implementation), then it's very likely we'll just make the same mistake twice.

If it's an accidental mistake, it's very likely we'll repeat it. E.g. we might have forgotten to reassign some variable somewhere. If we repeat the work it's likely we'll forget again. This means that we'll have the same mistake in our test and implementation, so the test won't notify us that we've done it wrong.

If it's a real mistake, something we do not understand, then we'll never get it correct even if we repeat the work infinite times. We don't know how to do the work properly, and that's not going to change if we repeat the work. Again, if our test is just a repeat of our work, it will match our implementation, so we won't know we've done it wrong.

On the other hand, if we use a separate method for testing, the results won't match. We'll immediately know if we've done something incorrectly, because what we coded will not comply with our test.

### Example: Changing class of some HTML

Let's pretend that we're supposed to **add** a class `foo` to some HTML. But instead we make a **mistake** and we attempt to **remove** the class `foo` instead.

Here's the JavaScript code:

```js
function foo() {
  const myElement = document.getElementById('foo');
  myElement.classList.remove('foo');
}
```

Here's our test. Like most developers, we look at what we coded, and we make sure we assert on the code we wrote. We spy on `myElement.classList.remove` and assert that it was called with what we have in our implementation.

```js
const myElement = document.getElementById('foo');
jest.spyOn(myElement.classList, 'remove'); // spy on the myElement.classList.remove function
foo(); // run our code
expect(myElement.classList.remove).toHaveBeenCalledWith('foo'); // assert myElement.classList.remore was called properly
```

Because in the test we just copy-pasted our implementation, they're both wrong. This is a big problem. We might as well not have the test at all. All this test is good for is "cementing" our implementation, making sure it doesn't change by accident. It doesn't actually provide any additional confidence other than that.

If our code is wrong, our test will be wrong too. If our code is correct, our test will be correct. This makes the test practically useless, again except as a "cementing" mechanism.

On the other hand, if we always test the end result, then we'll be fine.

In this example, our end result is that our element should have the class `foo`, so we just test for that.

```js
foo(); // run our code
const myElement = document.getElementById('foo'); // get the element
expect(myElement.classList.contains('foo')).toBe(true); // assert on the end result
```

This test works regardless of our implementation.

It's much more reliable because our testing method is different to our implementation method. For us to miss the mistake, both our test and implementation have to be _independently wrong_, meaning that just because we made a mistake in our implementation it doesn't mean we'll make a mistake in our test. Further, they also have to **match**, and the chances of making matching mistakes with two different methods are extremely low.

In other words, if we test the end result, we are almost guaranteed to catch mistakes in our implementation.

Conclusion: **In software, we test by testing the end result, not by copying our implementation**


## Higher level tests provide more confidence

Higher level tests (such as end to end tests) provide more confidence that our code works as intended than lower level tests (such as unit tests).

This is probably immediately obvious.

Consider, you are working on a new feature. You have 1000 passing unit tests for that new feature.

If you're a front end developer, are you ever going to publish the new feature without seeing it work in the browser first?

If you're a back end developer, are you ever going to publish the new feature without manually making a request to the server and checking that you get the correct response and such?

Reflecting on your personal experience, you can probably answer: Probably not, or perhaps, absolutely never.

Unit tests are nice, but I have never met anyone yet that publishes something without checking it end to end first.

In fact, some companies don't have unit tests at all, or any tests for that matter, but I can almost guarantee that they at least somewhat check their work end to end.

Overall, this is probably sufficient proof. Higher level tests, provide us with more confidence than lower level tests.

**Why higher level tests provide more confidence**

One explanation comes from [Systems theory](https://en.wikipedia.org/wiki/Systems_theory), particularly [complex systems](https://en.wikipedia.org/wiki/Complex_system) like software.

> "A system can exhibit properties that produce behaviors which are distinct from the properties and behaviors of its parts" - [Complex Systems on Wikipedia](https://en.wikipedia.org/wiki/Complex_system).

The connections and interactions of the parts are significant.

Just because part of a system works correctly, it doesn't mean that it integrates properly and that the entire system works correctly. This principle permeates throughout the entire system, from the tiniest unit of code to the entire system as a whole.

Higher level tests provide more confidence, because they ensure the entire system works together properly under the particular test case. On the other hand, a unit test ensures that a unit works correctly, but it may not work at all with the rest of the system.

That's why higher level tests provide more confidence than lower level tests.


## Lower level tests

Lower level tests are still essential.

That's because higher level tests have a few limitations:
- They are expensive to write (they take a long time to write).
- They are expensive to run (they take a long time to run).
- Debugging end to end tests that are failing is difficult, because they cover a large area of code.
- They are not exhaustive, because we cannot create too many, so they miss the majority of edge cases of lower level code.

Lower level tests such as unit tests cover all of those limitations.

We can write a ton of them, we can test every single edge case of every single function exhaustively, and debugging them is trivial compared to debugging end to end tests.

That's why they are essential.

**Example: Add to cart**

For example, consider some "add to cart" functionality.

We may have some end to end tests for some critical paths such as:
- Add one product to cart.
- Remove one product from cart.

But what about:
- Add 2 products to cart.
- Add 1000 products to cart.
- Add 0 products to cart.
- Add -1 products to cart.
- Perhaps we need to test some more quantities due to our implementation (white box testing). E.g. maybe our code handles 5 products weirdly, and we need to test that specific case.
- Add a product to cart, then remove it, then add it to cart again.
- Add a product to cart without a CSRF token.
- Add a product to cart when you're not logged in.
- Make 1000 requests to add 1 product to cart in quick succession.
- Add 10 products to cart, when stock is only 5 products.
- Add a product that doesn't exist to cart.
- And so on...

Sure, if we consider these critical enough, we could have end to end tests for them as well.

But otherwise, integration tests and unit tests would pick up the slack.

We could have integration tests for all the above scenarios.

We would also have exhaustive unit tests for all the relevant functions that have to do with the "add to cart" functionality. These unit tests would test the contract of the functions fully, including edge cases.


**Example: Stack data structure**

For another example of unit tests, consider we were creating a stack data structure.

We would probably want tests that cover a lot of the possible scenarios:
- Pop from empty stack. Should this throw an error or silently fail?
- Pop from stack with 1 item.
- Pop from stack with 2 items.
- Push single item to empty stack.
- Push twice to empty stack.
- Etc.

We would definitely want to test our stack data structure properly.

Integration and end to end tests would not be sufficient, because they cannot be exhaustive enough. There may very well be a case where our stack is somehow used in a way that is not covered by any of our higher level tests. In that case, if our stack data structure doesn't work as intended, we would have a bug. To ensure our code works correctly, we need unit tests that cover these scenarios. That's why we generally benefit from exhaustive unit tests.


## Avoid testing implementation details and mocking (specifically monkey-patching)

There are a few reasons for this.

The first one is what we already examined about testing the end result. If we're testing implementation details or monkey-patching stuff, then we're not testing the end result.

The second reason is one of our core requirements of software. We want code that is easy to change.

If we're only testing the contract of something, without testing internal implementation details, then we can change the implementation as much as we want without our tests being affected.

This is the [principle of least knowledge](/blog/programming-first-principles-first-principle-principle-of-least-knowledge/). The principle says that if our code doesn't know about something, then it's not affected if it changes as long as the contract remains the same.

If we consider the previous example about adding a class `foo` to some HTML. Look at the "good" test.

We can change the implementation of our code without having to change the test (within reason, for example if we made the implementation asynchronous we would have to update the test for that).

For example, instead of directly adding a class, we could instead delete the entire element, create a new one with the correct class, and add it back to the DOM. It's a valid implementation, albeit not very efficient, so the test should still pass, and it would.

On the other hand, with our "bad" test, we'll need to change that test for absolutely any change we make to the implementation.

That is fundamentally bad. [Code changes are error prone](/blog/why-code-changes-are-error-prone/). We always want to minimise the changes we have to make to code. The [open-closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle) also says exactly that.

Also, we might know from personal experience, that tests which we constantly have to maintain are a massive burden.

So that's how we create tests which need minimal maintenance. We avoid monkey-patching and testing implementation details.

The third reason is that if we monkey-patch something out, then we're leaving gaps in our testing. We're not testing whether the thing we mocked out works correctly or not. This means we need even more tests to ensure we've covered everything.

If we monkey-patch many things, we may forget to test all of them later. In that case, we will have gaps in our testing.

Now, obviously if we're mocking `myElement.classList.remove`, we can be fairly confident it works fine as it's a browser feature that has been tremendously tested already.

However if we were mocking some of our own code, we wouldn't have that confidence. We would need to have additional tests for it.

So the next question is:

### What is an implementation detail?

**Monkey-patching**

An implementation detail is generally when we don't just test the end result of something, or when we monkey-patch something out. Monkey-patching is when we "intrusively" spy or mock on something in our code.

For example, in our HTML class example, we're spying on the `myElement.classList.remove` function. We're getting some code, the `Element.classList.remove` function, and mutating it. We're completely replacing the function with our spy in a very intrusive way.

This is very different from something like passing in a spy as an argument. That is not intrusive, and in fact it follows the exact contract of the function. When we do this we're not intrusively mutating any code.

I hope the distinction is clear. In one case, we're hijacking a function and changing it in runtime so that we can test it. In the other case, we're creating a brand new spy and not changing absolutely anything about our functions.

So generally, if we intrusively mock or monkey-patch something, we may be testing an implementation detail.

**Note on monkey-patching in JavaScript**

If we're not using [dependency inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle), and particularly [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection), we may be forced to monkey-patch our imports to have reasonable unit tests.

This is generally what we do in JavaScript.

That's acceptable, because in this particular case it's more like we're using an alternative to dependency injection rather than testing implementation details.

It all depends on what we're doing. The HTML example from earlier is probably a case where we shouldn't monkey-patch, but mocking a module we import is probably fine if that's our only reasonable option.

**Private functions**

Some people ask me, what should we consider a "unit" in terms of testing? Also what should we consider private or public? (This is for JavaScript which doesn't have private and public functions).

I propose following the OOP convention for these things.

For example, in C# and Java, our smallest unit is a public method of a class. Private methods are not accessible, not even by tests.

With something like JavaScript, I propose following the same conventions if possible.

For example, when we have a JavaScript module, I suggest only testing "public" functions that you export from that module to use elsewhere in the code. Avoid exporting additional functions not used anywhere else just so you can test them. Those should be considered private implementation details.


## Be pragmatic

The final principle is to be pragmatic.

Sometimes it's fine to break all of the above principles. It all depends on whether or not you know what you're doing.

At the end of the day, the outlined principles are there to help us achieve the goals of testing. They exist because without them, it's unlikely we'll actually achieve those goals.

But if you know what you're doing and why, then you can always do whatever you want. You won't mess up like someone who has no idea what they're doing.

So be pragmatic.

Sometimes it's okay to test implementation details. For example you may want to trade some confidence for convenience, or you may want to have additional tests for stronger confidence. It's all fine.

### Example scenarios

**Importing and using a statistical package**

For example, if you import and use a package that shuffles an array, you should probably mock that and just test it was called correctly. Writing tests that a shuffling algorithm works correctly is very difficult. It involves statistical analysis and running the tests potentially thousand of times.

So this is definitely a case where you would monkey-patch and just test whether you called it correctly or not. You would expect the package itself to work fine, and leave the burden of testing the package to its maintainers.

**I/O**

Another scenario is when testing the I/O of your application. Testing I/O is quite difficult.

Luckily, when it comes to the DOM, we have things like [jsdom](https://github.com/jsdom/jsdom), or we can even run tests in the browser using something like [puppeteer](https://github.com/puppeteer/puppeteer). So at least in this case, we can create some "mock HTML", run our test, and then assert on the end result.

But imagine how we would test without those environments. In short, we would have to intrusively mock every call that used the DOM.

Another possibility may be that we don't have either of those capabilities. Maybe we don't have a replacement environment, and maybe we don't have the capability to monkey-patch either. In that case, perhaps we cannot test I/O at all. We would have to make do with only testing the functions used by our I/O. We usually use something like the [humble object pattern](http://xunitpatterns.com/Humble%20Object.html) for this.

So for I/O, we have those options. We make do with what we can, and they're all okay. Obviously in terms of confidence, the replacement environment is best, followed by monkey-patching, followed by not testing I/O at all.

As another example, consider logging to stdout. In this case, we don't tend to use a replacement environment. We tend to just monkey-patch our logging functions instead (e.g. `console.log` in JavaScript). Yes, we've said we generally shouldn't monkey-patch, but it's probably our best option in this case.

**Convenience**

With integration tests and unit tests, we probably don't want to be making real calls to databases and third-party servers. Maybe we could, but it may be very inconvenient and difficult to set up. More importantly, our tests would run very slowly.

That's why it's usually a very valid strategy to mock those calls in integration and unit tests.

We give up some confidence, but we gain tremendous convenience.

And that's fine, because we can make up for the lost confidence in other tests.

For example we may have some happy path end to end tests for add to cart, which involve the database. From those tests, we might gain sufficient confidence that interaction with the database works correctly. Afterwards, it's probably fine to mock other database calls in our integration tests for the remaining add to cart tests.

So we trade confidence for convenience, but it's alright because we make sure we gain sufficient confidence from elsewhere.

Another example may be a login page. We may have a few end to end tests properly testing the login page.

These tests would give us sufficient confidence that the login page works properly.

After that, for the remaining end to end tests which require a logged in user, we could log in purely through HTTP requests. This would be much faster than actually going to the login page in the browser and logging in that way for every single test.

**Extra confidence**

In general we don't want to test implementation details.

However, we can always do whatever we want.

There may be some critical code, where we really want additional confidence that a private function works correctly.

That's fine. Just export it and test it.

Sure, we're testing implementation details, which means our tests become more likely to change in the future, but that's fine. If we need the extra confidence, then we need the extra confidence. We trade some risk of future code changes + having to write additional tests, and we gain confidence in return.


## Overall

We test to achieve certain goals with software:
- Code that works as intended / correctly.
- Code that is easy to change.

Also:
- Tests should ideally be reproducible with a single command.
- Test should be fast.

These are our testing principles:
- In software, we test the end result.
- Higher level tests (like end to end tests) provide more confidence than lower level tests.
- Lower level tests are still essential, because high level tests have limitations.
- Avoid testing implementation details and mocking (specifically monkey-patching).
- Be pragmatic. Sometimes testing implementation details is fine, if you know what you're doing.

The goals are always the most important part. As long as we achieve them, then we're good. Technically it doesn't really matter how we do it, as long as we follow good programming principles in general.

However, we have the testing principles, because they tend to be the best way to achieve our goals the majority of the time. For the few exceptions, we have the last principle which just says "be pragmatic, and do what's needed to achieve the goals of testing your software".

Anyway, that's all.

If you have anything to add, have any questions, disagree with anything, or you want to mention anything else, please feel free to leave a comment and discuss.


