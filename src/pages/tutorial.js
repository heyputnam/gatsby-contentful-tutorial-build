import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import ExampleQuery from '../components/exampleQuery'
import Layout from '../globalStyle'

const Tutorial = styled.div`
display: flex;

`

const Nav = styled.nav`
background: black;
margin-top: 22%;
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
display: flex;
justify-content: center;
margin-left: calc(8rem + 8vw);
margin-top: 2rem;
display: flex;
flex-direction: column;
`

const Title = styled.h1`
font-size: 3rem;
align-content: center;
justify-content: center;
text-align: center;
p{
    font-size: 1.7rem;
}
`

const TutorialPage = ({children}) => {
  return (
      <Layout>
    <Tutorial>
    <Nav>
        <Link to="/">click to go home</Link>
    </Nav>
    <Container>
    <Title><h1>Tutorial Page</h1>
        <p>(this is the good stuff!)</p>
    </Title>
     <ExampleQuery  />
     </Container>
    </Tutorial>
    </Layout>
  )
}

export default TutorialPage;