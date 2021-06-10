import * as React from "react"
import styled from "styled-components"
import ExampleQuery from '../components/exampleQuery'
import Layout from '../globalStyle'

const HomePage = styled.div`
align-content: center;
justify-content: center;
display: flex;


`

const IndexPage = ({children}) => {
  return (
    <Layout>
    <HomePage>
     <ExampleQuery />
 
    </HomePage>
    </Layout>
  )
}

export default IndexPage
