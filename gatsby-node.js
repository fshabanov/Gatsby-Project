const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            author
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { slug, author } = node.frontmatter
    actions.createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug },
    })
    actions.createPage({
      path: `/author/${author}`,
      component: path.resolve("./src/templates/author-posts.js"),
      context: { author },
    })
  })
}
