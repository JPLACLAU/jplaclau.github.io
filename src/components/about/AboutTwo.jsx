import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/Testimonial";
import Services from "../service/Service";
import Awards from "../award/Awards";

const AboutTwo = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/JPL626x630.png" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Web3 & Web Developer</p>
                  <h3>Jean-Paul Laclau</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from Buenos Aires I code and create web
                    elements for amazing people around the world. I like to work
                    with new people. New people new Experiences.
                  </p>
                  <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from Buenos Aires. I code and create web
                    elements for amazing people around the world. I like to work
                    with new people. New people new Experiences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Jean-Paul Laclau</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>20th May 1985</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>37 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Vicente López, Buenos Aires.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>+54 (9) 11 2265-3586</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>laclaujeanpaul@gmail.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>chompolario</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
