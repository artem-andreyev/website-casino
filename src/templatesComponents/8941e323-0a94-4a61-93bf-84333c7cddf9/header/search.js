export const generateSearchBlock = (content) => {
  const placeholder = content.headerBlock?.searchPlaceholder || 'Search...';
  const searchIcon = content.headerBlock?.searchIconUrl || 'https://img.icons8.com/ios-filled/24/ffffff/search--v1.png';
  return `
    <div class="header-search-block">
      <form class="search-form" action="/search" method="get">
        <input type="text" name="q" class="search-input" placeholder="${placeholder}" autocomplete="off" />
        <button type="submit" class="search-button" aria-label="Search">
          <img src="${searchIcon}" alt="Search" class="search-icon" />
        </button>
      </form>
    </div>
  `;
};
