import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Flex } from 'antd';



const Navbar1=()=>{
  return(
    <>
    
    <section className='header'>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Navbar expand="lg" className="bg-transparent" >
      <Container fluid>
        <Navbar.Brand href="#"><img src="assets/images/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: 'auto' }}
            navbarScroll
          >
           
            <NavDropdown title="Product" id="navbarScrollingDropdown">
            <div className="border1"></div>
              <div className="d-flex ss1 ">
              <NavDropdown.Item href="#action3">FEATURES
                
                <li className="d-flex"><div className="ico1"><img src="assets/images/1.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/2.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/3.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/4.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/5.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/6.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/7.svg" alt="" /></div>
                <div className="content">
                  <p>Employee  Motivation</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
              
              
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action4">
                USE CASES <li className="d-flex"><div className="ico1"><img src="assets/images/8.svg" alt="" /></div>
                <div className="content">
                  <p>For Scaleups</p>
                  <p>Advanced Features</p></div></li>
                <p>Roles</p>

                  <li className="d-flex"><div className="ico1"><img src="assets/images/9.svg" alt="" /></div>
                <div className="content">
                  <p>Strtup Founders</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/9.svg" alt="" /></div>
                <div className="content">
                  <p>CEO</p>
                  <p>Build on the right foundation</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/9.svg" alt="" /></div>
                <div className="content">
                  <p>CEO</p>
                  <p>The equity flatefotm to scale with</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/9.svg" alt="" /></div>
                <div className="content">
                  <p>Legal ops</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/9.svg" alt="" /></div>
                <div className="content">
                  <p>Human resources</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/9.svg" alt="" /></div>
                <div className="content">
                  <p>Law firms</p>
                  <p>Leaverague Equity to motivate your team</p></div></li>
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                DEMO<li><p className='i1'><img src="assets/images/10.png" alt="" /></p>
                <p>Product Tour</p>
                <p>Try Out cake for yourself with our interactive demo</p>
                <p><a href="#">Watch now</a></p></li>
              </NavDropdown.Item></div>
            </NavDropdown>
            <NavDropdown title="About" id="navbarScrollingDropdown">
            <div className="border2"></div>
              <div className="d-flex ss1 ">
              <NavDropdown.Item href="#action3">ABOUT US
              <li className="d-flex"><div className="ico1"><img src="assets/images/11.svg" width={'24px'}alt="" /></div>
                <div className="content">
                  <p>About cake</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/12.svg" alt="" /></div>
                <div className="content">
                  <p>Countries</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/13.svg" alt="" /></div>
                <div className="content">
                  <p>Founder stories</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/14.svg" alt="" /></div>
                <div className="content">
                  <p>Customer love</p>
                  </div></li>
                  
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                ABOUT CAKE <li>
                <p><img src="assets/images/15.png" width={'300px'}alt="" /></p>
                <p>Get to know Humans of Cake</p>
                <p>..and the values that keep us going</p>
                <p><a href="#">Learn more</a></p>

                </li>
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
                FEATURED<li>
                <p><img src="assets/images/16.webp" width={'400px'} alt="" /></p>
                <p>Get to know JASON</p>
                <p>..get up know and personal with cake founder and perseident jason atkins</p>
                <p><a href="#">Meet Jason</a></p>

                </li>
              </NavDropdown.Item></div>
            </NavDropdown>
            <NavDropdown  title="Resources" id="navbarScrollingDropdown">
            <div className="border3"></div>
              <div className="d-flex ss1 ">
              <NavDropdown.Item  className='az' href="#action3">LEARNING HUB
              <li className="d-flex"><div className="ico1"><img src="assets/images/17.svg" alt="" /></div>
                <div className="content">
                  <p>Guides</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/18.svg" alt="" /></div>
                <div className="content">
                  <p>Templates</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/19.svg" alt="" /></div>
                <div className="content">
                  <p>Events</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/20.svg" alt="" /></div>
                <div className="content">
                  <p>Customer stories</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/21.svg" alt="" /></div>
                <div className="content">
                  <p>Calculators</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/22.svg" alt="" /></div>
                <div className="content">
                  <p>Equity Toolkit</p>
                  </div></li>
                  <li className="d-flex"><div className="ico1"><img src="assets/images/23.svg" alt="" /></div>
                <div className="content">
                  <p>Podcast</p>
                  <p>startup equity matters with jason <br/>ankit</p>
                  </div></li>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                STARTUP STORIES <li className="d-flex"><div className="ico1 "><img  src="assets/images/24.jpeg"width={'100px'} alt="" /></div>
                <div className="content">
                  <p>Strtup Founders</p>
                  <p>Leaverague Equity to motivate your team</p>
                  <p><a href="#">Learn more</a></p></div></li>
                  <li className="d-flex"><div className="ico1 "><img src="assets/images/25.jpeg"width={'100px'} alt="" /></div>
                <div className="content">
                  <p>CEO</p>
                  <p>Build on the right foundation</p>
                  <p><a href="#">Learn more</a></p></div></li>
                  <li className="d-flex"><div className="ico1 "><img src="assets/images/26.jpg" width={'100px'}alt="" /></div>
                <div className="content">
                  <p>CEO</p>
                  <p>The equity flatefotm to scale with</p>
                  <p><a href="#">Learn more</a></p></div></li>
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
               WHAT'S NEW<li>
                <p><img src="assets/images/27.jpg" width={'400px'} height={'270px'} alt="" /></p>
                
                <p>..get up know and personal with cake founder and perseident jason </p>
                <p><a href="#">Read the report..</a></p>

                </li>
              </NavDropdown.Item></div>
            </NavDropdown>
            
            <Nav.Link href="#action1">Pricing</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            
            
            <Flex gap="small" wrap>
            <Button type="text">Login</Button>
            <Button>Talk to Sales</Button>
    <Button type="primary">Get started free</Button>
    
   
    
    
  </Flex>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </div>
        </div>
      </div>
    </section>

   

    </>
  )
}
export default Navbar1
