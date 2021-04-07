const breadcrumb = (page, title, parent = null) => {
  const root = "<span class='color-secondary'>v4</span>";
  const divider = "<span class='color-secondary'> / </span>";
  const homeLink = "<a href='/' class='link'>...</a>";
  const currentPage = `<a href='${page}' class='link'>${title}</a>`;
  const parentLink = parent
    ? `<a href="${parent}" class="link">...</a>${divider}`
    : "";

  return `<nav>
            <p class="tertiary-text">
              ${root}
              ${divider}
              ${page !== "/" ? homeLink + divider : ""}
              ${parentLink}
              ${currentPage}
            </p>
          </nav>`;
};

export default breadcrumb;
