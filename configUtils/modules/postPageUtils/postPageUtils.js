import blogPostPageConfig from 'config/pages/blogPost';

const formSeoTitle = (seoTitle, config = blogPostPageConfig) => {
  const { defaultSeoTitle, titleDelimiter, titleSuffix } = config;
  const prefix = seoTitle ? seoTitle : defaultSeoTitle;
  return `${prefix} ${titleDelimiter} ${titleSuffix}`;
};

const formSeoDescription = ({ seoDescription, excerpt }) =>
  seoDescription || excerpt;

export { formSeoTitle, formSeoDescription };
