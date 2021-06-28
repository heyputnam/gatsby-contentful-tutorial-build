import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'
import NavBar from '../components/navBar'
import ReactRotatingText from 'react-rotating-text'
import photo from '../images/icon.png'
import { useStaticQuery } from 'gatsby'
const HomePage = styled.div`
position: fixed;
height: 100rem;
width: 100%;
justify-content: center;
margin-top: -6rem;
background-color: black;
`
const Title = styled.h1`
margin-top: 10rem;
margin-left: 2rem;
margin-right: 2rem;
font-size: 9rem;
text-align: center;
color: white;

`



const IndexPage = ({word}) => {

  console.log()
  word = "word"
  


  return (
    
    
   <>
<Layout/>

    <HomePage>


    
<Title >

      <ReactRotatingText 
      items={["welcome to oh fck tutorials."]} 
      typingInterval={250} 
      eraseMode={'erase'} 
      deletingInterval={200 }
      pause={2500} />

</Title>

     </HomePage>


    
    </>
  )
}

export default IndexPage
