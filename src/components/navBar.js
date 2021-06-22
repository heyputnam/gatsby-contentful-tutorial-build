import * as React from 'react'
import styled from 'styled-components'

const Headers = styled.header`
display: flex;
justify-content: space-between;
font-size: 1rem;
margin: 1rem;

`

const Nav = styled.div`
display: flex;

font-size: 1.7rem;
a{
    color: black;
    cursor: pointer;
}

a:not(:last-child){
  margin-right: 3rem;

}

`
const Logo = styled.div``

const Title = styled.h1`
letter-spacing: 5px;
font-size: 1.7rem;

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
  cursor: pointer;
}

&:hover .dropdown-content{
  a{
    color: black;
    display: inline-block;
    width: 75%;
    cursor: pointer;
  }

}

.dropdown-content{

display: flex;
flex-direction: column;
position: absolute;

a{

 display: none;
}



a:hover{
background: yellow;
color: black;
margin-top: 0.6rem;
margin-bottom: 0.6rem;
padding-left: 1.5rem;


}
}

`



const NavBar = () => {
    return(
        <>
        <Headers>
         <Logo>
            <Title>oh fck<span role="img">👏👏</span> </Title>
        </Logo>
          <Nav>
<DropDown>
          <button>tutorials<span role="img">🧠</span></button>
         
            <div className="dropdown-content" >
            <a href="/tutorials">gatsby</a>
            <a href="#">JS</a>
            <a href="#">CSS</a>
            <a href="#">react</a>
            </div>
        </DropDown>
            <a href="/">home</a>
        </Nav>
        </Headers>
        </>
    )
}


export default NavBar; 