---
title: How I collect & create bookmarks
description: >
    How on earth do collect all my bookmarks? It must be a tangled mess of
    single page applications, nope, it's a tangled mess of DIY stuff that I've
    built over the years.
date: 2024-06-15
---

I have been collecting [bookmarks](https://www.interroban.gg/bookmarks) for
quite a while, as you read this there are **{{ bookmarks[bookmarks.length - 1].number }}**
of them, which shocks me, they really build up fast. What
I haven’t done yet is explain how I collect them and how they end up on this
site.

## Ethos

Describing my ethos properly is probably another post by itself, but if I find
something delightful, engaging, interesting, beautiful or useful it will
probably make it into my list.

One rule that I do have is that I can only add something to the list once,
which can be a bit limiting if somebody does a great redesign of their website.

## Sources

I have a few places that I find my bookmarks, the best one being the many RSS
feeds that I am subscribed to. My favourites are:

- [Things to click](https://buttondown.email/things/archive/)
- [SC 2.4.4](https://buttondown.email/ericwbailey/archive/)
- [Sidebar](https://sidebar.io/)
- [Meanwhile](https://meanwhile.substack.com)

I often browse a few websites that I have saved as Safari bookmarks. Some of my
favourites are:

- [Typewolf](https://www.typewolf.com)
- [Minimal Gallery](https://minimal.gallery)
- [Collosal](https://www.thisiscolossal.com)
- [Savee](https://savee.it)
- [It's Nice That](https://www.itsnicethat.com)

I also find a few of my bookmarks by scrolling
[Mastodon](https://mastodon.design/@interrobang), and sometimes my lovely
[coworkers](https://thoughtbot.com) will share something in Slack that I find interesting too.

Sometimes I even just stumble upon things by myself, if you can believe it.

## Method

I usually spend a Sunday morning browsing through all my feeds, websites and
accounts to find new links to bookmark, it’s a bit like reading the Sunday
newspaper. I use my trusty iPad to do this.

Once I find a link to bookmark I will store it in [Drafts] to work on later.
I will also keep note of the place I found the link, so that I can credit them.

When I next find time and I’m working at my desk I will sort through my links
in [Drafts] and begin adding them into my extra-special-custom-made CMS.

The first step is to open the [Raycast] extension I built, it allows me to
enter all the bookmark details and save them to a database as a draft, to be
edited or published later.

{% assign image_ID = "045f0c97-8c50-4ce6-b72f-05de8a828172" %}
{% assign image_alt = "My custom Raycast extension that I use to create bookmarks." %}
{% include "components/image.liquid" %}

A few notes on the extension:

- I can grab the current Safari tab URL and title by tapping a keyboard
  shortcut, which saves on copy-pasting.
- If I check 'url as title' the extension will crunch the URL into a nicer
  format: `https://www.example.com` becomes `example.com`.
- It will save the form as a draft if I need to do something else in the
  background.

Later I can open the other [Raycast] command which I use to manage the
bookmarks, and publish them. In the screenshot below you see that it displays
all the saved content with handy indicators for unpublished bookmarks. From
here I can tap a keyboard shortcut to publish or delete the drafts as needed.

{% assign image_ID = "bbd8ab6f-07c8-485b-9d12-d54cea291aa6" %}
{% assign image_alt = "My custom Raycast extension that I use to managea draft bookmarks." %}
{% include "components/image.liquid" %}

Once published the new bookmarks will appear on the bookmarks page the next day
– I publish my website every morning, automatically.

## Back-end

The bookmarks system backend is a simple app written using
[Hono](https://hono.dev), which is a more modern equivalent to
[Express](https://expressjs.com) (which is how the first version was built). It
makes it easy to write a CRUD style API to list, create, edit, and delete
bookmarks. The API is hosted on [cloudflare](https://www.cloudflare.com/en-gb/)
as a serverless worker.

For a database the bookmarks system uses [cloudflare
D1](https://www.cloudflare.com/en-gb/developer-platform/d1/), which is a nice
wrapper around SQLite.

## Front-end

As I’ve shown above I add, publish, and edit bookmarks using Raycast.

This website is built with [Eleventy], my favourite way to build a website.
[Eleventy] makes it easy to grab the bookmarks data, adding a [JavaScript
file](https://github.com/LkeMitchll/interroban.gg/blob/eebbe6f36f888f35ece459d997cd5ea932fc8499/src/_data/bookmarks.js)
to the `data` folder that exports an object is all that is needed.

Once the data is fetched I then display the bookmarks using a [Nunjucks
template](https://github.com/LkeMitchll/interroban.gg/blob/eebbe6f36f888f35ece459d997cd5ea932fc8499/src/bookmarks.liquid#L34-L71)
for the markup.

No client side JavaScript is exported, just plain HTML.

---

That's pretty much it. That's my DIY approach to collecting links a putting
them on this website. You can browse all the bookmarks at
[/bookmarks](https://www.interroban.gg/bookmarks/), you can also find the
[RSS](https://www.interroban.gg/feeds/bookmarks.xml), and
[JSON](https://www.interroban.gg/feeds/bookmarks.json) feed to subscribe to
them on that page too.

[Drafts]: https://getdrafts.com
[Raycast]: https://www.raycast.com
[Eleventy]: https://11ty.dev
