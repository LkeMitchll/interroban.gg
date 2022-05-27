---
title: Alpine JS
description: >
  After switching to Eleventy I needed to replace the reactivity of react,
  enter Alpine JS.
date: 2021-03-14
---

In my last update I briefly mentioned choosing Alpine as a way to fetch the listening statistics, on the journal page. I previously used SWR, a plug-in created by the Next team. Without React I had to find a new method way. Firstly I wanted to find a lightweight library to do this, while possible I did not want the headache of writing vanilla JS, which might mean finding a compiler and adding extra build steps. 

Recently I’ve been hearing lots about Hotwire, a suite of libraries that to build reactive applications using declarative markup and semantic JS. This is super interesting and an excellent example of progressive enhancement. However, I would still need to compile the JS, which means choosing a build tool etc. Ugh! Also the JS bundle is quite large for such a small application.

Fairly soon after getting hyped about Hotwire I stumbled upon a lighter, but very philosophically similar alternative, Alpine! 

Alpine shares a similar declarative markup syntax, but removes the need for the separate JS controllers, *everything* is inline. There is also no need to install any dependency, you can simply include a `<script>` tag in the document head. It’s about 8kB compressed, super compact. 

The Alpine documentation has plenty of useful examples to get started with, for example tabs:

```html
<div x-data="{ tab: 'foo' }">
  <button :class="{ 'active': tab === 'foo' }" @click="tab = 'foo'">Foo</button>
  <button :class="{ 'active': tab === 'bar' }" @click="tab = 'bar'">Bar</button>

  <div x-show="tab === 'foo'">Tab Foo</div>
  <div x-show="tab === 'bar'">Tab Bar</div>
</div>
```

For my use case I can simply store the result of a `fetch` in the state (`x-data`), then pass the data to a string. It’s also simple to add an empty state using an `isLoading` boolean:

```html
<section
  x-data="{ totals: {}, isLoading: true }"
  x-init="fetch('/api/music/lastweek')
    .then(response =>  response.json())
    .then(json => { isLoading = false; totals = json })"
>
  <p x-show="isLoading">Loading...</p>
  <a href="https://open.spotify.com/user/lkemitchll"
    target="_blank"
    rel="noreferrer"
    x-show="totals.tracks"
    x-text="`${totals.tracks} Tracks, from ${totals.albums} Albums`"
  >
  </a>
</section>
```

I’m a big fan of Alpine and its brutalist approach, the entire functionality is laid bare in a readable and sensible format. Inspecting the source code in a browser reveals the inner workings in a readable and accessible format. No obfuscation or minified JS to trawl through. It’s also very easy to get started with, and pairs with Eleventy perfectly.
