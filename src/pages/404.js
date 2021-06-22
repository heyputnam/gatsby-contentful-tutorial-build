import * as React from "react"
import { Link } from "gatsby"
import Layout from '../globalStyle'
import styled from 'styled-components'


const Title = styled.h1`
text-align: center;
margin-top: 15rem;
font-size: 4rem;


`

const Extra = styled.div`
text-align: center;
font-size: 2rem;
`
const NotFoundPage = () => {
  return (
   <>
   <Layout>
 
      <Title>Page <mark>not</mark> found</Title>
      <Extra>
     <p>   Sorry guys...
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        </p>
    <p> we couldn’t find what you were looking for... </p>
    <p>please try something else.</p>
     
      </Extra>
      </Layout>
  </>
  )
}

export default NotFoundPage
