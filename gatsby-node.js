const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const sluggify =  fullPath => {
  return fullPath.replace(/^.*[\\\/]/, '').replace('\.md', '')
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
      allFile(filter: {relativePath: {regex: "/recipes/"}, ext: {eq: ".md"}}) {
        edges {
          node {
            childMarkdownRemark {
              fileAbsolutePath
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    }
    `
).then(result => {
    // console.log(JSON.stringify(result, null, 4))
    // flatten and transform the result
    // flatResults = []
    // result.data.allFile.edges.map(node => {
    //   // console.log(node)
    //   flatResults.push({
    //       node: {
    //         relativePath: node.node.relativePath,
    //         slug: `/recipes/${yamlSluggify(node.node.relativePath)}`,
    //         genericYaml: node.node.childMeatYaml || node.node.childOtherYaml || node.node.childPastaYaml || node.node.childSaladYaml,
    //       }
    //     })
    // })

    result.data.allFile.edges.forEach(({ node }) => {
      // console.log(`${node.genericYaml.title}, ${node.slug}`)
      createPage({
        path: `/recipes/${sluggify(node.childMarkdownRemark.fileAbsolutePath)}`,
        component: path.resolve(`./src/templates/recipe.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          title: node.childMarkdownRemark.frontmatter.title,
          // category: include whether it is a meat, salad. etc
          // TODO: Ingredients are null sometimes???
          // If they are null for all salads, it could just be a YAML formatting issue.
          // If not, change this file to run four separate queries with four separate createPage steps
          // ingredients:
          // instructions: node.genericYaml.instructions,
          slug: sluggify(node.childMarkdownRemark.fileAbsolutePath),
          // path: `/recipes/${sluggify(node.childMarkdownRemark.fileAbsolutePath)}`,
          html: node.childMarkdownRemark.html,
        },
      })
    })
  })
}
