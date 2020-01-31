import site from '../site';

const blog = Object.freeze({
  title: `Blog | ${site.title}`,
  description: `Latest articles and tutorials on programming best practices and in general about how to make good software.`,
  canonicalUrl: `${site.baseUrl}/blog/`,
});

export default blog;
