import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link, Img } from "gatsby"
import {BLOCKS, MARKS, INLINES} from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { CopyBlock, dracula } from 'react-code-blocks'


const TutorialName = styled.h1`
text-align: center;
margin-left: -15.5rem;

background: black;
color: white;



`

const QuerySection = styled.div`
display: flex;
flex-direction: column-reverse;
margin-top: 0rem;
height: 100vh;
/* margin-top: 3rem; */

`
const StepContainer = styled.div`
display: flex;
margin-right: 15%;
flex-direction: row;
`
const Step = styled.div`
padding: 3rem;
align-items: center;
display: flex;


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

padding: 1rem;
text-align: center;
font-size: 1.2rem;
`
const DirectionContainer = styled.div`
width: 40rem;
height: 20rem;
overflow: scroll;
`
const Example = styled.img`
width: 30%;
height: 50%;
margin-left: 1rem;

`
const StepDirections = ({title}) => {
const stepQuery = useStaticQuery(graphql`
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
        <CopyBlock
        language="javascript"
        text={node}
        wrapLines={false}
        codeBlock
        codeContainerStyle={{textAlign: 'left', fontSize: '15px'}}
        theme={dracula}
        showLineNumbers={false}
    
      />
         
      )
    }
  }
  }
  // mapping query's can probably go back and clean this up
  const rawQuery = stepQuery.allContentfulContentfulsteps.edges.map( query =>{
    return(
      query.node.steps.richDirections.raw,
      console.log( query.node.steps.richDirections.raw)
    
    )
  } )
 
  const stepData = stepQuery.allContentfulContentfulsteps.edges.map(d => {
  return(d.node.steps)
  })
  const trueData = stepData.map(data => {
  return(
    data
  )
})
// console.log(rawData.raw)
    return(
      <>
      <div style={{marginLeft: '22%',
                  marginRight: '22%'}}>
      <TutorialName className="title">{title}</TutorialName>
      </div>
      <QuerySection>
       
          
            {trueData.map(rich =>{
            console.log(rich)
            return(
     
            
      
              <StepContainer >
              <div key={rich.name}>
          <Step>
          <Title>{rich.name}</Title>
          <DirectionContainer>
            <Directions key={rich.richDirections.raw}>
              {/* this is the important part for rendering the text */}
           {renderRichText(rich.richDirections, options)}
            </Directions>
          </DirectionContainer>
          <Example src={rich.photoExample.fluid.src} height={400} width={400} className={rich.name}/>
          </Step>
        </div>
        </StepContainer>
    
       ) })}
   
  </QuerySection>
              </>
    )

  }

export default StepDirections;

