// a page to test a new components/ options
import React from "react";
import Layout from '../globalStyle';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import gatsby from '../images/gatsby.png'


const TutorialList = styled.div`
display: flex;
justify-content: center; 

margin-left: 5rem;
flex-direction: column;


mark{
    background: #b491c8;
}



.tags{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 35rem;
  height: 7rem;


}

`
const Description = styled.div`
display: flex;
width: 75%;
margin-top: 1rem;

`
const ListItem = styled.div`
justify-content: center;
/* align-items: center; */
list-style-type: none;

margin-top: 2rem;
a{

    text-decoration: none;
    color: black;
    font-size: 1.7rem;
}
a:hover{
    font-size: 2.3rem;
    margin-left: -2rem;
    background: orange;
    cursor: url("https://i.ibb.co/fStr5rr/index-finger.png"),  auto;
   
}





`
const Tag = styled.div`
display: flex;
height: 2rem;
width: 7rem;
background: #FE9BF4;
margin-top: 0.6rem;
margin-right: 0.5rem;
padding-top: 0.6rem;
box-shadow: 6px 6px 6px ;
font-size: 0.7rem;
padding-left: 0.7rem;

&:hover{
    /* background: #F955E8; */
    background: #F9FE62;
    /* margin-left: 1rem; */
    margin-right: 1rem;

    &:not(:first-child){
        margin-left: 0.6rem;
    }
    
}



`
const Title = styled.div`
margin-top: 4.5rem;
font-size: 2rem;
text-align: center;

 img{
    height: 5rem;
    width: 5.5rem;
    margin-left: 2rem;
}
img:hover{
    margin-left: 1.5rem;
    margin-top: -0.8rem;
    height: 6.5rem;
    width: 7rem;
}

mark{
    background: #b491c8;
} 

p{
    font-size: 1.5rem;

    
}

`
const TagContainer = styled.div`
display: flex;
flex-direction: row;
background: black;

`
const Container = styled.div`
/* height: 75vw; */
`

const GatsbyList = ({children}) =>{
 const result = useStaticQuery(graphql`
    query {
     allContentfulLesson(filter: {list: {eq: "gatsby"}}){
                         nodes {
                           slug
                           name
                           list
                        description
                   tags
               }
           }    
        }
    `)
const list = result.allContentfulLesson.nodes.map( r => r)
const listList = list
return(
  <>  
  <Layout/>
  <Container>
  <TutorialList>
   <Title> 
     <div style={{
       display: "flex", 
       flexDirection: "row", 
       justifyContent: "center"
       }}>
         <h1>the Great <mark>Gatsby.js</mark></h1>
           <a href="https://www.gatsbyjs.com/"> 
           <img src={gatsby} height={20} width={20}></img>
           </a>
        </div>
          <p className="small">
              to view a tutorial simply on the link!
              </p>
   </Title>
    {listList.map(list=>{       
      return(
        <>
        <ListItem>
         <a 
        href={`/tutorials/${list.slug}/#start`}
        >{list.name}
        </a>
        </ListItem>
       <Description>{list.description}</Description>
      <div className="tags">
        {list.tags.map(l=>{
       return(
         <Tag>#{l}</Tag>
       )
     })}
    </div>
       </> 
         )
            })}
</TutorialList>
</Container>
  </>
)
}


export default GatsbyList;