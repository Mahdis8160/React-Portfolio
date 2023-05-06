import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './portfolio.css'


import Pic3 from '../../assets/images/pic3.jpg'
import Pic4 from '../../assets/images/pic4.jpeg'
import Pic5 from '../../assets/images/pic5.jpeg'
import Pic6 from '../../assets/images/pic6.png'
import Pic7 from '../../assets/images/unnamed.jpg'
import Pic8 from '../../assets/images/pic8.jpeg'





function Portfolio() {
 return (
  <div className="portfolio">
   <Container >
    <Row>
     <h1>Portfolio</h1>
     <Col>
      <div className="text-center">
       <img src={Pic3} alt='pic1' />
       <a href="https://github.com/Mahdis8160/project-3-college-alumni-network" target="blank">
        <p>College alumni network</p>
       </a>
       <a href="https://github.com/Mahdis8160/project-3-college-alumni-app" target="blank">
        <p>College alumni App</p>
       </a>
      </div>
      <div className="text-center">
       <img src={Pic5} alt='pic1' />
       <a href="https://github.com/Mahdis8160/MERN-Book-Search-Engine" target="blank">
       <p>Book search engine</p>
       </a>
      </div>
     </Col>
     <Col>
      <div className="text-center">
       <img src={Pic4} alt='pic1' />
       <a href="https://github.com/Mahdis8160/challenge-2-portfolio" target="blank">
        <p>Portfolio</p>
       </a>
      </div>
      <div className="text-center">
       <img src={Pic6} alt='pic1' />
       <a href="https://github.com/Mahdis8160/weather-app-forecast" target="blank">
        <p>Weather app javascript</p>
       </a>
      </div>
     </Col>
     <Col>
      <div className="text-center">
       <img src={Pic7} alt='pic2' />
       <a href="https://github.com/Mahdis8160/Digital-clock-Javascript" target="blank">
        <p>Digital-clock Javascript</p>
       </a>
      </div>
      <div className="text-center">
       <img src={Pic8} alt='pic1' />
       <a href="https://github.com/Mahdis8160/project-2-chat-app" target="blank">
        <p>Chat app Javascript</p>
       </a>
      </div>
     </Col>
    </Row>
   </Container>
  </div>

 )
}
export default Portfolio