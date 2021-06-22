import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'
import gatsby from '../images/gatsby.png'

const TutorialList = styled.div`
display: flex;
/* justify-content: center; */
/* align-items: center; */
margin-left: 5rem;
mark{
    background: #b491c8;
}
`

const ListItem = styled.ul`
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
}

`
const Title = styled.div`
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
            <li><a href="/tutorials/gatsby-contentful101">contentful + <mark>gatsby</mark> 101</a></li>
        </ListItem>
      </TutorialList>
      </Container>
      </Layout>
 </>
    )
  }
  
  export default TutorialsPage;