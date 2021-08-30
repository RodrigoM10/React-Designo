import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className="contact row row-cols-2">
            <div className="d-flex flex-column justify-content-center align-items-start p-5 text-start">
            <h1>Let's talk about your project</h1>
            <span>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-white m-0">GET IN TOUCH</button>
            </div>
        </div>
    )
}
