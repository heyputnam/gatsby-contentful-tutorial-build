
import * as React from "react"
import styled from "styled-components"
import StepDirections from '../components/exampleQuery'
import Layout from '../globalStyle'
import NavBar from '../components/navBar'

const Tutorial = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
justify-content: center;
align-items: center;

`
const Title = styled.p`
font-size: 3rem;
text-align: center;

p{
    font-size: 1.7rem;

    
}

.small {
  font-size: 0.9rem;
}
`
const TutorialPage = ({children}) => {
  return (
 
   
    <>
    <Layout>
   <Title><h1>Tutorial Page</h1>
        <p>this is the good stuff!</p>
       
    </Title>
    <Tutorial>
    <Container>
      <StepDirections title={"contentful + gatsby 101"}></StepDirections>
     </Container>
    </Tutorial>
    </Layout>
</>
  )
}

export default TutorialPage;