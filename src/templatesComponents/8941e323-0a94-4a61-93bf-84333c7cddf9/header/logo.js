export const generateLogoHtml = (content) => {
    return `
    <div class="header-logo">
        <img loading="lazy" 
             data-image="logo" 
             src="${content.headerBlock?.logo?.url}" 
             alt="${content.headerBlock?.websiteName} logo" 
             class="logo-image" 
             width="${content.headerBlock?.logo?.width}" 
             height="${content.headerBlock?.logo?.height}">
    </div>
    `;
};
