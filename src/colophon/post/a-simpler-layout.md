---
title: A Simpler Layout
description: >
  Over the past few months I have gone from a 4 column grid, to a 2 column
  grid, and now I have simplified even further to a (mostly) single column
  layout.
date: 2021-04-30
---

Over the past few months I have gone from a 4 column grid, to a 2 column grid, and now I have simplified even further to a (mostly) single column layout.

## Why?

I moved away from a 4 column grid as it was becoming unwieldy and involved too much compromise and code to lay out new information when I wanted to add something new. Managing the layout on main different screen sizes was becoming a worry and a hassle, something I do not want this project to be.

I devised a simpler 2 column grid: the first column being around a quarter of the page width, and the second being the remaining three-quarters. At first this worked well, I had engineered the system in a way that the odd numbered elements would take up the first column, and the even-numbered the second, allowing overrides so that content could skip the first column if needed. But once again I found myself fighting against the grid, and having to constrain ideas to make them fit in either column, I was leaning on the override too much.

## Demolition

One evening I was looking at the site on my phone and realised how much I liked the layout on a small device. I quickly began chopping out the code for larger screens, leaving only the mobile-first styling, it was looking good, quickly—minimal both visually, and in code.

Luckily I had already done a lot of the work needed to stop all the content spanning the entire screen, almost all typography has been given a measure of up to 50 characters. With a few more tweaks I was happy with the single column layout.

## Enhancement

There are a few cases where I do not want a solely vertical layout. For example the career section on the [About page](https://www.interroban.gg/about/) benefits from a 3 column layout.

In the spirit of progressive enhancement a simple ‘columns’ composition which allows the layout to be split into 4 (by default) columns. This can be overridden by redefining the `--cols` variable:

```html
<div class="grid columns" style="--cols: 3">
…
</div>
```

I wanted the image on the [About page](https://www.interroban.gg/about/) to take up three-quarters of the screen, with a caption beside it, I added an `.occupy-3` class to allow to stretch:

```html
<div class="grid columns">
	<img class="occupy-3" src="…" alt="…" />
</div>
```

## Moving on

With this new foundation I am free to express myself through code in the future, rather than fighting with self-imposed rules.

One big layout hurdle remained, the bookmarks, they are now a *very* long vertical list. I need to regain a lot of vertical space on this page. More on that later…
