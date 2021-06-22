import * as React from "react"
import { Link } from "gatsby"
import Layout from '../globalStyle'
import styled from 'styled-components'


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
const UnderConstructionPage = () => {
  return (
   <>
   <Layout>
 
      <Title><h1>We're working here!</h1></Title>
      <Extra>
     <p className="middle">   Sorry guys...
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        </p>
    <p> this page is still <mark>under construction</mark>.</p>
    <p className="small">please <mark className="bottom">check back</mark> later or visit another <mark className="bottom">link</mark></p>
     
      </Extra>
      </Layout>
  </>
  )
}

export default UnderConstructionPage; 
