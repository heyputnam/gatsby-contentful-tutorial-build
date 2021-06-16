import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'
import NavBar from '../components/navBar'
import ReactRotatingText from 'react-rotating-text'
import { Marker } from "react-mark.js";
import { render } from "react-dom"

const HomePage = styled.div`
/* align-content: center;
justify-content: center;
text-align: center; */
display: flex;
height: 75vh;
justify-content: center;
margin-top: 3rem;
`
const Title = styled.h1`
margin-top: 3rem;
font-size: 9.5rem;
text-align: center;
color: black;



`



const IndexPage = ({children}) => {

  
  return (

    <Layout>
    <NavBar/>
    <HomePage>
    
<Title >

      <ReactRotatingText items={["welcome to all about the great gatsby.js"]} typingInterval={250} eraseMode={'erase'} deletingInterval={200 }pause={2500} />

</Title>

     </HomePage>
    </Layout>
  )
}

export default IndexPage
