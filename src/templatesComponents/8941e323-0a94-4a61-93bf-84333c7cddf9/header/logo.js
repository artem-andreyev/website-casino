export const generateLogoHtml = (images, config) => {
  return `
    <div class="header-logo">
        <img loading="lazy"
             data-image="logo"
             src="${images.logo?.url}"
             alt="${config.websiteName} logo"
             class="logo-image"
             width="${images.logo?.width}"
             height="${images.logo?.height}">
    </div>
  `;
};
