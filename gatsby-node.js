const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/template.js`)

  createPage({
    component: template,
    path: `/sample.html`,
    context: {}
  })
}