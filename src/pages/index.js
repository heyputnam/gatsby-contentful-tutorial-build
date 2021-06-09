import * as React from "react"
import styled from "styled-components"
import ExampleQuery from '../components/exampleQuery'
const HomePage = styled.div`



`

const IndexPage = () => {
  return (
    <HomePage>
      <title>Home Page</title>
     <h1>Hello</h1>
     <ExampleQuery />
    </HomePage>
  )
}

export default IndexPage
