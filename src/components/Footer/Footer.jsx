import React from 'react';
import { Contact} from '../Contact/Contact'
import { ContactFT } from '../ContactFT/ContactFT'
import {NavbarFT} from '../navbar/TheNav'
import './Footer.css'


export default function Footer() {
  return (
    <footer className="footer d-flex flex-column justify-content-center aling-items-center mt-5">
      <div className="container footer-white position-relative">
        <div className="contact-position">
          <Contact />
        </div>
      </div>
      <div className="container-fluid footer-black bg-dark">
        <div className="mt-5">
          <NavbarFT />
        </div>
        <hr className="text-white"/>
        <div className="container my-5">
          <ContactFT />
        </div>
      </div>
    </footer>
  );
}
