import * as React from 'react'
import styled from 'styled-components'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
const Foot = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
width: 100%;

/* background-color: #FE6969; */
background: #98F97A;
color: white;
display: flex;
justify-content: space-between;
/* margin-top: 1rem; */


`
const Left = styled.div`
display: flex;
flex-direction: column;
left: 0;
margin-left: 1rem;
margin-top: 0.5rem;
color: black;
p:last-child{
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
}
`

const Right = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 0.5rem;
a:not(:last-child){
margin-right: 3rem;

}

a:last-child{
margin-right: 0.7rem;
}



img{
    width: 2rem;
    margin-bottom: 0.5rem;
    }
`


const Footer = () => {
    return(
        <>
        <Foot>
        <Left>
         <p>developed & designed by Hailey Putnam </p>
        <p>© 2021 Copyright</p>
        </Left>
        <Right>
           
        <a href="https://www.linkedin.com/in/hailey-putnam-610226209/"><img src={linkedin} height={20} width={20}></img></a>
        <a href="https://github.com/heyputnam"><img src={github} height={20} width={20}></img></a>
        <a href="mailto:me@heyputnam.com"><img src={email} height={20} width={20}></img></a>

        </Right>
        </Foot>
        </>
    )
}

export default Footer;