import React from "react";
import "./footer.css"
import { Container, Row } from "react-bootstrap";
import {AiOutlineGithub} from "react-icons/ai"
import {BsLinkedin,BsTwitter} from "react-icons/bs"


function Footer() {
    return(
        

        <Container  className="footer">
            
            <Row>
                <div className="icon-bar">
                    <a href="https://github.com/Mahdis8160">  <AiOutlineGithub className="github"/></a>
                    <a href="https://www.linkedin.com/in/mahdis-miller/"><BsLinkedin className="linkedin"/></a>
                    <a href="https://twitter.com/home"><BsTwitter className="twitter"/></a>
                 </div>
             </Row>

        </Container>
          )
        }
        export default Footer
        
       

  