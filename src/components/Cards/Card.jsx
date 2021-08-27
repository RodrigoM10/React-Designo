import React from 'react'
import { Card } from 'react-bootstrap'
import './Card.css'

export const CardRB = ({cardRB}) => {
    const {img, title, subtitle} = cardRB;
    return (
        <Card className="card-content bg-dark text-white">
            <Card.Img className="card-img" src={img} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column aling-items-center justify-content-center align-items-center">
                <Card.Title><h1>{title}</h1></Card.Title>
                <Card.Text>{subtitle}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}
