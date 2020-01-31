---
title: 'Programming first principles - 1. Purpose - What this series is about'
slug: programming-first-principles-purpose-what-this-series-is-about
date: 2019-11-27
author: 'Spyros Argalias'
featuredImage: './programming-first-principles-purpose-what-this-series-is-about.png'
---

Video version of this article: [https://youtu.be/7BGVhMDxxA4](https://youtu.be/7BGVhMDxxA4)

What's this series about?

It is about learning and mastering principles in software, from first principles.

## Table of contents

- [Why do we need programming principles?](#why-do-we-need-programming-principles)
- [Traditional way to learn programming principles](#traditional-way-to-learn-programming-principles)
- [My problems with the traditional way of learning software principles](#my-problems-with-the-traditional-way-of-learning-software-principles)
- [Learning programming principles from first principles](#learning-programming-principles-from-first-principles)

## Why do we need programming principles?

Programming principles are extremely helpful.

They help us write better software that works and is easy to change.

By learning them we are essentially piggy-backing on the shoulders of giants and of the community.

Other experienced developers, who have been working for decades, have figured out solutions to common problems and have taught them to us. As a result, we can overcome those problems significantly faster, maybe after a few attempts at applying the principle and getting used to it.

## Traditional way to learn programming principles

Well, there are many ways to learn how to write good software, and about good software principles.

There are tons of materials in the form of books, videos, blog posts, etc.

One of the best ways for me has been learning from Robert C. Martin (Uncle Bob), particularly watching his YouTube videos.

His videos are amazing because he:

- Explains a problem we face in code (the motivation).
- Explains a good solution to it.

**Motivation**

Uncle Bob's videos are particularly great because he explains the **motivation** behind the principle.

The motivation helps because without it we're just trusting a random person and what they're saying.

But with the motivation there is a compelling argument for what we're learning. It's not just blind trust, it's not just meaningless principles. It's the results of experience based on solving repeated specific problems.

However, at least in my case, it wasn't enough.

## My problems with the traditional way of learning software principles

Yes I vaguely knew about the principles of separation of concerns, interface segregation principle, single responsibility principle, etc.

But I faced many problems:

### 1. In many situations I didn't know how to apply them.

Doing front end development, I don't particularly use OOP.

Most of the principles I had vaguely learned about were based on OOP. Particularly, all the examples of applying them were using OOP.

I knew that the principles should be globally applicable, whether using OOP or any other paradigm. However it was difficult trying to apply them in my own code, which was non-OOP.

I think this can only be overcome by experience and practice.

**The click**

The thing is that when you don't know a principle well enough yet, it's difficult to apply it. After you practice a bit first, it eventually becomes more second-nature. That's when people say it will eventually "click", and it will be easier to apply in any context.

However I didn't have that, because I wasn't using OOP so I couldn't use similar examples to practice to begin with.

As a result I could only vaguely, kind of apply these principles.

### 2. In other situations I knew of an existing solution, but I had no idea if or why it was good, and what principles it was applying.

For example in React (the front end framework), we had the concept of containers (now they've been replaced by React hooks, but they perform the same function of separating logic from dumb components).

I knew it was a useful solution. I could see why it helped a lot and its applications.

But I had questions:

- What principles did it apply?
- Why was it considered a good solution?
- Would it really be so much worse to have the logic mixed in with the component?
- What about if we kept the dumb component, but removed the container, then had the caller handle the logic to call the dumb with the correct props. Yes it means there could be duplication if we have different callers, but was the additional layer of abstraction (the container) worth it?

I had a feeling that separation of concerns was at play here. But it was vague.

### 3. I was not able to make compelling arguments for using them.

This wasn't as much of an issue because most of my colleagues and me usually accept existing programming principles.

However, if challenged, I wouldn't have been able to hold a strong argument about them.

I would have said something along the lines of:

- "They're accepted principles" or "it's standard practice" in the React containers case.
- "I can see that they would be useful in X and Y cases".

But overall, they wouldn't be very strong arguments. It would be more like "it feels like this is the right thing to do, and here are some examples why".

## Learning programming principles from first principles

It all changes when we learn from first principles.

By starting from first principles, we're able to get a holistic view of all software development principles.

For example when we see any of the principles such as separation of concerns, abstraction, interface segregation, law of Demeter, principle of least knowledge... We'll know why these principles are essential and exactly what they help with.

By knowing the why and how, we'll also know how to apply them.

It's the old adage of "learn the principle behind the technique", so that you can apply the technique in any context.

Here we'll learn the motivation / principles behind the principles, so we can apply them in any context.

**The process**

We'll start with things like what software requires, moving on to some "postulates" (assumptions) about how developers work with software, and from those we'll invent the principles of software development.

We'll use mental examples to help us do so, similar to how [Galileo used a thought experiment which helped him establish the law of free fall in physics](https://en.wikipedia.org/wiki/Galileo%27s_Leaning_Tower_of_Pisa_experiment).

Overall, this will help with understanding principles better.

It's not a standalone solution, and learning from experience is incredibly helpful, but this new insight of starting from first principles will probably be helpful to most developers.
