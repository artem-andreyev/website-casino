export const generateSearchBlock = (content, images, config) => {
  const placeholder = content.headerBlock?.searchPlaceholder || 'Search...';
  const searchIcon = images.searchIcon?.url || 'https://img.icons8.com/ios-filled/24/ffffff/search--v1.png';

  return `
    <div class="header-search-block">
      <form class="search-form" action="/search" method="get">
        <input 
          type="text" 
          name="q" 
          class="search-input" 
          placeholder="${placeholder}" 
          autocomplete="off" 
        />
        <button type="submit" class="search-button" aria-label="Search">
          <img 
            data-image="searchIcon" 
            src="${searchIcon}" 
            alt="Search" 
            class="search-icon" 
            width="${images.searchIcon?.width || 24}" 
            height="${images.searchIcon?.height || 24}" 
          />
        </button>
      </form>
    </div>
  `;
};
