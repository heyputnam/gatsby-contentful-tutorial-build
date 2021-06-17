const path = require('path')


exports.createPages = ({graphql, actions: { createPage }}) =>{
    return graphql(`
    {
      tutorial:    allContentfulLesson {
                         edges {
                             node {
                                slug
                                 name
                                }
                            }
               }
          }
  
    
    `).then((result)=>{
        result.data.tutorial.edges.forEach(({node})=>{
            createPage({
                path: `/tutorials/${node.slug}`,
                component: path.resolve('./src/templates/tutorialPage.js'),
                context:{
                    slug: node.slug,
                }
            })
        })
    })
}