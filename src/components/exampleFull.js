
import React from "react";
import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from 'styled-components'
import NavBar from './exampleQuery'
import Layout from '../globalStyle'
import {useStaticQuery, graphql } from 'gatsby'
import { MARKS, INLINES} from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { CopyBlock, paraisoLight } from 'react-code-blocks'

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
const FullpageWrapper = ({chidren, header}) => {

  const [section, setSection] = useState([
    useStaticQuery(graphql`
query fullQuery {
 
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
    return (
      s
    )
  })

  const reOrder = realSection.reverse()

  console.log(reOrder)

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
        <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          overflowX: 'auto',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        }}
      >
        <CopyBlock
        language="javascript"
        text={node}
        wrapLines={true}
        codeBlock
        
        codeContainerStyle={{
          // fontSize: '15px' ,
          // fontSize: "0.6em",
         
        }}
        customStyle={{
        height: 'auto',
        width: '55%',
        overflowY: 'scroll',
        margin: '0px 0.75rem',
        borderRadius: '5px',
        boxShadow: '6px 6px 6px rgba(0,0,0,0.35)',
        fontSize: '0.75rem',}}
        theme={paraisoLight}
        showLineNumbers={true}
    
      />
       
       </div>
      
         
      )
    }
  }
  }
  return (
   <>
   <Layout>
  <h1 style={{
    textAlign: 'center',
    fontSize: '1.2rem',
  }}> {header}</h1>
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
            <h1 style={{
                 textAlign: 'center',
               }}> <button onClick={() => fullpageApi.moveTo(1, 0)} style={{
               fontSize: '1rem',
               margin: '1rem',
               background: '#d9bae8',
               color: 'black',
               borderRadius: '65px',
               width: '11em',
               height: '3em',
               cursor: 'pointer',
               boxShadow: '8px 8px 8px rgba(0,0,0,0.35)',
             }}>
               go to the beginning</button>
                </h1>
               <h1 style={{
                 textAlign: 'center',
                 fontSize: '4rem',
                 color: "#663399",
               }}>{t.name}</h1>
             
               <div className="directionContainer"
               style={{
                height: "35vw",
                overflow: "scroll",
                display: "flex",
                paddingTop: '3rem',
               }}>
                 <div className="directions" 
                >
               <div style={{
               }}>  {renderRichText(t.richDirections, options)}
                  <div className="Container"
                  style={{
                    height: "auto",
                    width: "50em",
                    textAlign: "center",
                    marginLeft:'21.4%',
                    paddingTop: '3em',
                  }}
                  > 
                  <h2 style={{
                    marginBottom: "2rem",
                    fontSize: '2rem',
                    color: "#8a4baf",
                  }}>Example</h2>
                  <img src={t.photoExample.fluid.src} height={200} width={200}></img>
                  </div>
               </div>
                 </div>
                
               </div>
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
