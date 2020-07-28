const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES($first:Int $after:String){
    wpgraphql {
      pages(
        first: $first 
        after: $after
        where: {
          parent: null
        }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          uri
          pageId
          title
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPages = []
  const workPages = []
  let pageNumber = 0
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.pageId)
      const workTemplate = path.resolve(`./src/templates/work.js`)
      const workPagePath = !variables.after ? `/work` : `/work/${pageNumber}`

      workPages[pageNumber] = {
        path: workPagePath,
        component: workTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }
      
      nodes.map(page => {
        allPages.push(page)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPages({ first: 12, after: endCursor })
      }
      return allPages
    })

  await fetchPages({ first: 12, after: null }).then(allPages => {
    // const pageTemplate = path.resolve(`./src/templates/page.js`)

    workPages.map(workPage => {
      console.log(`createWorkPage ${workPage.context.pageNumber}`)
      createPage(workPage)
    })

    // allPages.map(page => {
    //   console.log(`create page: ${page.uri}`)
    //   createPage({
    //     path: `/work/${page.uri}`,
    //     component: pageTemplate,
    //     context: page,
    //   })
    // })
  })
}