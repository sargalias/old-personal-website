---
title: 'Top 5 CSS gotchas and a few bonus'
slug: top-5-css-gotschas
date: 2019-01-09
author: 'Spyros Argalias'
featuredImage: './top-5-css-gotchas-and-a-few-bonus.png'
category: CSS
excerpt: It's very common to struggle with CSS. Often, things don't work how you may think they do. Here are some things that may catch you out.

seoTitle: 'Top 5 CSS gotchas and a few bonus'
seoDescription: It's very common to struggle with CSS. Often, things don't work how you may think they do. Here are some things that may catch you out.
---

CSS, we all love it right? Truth be told, we owe a lot to CSS. Without it, websites would still look like Word documents. All in all, CSS is an ingrained component of the internet, it’s here to stay, and it’s what makes the internet today. So what’s this article about?

**CSS is extremely unpredictable**

The problem with CSS, is that there are so many things that just **do not work at all how you would expect**.

You’re expecting one thing, but no, it happens to work in the exact opposite way, and you would never know it unless you’ve specifically learned about it. It’s just impossible to just figure it out by what else you might know, as it simply doesn’t follow the pattern.

For me in my web development journey, CSS was by far the most difficult and frustrating thing to learn and use.

HTML is very simple and can be learned well quite quickly.

JavaScript is more difficult to learn, but when you’ve learned the basics of it you’re good to go. Some might argue that it’s got some silly things like `{}+{}` evaluating to NaN, but really you’ll never encounter that in real coding. Other than those insignificant things, and other than _context_ (which will probably take a while to wrap your head around), JavaScript is perfectly predictable. It has its rules and it follows those rules.

Then there is CSS. The basics of CSS are very simple to learn, sure. Unfortunately you’ll frequently encounter things that just do not work the way you’re expecting. You’ll be unable to overcome them, you won’t know of any solutions, and they will frustrate you.

