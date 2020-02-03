import blogPostPageConfig from 'config/pages/blogPost';

const formSeoTitle = (seoTitle, config = blogPostPageConfig) => {
  const { defaultSeoTitle, titleDelimiter, titleSuffix } = config;
  const prefix = seoTitle ? seoTitle : defaultSeoTitle;
  return `${prefix} ${titleDelimiter} ${titleSuffix}`;
};

const formSeoDescription = ({ seoDescription, excerpt }) =>
  seoDescription || excerpt;

const formCanonicalUrl = (slug, config = blogPostPageConfig) => {
  const { canonicalUrlPrefix, doesUrlHaveTrailingSlash } = config;
  return `${canonicalUrlPrefix}${slug}${doesUrlHaveTrailingSlash ? '/' : ''}`;
};

const formatExcerptOnNode = node => node;

export {
  formSeoTitle,
  formSeoDescription,
  formCanonicalUrl,
  formatExcerptOnNode,
};
