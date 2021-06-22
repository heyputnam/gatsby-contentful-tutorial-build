import * as React from "react"
import styled from "styled-components"
import Layout from '../globalStyle'


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
a{
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
}

`
const Title = styled.div`
font-size: 2rem;
text-align: center;

mark{
    background: #b491c8;
}

p{
    font-size: 2rem;

    
}

.small {
  font-size: 1.3rem;
}
`

const Container = styled.div`
margin-top: 3rem;

`


const TutorialsPage = ({children}) => {
    return (
    
<>
<Layout>
     <Title><h1>the Great <mark>Gatsby.js</mark></h1>
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