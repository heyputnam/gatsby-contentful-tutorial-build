import React from 'react'

import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import { MARKS, INLINES} from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { CopyBlock, dracula } from 'react-code-blocks'
import FullpageWrapper from './exampleFull'
import ReactFullpage from "@fullpage/react-fullpage";


const fullpageOptions = {
  anchors: ['page'],
  liscenseKey: ['A5C79534-BA464A17-BE12B56C-D5657DB3']
}

const QuerySection = styled.div`
display: flex;
flex-direction: column-reverse;



`
const StepContainer = styled.div`
display: flex;

width: 100%;
height: 60vw;

`
const Step = styled.div`
display: flex;
height: 100%;
padding: 2rem;
flex-direction: column;
margin: 2em;


`
const Title = styled.p`
letter-spacing: 4px;
font-size: 3rem;
/* width: calc(9rem + 9vw) ; */
font-family: shuriken-std, sans-serif;
font-weight: 400;
font-style: normal;
text-align: center;
`
const Directions = styled.div`
text-align: center;
padding: 1rem;

font-size: 1.2rem;
`
const DirectionContainer = styled.div`
/* width: 40rem;
height: 20rem;
overflow: scroll; */



`
const Example = styled.div`
margin-top: 2rem;
width: 50em;
height: 50em;
margin-left: 5rem; 
align-self: center;

`
const StepDirections = ({title, fullpageProps}) => {
const stepQuery = useStaticQuery(graphql`
query MyQuery {
  allContentfulSteps {
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
      [INLINES.HYPERLINK]: (node, children) => {
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
  // const rawQuery = stepQuery.allContentfulSteps.edges.map( query => {
  //   return(
  //     query.node.steps.richDirections,
  //     console.log( query.node.steps.richDirections.raw)
    
  //   )
  // } )
 
  const stepData = stepQuery.allContentfulSteps.edges.map(d => {
  return(d.node.steps)
  })
  const trueData = stepData.map(data => {
  return(
    data
  )
})
// console.log(rawData.raw)
// const FullpageWrapper = fullpageProps => (
//   <ReactFullpage
//     {...fullpageOptions}
//     render={({ state, fullpageApi }) => {
//       console.log('render prop change', state) // eslint-disable-line no-console

//       if (state.callback === 'onLeave') {
//         if (state.direction === 'down') {
//           console.log('going down...' + state.origin.index)
//         }
//       }

    return(    
      <QuerySection>
     
            {trueData.map(rich =>{
            console.log(rich)
            return(
              
           
                 
              <StepContainer >
           
              <div key={rich.name} id={rich.name}>
       
      
           
              
        <Step>
            
      
        <section>
          <Title>{rich.name}</Title>
          <DirectionContainer>
            <Directions key={rich.richDirections.raw}>
              {/* this is the important part for rendering the text */}
           {renderRichText(rich.richDirections, options)}
            </Directions>
          </DirectionContainer>
        
        
          <Example>
            <img src={rich.photoExample.fluid.src} height={200} width={200} className={rich.name}></img>
          </Example>
          </section>
      
          </Step>
    </div>
    
        </StepContainer>
         
  
                  ) })}
  
     
  </QuerySection>
    

       
      

                   
  )       }


        

export default StepDirections;

