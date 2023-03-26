import React from "react";
import { Container, Row } from "react-bootstrap";
import Avatar from '../../assets/images/user.jpeg'
import './about-me.css'


function AboutMe() {
 return (
  <div className="about-me">
   <Container>
    <Row>
     <div className="user-info">
      <img src={Avatar} alt='avatar' className="avatar" />
      <h1>About Me</h1>
     </div>
     <p className="mt-5">Motivated, studious, and solutions-oriented computer engineering and coding professional. I enjoy hands-on experience developing the front-end of websites and applications in a fast-paced environment.</p>
    </Row>
   </Container>

  </div>

 )
}
export default AboutMe