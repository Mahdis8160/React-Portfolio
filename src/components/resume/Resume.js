import React from "react";
import { Container } from "react-bootstrap";


import './resume.css'




function Resume() {


 return (
  <div className="resume">
   <Container>
    <h3>Resume</h3>
    
   <span>Download my resume</span>
    <h6>Front-End Proficiencies</h6>
    <ul>
     <li>Html</li>
     <li>Css</li>
     <li>Jquary</li>
     <li>Javascript</li>
     <li>Es6</li>
     <li>Reactjs</li>
     <li>Nextjs</li>
    </ul>
    <h6>Back-End Proficiencies</h6>
    <ul>
     <li>Node js</li>
     <li>xpress js</li>
     <li>Mysql</li>
     <li>Nosql</li>
     <li>Python</li>
     <li>Mongodb</li>
     <li>Api</li>
    </ul>
   </Container>
  </div>
 )
}
export default Resume