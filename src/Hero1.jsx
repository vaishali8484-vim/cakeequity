import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero1=()=>{
    return(
<>          <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="col6">
                        <div className="home-hero-copy-container">
          <h1 className="hero-h1">
            The intuitive equity platform for fast-growing startups
          </h1>
          <h2 className="homepage-hero-text mobile-center">
            Automate your equity with Cake's cap table, equity grant templates, raise simulation, and scalable equity platform.
          </h2>
          <div className="home-hero-usp">
            <div className="home-hero-usp-div">
              <img
                src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/6662cbf36f031862dc8bf302_icon-coins-hand.svg"
                loading="lazy"
                alt=""
                className="home-hero-usp-icon"
              />
              <div className="body-small highlight">Offer equity in minutes</div>
            </div>
            <div className="home-hero-usp-div">
              <img
                src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/6662cbf3fb36c6a4def6f117_icon-star-01.svg"
                loading="lazy"
                alt=""
                className="home-hero-usp-icon"
              />
              <div className="body-small highlight">Keep cap table clean</div>
            </div>
            <div className="home-hero-usp-div">
              <img
                src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/6662cbf38520d0222b531673_icon-thumbs-up.svg"
                loading="lazy"
                alt=""
                className="home-hero-usp-icon"
              />
              <div className="body-small highlight">Motivate your team</div>
            </div>
          </div>
          <div className="cv2-button-container">
            <div className="cv2-cta-social-proof">
              <div className="button-animation-wrapper">
                <a
                  href="https://app.cakeequity.com/setup_company/?cta_platform=website&cta_location=home&cta_button=hero"
                  className="primary-button-v2"
                >
                  Get started free
                </a>
              </div>
              <div className="_5-stars-g2">
                <div className="_5-stars-hp">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/6670fb10c109185e5e5f3645_icon-review-star.svg"
                      loading="lazy"
                      alt=""
                      className="_5-star-img-hp"
                    />
                  ))}
                </div>
                <img
                  src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/64479731cf30683e4bdd6575_g2-logo.png"
                  loading="lazy"
                  width="15"
                  alt=""
                  className="image-172"
                />
                <div className="_5-start-text">5-star Rating </div>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66960a80ea3e27832ff1c6e3_no-credit-card-required.png"
              loading="lazy"
              alt=""
              className="no-credit-card-req button-left-align"
            />
          </div>
        </div>
        
                        </div>
                        <div className="col6">
                        
                        <div className="home-hero-img-container">
          <div className="home-hero-main-image">
            <img
              src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/666a761a35c1672d304dc4c8_cake-dashboard-v2.svg"
              loading="lazy"
              alt=""
              className="home-hero-images"
            />
          </div>
          <div className="home-hero-image-wrap">
            <img
              src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/666aac56d1e583caef500626_homepage-option-pool.svg"
              loading="lazy"
              width="319"
              alt=""
              className="home-hero-images"
            />
          </div>
          <div className="home-hero-image-wrap michael">
            <img
              src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/666a705a8530f50ddcc39dd6_michael-fox-cakev2.svg"
              loading="lazy"
              width="225"
              alt=""
              className="home-hero-images"
            />
          </div>
          <div className="home-hero-profile-wrap elin">
            <img
              className="home-hero-profile-images"
              src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66874dfbfcbe55c10991ca61_CV2-vince-pic.png"
              alt=""
              loading="lazy"
              sizes="(max-width: 479px) 80px, (max-width: 767px) 90.00000762939453px, (max-width: 991px) 12vw, (max-width: 1279px) 9vw, 90.00000762939453px"
              srcSet="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66874dfbfcbe55c10991ca61_CV2-vince-pic-p-500.png 500w, https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66874dfbfcbe55c10991ca61_CV2-vince-pic.png 800w"
            />
          </div>
          <div className="home-hero-profile-wrap clayton">
            <img
              className="home-hero-profile-images"
              src="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66874dfb41e5caefd77e2959_CV2-shan-pic.png"
              alt=""
              loading="lazy"
              sizes="(max-width: 767px) 100.00000762939453px, (max-width: 991px) 13vw, (max-width: 1279px) 9vw, 100.00000762939453px"
              srcSet="https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66874dfb41e5caefd77e2959_CV2-shan-pic-p-500.png 500w, https://cdn.prod.website-files.com/63ca0685daa2425d2057a7a8/66874dfb41e5caefd77e2959_CV2-shan-pic.png 800w"
            />
          </div>
        </div>
        </div>
      
   
                        </div>
                    </div>
                </div>
            </div>
</>

    )
}
export default Hero1