const path = require('path');
const { formBlogPostPathFromSlug } = require('./configUtils/pathUtils');

const populatePathFieldOnPosts = ({ node, actions }) => {
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('posts')
  ) {
    const postPath = formBlogPostPathFromSlug(node.frontmatter.slug);

    actions.createNodeField({
      node,
      name: 'path',
      value: postPath,
    });
  }
};

const createBlogPostPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    'src',
    'templates',
    'blogPost',
    'index.jsx',
  );

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

module.exports = {
  createPages: createBlogPostPages,
  onCreateNode: populatePathFieldOnPosts,
};
