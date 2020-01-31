import paths from 'config/paths.json';

const { blogPostPathPrefix, doesUrlHaveTrailingSlash } = paths;

const formBlogPostPathFromSlug = slug => {
  if (!slug) {
    throw new TypeError('slug needs to be provided');
  }
  return `${blogPostPathPrefix}${slug}${doesUrlHaveTrailingSlash ? '/' : ''}`;
};

export { formBlogPostPathFromSlug };
