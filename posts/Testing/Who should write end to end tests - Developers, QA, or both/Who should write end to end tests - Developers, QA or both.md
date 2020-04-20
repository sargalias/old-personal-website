---
title: 'Who should write end to end tests? Developers, QA or both?'
slug: who-should-write-end-to-end-tests
date: 2020-04-20
author: 'Spyros Argalias'
featuredImage: './who-should-write-end-to-end-tests.png'
category: 'Testing'
excerpt: Are QA necessary for writing end to end tests? Or is that responsibility better suited to developers?

seoTitle: 'Who should write end to end tests? Developers, QA or both?'
seoDescription: Are QA necessary for writing end to end tests? Or is that responsibility better suited to developers?
---

There are three possible answers.

Developers could write end to end tests themselves. Then if the company also has QA, they could optionally write their own, separate end to end tests.

Or only QA may write end to end tests, and developers won't write any.

Or it could be a combined effort. Both could write them, but not separately. One group may have more ownership of them than the other.

So what should it be?

## Case for developers writing end to end tests

In an ideal world, I believe developers should write their own end to end tests.

This just seems to make sense to me from a responsibility point of view.

If a small company X hires a contractor developer, then the developer must produce a working product as part of their contract. The developer probably won't hire QA to test it for them. It's purely up to the developer to test their code to ensure it works correctly.

Likewise, if a large company hires a developer, they expect the developer's code to work at least 95% of the time. Otherwise, if they can't produce things correctly, what's the point of hiring them?

QA should be optional. QA is there as an additional layer of defence for the odd and rare mistake. QA should not be required for the main 95% of the product to work. They must only catch the final 5% or something. (The 5% is acceptable because anyone, no matter how good they are, makes mistakes sometimes.)

Anyway, by that argument, developers must write their own end to end tests. This is because those end to end tests are required to ensure the product works correctly, and developers must produce a product that works correctly, therefore developers must write their own end to end tests.

## Case for developers not writing end to end tests

Unfortunately the point made above has some limitations in the real world.

### Would developers know which end to end tests are the most crucial?

Unfortunately end to end tests are expensive to write and run (they take a long time), therefore we can only have a few of the most important ones.

Would a developer know which ones are the most important tests to have?

What are the critical user journeys? How about the most common user journeys?

Those questions are not things developers are generally concerned about, so it's more difficult for them to answer.

In fact, if you've ever observed a usability testing session, you may know that users use our software in ways we would never be able to imagine.

But QA is generally much closer to the customer and they understand the answers to those questions much better, so it's probably easier for them to judge which end to end tests should exist.

### Should developers constantly update end to end tests based on new user data?

Over time, new data may come in from the users using the product.

They may show that some user journeys are more common than originally thought.

At this point, should the developers go back to the end to end tests, and alter them?

Personally, I'm not convinced that they should.

Having to drop their work to go back and alter old end to end tests seems like a major context switch.

It's not something that developers would naturally do, and it sounds quite jarring.

As a result, it may affect the sprint.

Even more, who's looking at and monitoring all this new data? Is this also developers?

Once again, this feels like something a lot more appropriate for QA to do. Something that would be more natural for them, without being as much of a major context switch.

### Cost of developers writing end to end tests vs QA writing them

Cost is also something to consider.

Now I don't necessarily mean that developers are paid more than QA.

I mean it in terms of time, which costs money. Consider that, at least in my experience, the average team tends to have less QA than developers.

For example, one of my old scrum teams was composed of 4 developers, 1 QA, and one product owner.

Our QA did not seem like they were overworked. In other words, they sufficiently created end to end tests for the features the developers wrote, and sufficiently did manual testing on top of that, with no problem.

And that was just 1 QA resource.

What was the cost?

Well, assuming QA and developers are paid the same, then the cost was 5 people instead of 4 people.

Additionally, development did not slow down due to developers having to write and maintain end to end tests.

What would the cost have been if developers wrote the end to end tests instead?

It would probably have been higher.

As we mentioned, writing end to end tests is not something that developers have as much experience with, therefore it would have taken longer. Further, having to keep end to end tests updated, looking at user data and considering user journeys, is something that would take developers much longer to do than QA, again, due to familiarity and context switching.

Therefore the overall time taken would have been longer. This means that the cost would have been higher.

If you can hire someone for the same price who is capable of doing the same job in 10 hours instead of 12 hours, you've saved money.

However this point also depends on salary. If you have exact figures, it's easier to argue this point exactly. For example if QA were compensated 2x as much as developers, the argument of cost may reverse.

## Combined effort

Like many things, the best answer may be "somewhere in the middle".

Developers should absolutely uphold the responsibility of producing correct code, and spending a reasonable time testing it.

But everyone should understand that QA may be better suited to end to end testing than developers, or at least, understanding which end to end tests to write and whether they need updating.

With that in mind, it can be a collaborative effort.

There are many possible things we could do as a result. They are all variable, and it depends on what works best for the team. Also your team can try out many things, have retrospectives, and make any changes that would be beneficial.

Here are some ideas:

- End to end tests could have collective ownership. Both QA and developers may own them and have complete visibility and editing rights over them. QA may write their own end to end tests, and developers may add their own end to end tests afterwards.
- Or perhaps QA can own end to end tests, but developers can have full visibility of them, can ask questions about them, suggest additions or alterations to them, etc. (This would be my personal suggestion.)
- Or QA could decide what to test, but then ask developers to write the actual tests. Alternatively, they can ask the developers for help whenever they want, if they're not 100% confident in their coding skills.
- And so on...

Additionally, I believe the spirit of the [Ministry of testing - Modern testing principles](https://www.ministryoftesting.com/dojo/lessons/modern-testing-principles), also strives to go in this direction.

Many of their principles seem to embody 'let developers do the heavy code testing, and let's coach developers on how to test well and have ownership of quality'.

## Maximise efficiency

Regardless of how your organisation handles end to end tests, you should always strive to maximise the efficiency of your work.

For example, in one of my old jobs, developers didn't have good visibility of end to end tests, and were not able to run them.

But I usually use test driven development (TDD). For me, having an end to end test upfront is extremely useful for my efficiency and development workflow.

So I wrote my own.

It was really easy to do with a tool like [Cypress](https://www.cypress.io/).

Overall, taking the time to write an end to end test greatly increased my output and efficiency. In that sense, it would definitely be worse if I didn't take the time to do that. I didn't actually commit those tests, so it didn't affect anyone else negatively either.

So that's the point. Anything you can do that will increase your efficiency with no downsides, should probably be done.

And of course, we can always communicate with our team, and use retrospectives, to find opportunities to improve efficiency and make them part of our workflow.

For example, I later introduced the technique to my team, and other developers found it useful as well. From then on, a number of things could have happened. We could have asked QA for permission to write our own end to end tests upfront that we would commit to the codebase. Or maybe we could have collaborated with QA so they could write an end to end test for us upfront. Or maybe we could receive instructions from QA on what end to end test to write. Or maybe none of that would be possible, in which case we would just create an end to end test for ourselves, and not actually commit it.

And so on...

## Conclusion

To recap, there are pros and cons for who should primarily write end to end tests.

My personal belief is that somewhere in the middle is best, with QA having true ownership of end to end tests, but allowing developers to collaborate and contribute.

Then, over time, processes can be improved the same way that any improvement may take place in the company.

But what are your thoughts on the matter?

If you want to add anything, disagree with anything, have a different opinion, or just want to comment, then please leave a comment below.
