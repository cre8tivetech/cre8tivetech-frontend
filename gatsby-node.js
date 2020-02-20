const createPages = require(`./gatsby/createPages`)
const createPosts = require(`./gatsby/createPosts`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
}