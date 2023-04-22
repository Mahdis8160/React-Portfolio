import React from "react";
import { Container, Row } from "react-bootstrap";
import Avatar from '../../assets/images/unnamed.jpg'
import './about-me.css'


function AboutMe() {
 return (
  <div className="about-me">
   <Container>
    <Row>
     <div className="user-info">
      <h1>About Me</h1>
      <img src={Avatar} alt='avatar' className="avatar" />

     </div>
     <p className="mt-5 about-me-param">Motivated, studious, and solutions-oriented computer engineering and coding professional. I enjoy hands-on experience developing the front-end of websites and applications in a fast-paced environment.</p>
     <p className="mt-2 about-me-param">
      I am a Fullstack developer, with proficiency in React.js Node.js and a years of experience in developing modern web applications in agile teams HTML/CSS/JavaScript/React, Next js, Typescript, Sass, and Styled Component and Node js,express js,MySQL,NoSQl.
      https://github.com/Mahdis8160
     </p>
    </Row>
   </Container>

  </div>

 )
}
export default AboutMe