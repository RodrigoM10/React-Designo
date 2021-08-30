import React from 'react'
import './ContactFT.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faYoutube, faTwitterSquare, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons'

export const ContactFT = () => {
    return (
        <div className="row contactFT ">
            <div className="col-4 text-start d-flex flex-column">
                <h4>Designo Central Office</h4>
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
            </div>
            <div className="col-4 text-start d-flex flex-column">
                <h4>Contact Us (Central Office)</h4>
                <h4>P: +1 253-863-8967</h4>
                <h4>M: contact@designo.co</h4>
            </div>
            <div className="social-icons col-4 d-flex align-items-end justify-content-end">
                <FontAwesomeIcon icon={faFacebookSquare} className="m-2"/>
                <FontAwesomeIcon icon={faYoutube} className="m-2"/>
                <FontAwesomeIcon icon={faTwitterSquare} className="m-2"/>
                <FontAwesomeIcon icon={faPinterest} className="m-2"/>
                <FontAwesomeIcon icon={faInstagram} className="m-2"/>
            </div>
        </div>
    )
}
