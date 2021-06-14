const path = require('path')


exports.createPages = ({graphql, actions: { createPage }}) =>{
    return graphql(`
    {
        steps: allContentfulTutorialDirections{
            edges {
                node {
                  id
                }
              }
        }
    }
    
    `).then((result)=>{
        result.data.steps.edges.forEach(({node})=>{
            createPage({
                path: node.id,
                component: path.resolve('./src/templates/tutorial.js'),
                context:{
                    id: node.id,
                }
            })
        })
    })
}