Even if you find a solution on something like [Stack Overflow](https://stackoverflow.com), you’ll still have no idea how it works unless you actually research further. Things are definitely **not predictable** with CSS.

So the aim of this article is to introduce you to the top 5 CSS gotchas that will otherwise repeatedly frustrate you throughout your career. It also acts as a good checklist of things that you really should learn to really master CSS.


## Margin-collapsing

If you’ve done CSS for any significant amount of time, you’ll definitely have encountered this concept. _Margin-collapsing_ concerns margins that are touching / are next to each other / are colliding… **but only vertically**. What happens is that instead of being added together, the margins combine into a single margin. **The resulting margin is the largest of the two margins, not the combination of both margins added together.** For example, notice the pen below:

See the Pen [Margin-collapsing example](https://codepen.io/sargalias/pen/majdxr/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

The red box has a `margin-bottom` of `50px`. The blue box has a `margin-top` of `30px`.

You would expect the margin between them to be the sum of the two, `80px` in total. But instead, the total margin between them is **`50px`**.

This is a behaviour known as _margin-collapsing_. The two margins collapse into each other, leaving only the largest of the two margins.

To make things worse, this only happens when margins are touching vertically. It does not happen with side-to-side margins. It also happens when both margins are negative (vertically), but not when one margin is negative and the other is positive.

_Margin-collapsing_ is something you definitely need to know about, as it will be a hurdle in your career if you don’t. Here are some good resources to learn more:

- [Mastering margin collapsing (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [What you should know about collapsing margins (CSS-Tricks)](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)

## Block formatting contexts (a brief interlude)

Also _margin-collapsing_ only affects things within the same _block formatting context_.

In a few words a _block formatting context_ is basically a container which fully contains something. As a result, the thing it contains can’t interact with anything outside of the block formatting context. It’s effectively too far away to have any contact with anything outside of it.

There are a few ways to create _block formatting contexts_, for more information please see the article [Block formatting context (MDN)](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context).

## Containing block, absolute positioning

Almost everything in CSS is contained by the _content box_. Except for things with _absolute positioning_. For example, consider the pen below:

See the Pen [Containing block example](https://codepen.io/sargalias/pen/bOjGZL/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

The _statically positioned block_ is contained by the _content-box_ of the parent. The _absolutely positioned block_ is contained by the _padding-box_ of the parent. So just remember that all _absolutely positioned blocks_ are contained by the _padding-box_ and everything else is contained by the _content-box_. For more details, see the article [Containing block (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block).

## Containing block, absolute positioning, part 2

What is the containing block? Normally it’s the closest ancestor that has a `position` property with a value other than `static`. But that’s not the sole condition. The same effect is achieved if an ancestor has:

- A transform property with a value other than none.
- A filter property value with a value other than none.
- A will-change property value with a value other than none.

Consider the pen below:

See the Pen [Containing block with transform property example](https://codepen.io/sargalias/pen/NeBPJV/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

Notice that the _containing block_ does not have a `position` property, instead it has a `transform` property. For more details on how this works, see the see the article [Containing block (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block).

## Vertical-align: middle; and centering in CSS

When you know how to center things well in CSS is when you can really feel like your skills are coming together with CSS. Thankfully, this is much easier to do today now that we have _flexbox_. Just note that in all likelihood, `vertical-align: middle;` does not do what you think it does. It only works for tables or `inline` / `inline-block` content. **You cannot use it to align blocks vertically.** To save you a lot of trouble, have a look at the article [Centering in CSS: A Complete Guide (CSS-Tricks)](https://css-tricks.com/centering-css-complete-guide/).

## Flexbox

How well do you know _flexbox_? _Flexbox_ is quite amazing and incredibly useful for every developer out there to know, it can help with almost any layout. The problem is that if you don’t know exactly how flexbox works, it can be pretty dumbfounding figuring out why things are just not working and not sizing exactly as you would expect. Here is a small explanation of the `flex` property - `flex-basis`, `flex-grow` and `flex-shrink`.

**Flex-basis**

`flex-basis` is like the `width` property. It dictates the `width` that the element should have before any shrinking or growing occurs. If `flex-grow` and `flex-shrink` are set to `0`, the `width` of the element will be equal to the `flex-basis`. For example: `flex: 0 0 200px;` would make the element always have a `width` of `200px`. It would never shrink or grow if the width of the _viewport_ changed. Try it out in the pen below:

See the Pen [Flexbox basis example](https://codepen.io/sargalias/pen/MZqYvR/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

**Flex-grow**

If there is more space than the `flex-basis` of the element, then it has the capacity to grow. `flex-grow` comes in effect. So if there is _free space_, it will be divided among elements with a `flex-grow` value above `0`, **proportionally**. For example, if you have 3 elements, each with `flex-grow: 1;` and `300px` of _free space_ after `flex-basis` is applied for all elements, then each element will get `100px` extra width. Overall, if you understand that flex-grow only comes into effect after `flex-basis` is determined, all works as expected. Notice in the example below how the items grow if there is space available, but they will not shrink under `300px` wide each (because `flex-shrink` is set to `0`, and `flex-basis` is `300px`).

See the Pen [Flexbox growing example](https://codepen.io/sargalias/pen/gZdbXo/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

**Flex-shrink**

`flex-shrink` is more tricky. Similarly to how `flex-grow` only applies **after** `flex-basis` has been allocated, so does `flex-shrink`. But `flex-shrink` **does not reduce space proportionally**, not in all circumstances anyway. Instead, `flex-shrink` shrinks space from each element, so all elements reach their _min-content_ width (the width where their content would overflow if they got any smaller), at roughly the same time. For example, consider the pen below:

See the Pen [Flexbox shrink example](https://codepen.io/sargalias/pen/JwadVZ/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

Notice how if you resize the _viewport_, `block-1` shrinks much faster than `block-2`, even though both their `flex-shrink` values are `1`. They do not shrink proportionally like with flex-grow, instead items with more room to shrink reduce in size **faster**, so that all items reach their **_min-content_ width** somewhat evenly. Of course changing their `flex-shrink` values does change the behavior, but just note that things do not shrink exactly proportionally.

**Margin in flexbox**

Also note that using `margin: auto;` in _flexbox_ perfectly centers an item. More than that, `margin-top` and `margin-bottom` work just like `margin-left` and `margin-right` work everywhere else in CSS. In comparison, in the normal box model, `margin: auto;` becomes 0 for the top and bottom. Consider the pen below:

See the Pen [Flexbox margin example](https://codepen.io/sargalias/pen/ZVMGgJ/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

Notice how just by using `margin: auto;` on the _block_, it is perfectly centered in the _flexbox_. For more information on _flexbox_ in general, please see the guides on [MDN](https://developer.mozilla.org/). The first part is [Basic concepts of flexbox (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox), then look at the sidebar for the rest.

---

Here are some more worthwhile mentions.

## Borders don’t accept percentage values

As the heading says, you can’t use percentages with borders. This applies to more than just borders too, for example box shadows. It can be confusing because you can use percentages for content size (width and height), padding and margins, but not borders. Just keep it in mind.

## Responsive iframes (and other embedded content) that retain their aspect ratio

Unfortunately this requires a hack to accomplish with CSS right now. To find out how to do it, see [Aspect ratio boxes (CSS-Tricks).](https://css-tricks.com/aspect-ratio-boxes/)

## Z-index

`z-index` can be complicated if you don’t fully know how it works. The first thing you should know is the default stacking order for elements.

1.  Non-positioned blocks (statically positioned).
2.  Floating blocks.
3.  Positioned blocks (anything other than statically positioned).

Knowing the above, `z-index` can help us further control where an individual element appears. Here’s how it works:

Firstly, note that `z-index` only works on _positioned_ elements. If an element is not _positioned_, `z-index` will have no effect.

Secondly, `z-index` only works relative to its closest _ancestor_ which forms a _stacking context_. In other words, an element will never go below its _stacking context_.

For example, the root element (`html`) always forms a stacking context. An element will never stack below the _root_ element, regardless of its `z-index`. If another element forms a _stacking context_, then a _child_ element will never stack behind it.

There are many ways to form _stacking contexts_, with the most common way probably being giving an element a `position` of `absolute` or `relative` along with a `z-index`.

Finally, elements with `z-index` only _compete_ against each other if they share the same _stacking context_. This can be quite a handful to understand the first time round. For a much more thorough explanation please see [Understanding CSS Z-index (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index).

## Percentages in transforms are not relative to the parent container

With the _box model_, percentages are given an _actual value_ based on the parent. For example, if a parent is 100px wide, and a direct child has 10% width of the parent, it will be 10px wide. If that child is then relatively positioned with `left: 100%;` it would end up to the right of the parent, outside of it. But when using _transforms_, percentages don’t work the same way. **With _transforms_, percentages are relative to the element itself, not its parent.** Consider the pen below:

See the Pen [Transform percentages example](https://codepen.io/sargalias/pen/XoBJLN/) by Spyros Argalias ([@sargalias](https://codepen.io/sargalias)) on [CodePen](https://codepen.io).

Notice that the element with `transform: translateX(100%);` does not end up outside of its parent. That’s because the `100%` in this case is relative to the element itself. It only moves to the right 100% of its width, not 100% of its parent’s width. In contrast, the relatively positioned element works as you would expect and ends up outside the parent element. For more information on transforms, please see the guide on [using CSS transforms (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)

# Inheritance

This is a very minor point and a fairly basic concept, but I thought I’d mention it here for the beginners among us.

In short, some CSS properties are _inherited_ and some are not. _Inherited properties_ include things like `font-family` and `color`. This effectively means that you can set `font-family` on the `body` element and all elements in the page will _inherit_ it and have the same `font-family`.

Most other properties are not _inherited_, such as `margin` and `padding`. They have to be set individually on elements.

It’s worth understanding this concept so that you know whether you have to explicitly write a _declaration_ or you can just count on it being _inherited_. There are also special keywords that allow you to explicitly inherit properties that otherwise are not inherited, and also to prevent inheritance and such. For more information, please see [Cascade and inheritance (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance).

## Where to go from here

CSS is a tricky beast. On the one hand it is quite easy to learn and use, and on the other hand it has many unexpected cases and surprises.

This article mentioned the most significant and most common ones, the ones you’re most likely to repeatedly encounter throughout your career.

When you’re learning CSS, I recommend using these as a checklist to gauge how much of it you really know. To be the best professional you can be, you should ideally know about all of these cases.

_Sidenote_: If you know why some of these cases work in this way, especially some of the more unexpected ones like margin-collapsing and flex-shrink, then please let us know in the comments! Good luck and study well!