---
title: Updated Bookmarks Layout
description: >
  Recent changes I've made to the design of the bookmarks page.
date: 2021-04-30
---

As I mentioned in the [last update](https://www.interroban.gg/colophon/post/a-simpler-layout/) the [bookmarks page](https://www.interroban.gg/bookmarks) has become a *very* long list—it’s a good problem to have, in a way—but there was plenty that could be done to optimise the vertical space, and include more information about the links.

## Table-like layout

It seemed like a no-brainer to use a horizontal layout instead of stacking information on larger screens. The new approach uses CSS grid to give a table look, without using tables. It is a much more flexible and modern approach to styling information of this type.

The link itself takes up the majority of the ‘table’ width, as some of the link titles are rather long. Followed by a little indicator for favourited links—one day I will display the archive of roundups—as well as the date and type, both of which are right aligned text to avoid odd whitespace issues.

## Sticky headers

I recently split the bookmarks into yearly sections to make them more digestible. The header bar that carries that year plus a link to the top of the page now sticks to the top of the screen as you scroll past. As does the table legend, it’s easier to understand what each data point means, if you can always see the legend.

## More details

The bookmarks are now numbered. Meaning I get to use a [Numero](https://en.wikipedia.org/wiki/Numero_sign), these numbers are also displayed on the recent bookmarks on the homepage. I think showing that number gives readers a better idea of how long I’ve been collecting these links.

The link type is now styled as a little capsule, which is a common pattern elsewhere for tags and other taxonomies.

## Future plans

I’m not done with this page, I have a few plans for it:

- An archive of the bookmark roundups, I currently show only the latest one.
- Filtering of the table by any of the data points.
- Image preview of the link. As the link sources die I’d like to preserve at least a tiny snapshot.
- The ability for people to ‘like’ bookmarks, so I can gauge popularity.
- Search
