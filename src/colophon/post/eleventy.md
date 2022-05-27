---
title: Eleventy
description: >
  Why I've rewritten the site using Eleventy (11ty)
date: 2021-03-14
---

As soon as I felt like the site was ‘done’. I started experimenting with [Eleventy](https://www.11ty.dev) (11ty), and I very quickly fell in love with it. Which in short means I’ve rewritten the site from scratch, again.

## What’s wrong with Next?

Nothing in particular. I really like Next, in general it’s very well designed and built, it’s a joy to use. The balance it strikes between static and dynamic is perfect, and I really appreciate how simple things like API routes are to build out of the box.

But, it just feels like overkill for a site as small as this. The site I’m building is almost entirely static, apart from the listening statistics on the journal page—which are loaded client side. So it makes no sense for my pages to bundling so much JS, it seems like the most basic Next site will include at least 100kB of JS that I do not need. I was particularly frustrated when switching to react-markdown to render content as HTML bumped the bundle size by another 20kB, which isn’t ideal considering all the HTML should be pre-rendered.

I could try [exporting](https://nextjs.org/docs/advanced-features/static-html-export) the site as static HTML, but that would cause more headaches, for example the API routes would stop working properly.

I’m really looking forward to using Next again in future for something a little advanced, but it’s time to switch.

## Why Eleventy?

Eleventy is a very simple static site generator. Getting started is as simple as:

```shell
yarn add @11ty/eleventy
echo '# Hello, World!' > index.md
yarn run eleventy
```

That’s all that’s needed to get a working—albeit kinda useless—static site, very simple. I am a big fan of this config-less approach, and super fast startup.

## Making the switch

I can still grab all of my content data from Contentful. Like everything else Eleventy makes this easy: add a folder named “_data”, within that folder a JS file that returns an object of data, in my scenario data from Contentful, that data is immediately made available in HTML templates. Again, super simple.

This simplicity has enabled me to progressively enhance as I move forward. For example, I started out by writing all my CSS in a single file (I’m using [CUBE CSS](https://cube.fyi) this time), once this file started getting longer I installed [PostCSS](https://postcss.org), and the [postcss-import](https://github.com/postcss/postcss-import) plugin meaning I could then use the SCSS-like `@import` to split up my CSS. While I was at it I also added the [css-nano](https://cssnano.co) plugin which minifies the CSS for me. This progressive approach means that I can add the tools and features that I need when I need them, which is the opposite of the ‘kitchen sink’ approach that some of the React world embraces.

As a result of the switch so far my homepage has gone from around 600kB to around 130kB, which is a massive improvement.

Eleventy does not provide the incredible API routes that Next does, so I have converted most of those routes to [Netlify Functions](https://functions.netlify.com), which was an easy process thanks to Netlify’s excellent design.

For the very small amount of client-side javascript that I do need I’ve switched to [Alpine](https://github.com/alpinejs/alpine/)—which is worth it’s own post. In short I now do not need a JS bundler, and the download size has gone from at least 100kB on *every* page to around 8kB (gzipped) on the *only* page that needs it.

Overall I am very happy that I made the switch.
