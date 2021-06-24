import * as React from 'react'
import styled from 'styled-components'

const Headers = styled.header`
display: flex;
justify-content: space-between;
height: 3rem;
font-size: 1rem;
padding-top: 0.5rem;
/* margin: 1rem; */
/* margin-bottom: 0.1rem; */
position: fixed;
left: 0;
right: 0;
top: 0;
background: white;
z-index: 1;


`

const Nav = styled.div`
display: flex;

font-size: 1.7rem;
a{
    color: black;
    cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;
   
}
.home{
  background: #F2B790;
  width: 7rem;
  padding-left: 1.2rem;
  margin-right: 1.2rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0.4rem;

}

a:not(:last-child){
  margin-right: 3rem;
  
}

`
const Logo = styled.div``

const Title = styled.h1`
letter-spacing: 5px;
font-size: 1.7rem;
color: #3347C8;
margin-left: 0.5rem;
`

const DropDown = styled.div`
z-index: 1;
display: inline-block;
height: 100%;
button{
  font-size: 1.7rem;
  color: black;
  background-color: transparent;
  margin-right: 3rem;
  cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;
}

&:hover .dropdown-content{
  a{
    margin-top: 1.4rem;
    color: #6D9BFE;
    
    display: inline-block;
    /* width: 75%; */
    cursor: url("https://i.ibb.co/fStr5rr/index-finger.png"),  auto;
  }

}

.dropdown-content{

display: flex;
flex-direction: column;
position: absolute;
cursor: url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto;

a{
 display: none;
}



a:hover{
background: #F6FE87;
color: black;
margin-top: 0.6rem;
margin-bottom: 0.6rem;
padding-left: 1rem;

font-size: 2.5rem;
width: 90%;



}
}

`



const NavBar = () => {
    return(
        <>
        <Headers>
         <Logo>
            <Title>ohfck tutorials<span role="img">👏👏</span> </Title>
        </Logo>
          <Nav>
<DropDown>
          <button>the tutorials.</button>
         
            <div className="dropdown-content" >
            <a href="/gatsby">gatsby</a>
            <a href="/underconstruction">JS</a>
            <a href="/underconstruction">CSS</a>
            <a href="/underconstruction">react</a>
            </div>
        </DropDown>
            <a className="home" href="/">home</a>
        </Nav>
        </Headers>
        </>
    )
}


export default NavBar; 