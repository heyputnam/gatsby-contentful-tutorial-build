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
justify-content: center;
`
const Title = styled.h1`
font-size: 9.5rem;
text-align: center;

.highlight{
  background: #bc13fe;
  color: white;
  margin-left: 25%;
  width: 50%;
}

`
const IndexPage = ({children}) => {
  return (
    <Layout>
    <NavBar/>
    <HomePage>
      <div>
      <Title>Welcome to <p className="highlight">all</p> about the <p className="highlight">Great</p> Gatsby.js</Title>
     </div>
     </HomePage>
    </Layout>
  )
}

export default IndexPage
