import * as React from 'react'
import styled from 'styled-components'

const Headers = styled.header`
display: flex;
justify-content: space-between;
font-size: 1rem;
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

const NavBar = () => {
    return(
        <>
        <Headers>
         <Logo>
            <Title>low-budget Tutorials<span role="img">👏👏</span> </Title>
        </Logo>
          <Nav>
            <a href="/tutorials">tutorials <span role="img">🧠</span></a>
            <a href="/">home</a>
        </Nav>
        </Headers>
        </>
    )
}


export default NavBar; 