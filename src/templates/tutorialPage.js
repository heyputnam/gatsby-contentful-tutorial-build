import * as React from 'react'
import Layout from '../globalStyle'
import styled from 'styled-components'
import { graphql } from 'gatsby' 
import TutorialSteps from '../components/tutorialSteps'

const TutorialPage = styled.section`
height: 75vw;

`

const Title = styled.h1`


`

const Quote = styled.p`


`
const Top = styled.section`
text-align: center;
height: 3vw;
`
const Content = styled.section`

height: 100%;

`
const Tutorial = ({data, name}) =>{

return(
  
    <>
<Layout>
       
       <TutorialPage>
     
      <Content>
   <TutorialSteps data={data} name={data.name}/>
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
                steps {
                    lesson {
                    name
                  }
                  steps {
                    name
                    photoExample {
                      fluid {
                        src
                      }
                    }
                    richDirections {
                      raw
                    }
                  }
                
                }
              }
            }
 


`

export default Tutorial; 

