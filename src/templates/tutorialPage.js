import * as React from 'react'
import Layout from '../globalStyle'
import styled from 'styled-components'
import { graphql } from 'gatsby' 
import NavBar from '../components/navBar'
import StepDirections from '../components/exampleQuery'

const TutorialPage = styled.section`
height: 75vw;

`

const Title = styled.h1`


`

const Quote = styled.p`


`
const Top = styled.section`
background: yellow;
height: 3vw;
`
const Content = styled.section`
background: blue;
height: 100%;

`
const Tutorial = ({data}) =>{

return(
  
    <>
    <Layout>
       <NavBar/>
       <TutorialPage>
       <Top>
      <Title>tutorial name: {data.contentfulLesson.name}</Title>
      <Quote>are you ready to start learning? <span role="img">🧠 🧠</span></Quote>
      </Top>
      <Content>
     <StepDirections/>
       </Content>
      </TutorialPage>
    </Layout>
    </>
)
}

export const query = graphql`
query ($slug: String!){
   contentfulLesson(slug: {eq: $slug}){
            name
            slug
      }
   }

`

export default Tutorial; 

