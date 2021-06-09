import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"

const QuerySection = styled.div`


`

const ExampleQuery = () => {
const data = useStaticQuery(graphql`
query DirectionQuery {
  allContentfulTutorialDirections {
    edges {
      node {
        name
        directions {
          directions
        }
        photoExample {
          fluid {
            base64
            src
          }
          description
        	title
          }
        }
      }
    }
}


`)
// let g = data.allContentfulTutorialDirections.edges[0].map((edge) =>{
//   return(
//     edge.node.directions
//   )
// })
let g = data.allContentfulTutorialDirections.edges[0].node.name
console.log(g)
    return(
        <QuerySection>
          <p>{g}</p>
        </QuerySection>
    )
}

export default ExampleQuery;