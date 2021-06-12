import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import StepDirections from '../components/exampleQuery'
import Layout from '../globalStyle'

const Tutorial = styled.div`
display: flex;
position: relative;
height: 100vw;

`
const Nav = styled.nav`
background: black;
padding: 1rem;
height: 6rem;

margin-left: 1.5rem;
width: calc(5rem + 8vw);
text-align: center;

a{
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  cursor: pointer;


}
`
const Container = styled.div`
justify-content: center;
flex-direction: column;
display: flex;
margin-top: 14rem;
`
const Title = styled.p`
font-size: 3rem;
/* align-content: center;
justify-content: center; */
text-align: center;
p{
    font-size: 1.7rem;
}
`
const TutorialPage = ({children}) => {
  return (
  <Layout>
   <Title><h1>Tutorial Page</h1>
        <p>(this is the good stuff!)</p>
    </Title>
    <Tutorial>
        <section>
    <Nav>
         <Link to="/">click to go home</Link>
    </Nav>
    </section>
    <Container>

     <StepDirections  title={"adding content from Contentful to query using graphQl"} />
     </Container>
    </Tutorial>
  </Layout>
  )
}

export default TutorialPage;