import React from 'react'
import { Card } from 'react-bootstrap'
import './Cards.css'
import img1 from './img1.jpg'

export const CardRB = () => {
    return (
        <Card className="card-content bg-dark text-white">
            <Card.Img className="card-img" src={img1} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column aling-items-center justify-content-center align-items-center">
                <Card.Title><h1>Card title</h1></Card.Title>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}
