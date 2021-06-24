import React from "react";
import styled from "styled-components";
import {useState } from 'react'

const Open = styled.button`

`
const PopUp = styled.div`
    position: absolute;
    width: 100%;
    height: 20rem;
    justify-content: center;
  
`
const Box = styled.div`
 display: flex;
    width: 35%;
    height: auto;
  
  
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: hidden;

`
const Close = styled.button`

content: 'x';
    cursor: pointer;
    display: flex;
    right: calc(15% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
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
           <Close  onClick={() => setIsOpen(!isOpen)}>
           <span className="close-icon" >x</span>
           </Close>
           <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"></img>
         </Box>
       )}
       </PopUp>
  </>   
  );
};
 
export default Popup;