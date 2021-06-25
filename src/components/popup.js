import React from "react";
import styled from "styled-components";
import {useState } from 'react'

const Open = styled.button`
margin-left: 44%;
margin-bottom: 2rem;
background: transparent;
img{
  height: 7rem;
  width: 10rem;
  

}
p{
  background: #FE6969;
  color: white;
  padding: 1rem;
  border-radius: 35px;
  margin-top: 1rem;
  font-size: 1.2rem;
  justify-content: center;
}
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

const Popup = ({picture}) => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
  return (
      <>
    <Open onClick={() => setIsOpen(!isOpen)}> 
    {/* <p>click me for more</p> */}
    <img src={picture}></img>
    <div>click to enlarge</div>
   </Open>
       <PopUp>
       {isOpen && (
         <Box>
           <Close>
           <button onClick={() => setIsOpen(!isOpen)}>x</button>
           </Close>
           {/* example "https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg" */}
           <img src={picture}></img>

         </Box>
       )}
       </PopUp>
  </>   
  );
};
 
export default Popup;