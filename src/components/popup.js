import React from "react";
import styled from "styled-components";
import {useState } from 'react'

const Open = styled.button`

`
const PopUp = styled.div`
/* display: flex; */
    position: absolute;
    width: auto;
    height: auto;
    justify-content: center;
    z-index: 2;
    margin-left: -4rem;
    
    
`
const Box = styled.div`
 display: flex;
 position: fixed;
 top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(5, 5, 5, 0.85);
    padding: 27px;
    overflow: hidden;
    img {
        padding: 1rem;
    }

`
const Close = styled.div`
display: flex;
text-align: center;

button{
    position: fixed;
    margin-top: -1.2rem;
    margin-left: -1rem;
    padding-bottom: 0.2rem;

    background-color: #8BAEFE;
    width: 35px;
    height: 33px;
    border-radius: 50%;
    line-height: 5px;
    border: 2px solid black;
    font-size: 22px;
}
`

const Popup = props => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
  return (
      <>
    <Open
    onClick={() => setIsOpen(!isOpen)}
    data-toggle="modal"
  
   >open</Open>
       <PopUp>
       {isOpen && (
         <Box>
           <Close >
           <button onClick={() => setIsOpen(!isOpen)}>x</button>
           </Close>
           <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"></img>
         </Box>
       )}
       </PopUp>
  </>   
  );
};
 
export default Popup;