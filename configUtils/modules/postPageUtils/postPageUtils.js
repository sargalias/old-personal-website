import blogPostPageConfig from 'config/pages/blogPost';

const formSeoTitle = (seoTitle, config = blogPostPageConfig) => {
  const { defaultSeoTitle, titleDelimiter, titleSuffix } = config;
  const prefix = seoTitle ? seoTitle : defaultSeoTitle;
  return `${prefix} ${titleDelimiter} ${titleSuffix}`;
};

export { formSeoTitle };
