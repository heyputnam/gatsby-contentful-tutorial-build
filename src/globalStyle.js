import * as React from "react"
import { createGlobalStyle } from "styled-components"
import NavBar from './components/navBar'

const GlobalStyle = createGlobalStyle`
html.fp-enabled,
.fp-enabled body {
    margin: 0;
    padding: 0;
    overflow:hidden;

    /*Avoid flicker on slides transitions for mobile phones #336 */
    /* -webkit-tap-highlight-color: rgba(0,0,0,0); */
}
.fp-section {
    position: relative;
    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
    -moz-box-sizing: border-box; /* <=28 */
    box-sizing: border-box;
}
.fp-slide {
    float: left;
}
.fp-slide, .fp-slidesContainer {
    height: 50%;
    display: flex;
  
}

.fp-slides {
    z-index:1;
    /* height: 100%;
    overflow: hidden;
    position: relative; */
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
    width: 90%;
    height: 100%;
}
.fp-slidesContainer {
    /* float: left; */
    position: relative;
    justify-content: center;
    
}
.fp-controlArrow {
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    position: absolute;
    z-index: 4;
    top: 50%;
    cursor: pointer;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: -38px;
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}

.fp-controlArrow.fp-prev {
    left: 15px;
    width: 0;
    border-width: 38.5px 34px 38.5px 0;
    border-color: transparent #D3A9EC transparent transparent;
}
.fp-controlArrow.fp-next {
    right: 15px;
    border-width: 38.5px 0 38.5px 34px;
    border-color: transparent transparent transparent #D3A9EC;
}
.fp-scrollable {
    overflow: hidden;
    position: relative;
}
.fp-scroller{
    overflow: hidden;
}
.iScrollIndicator{
    border: 0 !important;
}
.fp-notransition {
    -webkit-transition: none !important;
    transition: none !important;
}
#fp-nav {
    position: fixed;
    z-index: 100;
    top: 50%;
    opacity: 1;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translate3d(0,-50%,0);
}
#fp-nav.fp-right {
    right: 17px;
}
#fp-nav.fp-left {
    left: 17px;
}
.fp-slidesNav{
    position: absolute;
    z-index: 4;
    opacity: 1;
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    left: 0 !important;
    right: 0;
    margin: 0 auto !important;
}
.fp-slidesNav.fp-bottom {
    bottom: 17px;
}
.fp-slidesNav.fp-top {
    top: 17px;
}
#fp-nav ul,
.fp-slidesNav ul {
  margin: 0;
  padding: 0;
}
#fp-nav ul li,
.fp-slidesNav ul li {
    display: block;
    width: 14px;
    height: 13px;
    margin: 7px;
    position:relative;
}
.fp-slidesNav ul li {
    display: inline-block;
}
#fp-nav ul li a,
.fp-slidesNav ul li a {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
}
#fp-nav ul li a.active span,
.fp-slidesNav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li:hover a.active span{
    height: 12px;
    width: 12px;
    margin: -6px 0 0 -6px;
    border-radius: 100%;
 }
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    height: 4px;
    width: 4px;
    border: 0;
    background: #333;
    left: 50%;
    top: 50%;
    margin: -2px 0 0 -2px;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
}
#fp-nav ul li:hover a span,
.fp-slidesNav ul li:hover a span{
    width: 10px;
    height: 10px;
    margin: -5px 0px 0px -5px;
}
#fp-nav ul li .fp-tooltip {
    position: absolute;
    top: -2px;
    color: #fff;
    font-size: 14px;
    font-family: arial, helvetica, sans-serif;
    white-space: nowrap;
    max-width: 220px;
    overflow: hidden;
    display: block;
    opacity: 0;
    width: 0;
    cursor: pointer;
}
#fp-nav ul li:hover .fp-tooltip,
#fp-nav.fp-show-active a.active + .fp-tooltip {
    -webkit-transition: opacity 0.2s ease-in;
    transition: opacity 0.2s ease-in;
    width: auto;
    opacity: 1;
}
#fp-nav ul li .fp-tooltip.fp-right {
    right: 20px;
}
#fp-nav ul li .fp-tooltip.fp-left {
    left: 20px;
}
.fp-auto-height.fp-section,
.fp-auto-height .fp-slide,
.fp-auto-height .fp-tableCell{
    height: auto !important;
}

.fp-responsive .fp-auto-height-responsive.fp-section,
.fp-responsive .fp-auto-height-responsive .fp-slide,
.fp-responsive .fp-auto-height-responsive .fp-tableCell {
    height: auto !important;
}

/*Only display content to screen readers*/
.fp-sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
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
         <div>{children}</div> 
  
        </>
    )
}

export default Layout;