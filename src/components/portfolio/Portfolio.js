import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './portfolio.css'


import Pic3 from '../../assets/images/pic3.jpg'
import Pic4 from '../../assets/images/pic4.png'
import Pic5 from '../../assets/images/pic5.jpg'
import Pic6 from '../../assets/images/pic6.jpeg'
import Pic7 from '../../assets/images/pic7.jpeg'
import Pic8 from '../../assets/images/pic8.jpeg'





function Portfolio() {
 return (
  <div className="portfolio">
   <Container >
    <Row>
     <h1>Portfolio</h1>
     <Col className="">
      
      <img src={Pic3} alt='pic1' />
      <img src={Pic5} alt='pic1' />
     </Col>
     <Col className="">
      
      <img src={Pic4} alt='pic1' />
      <img src={Pic6} alt='pic1' />
     </Col>
     <Col className="">
      <img src={Pic7} alt='pic2' />
      <img src={Pic8} alt='pic1' />
      
     </Col>
    </Row>
   </Container>
  </div>

 )
}
export default Portfolio