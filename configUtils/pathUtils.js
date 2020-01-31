const {
  blogPostPathPrefix,
  doesUrlHaveTrailingSlash,
} = require('../config/paths.json');

const formBlogPostPathFromSlug = slug => {
  if (!slug) {
    throw new TypeError('slug needs to be provided');
  }
  return `${blogPostPathPrefix}${slug}${doesUrlHaveTrailingSlash ? '/' : ''}`;
};

module.exports = { formBlogPostPathFromSlug };
