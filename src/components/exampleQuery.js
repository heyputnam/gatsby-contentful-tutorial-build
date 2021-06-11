import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const QuerySection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vw;
.title{
  color: white;
  background: black;
  margin-right: 7em;

}
`
const Step = styled.div`
padding: 3rem;
align-items: center;
display: flex;
/* flex-direction: column; */

`
const Title = styled.h1`
letter-spacing: 4px;
font-size: 3rem;
width: calc(9rem + 9vw) ;
font-family: shuriken-std, sans-serif;
font-weight: 400;
font-style: normal;
`
const Directions = styled.p`
/* width: 50%; */
padding: 1rem;
text-align: center;
font-size: 1.2rem;
`

const DirectionContainer = styled.div`
width: 35rem;
height: 15rem;
overflow: scroll;
`
const Example = styled.img`
width: 30%;
height: 50%;
margin-left: 1rem;

`
const ExampleQuery = ({title}) => {
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
const allStepData = useStaticQuery(graphql`
query MyQuery {
  allContentfulContentfulsteps {
    nodes {
      steps {
        name
        photoExample {
          fluid {
            src
          }
        }
        directions {
          directions
        }
      }
    }
  }
}


`
  )
// let g = data.allContentfulTutorialDirections.edges[0].node
let stepData = allStepData.allContentfulContentfulsteps.nodes.map(d => {
  return(d.steps)
})
// console.log(f)
    return(
      <QuerySection>
           <h1 className="title">{title}</h1>
      {stepData.map(step => {
        return(
          <div key={step.name}>
     
          <Step>
          <Title>{step.name}</Title>
          <DirectionContainer>
          <Directions>{step.directions.directions}</Directions>
          </DirectionContainer>
          <Example src={step.photoExample.fluid.src} height={400} width={400} className={step.name}/>
          </Step>
        </div>
       ) })}
  </QuerySection>
    )
  }

export default ExampleQuery;