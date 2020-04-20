const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const yamlSluggify =  fullPath => {
  return fullPath.replace(/^.*[\\\/]/, '').replace('\.yml', '')
}

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
      allFile(filter: {
        relativePath: {
          regex: "/recipes/",
          nin: [
            "recipes/meat/TEMPLATE-DONOTREMOVE.yml",
            "recipes/other/TEMPLATE-DONOTREMOVE.yml",
            "recipes/pasta/TEMPLATE-DONOTREMOVE.yml",
            "recipes/salad/TEMPLATE-DONOTREMOVE.yml",
          ]
        },
        extension: {eq: "yml"}}) {
        edges {
          node {
            relativePath
            childMeatYaml {
              title
              ingredients {
                protip
                text
              }
              instructions {
                protip
                text
              }
            }
            childOtherYaml {
              title
              ingredients {
                protip
                text
              }
              instructions {
                protip
                text
              }
            }
            childPastaYaml {
              title
              ingredients {
                protip
                text
              }
              instructions {
                protip
                text
              }
            }
            childSaladYaml {
              title
              instructions {
                protip
                text
              }
              ingedients {
                protip
                text
              }
            }
          }
        }
      }
    }
    `
).then(result => {
    // console.log(JSON.stringify(result, null, 4))
    // flatten and transform the result
    flatResults = []
    result.data.allFile.edges.map(node => {
      // console.log(node)
      flatResults.push({
          node: {
            relativePath: node.node.relativePath,
            slug: `/recipes/${yamlSluggify(node.node.relativePath)}`,
            genericYaml: node.node.childMeatYaml || node.node.childOtherYaml || node.node.childPastaYaml || node.node.childSaladYaml,
          }
        })
    })

    flatResults.forEach(({ node }) => {
      // console.log(`${node.genericYaml.title}, ${node.slug}`)
      console.log(node.genericYaml.ingredients)
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/recipe.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          title: node.genericYaml.title,
          // category: include whether it is a meat, salad. etc
          // TODO: Ingredients are null sometimes???
          // If they are null for all salads, it could just be a YAML formatting issue.
          // If not, change this file to run four separate queries with four separate createPage steps
          ingredients: node.genericYaml.ingredients, // if this errors out, ensure every entry has an `ingredients` key!
          instructions: node.genericYaml.instructions,
          slug: node.slug,
        },
      })
    })
  })
}
