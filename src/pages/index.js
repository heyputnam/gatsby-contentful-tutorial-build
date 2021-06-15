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
margin-top: 3rem;
font-size: 9.5rem;
text-align: center;

.highlight{
  background: #bc13fe;
  color: white;
  margin-left: 18%;
  width: 60%;
}


.highlight-1{
  background: #bc13fe;
  color: white;
  margin-left: 35%;
  width: 30%;
}

`
const IndexPage = ({children}) => {
  return (
    <Layout>
    <NavBar/>
    <HomePage>
      <div>
      <Title>Welcome to <p className="highlight-1">all</p> about the great<p className="highlight"> Gatsby.js</p></Title>
     </div>
     </HomePage>
    </Layout>
  )
}

export default IndexPage
