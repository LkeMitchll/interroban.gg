const breadcrumbs = (url) => {
  const parts = url.split("/").filter(Boolean);
  if (parts.length < 2) return "";

  const breadcrumbs = [];
  let path = "";

  if (parts[0] === "post") {
    breadcrumbs.push({ name: "journal", url: "/journal" });
    breadcrumbs.push({ name: "writing", url: "/journal#writing" });
    parts.shift();
  }

  parts.forEach((part, index) => {
    path += `/${part}`;
    const isLast = index === parts.length - 1;
    const isSecond = index === 1;

    let anchorLink;
    let name = part;
    if (isSecond && parts[0] === "colophon" && part === "post") {
      anchorLink = "/colophon#updates";
      name = "updates";
    } else {
      anchorLink = isSecond ? `/${parts[0]}#${part}` : path;
    }

    breadcrumbs.push({
      name: name,
      url: isLast ? null : anchorLink,
    });
  });

  return `<nav aria-label="Breadcrumb">
      <ol role="list" class="horizontal | tertiary-text" style="--gap: var(--space-small);">
        <span>.. /</span>
        ${breadcrumbs
          .map((crumb) =>
            crumb.url
              ? `<li><a href="${crumb.url}">${crumb.name}</a><span> /</span></li>`
              : `<li><a href="${url}" role="link">&darr;</a></li>`,
          )
          .join("")}
      </ol>
    </nav>`;
};

export default breadcrumbs;
