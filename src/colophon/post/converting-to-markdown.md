---
title: Converting to Markdown
description: > 
  Converting the site to use markdown instead of Contentful rich text.
date: 2021-02-05
---

I love markdown, it’s simple, extendable, future-proof, and used _almost_
everywhere. I write everything in markdown including the content on this page.

Until now I’ve been taking my markdown and manually converting it to
Contentful’s flavour of rich text, the default WYSIWYG editor field. Rich text
is _okay_ but it’s not as simple as markdown, and there’s no way to write it
outside of Contentful itself. Luckily Contentful does support markdown, so in
the spirit of reducing friction [1](#sn-1) I thought I would
make the switch.

{% sidenote 1 %}
  _Nº1_ [Brian Lovin](https://brianlovin.com/overthought/reasons-you-arent-updating-your-personal-site)
  recently gave some excellent pointers for making personal sites more
  updatable.
{% endsidenote %}

This isn’t as simple as it would seem, for a few reasons:

- Contentful does not provide the whole asset object for images when they are
  used in markdown. Meaning that I would have trouble providing (among other
  things) a width and height to `responsiveImage`.
- Rich text has a handy [embedded inline entry][eie] feature that I have been
  using for footnotes in the page margin. That’s not going to be an option now.

[eie]: https://www.contentful.com/developers/docs/concepts/rich-text/#embedded-and-linked-entries

## Footnotes in the margin

My markdown renderer of choice [remark] [2](#sn-2) helpfully has a [footnotes plugin][footplug]
which removes a lot of the upfront work. Unfortunately it
formats the footnotes traditionally—inline links, with the definitions at the
bottom of the page—I want my footnotes in the margin, next to the correct
paragraph. The solution was to write my own remark plugin. The [plugin][custom]
traverses the remark tree, moves the definitions to become a sibling of the
footnote reference, and then wraps the result in a new ‘paragraphWithFootnotes’
node. Finally I can tell remark how to [render] that custom node.

{% sidenote 2 %}
  _Nº2_ [remark](https://remark.js.org) is a Markdown processor powered by plugins.
{% endsidenote %}

[footplug]: https://github.com/remarkjs/remark-footnotes
[custom]: https://github.com/LkeMitchll/interroban.gg/blob/006fe925f8a48723e0e0c2aff5bdf760102687ed/helpers/footnotes.js
[render]: https://github.com/LkeMitchll/interroban.gg/blob/7206dbf9db2a2e2c43575dc3748ebc857b9e9d88/shortcodes/markdown.js#L23

## Grabbing image assets from Contentful

My solution to the image problem is to redefine how remark renders images. The
markdown provides only the image src URL, which fortunately contains the
Contentful entry ID. After [slicing out the ID][ids] I can the correct asset
out of the assets array. Then I can pass that to my `responsiveImage`
[shortcode][short], which I adapted to optionally return an object of the
attributes remark needs to constructs the image.

[ids]: https://github.com/LkeMitchll/interroban.gg/blob/7206dbf9db2a2e2c43575dc3748ebc857b9e9d88/shortcodes/markdown.js#L28
[short]: https://github.com/LkeMitchll/interroban.gg/blob/cc508424c492d7f296f1cdb8c72d08e27b773244/shortcodes/responsiveImage.js

Overall I’m happy with the outcome, I can write in the my format of choice from
now on, but there have been some pro’s and con’s:

### Pros

- Remark is easy to extend and has lots of plugins to further add syntaxes in
  future.
- My content is portable again. I can migrate from Contentful in future if I
  need to.

### Cons

- Markdown is a second-class citizen within Contentful, matching all the
  platform features of rich text will be tricky, if I ever wanted to.
