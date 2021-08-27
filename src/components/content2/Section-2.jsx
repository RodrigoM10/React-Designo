import React from 'react'
import { Container } from 'react-bootstrap';
import { Cards } from '../Cards/Cards'

const cards = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dcx1rcwvu/image/upload/v1629929022/photo-1597239451147-f163967b8581_b2qy0s.jpg' ,
      title: 'WEB DESING',
      subtitle: 'VIEW PROJECTS',
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dcx1rcwvu/image/upload/v1629929016/awhCbhLqRceCdjcPQUnn_IMG_0249_pxsf4h.jpg',
      title: 'APP DESING',
      subtitle: 'VIEW PROJECTS',
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630073439/photo-1611966080589-2aaa3489bf72_is3lqw.jpg',
      title: 'GRAPHIC DESIGN',
      subtitle: 'VIEW PROJECTS',
    },
  ]
  
export default function Section1()  {

    return (
        <section>
            <Container>
            <div>
                <Cards cards={cards}/>
            </div>
            </Container>
        </section>
    )
}
