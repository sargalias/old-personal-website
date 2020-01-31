import site from '../site';

const blogPost = Object.freeze({
  titleSuffix: site.title,
  titleDelimiter: '|',
  defaultSeoTitle: 'Blog post',
  canonicalUrlPrefix: `${site.baseUrl}/blob/`,
  doesUrlHaveTrailingSlash: true,
});

export default blogPost;
