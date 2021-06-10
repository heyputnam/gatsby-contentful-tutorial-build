import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"

const QuerySection = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Step = styled.div`
padding: 1rem;
align-items: center;
display: flex;
flex-direction: column;
`
const Title = styled.h1`

`
const Directions = styled.p`

`
const Example = styled.img`

`
const ExampleQuery = () => {
// const data = useStaticQuery(graphql`
// query DirectionQuery {
//   allContentfulTutorialDirections {
//     edges {
//       node {
//         name
//         directions {
//           directions
//         }
//         photoExample {
//           fluid {
//             base64
//             src
//           }
//           description
//         	title
//           }
//         }
//       }
//     }
// }


// `)
const data2 = useStaticQuery(graphql`
query MyQuery {
  allContentfulDirectionPost {
    nodes {
      steps {
        id
        name
        photoExample {
          fluid {
            src
          }
          contentful_id
        }
        directions {
          directions
          id
        }
      }
    }
  }
}


`
  )

// let g = data.allContentfulTutorialDirections.edges[0].node
let f = data2.allContentfulDirectionPost.nodes.map(d => {
  return(d.steps)
})

console.log(f)
    return(
      <QuerySection>
      {f.map(d => {
        return(
          <div key={d.name}>
     
          <Step>
          <Title>{d.name}</Title>
          <Directions>{d.directions.directions}</Directions>
          <Example src={d.photoExample.fluid.src} />
          </Step>
        

        </div>
       
       ) })}
  </QuerySection>
    )
}

export default ExampleQuery;