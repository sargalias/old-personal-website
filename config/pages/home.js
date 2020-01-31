import site from '../site';

const home = Object.freeze({
  title: site.title,
  description: site.description,
  canonicalUrl: site.baseUrl,
});

export default home;
