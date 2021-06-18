
import React from "react";
import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from 'styled-components'
import NavBar from './exampleQuery'
import Layout from '../globalStyle'
import {useStaticQuery } from 'gatsby'

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
  return (
   <>
   <Layout>
   
    <ReactFullpage
      sectionsColor={["tan"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
            
              {realSection.map((t, idx) => {
                return( 
              <div key={t} className="slide">
               <h3>slide : {idx}</h3>
               <h1>name: {t.name}</h1>
               <img src={t.photoExample.fluid.src} height={400} width={400}></img>
            
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button> 
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
