import * as React from "react"
import { createGlobalStyle } from "styled-components"
import NavBar from './components/navBar'

const GlobalStyle = createGlobalStyle`
:root{
   /* put color pallette variables here */
}




*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    scroll-behavior: smooth;

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


/* global style to override styles in fullpage.js */

.fp-controlArrow.fp-prev {
    left: 15px;
    width: 0;
    border-width: 38.5px 34px 38.5px 0;
    border-color: transparent #000 transparent transparent;
}
.fp-controlArrow.fp-next {
    right: 15px;
    border-width: 38.5px 0 38.5px 34px;
    border-color: transparent transparent transparent #000;
}
.fp-slide, .fp-slidesContainer {
    height: 50%;
    display: flex;
  
}
.fp-slides {
    z-index:1;
   
    -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */
    transition: all 0.3s ease-out;
}
.fp-section.fp-table, .fp-slide.fp-table {
    display: flex;
    flex-direction: column;

    width: 100%;
}
.fp-tableCell {
    display: flex;
    flex-direction: column;
    /* vertical-align: middle; */
    width: 90%;
    height: 100%;
    
}
.fp-slidesContainer {
    /* float: left; */
    position: relative;
    justify-content: center;
    
}
/* styles to set scrollbars on website  */

::-webkit-scrollbar {
    width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent; 
   
    border-radius: 10px;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #d9bae8; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
    background: #f1defa; 
}


`


const Layout = ({children}) => {
    return(
        <>
      <GlobalStyle/>
    <NavBar/>
          {children}
  
        </>
    )
}

export default Layout;