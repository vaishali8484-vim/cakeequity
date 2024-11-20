import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Res={
  loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3.5,
            nav:false,
            loop:false,
            dotsEach: 1,
            // center:true,
        }
    }
}




function FillExample() {

  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <>
     <div className="tabz"> 
    <div className="container ">
    <Tabs 
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab className="bac" eventKey="home" title="Cap tables">
       <div className="fea1 d-flex">
        <div className="innerfea1 d-flex">
            <div className="fea2"><img src="assets/images/f1.svg" alt="" /></div>
            <div className="fea3">
                <h3>Dynamic cap table management</h3>
                <p>Leverage the power of an updated, accurate, and clean cap table. Use Cake's advanced features to help you manage your growing number of shareholders, investors, and stock option holders.</p>
                <div className="fea4 d-flex">
                    <div className="fea5"><img src="assets/images/f2.png" alt="" /></div>
                    <div className="fea6">"The cap table that we have in Cake is our source of truth. It's a tool that we use on a day-to-day basis."<br/>
                    <b>ELLEN DINSMOOR</b><br/>
                    COO of Vow</div>
                </div>
                <div className="mb-2">
                <button type="button" class="btn btn-outline-dark">Learn more</button>
        
               </div>
            </div>
        </div>
       </div>
      </Tab>
      <Tab  className="bac" eventKey="profile" title="Equity plans">
      <div className="fea1 d-flex">
        <div className="innerfea1 d-flex">
            <div className="fea2"><img src="assets/images/f3.svg" alt="" /></div>
            <div className="fea3">
                <h3>Dynamic cap table management</h3>
                <p>Leverage the power of an updated, accurate, and clean cap table. Use Cake's advanced features to help you manage your growing number of shareholders, investors, and stock option holders.</p>
                <div className="fea4 d-flex">
                    <div className="fea5"><img src="assets/images/f4.png" alt="" /></div>
                    <div className="fea6">"The cap table that we have in Cake is our source of truth. It's a tool that we use on a day-to-day basis."<br/>
                    <b>ELLEN DINSMOOR</b><br/>
                    COO of Vow</div>
                </div>
                <div className="mb-2">
                <button type="button" class="btn btn-outline-dark">Learn more</button>
        
               </div>
            </div>
        </div>
       </div>
      </Tab>
      <Tab className="bac" eventKey="longer-tab" title="Capital rice">
      <div className="fea1 d-flex">
        <div className="innerfea1 d-flex">
            <div className="fea2"><img src="assets/images/f5.svg" alt="" /></div>
            <div className="fea3">
                <h3>Dynamic cap table management</h3>
                <p>Leverage the power of an updated, accurate, and clean cap table. Use Cake's advanced features to help you manage your growing number of shareholders, investors, and stock option holders.</p>
                <div className="fea4 d-flex">
                    <div className="fea5"><img src="assets/images/f6.png" alt="" /></div>
                    <div className="fea6">"The cap table that we have in Cake is our source of truth. It's a tool that we use on a day-to-day basis."<br/>
                    <b>ELLEN DINSMOOR</b><br/>
                    COO of Vow</div>
                </div>
                <div className="mb-2">
                <button type="button" class="btn btn-outline-dark">Learn more</button>
        
               </div>
            </div>
        </div>
       </div>
      </Tab>
      <Tab className="bac" eventKey="Contracts" title="Contracts">
      <div className="fea1 d-flex">
        <div className="innerfea1 d-flex">
            <div className="fea2"><img src="assets/images/f7.svg" alt="" /></div>
            <div className="fea3">
                <h3>Dynamic cap table management</h3>
                <p>Leverage the power of an updated, accurate, and clean cap table. Use Cake's advanced features to help you manage your growing number of shareholders, investors, and stock option holders.</p>
                <div className="fea4 d-flex">
                    <div className="fea5"><img src="assets/images/f8.png" alt="" /></div>
                    <div className="fea6">"The cap table that we have in Cake is our source of truth. It's a tool that we use on a day-to-day basis."<br/>
                    <b>ELLEN DINSMOOR</b><br/>
                    COO of Vow</div>
                </div>
                <div className="mb-2">
                <button type="button" class="btn btn-outline-dark">Learn more</button>
        
               </div>
            </div>
        </div>
       </div>
      </Tab>
      <Tab className="bac" eventKey="Team Portfolio" title="Team Portfolio">
      <div className="fea1 d-flex">
        <div className="innerfea1 d-flex">
            <div className="fea2"><img src="assets/images/f9.svg" alt="" /></div>
            <div className="fea3">
                <h3>Dynamic cap table management</h3>
                <p>Leverage the power of an updated, accurate, and clean cap table. Use Cake's advanced features to help you manage your growing number of shareholders, investors, and stock option holders.</p>
                <div className="fea4 d-flex">
                    <div className="fea5"><img src="assets/images/f10.png" alt="" /></div>
                    <div className="fea6">"The cap table that we have in Cake is our source of truth. It's a tool that we use on a day-to-day basis."<br/>
                    <b>ELLEN DINSMOOR</b><br/>
                    COO of Vow</div>
                </div>
                <div className="mb-2">
                <button type="button" class="btn btn-outline-dark">Learn more</button>
        
               </div>
            </div>
        </div>
       </div>
      </Tab>
    </Tabs>
    </div></div>
    
    <section className='main'>
      <div className="container">
        <div className="con1" data-aos="zoom-in">
        <div className="d-flex">
          <div className="con2 d-flex">
            <div className="image"><div className="cir"></div>
              <img src="assets/images/z.png"  alt="" /></div>
            <div className="content"><a href="#">Watch Later</a></div>
          </div>
          <div className="con2">
            <div className="c1"><p>17,000+</p></div>
            <div className="c2"><p>Global companies using Cake</p></div>
            
          </div>
          <div className="con2">
          <div className="c1"><p>200,000+</p></div>
            <div className="c2"><p>Stock option owners around the world</p></div>
            
          </div>
          <div className="con2">
          <div className="c1"><p>50+</p></div>
            <div className="c2"><p>Countries served</p></div>
            
          </div>
        </div></div>
      </div>
    </section>
    <section className='cv2-new-school-section'>
      <div className="cv2-new-school-div">
        <h3 className='title-youth 'data-aos="fade-right">Join the new school equity movement</h3>
        <div className="cv2-new-school-grid">
          <div className="left-side" data-aos="fade-right">
            <div className="ison-heading"><h3 className="section-h3">Old school</h3></div>
            <div className="dotted-list">
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/c.svg" alt="" /></div></div>
                <div className="new-school">Multiple demos before getting a price</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/c.svg" alt="" /></div></div>
                <div className="new-school">Weeks to get started</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/c.svg" alt="" /></div></div>
                <div className="new-school">Complex system</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/c.svg" alt="" /></div></div>
                <div className="new-school">Difficult to get support</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/c.svg" alt="" /></div></div>
                <div className="new-school">Global equity is expensive and slow</div>
              </div>
              </div>
          </div>
          
          <div className="right-side" data-aos="flip-right"><div className="ison-heading"><h3 className="section-h3">New school</h3></div>
            <div className="dotted-list">
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/r.svg" alt="" /></div></div>
                <div className="new-school"><b>Upfront pricing -</b> the way it should be</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/r.svg" alt="" /></div></div>
                <div className="new-school"><b>Minutes to get going -</b> fast time to value</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/r.svg" alt="" /></div></div>
                <div className="new-school"><b>Easy, intuitive platform -</b> says every customer</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/r.svg" alt="" /></div></div>
                <div className="new-school"><b>Our CS team is in your corner -</b> we got you</div>
              </div>
              <div className="item-list">
                <div className="dot"><div className="dot"><img src="assets/images/r.svg" alt="" /></div></div>
                <div className="new-school"><b>One click global equity - </b>fair equity for all</div>
              </div>
              </div>
              <a className="primary-button-v2" href="">Get started today</a>
              <img className="image-293" src="assets/images/g.png" alt="" />
              </div>
        </div>
      </div>
    </section>
    <section className='home-how-section'>
      <div className="container">
        <h3 className='title-youth' data-aos="zoom-in">Cake is fast, reliable, secure</h3>
        <CardGroup>
        
      <Card>
        <Card.Img variant="top" src="assets/images/s1.png" />
        <Card.Body>
          <Card.Title>Set up employee
          stock options</Card.Title>
          <Card.Text>
          Cake allows employee equity offers to be easily understood, and aligned to company goals. Startups can create a culture of shared ownership and success that creates meaningful value in team culture, and wealth.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/images/s2.png" />
        <Card.Body>
          <Card.Title>Communicate to your team and shareholders</Card.Title>
          <Card.Text>
          Easily communicate value with your team to improve engagement and retention. Save time and money on your legal work. Valuations are sorted, wherever you need them. Plus automated vesting, exercising and reporting gives peace of mind.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/images/s3.png"  />
        <Card.Body>
          <Card.Title>Automate grant
          agreements</Card.Title>
          <Card.Text>
          Issue and manage employee equity for employees, contractors, and advisors. Automated reporting keeps records up to date, giving you peace of mind. World-class cloud-based infrastructure keeps your data secure.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
      </div>
    </section >
    <section className='over'>
      <div className="container">
        <div className="elin-container">
          <div className="elin-container-text">
            <div className="text-animation-wrapper">
              <h3 className='title-youth'>Attract, retain, and motivate your team with equity</h3>
            </div>
            <div className="text-animation-wrapper">
              <div className="body-small">Adding equity into hiring processes takes seconds. Create stock options or share plans, setup automatic vesting, motivate and reward your team for their work. Easily communicate the value with your team to improve culture, engagement and retention.</div>
            </div>
            <div className="text-animation-wrapper">
              <div className="cta-sidebyside"><a className='Primary-button-v2' href="#">Get Started Free</a></div>
            </div>
          </div>

          <div className="best-tool-2-image-container">
          <div className="best-tool-2-hero-absolute">
            <img src="assets/images/e1.webp" alt="" />
          </div>
          <div className="best-tool-2-hero-item">
          <img src="assets/images/e2.png" alt="" />
          </div>
          </div> </div>
         
  <div className="cv2-prod-feat-cta-div migration-comp">
    <div className="prod-feat-cta-text _40">
      <h3 className='title-youth'>Effortless migration, fast onboarding</h3>
      <div className="body-small">Cake takes the hassle out of migrating your cap table from another platform. Our intuitive software and our onboarding team ensures a seamless transition, for FREE.<br/></div>
      <div>
      <div className="product-feat-checklist">FREE migration</div>
      <div className="product-feat-checklist">Transparent pricing</div>
      <div className="product-feat-checklist">Personalized support</div>
      </div>
      
        <a className="transparent-button" href="">Learn more</a>
        </div>
        
      <img className='block-right-image' src="assets/images/e4.svg" alt="" />
      </div>
      </div>




    </section>
    
    
<section className='cv2-testimonial-section'>
 <section className='cv2-testimonial-div'>
 <div className="cv2-wrapper-1200px">
 <div className="cv2-testimonial-wrap">
 <div className="cv2-testimonial-header">
      <div className="cv2-subtitle">Rewiews</div>
      <h3 className='section-h3-youth'>What Cake users are saying</h3>
</div>
<div className="cv2-testimonial-container">
<div className="cv2-testimonial-slider">
<OwlCarousel className='owl-theme'{...Res} loop margin={30} nav>
<div class='item'>
<div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    <div class='item'>
    <div className="star d-flex">
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4>
        <h4><img src="assets/images/star.svg" alt="" /></h4></div>
        <div className="star1"><p>Solid functionality and a super responsive team</p></div>
        <div className="star2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corporis tenetur consectetur debitis harum impedit deserunt accusantium magni magnam unde dolorum quidem, perferendis repellat quasi excepturi nisi nam quae molestiae. Saepe praesenti.<br/><br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, aspernatur?
          </p></div>
          <div className="d-flex">
            <div className="star3"><img src="assets/images/st1.jpeg" width={'100px'} height={'100px'}alt="" /></div>
            <div className="star4"><p className='star5'><b>gavin ballard</b></p>
            <p>ceo disco labs</p> </div>
         </div>
    </div>
    
    
</OwlCarousel>
      
</div>
</div>

 </div>
 </div>
 </section>
</section>

<section className='cta-section'>
  <img className='cta-item-1-image' src="assets/images/cta1.png" alt="" />
  <img className='cta-item-2-image' src="assets/images/cta2.png" alt="" />
  <div className="cv2-main-wrapper-90 cta-flex">
    <div className="cta-wrapper">
      <div className="title-youth">
      Equity doesn't have to be complicated. Join Cake today and see for yourself!
      </div>
      <div className="cv2-button-container">
        <div className="div-block-277">
          <a className="primary-button-v2"  href="">Get started free</a>
          <div className="_5-stars-g2">
          <div className="_5-stars-hp">
          <img className='_5-star-img-hp' src="assets/images/star.svg" alt="" />
          <img className='_5-star-img-hp' src="assets/images/star.svg" alt="" />

          <img className='_5-star-img-hp' src="assets/images/star.svg" alt="" />

          <img className='_5-star-img-hp' src="assets/images/star.svg" alt="" />

          <img className='_5-star-img-hp' src="assets/images/star.svg" alt="" />
        </div>

        <img className="image-172" src="assets/images/star2.png" alt="" />
        <div className="_5-start-text black">5-star Rating</div>
          </div>
        </div>

        <img className='hero-credit-card-item with-stars' src="assets/images/star3.png" alt="" />
      </div>
    </div>
  </div>
</section>

    </>

    
  );
}

export default FillExample;