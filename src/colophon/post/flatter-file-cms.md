---
title: A Flat(ter) File CMS
description: >
  Why I ditched the headless CMS for a simpler, flatter approach.
date: 2022-06-14
---

When I first started rebuilding this site I was committed to making it as easy
as possible to keep up to date, that meant automating as much as possible by
using data from APIs, designing the information architecture to allow for small
updates, and a flow that helped me to make updates easily. A big part of that
flow from the beginning was [Contentful][contentful], a headless CMS that makes
designing content easy. 

However, since switching from Contentful's rich-text editor to the simpler
[markdown editor][md] the whole process has felt like a blocker to making
changes. Firstly, Eleventy has excellent markdown support out of the box; The
Contentful interface is not responsive, the input area is small, I rarely edit
content on anything with a small screen; I’m making more API calls to fetch
content, slowing down builds. All in all the whole process feels like I’m
adding complexity where it’s not needed. Instead I could be storing plain
markdown files in the source code and making updates via git, which requires no
API calls, is faster and I can edit the markdown in [iA Writer][ia].

After tearing out lots of javascript, and converting my posts in markdown,
almost all editorial content on this site is stored as [markdown files][gh].
That’s not all, the simpler data, like my CV, which rarely changes is now a
simple [JSON file][cv]. Non-editorial content is now mostly static HTML, again
this rarely changes, and it's no bother to edit the HTML.

I don't regret trying out Contentful all these years, and I would absolutely
recommend it for teams and larger website projects but simpler is better for me
right now.

[contentful]: https://contentful.com
[md]: https://www.interroban.gg/colophon/post/converting-to-markdown/
[ia]: https://ia.net/writer
[gh]: https://github.com/LkeMitchll/interroban.gg/tree/f56af85b82d855bf6ea8c71998d4c895a0f854d2/src/post
[cv]: https://github.com/LkeMitchll/interroban.gg/blob/f56af85b82d855bf6ea8c71998d4c895a0f854d2/src/_data/cv.json
