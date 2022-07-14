---
title: Should you write tests?
date: "2022-07-10"
isNewsletter: true
---

In this issue, you'll learn about:

* How Vercel is becoming the Google of web dev
* Why I'm on board the Urbit train
* Whether writing tests is a waste of time

## Is Vercel becoming a monopoly?

> *An interesting trend over the past few years has been how many of the popular static site generators and frameworks we rely on are tied to a company that aims to monetize usage of that tool*
>
> – Brian Rinaldi
>

Jamstack companies like Astro, Remix, Gatsby, and Vercel are conducting cutting-edge open-source development of frontend frameworks with monetization happening on some proprietary backend. In a way, they're self-funded research companies.

The business model is similar to Google's: Offer an amazing product for free, and once the users (developers) are hooked, provide an accompanying service that is unmatched because you own the ecosystem (no one sane deploys their Next app with AWS).

Vercel is also in the business of sponsoring and acquiring popular frameworks ([Astro](https://github.com/withastro/astro#platinum-sponsors), [Remix](https://remix.run/conf/2022#sponsors), [Svelte](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte)).

So it's not hard to put two and two together – that Vercel wants to make its hosting service an unmatched option not only for Next, but the whole frontend ecosystem.

They're becoming the Google of web dev, and I ain't even mad.

## Why am I so obsessed with Urbit?

My interest in Urbit is primarily about attention, and by extension, mental health. [This thread](https://twitter.com/gdbroman/status/1518314137977241601) I wrote sums it up pretty well.

## Is writing tests a waste of time?

I’ve recently gone through what I think is a pretty common story arc for developers:

1. Start out despising tests.
2. Absolutely detest them.
3. Don't see the point in writing them.
4. Start to believe writing tests is an exercise in masochism and excuse for seniors to bully juniors over in PRs.
5. Ship some painful bugs.
6. Grow to love tests.

### Should indie hackers write tests?

As much as I love tests now, I think it'd be ridiculous to claim that everyone should write tests all the time.

If you're working on a large-scale project, the main value prop for tests is preventing breaking changes.

But not everyone is in a high-stakes environment. What if you're just building your own little project?

As a solo dev, you can oftentimes keep the whole app's functionality in your head. Does this eliminate the need for tests? To a certain degree, yes – primarily as documentation – but not entirely.

### Tests as a speed insurance

You may be able to keep the whole application in your head *today* – but will you from a month from now? How about two months from now when you realize a major architectural rehaul is due?

And that is why I think tests' biggest value holds true for solo devs too: namely, *speed*.

Given you have a long-term vision, tests become a speed insurance: A hedge against debt-induced stagnation. They are about front-loading work to ensure a high development speed long into the project.

Anyone can sprint the first 100 meters, but if you're running a marathon, it's ill-advised.
