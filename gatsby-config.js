const gatsbySourceFilesystemConfig = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${__dirname}/posts`,
    },
  },
];

const gatsbyPluginDisqusConfig = {
  resolve: `gatsby-plugin-disqus`,
  options: {
    shortname: `sargalias`,
  },
};

const gatsbyAliasImportsConfig = {
  resolve: `gatsby-alias-imports`, // by default aliases all direct children of src/*
  options: {
    aliases: {
      config: './config',
      configUtils: './configUtils',
    },
  },
};

const gatsbyPluginManifestConfig = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/favicon.png`, // This path is relative to the root of the site.
  },
};

const gatsbyPluginSassConfig = {
  resolve: 'gatsby-plugin-sass',
  options: {
    includePaths: ['./src/Abstracts'],
  },
};

const gatsbyPluginWebFontLoaderConfig = {
  resolve: 'gatsby-plugin-web-font-loader',
  options: {
    google: {
      families: ['Raleway:400,700'],
    },
  },
};

const gatsbyTransformerRemarkConfig = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: ['gatsby-remark-prismjs'],
  },
};

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    ...gatsbySourceFilesystemConfig,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    gatsbyPluginManifestConfig,
    gatsbyAliasImportsConfig,
    gatsbyPluginSassConfig,
    gatsbyPluginWebFontLoaderConfig,
    gatsbyTransformerRemarkConfig,
    gatsbyPluginDisqusConfig,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
