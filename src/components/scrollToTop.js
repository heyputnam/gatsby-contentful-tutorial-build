import peace from '../images/peace-symbol.png'
import styled from 'styled-components'
import * as React from 'react'
const Up = styled.div`
position: fixed;
right: 6em;
bottom: 5rem;
cursor: pointer;


@media only Screen and (max-width: 48em){
    display: none
}
img{
    height: 3rem;
    width: 3rem;
    margin-right: -4rem;
    /* border-radius: 50%; */
    transition: transform 0.3s;
    /* border: solid 2px white; */
 &:hover{
     transform:scale(1.5);
 }
 &:active{
    transform:scale(0.9);
 }
}
`


const ScrollToTop = () => {

    const Scroll = () =>{
        const element = document.getElementById('start');
        element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        })
    }

    return(
       <Up onClick={() => Scroll() }>
        <img src={peace} alt='top'></img>
       </Up>
    )
}

export default ScrollToTop;