import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'
import gatsby from '../images/gatsby.png'
import { AnchorLink } from "gatsby-plugin-anchor-links";
const TutorialList = styled.div`
display: flex;
/* justify-content: center; */
/* align-items: center; */
margin-left: 5rem;
flex-direction: column;
margin-top: 2rem;
mark{
    background: #b491c8;
}
`



const ListItem = styled.ul`
justify-content: center;
/* align-items: center; */
list-style-type: none;
margin-top: 2rem;


.description {
width: 30rem;
margin-top: 1rem;
}


a{

    text-decoration: none;
    color: black;
    font-size: 1.7rem;
}



a:hover{
    font-size: 2.3rem;
    margin-left: -2rem;
    cursor: url("https://i.ibb.co/fStr5rr/index-finger.png"),  auto;
   
}


.container{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    
}

.tags{
    display: flex;

  flex-direction: row;
  
}

`

const Tag = styled.div`

height: 2rem;
width: 7rem;
background: #FE9BF4;
margin-top: 0.6rem;
margin-right: 0.5rem;
padding-top: 0.6rem;
box-shadow: 6px 6px 6px ;
font-size: 0.7rem;
display: flex;

padding-left: 0.7rem;

&:hover{
    background: #F955E8;
    /* margin-left: 1rem; */
    margin-right: 1rem;

    &:not(:first-child){
        margin-left: 0.6rem;
    }
    
}

span{
    display: absolute;
    right: 0;
    margin-top: -0.8rem;
    margin-left: 1.3rem;
    /* padding-right: 0.2rem; */
    font-size: 1.5rem;
}

`
const Title = styled.div`
margin-top: 4.5rem;
font-size: 2rem;
text-align: center;

img{
    position: fixed;
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
    font-size: 2rem;

    
}

.small {
    margin-top: 0.5rem;
  font-size: 1.3rem;
}
`

const Container = styled.div`
/* margin-top: 3rem; */

height: 41vw;
`



const TutorialsPage = ({children}) => {
    return (
    
<>
<Layout>

     <Title>
     <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
         <h1>the Great <mark>Gatsby.js</mark></h1>
           <a href="https://www.gatsbyjs.com/"> <img src={gatsby} height={20} width={20}></img></a>
            </div>
          <p className="small">to view a tutorial simply on the link!</p>
      </Title>
      <Container>
      <TutorialList>
        <ListItem>
            <div className="container">
      <AnchorLink to="/test/#top" >contentful and <mark>gatsby</mark> 101</AnchorLink>
            <div className="description">
                <p>learn the basics of contentful with gatsby.js, using staticQueries, contentModels, and learning graphql</p>
            </div>
            <div className="tags">
            <Tag>#graphql</Tag> 
            <Tag>#contentmodel</Tag> 
            <Tag>#dynamicdata</Tag> 
            <Tag>#staticquery</Tag> 
            </div>
            </div>
        </ListItem>
        <ListItem>
            <div className="container">
            <li><a href="/404"><mark>fake</mark> list item</a></li>
            <div className="tags">
            <Tag>#fake</Tag> 
            <Tag>#fake</Tag> 
            <Tag>#fake</Tag> 
            <Tag>#fake</Tag> 
            </div>
            </div>
        </ListItem>
      </TutorialList>
      </Container>
      </Layout>
 </>
    )
  }
  
  export default TutorialsPage;