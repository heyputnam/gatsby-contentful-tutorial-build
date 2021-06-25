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
    cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;
}

button{
    border: none;
    outline: none;
    cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;
    &:focus{
        outline: none;
    }
}

*:focus{
    outline: none;
    cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;

}


img{
    width: 100%;
    height: auto; 
}

link{
    cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;
}

/* change default scroll bars to not show  */
::-webkit-scrollbar {
width: 0;


}

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent; 
    cursor:pointer ;
    border-radius: 10px;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
    /* -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #d9bae8; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);  */
    display: none;
    cursor :pointer ;
}
::-webkit-scrollbar-thumb:window-inactive {
    /* background: #f1defa;  */
    cursor :pointer ;
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