
import React from "react";
import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from 'styled-components'
import NavBar from './exampleQuery'
import Layout from '../globalStyle'
import {useStaticQuery } from 'gatsby'
import { MARKS, INLINES} from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { CopyBlock, dracula } from 'react-code-blocks'

const Container = styled.section`
display: flex;

justify-content: center;
margin-top: -29em;
height: 75vw;
`


const Example = styled.section`

`
const Text = styled.section`

`
const FullpageWrapper = ({chidren}) => {

  const [section, setSection] = useState([
    useStaticQuery(graphql`
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
  ]
    )

  const  mapSection = section[0].allContentfulSteps.edges.map(
      sec => (
        sec.node.steps))

  const realSection = mapSection.map(s => {
    return s
  })

  console.log(realSection)

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
  return (
   <>
   <Layout>
   
    <ReactFullpage
      sectionsColor={["white"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper >
            <div className="section" style={{
              display: "flex",
        
              
              
              
            }}>
              {realSection.map((t, idx) => {
                return( 
              <div key={t} className="slide" >
                  <div className="style" style={{    
   marginLeft: "13em",
   marginTop: "2em",
    height: "75vw",
    position: "flex",
    }}>
               <h3>slide : {idx}</h3>
               <h1>name: {t.name}</h1>
             
               <div className="directionContainer"
               style={{
                height: "40vh",
                overflow: "scroll",
                
              
              
                
               }}>
                 <div className="directions" 
                 style={{
                
                 }}>
               <p>  {renderRichText(t.richDirections, options)}</p>
                 </div>
               </div>
     
               <div className="imageContainer"
                style={{ 
                 width: "33vw", 
                 display: "flex",
                  justifyContent: "center", 
                  marginTop: "3rem",
                  marginBottom: "10px",
                 
                  
                   }}>
               <img src={t.photoExample.fluid.src} ></img>
            </div>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button> 
            
             </div>
            
              </div>
              )})}
            </div>
            
          </ReactFullpage.Wrapper>
      )
      }}
    />
  
    </Layout>
    </>
  )
}




export default FullpageWrapper;
