import React from 'react'
import { Container } from 'react-bootstrap';
import { CardRB } from '../Cards/Cards'


export default function Section1()  {
    return (
        <section>
            <Container>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-evenly  m-3 p-3 ">
                <div>
                    <CardRB />
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            </Container>
        </section>
    )
}
