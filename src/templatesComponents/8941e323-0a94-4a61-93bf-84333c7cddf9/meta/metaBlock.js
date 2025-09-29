export const generateMetaBlock = (pageMeta, websiteId) => {
  const metaTags = [
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    `<meta name="website-id" content="${websiteId}">`,
    pageMeta.meta_locale ? `<meta property="og:locale" content="${pageMeta.meta_locale}" />` : "",
    pageMeta.meta_type ? `<meta property="og:type" content="${pageMeta.meta_type}" />` : "",
    pageMeta.meta_title ? `<meta property="og:title" content="${pageMeta.meta_title}" />` : "",
    pageMeta.meta_description ? `<meta property="og:description" content="${pageMeta.meta_description}" />` : "",
    pageMeta.meta_url ? `<meta property="og:url" content="${pageMeta.meta_url}" />` : "",
    pageMeta.meta_site_name ? `<meta property="og:site_name" content="${pageMeta.meta_site_name}" />` : "",
    pageMeta.meta_image ? `<meta property="og:image" content="${pageMeta.meta_image}" />` : "",
    pageMeta.meta_width ? `<meta property="og:image:width" content="${pageMeta.meta_width}" />` : "",
    pageMeta.meta_height ? `<meta property="og:image:height" content="${pageMeta.meta_height}" />` : "",
    pageMeta.meta_imageType ? `<meta property="og:image:type" content="${pageMeta.meta_imageType}" />` : "",
    pageMeta.meta_google_site_verification 
      ? `<meta name="google-site-verification" content="${pageMeta.meta_google_site_verification}" />` 
      : ""
  ];

  return metaTags.filter(Boolean).join("\n");
};
