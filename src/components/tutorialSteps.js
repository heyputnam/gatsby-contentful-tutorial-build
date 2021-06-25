// a page to test a new components/ options
import React from "react";
import Layout from '../globalStyle';
import { MARKS, INLINES} from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { CopyBlock, irBlack, tomorrowNight, CodeBlock	 } from 'react-code-blocks';
import styled from 'styled-components';
import ScrollToTop from "../components/scrollToTop";
import Popup from '../components/popup'


const Title = styled.h1`
color: #3347C8;
text-align: center;
margin-top: 1.8rem;
font-size: 3.5rem;
`
const Content = styled.div`
height: 75vw;
`
const DirectionContainer = styled.div`
margin-top: 11rem;
padding-bottom: 4rem;
.box{
  display: flex;
  width: 35%;
  height: auto;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: hidden;
}
.popup-box {
  position: absolute;
  width: 100%;
  height: 20rem;
  justify-content: center;


}
.close-icon {
  content: 'x';
  cursor: pointer;
  display: flex;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
}

`
const Top = styled.div`
background: white;
height: 8rem;
width:  100%;
position: fixed;
top: 0;
margin-top: 2.5rem;
z-index: 0;
left: 0;
right: 0;
text-align: center;

`
const Name = styled.h1`
font-size: 3rem;
margin-left: 4rem;

mark{
 background: #EF8AFE;
 color: white;
}

`
const Step = styled.div`
margin-left: 4rem;
margin-right: 4rem;
margin-bottom: 2rem;
`
const ImageContainer = styled.div `
margin-left: 33%;
width: 30rem;
img{
  align-items: center;
  justify-content: center;
}

`
const Words = styled.div`
margin-top: 2rem;
font-size: 1.3rem;
`
const TutorialSteps = ({data}) =>{
const steps = data
const mapSteps = steps.contentfulLesson.steps.map(step => {
    return(
        step.steps
        )
    })
  const options = {
    renderNode: {
      // hyperlinks to web pages supported 
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={`${node.data.uri}`}  key={children} style={{cursor: `url("https://i.ibb.co/fStr5rr/index-finger.png"),  auto`}}>{(children)}</a>;
      }
     
    },
    renderMark: {
    [MARKS.CODE]: (node)=>{
      // code blocks formated
      console.log(node)
      return(
        <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        //   cursor: `url("https://i.ibb.co/fStr5rr/index-finger.png"),  auto`,
        }}
      >
        <CodeBlock
        language="javascript"
        text={node}
        wrapLines={true}
        codeBlock
        customStyle={{
        height: 'auto',
        zIndex: -1,
        width: '95%',
        overflowY: 'scroll',
        margin: '0px 0.75rem',
        borderRadius: '5px',
        boxShadow: '8px 8px 15px rgba(0,0,0,0.6)',
        // cursor: `url("https://i.ibb.co/rmMPSwz/index-finger-3.png" ), auto`,
        fontSize: '0.75rem'}}
        theme={irBlack}
        showLineNumbers={true}
    
      />
       
       </div>
      
         
      )
    }
  }
  }
return (
<>
<Layout/>
<ScrollToTop/>
<div id="start"></div>
<Top id="top">
<Title>
{data.contentfulLesson.name}
</Title>
</Top>
<Content>
<DirectionContainer>
  {mapSteps.map(step=>{
    return(
      <>
  <Name>
      <mark>{step.name}</mark>
  </Name>
  <Step>
<Popup pictureBig=
{step.photoExample.fluid.src}
pictureSmall={step.photoExample.fluid.src}
message={"click to enlarge"}
textDisplay={"none"}
 />
<Words>
    {renderRichText(step.richDirections, options)}
</Words>
  </Step>
  </>
  )
  })}
</DirectionContainer>
</Content>
  </>
    );
  }




export default TutorialSteps;