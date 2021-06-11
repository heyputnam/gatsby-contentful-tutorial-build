import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link, Img } from "gatsby"
import {BLOCKS, MARKS} from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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
const myquery = useStaticQuery(graphql`
query MyQuery {
  allContentfulContentfulsteps {
    edges{
    node {
      steps {
        spaceId
        richDirections{
          raw
        }
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
}

`
  )
let stepData = myquery.allContentfulContentfulsteps.edges.map(d => {
  return(d.node.steps)
})
// console.log(stepData)
const trueData = stepData.map(data => {
  return(
    data
  )
})
// console.log(rawData.raw)
    return(
      <QuerySection>
           <h2 className="title">{title}</h2>
            {trueData.map(rich =>{
            console.log(rich)
            return(
              <div key={rich.name}>
          <Step>
          <Title>{rich.name}</Title>
          <DirectionContainer>
            <Directions key={rich.richDirections.raw}>
           {renderRichText(rich.richDirections)}
            </Directions>
          </DirectionContainer>
          <Example src={rich.photoExample.fluid.src} height={400} width={400} className={rich.name}/>
          </Step>
        </div>
       ) })}
  </QuerySection>
    )
  }

export default ExampleQuery;

