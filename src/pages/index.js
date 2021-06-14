import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'
import NavBar from '../components/navBar'

const HomePage = styled.div`
/* align-content: center;
justify-content: center;
text-align: center; */
display: flex;
height: 75vh;
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
    <NavBar/>
    <HomePage>
      <div>
      <Title>Welcome to <div>all</div> about the <p>Great</p> Gatsby.js</Title>
     </div>
     </HomePage>
    </Layout>
  )
}

export default IndexPage
