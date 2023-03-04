---
title: Nesting CSS
description: >
  Nested Selectors are slowly rolling out to web browsers. So I've converted this site's styling to use the new syntax
date: 2023-03-04
---

[Nested Selectors](https://www.w3.org/TR/css-nesting-1/) are slowly rolling out to [web browsers](https://caniuse.com/css-nesting). It’s a feature that I have been looking forwards to for a long time. Nesting is one of the reasons to choose [sass](https://sass-lang.com), which I often use at work for larger projects, but because this site is intentionally minimal, I wanted to keep the CSS as vanilla as possible, sass is great but it has it’s own syntax, rules and quirks.

It looks like I can finally convert all of the styling on this site to use the new syntax. As the feature isn’t 100% rolled out yet I’m still compiling my source code to regular, un-nested CSS. I chose to use [Stephanie Eckles'](https://thinkdobecreate.com) plugin [eleventy-plugin-lightningcss](https://github.com/5t3ph/eleventy-plugin-lightningcss), which uses [Lightning CSS](https://lightningcss.dev) under the hood. Installing the plugin is simple, and Lightning CSS is very fast, it also allows me to enable nesting as a configuration option – meaning, in future, I can actually ship nested CSS by turning that option off.

As of [today](https://github.com/LkeMitchll/interroban.gg/commit/c97e2f2e823f038f664c9270265181c99c839164) all of the styling for this site is now nested.

Using Lightning CSS means I can also use the standard [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) to keep the styling neatly organised, without chaining loads of requests. I don't think we'll be seeing that feature in browsers anytime soon, unfortunately.

***

**Further reading**

- [11ty Rocks! – Process CSS or Sass With Lightning CSS](https://11ty.rocks/posts/process-css-with-lightningcss/)
- [Lightning CSS – Docs](https://lightningcss.dev/docs.html)
