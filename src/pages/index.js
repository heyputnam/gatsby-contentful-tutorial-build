import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'

const HomePage = styled.div`
/* align-content: center;
justify-content: center;
text-align: center; */
display: flex;
height: 40vh;
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
const Title = styled.h1`
font-size: 10rem;
margin-left: calc(4rem + 3vw);
align-content: center;
justify-content: center;
text-align: center;
`
const IndexPage = ({children}) => {
  return (
    <Layout>
    <HomePage>
    <Nav>
    <Link to="/tutorial">click to go to tutorials</Link>
    </Nav>
      <Title>Welcome to <div>all</div> about the <p>Great</p> Gatsby.js</Title>
    </HomePage>
    </Layout>
  )
}

export default IndexPage
