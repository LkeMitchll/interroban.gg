import type { BlogPost } from "services/contentful.types";
import unified from "unified";
import markdown from "remark-parse";
import footnotes from "remark-footnotes";
import html from "remark-html";

function convertToHTML(rawMarkdown: string): string {
  let processedHtml: string;
  unified()
    .use(markdown)
    .use(footnotes)
    .use(html)
    .process(rawMarkdown, (error, file) => {
      if (error) throw error;
      processedHtml = String(file);
    });

  return processedHtml;
}

const generateRssItem = (post: BlogPost): string => `
  <item>
    <guid>https://interroban.gg/post/${post.slug}</guid>
    <title><![CDATA[${post.title}]]></title>
    <link>http://interroban.gg/post/${post.slug}</link>
    <description>
      <![CDATA[${convertToHTML(post.contentMarkdown)}]]>
    </description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts: BlogPost[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Journal - Luke Mitchell</title>
      <link>https://www.interroban.gg/journal</link>
      <description>Personal blog of Luke Mitchell, Product Designer</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://interroban.gg/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;

export default generateRss;
