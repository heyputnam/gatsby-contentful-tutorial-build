import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import ExampleQuery from '../components/exampleQuery'
import Layout from '../globalStyle'

const Tutorial = styled.div`
align-content: center;
justify-content: center;
display: flex;


`

const TutorialPage = ({children}) => {
  return (
      <Layout>
    <Tutorial>
        <h1>youve reached the tutorial page!</h1>
        <Link to="/">Go back home</Link>
     <ExampleQuery />
 
    </Tutorial>
    </Layout>
  )
}

export default TutorialPage;