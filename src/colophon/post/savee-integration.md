---
title: Savee Integration
description: >
  I wanted to include some visual elements to my journal page, which hopefully
  gives reader an idea of my current aesthetic and taste, luckily I have a
  constantly updated trove stored in Savee.
date: 2021-05-02
---

A few months ago I moved all my visual inspiration boards from [Pinterest] to [Savee]. I had a few reason for doing that: 

Firstly Pinterest is huge, while this is good thing for discovery it is no longer an app that [does one thing well], my feed was littered with CTA’s, suggestions, and adverts—Which was becoming stressful. Second, Pinterest does not have a Safari plugin for macOS.

Savee is aimed towards, and designed for designers. The tooling reflects that. Being able to search by colour is a super useful feature. Also, the ability to select, and organise many items by clicking and dragging is powerful. The Safari integration is great, the plugin offers a neat little drawer at the bottom of the page that you can drop images into as you scroll, nice.

I wanted to include some visual elements to my journal page, which hopefully gives reader an idea of my current aesthetic and taste, luckily I have a constantly updated trove stored in Savee.

Integrating Savee was simple, I just needed to make a request to the correct API endpoint:

```javascript
async function getFeed() {
  return fetch("https://api.savee.it/user/interrobang/items/", {
    headers: {
      "Auth-Token": null,
    },
  }).then((response) => response.json());
}
```

[Full source code](https://github.com/LkeMitchll/interroban.gg/blob/ce591b24f182519d96a09c0bb1a73dd78ed9763f/src/_data/savee.js)

I chose to limit the output to the 50 most recent items. As for layout I have used a simple [Masonry] layout using flexbox:

```css
.masonry {
  columns: var(--cols, 4);
  column-gap: var(--space-default);
}

.masonry * {
  margin: 0 0 var(--space-default);
```

[Full source code](https://github.com/LkeMitchll/interroban.gg/blob/11e73d4d931bfdb9095ecf8a675b4442f96d7044/src/css/blocks/masonry.css)

I am fetching the data at build time, to limit the amount of API hits, and speed up the page. In addition I have setup a little automatic deploy action using [IFTT], which simply hits the [webhook] that [Netlify] provides every morning at midnight.

[Pinterest]: https://www.pinterest.co.uk "Pinterest: A visual bookmarking tool"
[Savee]: https://savee.it "Savee: A better visual bookmarking tool"
[does one thing well]: https://onethingwell.org "One Thing Well"
[Masonry]: https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/ "Masonry image layout"
[IFTT]: https://ifttt.com "IFTT: an easy way to automate and connect apps"
[webhook]: https://www.netlify.com/blog/2020/04/24/automate-contentful-deploys-with-netlify-webhooks/
[Netlify]: https://www.netlify.com "Netlify: A static web platform"
