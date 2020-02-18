import site from '../site';

const blogPost = Object.freeze({
  titleSuffix: site.title,
  titleDelimiter: '|',
  defaultSeoTitle: 'Blog post',
  canonicalUrlPrefix: `${site.baseUrl}/blog/`,
  doesUrlHaveTrailingSlash: true,
});

export default blogPost;
