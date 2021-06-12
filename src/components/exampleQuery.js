import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link, Img } from "gatsby"
import {BLOCKS, MARKS, INLINES} from '@contentful/rich-text-types'
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
const StepContainer = styled.div`
display: flex;
background-color: aliceblue;
margin-right: 15%;
flex-direction: row;
`
const Step = styled.div`
padding: 3rem;
align-items: center;
display: flex;

/* flex-direction: column; */

`
const Title = styled.p`
letter-spacing: 4px;
font-size: 3rem;
width: calc(9rem + 9vw) ;
font-family: shuriken-std, sans-serif;
font-weight: 400;
font-style: normal;
`
const Directions = styled.div`
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

  const website_url = ''
  const options = {
    renderNode: {
      // hyperlinks to web pages supported 
      [INLINES. HYPERLINK]: (node, children) => {
        return <a href={`${node.data.uri}`}  key={children}>{(children)}</a>;
      }
     
    },
    renderMark: {
    [MARKS.CODE]: (node)=>{
      // code blocks formated
      console.log(node)
      return(
     
          <pre style={{background: 'black'}}>
          <code style={{color: 'white'}}>{node}</code>
          </pre>
      )
    }
  }
  }
  const rawQuery = myquery.allContentfulContentfulsteps.edges.map( query =>{
    return(
      query.node.steps.richDirections.raw,
      console.log( query.node.steps.richDirections.raw)
    
    )
  } )
 

  
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
           <h1 className="title">{title}</h1>
            {trueData.map(rich =>{
            console.log(rich)
            return(
              <StepContainer >
              <div key={rich.name}>
          <Step>
          <Title>{rich.name}</Title>
          <DirectionContainer>
            <Directions key={rich.richDirections.raw}>
           {renderRichText(rich.richDirections, options)}
            </Directions>
          </DirectionContainer>
          <Example src={rich.photoExample.fluid.src} height={400} width={400} className={rich.name}/>
          </Step>
        </div>
        </StepContainer>
       ) })}
       
  </QuerySection>
    )
  }

export default ExampleQuery;

