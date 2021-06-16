import * as React from 'react'
import Layout from '../globalStyle'
import { graphql } from 'gatsby' 


const Tutorial = ({data}) =>{

return(
  
    <>
    <Layout>
      <h1>tutorial name: {data.contentfulLesson.name}</h1>
    </Layout>
    </>
)
}

export const query = graphql`
query ($slug: String!){
   contentfulLesson(slug: {eq: $slug}){
            name
            slug
      }
   }

`

export default Tutorial; 

