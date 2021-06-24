import * as React from "react"
import { createGlobalStyle } from "styled-components"
import NavBar from './components/navBar'
import Footer from './components/footer'
const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    scroll-behavior: false;
    cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;

}

body, html, a{
font-family: input-sans, sans-serif;

font-weight: 400;

font-style: normal;
}
body{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: var(--black);
    overflow-x: hidden;

}
h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;

}

a{
    text-decoration: none;
    outline: none;
}

button{
    border: none;
    outline: none;
    &:focus{
        outline: none;
    }
}

*:focus{
    outline: none;

}


img{
    width: 100%;
    height: auto; 
}


`


const Layout = ({children}) => {
    return(
        <>
    <GlobalStyle/>
<NavBar/>
         <div>{children}</div> 
  <Footer/>
        </>
    )
}

export default Layout;