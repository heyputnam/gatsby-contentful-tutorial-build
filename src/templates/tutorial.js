import * as React from 'react'
import Layout from '../globalStyle'
import { graphql } from 'gatsby' 


const Tutorial = ({data}) =>{

return(
  
    <>
    <Layout>
    <h1>name: {data.contentfulTutorialDirections.name}</h1>
    </Layout>
    </>
)
}

export const query = graphql`
query ($id: String!){
   contentfulTutorialDirections(id: {eq: $id}){
        name
          }
}

`

export default Tutorial; 

