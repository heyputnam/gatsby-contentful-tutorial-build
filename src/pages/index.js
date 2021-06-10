import * as React from "react"
import styled from "styled-components"
import ExampleQuery from '../components/exampleQuery'
const HomePage = styled.div`
align-content: center;
justify-content: center;
display: flex;


`

const IndexPage = () => {
  return (
    <HomePage>
      <title>Home Page</title>
     <ExampleQuery />
    </HomePage>
  )
}

export default IndexPage
