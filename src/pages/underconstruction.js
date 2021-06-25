import * as React from "react"
import { Link } from "gatsby"
import Layout from '../globalStyle'
import styled from 'styled-components'
import Popup from '../components/popup'



const Container = styled.div`
height: 55vw;
width: auto;
`
const Title = styled.h1`
text-align: center;
margin-top: 5rem;
margin-bottom: 7rem;
font-size: 3rem;


`

const Extra = styled.div`
text-align: center;
font-size: 2rem;
margin-top: 1rem;

.middle{
    font-size: 3rem;
    margin-bottom: 1.4rem;
}

.small{
    margin-top: 2rem; 
    font-size: 1.7rem;
}

.bottom{
    background: #3347C8;
    color: white;
}
`

const Holder=styled.div`
justify-content: center;
margin-right: 31.6%;

div{
  margin: 0;
 
}
`
const UnderConstructionPage = () => {
  const hidden = ()=>{
    return(
      <img src="none" style={{display:"none"}}></img>
    )
  }
  return (
   <>
   <Layout>


    <Container>
      <Title><h1>We're working here!</h1></Title>
      <Extra>
     <p className="middle">   Sorry guys...
 
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        </p>
        <Holder>
   
    <Popup pictureBig={"https://www.bobstewart.org.uk/sites/www.bobstewart.org.uk/files/styles/gallery_large/public/2020-04/patiently-waiting-like.jpg?itok=vvxQ2nWN"} 
   text={"click to see how kermit feels.."}
  display={"none"}
  background={"#68FE6D"}
  color={'black'}

   />

        </Holder>
    <p> this page is still <mark>under construction</mark>.</p>
    <p className="small">please <mark className="bottom">check back</mark> later or visit another <mark className="bottom">link</mark> or...</p>

      </Extra>
      </Container>
      </Layout>
  </>
  )
}

export default UnderConstructionPage; 
