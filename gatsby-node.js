const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// This isn't working anymore
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `RecipesYaml`) {
    // Generate slugs from the filename and add them to the node
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  return graphql(`
    {
      allRecipesYaml {
        edges {
          node {
            title
            slug
            ingredients {
              text
              protip
            }
            instructions {
              text
              protip
            }
          }
        }
      }
    }
  `
).then(result => {
    // console.log(JSON.stringify(result, null, 4))
    result.data.allRecipesYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/recipe.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          title: node.title,
          ingredients: node.ingredients,
          instructions: node.instructions,
          slug: node.slug,
        },
      })
    })
  })
}
