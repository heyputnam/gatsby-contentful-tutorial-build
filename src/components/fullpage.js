import * as React from "react"
import { createGlobalStyle } from "styled-components"

const FullPageStyles = createGlobalStyle`
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
`
const FullPageStyle = ({children}) => {
    return(
        <>
    <FullPageStyles/>
    {children}
    </>
    )
}

export default FullPageStyle;