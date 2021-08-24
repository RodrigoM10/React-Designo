import React from 'react';
import { Container } from 'react-bootstrap';
import './Section-1.css'
// import iphone from './iphoneframe.png';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function Section1() {
  return (
    <section>
      <Container>
        <div className="section-1 row container-fluid">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-evenly p-5 ">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <span>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more bout our services.</span>
            <button className="btn btn-white">LEARN MORE</button>
          </div>
          <div className="col-12 col-lg-6 iphone-container">
            <div className="iphone-bg">
              <div className="iphone">
                {/* <img src={iphone} alt="" /> */}
                  <div className="frame-div">
                  <h1>FRAME</h1>
                  </div>
                  <div className="frame-btn">
                  <button className=" btn-white-squad">
                  <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                  </div> 
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
