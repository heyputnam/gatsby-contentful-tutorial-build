// a page to test a new components/ options
import React from "react";
import Layout from '../globalStyle';
import { graphql, useStaticQuery } from 'gatsby'


const Test = ({children}) =>{
 const result = useStaticQuery(graphql`
    query {
     allContentfulLesson(filter: {list: {eq: "gatsby"}}){
                             nodes {
                                slug
                                 name
                                 list
                                }
                              }    
               }
         
  
    
    `)
const list = result.allContentfulLesson.nodes.map( r => r)
const listList = list.reverse()
return(
  <>  
  <Layout/>
  <div style={{margin: "10rem"}}>
   <h1>Example on how to dynamically render the list data </h1>
    {listList.map(list=>{
 
      return(
        <div>
        <li><a href={`/tutorials/${list.slug}`}>{list.name}</a></li>
        </div>
      )
    })}

</div>
    </>
)
}


export default Test;
