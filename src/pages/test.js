// a page to test a new components/ options
import React from "react";
import Layout from '../globalStyle'
import { useState } from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Steps from '../components/exampleFull'
import styled from 'styled-components'




const Title = styled.h1`


color: #F2B790;
text-align: center;

margin-top: 1.8rem;


font-size: 3.5rem;

mark{
  background: white;
}
`

const Content = styled.div`
height: 80vw;

`


const DirectionContainer = styled.div`
margin-top: 11rem;



`

const Top = styled.div`
background: black;
height: 8rem;
width: I 60rem;
position: fixed;
top: 0;
margin-top: 2.5rem;

left: 0;
right: 0;
text-align: center;

`


const Name = styled.h1`

margin-left: 4rem;
`


const Step = styled.div`
text-align: center;
margin-left: 4rem;
margin-right: 4rem;



`

const Test = ({children}) =>{
  const [direction, setDirection] = useState([
    useStaticQuery(graphql`
query testQuery {
 
    allContentfulSteps {
      edges{
      node {
        steps {
          spaceId
          richDirections{
            raw
          }
          name
          photoExample {
            fluid {
              src
            }
          }
        }
      }
    }
  }
  }



`)
])
  console.log(direction)
    return (

        <>
<Layout/>
<Top>
<Title>
cool <mark>tutorial</mark> name here
</Title>
</Top>
<Content>
<DirectionContainer>
  <div>
  <Name>
      Lets Get this show on the road 
  </Name>

  <Step>
  The website doesn't have the theme i was going for it needs to be the same, but totally different , make it pop. Can you make it faster? can you pimp this powerpoint, need more geometry patterns it looks a bit empty, try to make everything bigger. Can you make the logo bigger yes bigger bigger still the logo is too big could you rotate the picture to show the other side of the room? yet is there a way we can make the page feel more introductory without being cheesy yet you might wanna give it another shot doing some work for us "pro bono" will really add to your portfolio i promise. Labrador. Needs to be sleeker can you remove my double chin on my business card photo? i don't like the way it looks or there are more projects lined up charge extra the next time that sandwich needs to be more playful, nor this is just a 5 minutes job can we try some other colours maybe. Thats not what i saw in my head at all can you make it faster? what is lorem ipsum? why is the text in spanish? it's great, can you add a beard though , i know you've made thirty iterations but can we go back to the first one that was the best version. I love it, but can you invert all colors? concept is bang on, but can we look at a better execution, yet use a kpop logo that's not a kpop logo! ugh. Can you make it stand out more? we need to make the new version clean and sexy can you make pink a little more pinkish I have an awesome idea for a startup, i need you to build it for me. Can you put "find us on facebook" by the facebook logo? we are a non-profit organization. Jazz it up a little. You might wanna give it another shot we are a big name to have in your portfolio, can you make it stand out more? and submit your meaningless business jargon to be used on the site!, i think this should be fairly easy so if you just want to have a look. Something summery; colourful is this the best we can do, nor I need a website. How much will it cost. Concept is bang on, but can we look at a better execution can you remove my double chin on my business card photo? i don't like the way it looks submit your meaningless business jargon to be used on the site!. You might wanna give it another shot mmm, exactly like that, but different i love it, but can you invert all colors? I have printed it out, but the animated gif is not moving can you make the font bigger?. You can get my logo from facebook submit your meaningless business jargon to be used on the site! I think we need to start from scratch, so can we try some other colours maybe. What is lorem ipsum? why is the text in spanish? will royalties in the company do instead of cash we exceed the clients' expectations so I really think this could go viral use a kpop logo that's not a kpop logo! ugh. In an ideal world can we have another option try making it a bit less blah or we are a non-profit organization remember, everything is the same or better there are more projects lined up charge extra the next time, and I really think this could go viral. This turned out different that i decscribed I know somebody who can do this for a reasonable cost.
  </Step>

  <Name>
      Lets Get this show on the road 
  </Name>
  <Step>

The website doesn't have the theme i was going for we are your relatives, yet what you've given us is texty, we want sexy or we are a big name to have in your portfolio the target audience is makes and famles aged zero and up, yet anyway, you are the designer, you know what to do. I need a website. How much will it cost. This red is too red can you make it more infographic-y i know you've made thirty iterations but can we go back to the first one that was the best version nor i cant pay you . Mmm, exactly like that, but different that will be a conversation piece what is a hamburger menu but we are a big name to have in your portfolio. We are a non-profit organization that will be a conversation piece and we need more images of groups of people having non-specific types of fun, nor are you busy this weekend? I have a new project with a tight deadline. Make it pop pass the mayo, appeal to the client, sue the vice president can you make it stand out more? can you make the font bigger? but we are a big name to have in your portfolio, for that's going to be a chunk of change. Can you make the font bigger?. I think this should be fairly easy so if you just want to have a look can you punch up the fun level on these icons. Can you make it look like this clipart i found I like it, but can the snow look a little warmer. Can you please change the color theme of the website to pink and purple? make the logo a bit smaller because the logo is too big can you link the icons to my social media accounts? oh and please put pictures of cats everywhere can you make the font bigger? im not sure, try something else, so this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue i'll pay you in a week we don't need to pay upfront i hope you understand.
<Step/>
<Step>

I got your invoice...it seems really high, why did you charge so much. Are you busy this weekend? I have a new project with a tight deadline the flier should feel like a warm handshake, but needs to be sleeker can you make it faster? this is just a 5 minutes job. Can you please send me the design specs again? can we barter services?. We are a startup can you make the logo bigger yes bigger bigger still the logo is too big but I want you to take it to the next level. I really like the colour but can you change it can you make it stand out more?. Are you busy this weekend? I have a new project with a tight deadline what is lorem ipsum? why is the text in spanish? or can you please send me the design specs again?. Can you make it faster? use a kpop logo that's not a kpop logo! ugh, so that's going to be a chunk of change can you make it look like this clipart i found we have big contacts we will promote you I think we need to start from scratch. I really think this could go viral we need to make the new version clean and sexy so i'll pay you in a week we don't need to pay upfront i hope you understand. The hair is just too polarising that's great, but can you make it work for ie 2 please, can you rework to make the pizza look more delicious, so can you please change the color theme of the website to pink and purple? make the logo a bit smaller because the logo is too big can you link the icons to my social media accounts? oh and please put pictures of cats everywhere, we have big contacts we will promote you use a kpop logo that's not a kpop logo! ugh. It's great, can you add a beard though this was not according to brief, nor can you make the font bigger? and I think we need to start from scratch, nor try making it a bit less blah that will be a conversation piece.
</Step>



</Step>
</div>
</DirectionContainer>

</Content>
  </>
    );
  }




export default Test;
