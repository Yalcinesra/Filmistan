import React from "react";


const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              
            </div>
            <div className="text-center mt-3">
             
              <h5 className="mt-2 mb-0">Esra Yalcin</h5>
              <span>Frontend Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                   
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                <a className="linkA" target="_blank" href="https://www.instagram.com/zeynep.mode?igsh=MWc3dmtndWRpeTF3MQ==">
                  <i className="fa-brands fa-instagram" /></a>
                </li>
                <li>
                <a className="linkA" target="_blank" href="https://www.linkedin.com/in/esra--yalcin/">
                  <i className="fa-brands fa-linkedin" /></a>
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/Yalcinesra"

                    target="true">
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
