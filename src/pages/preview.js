import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './preview.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const Preview = (props) => {
   const [totalPrice,setTotalPrice]=useState("")
   const Have = [
       {
           name: "BITCOIN",
           price: 18
       },
       {
           name: "ETH",
           price: 13
       },
       {
           name: "BNB",
           price: 22
       },
       {
           name: "USDT",
           price: 28
       },
    ]
    const data = {
        labels: Have.map((have,id)=>{return have.name }),
        datasets: [
          {
            label: '# of Votes',
            data: Have.map((have,id)=>{return have.price }),
            backgroundColor: [
              'yellow',
              'orange',
              'blue',
              'red',
            ],
            borderColor: [
              '#b2cbfd3b',
              '#b2cbfd3b',
              '#b2cbfd3b',
              '#b2cbfd3b',
            ],
            borderWidth: 3,
          },
          
        ],
       
        
      };
    
        useEffect(()=>{
            setTotalPrice(Have.map(item => item.price).reduce((prev, curr) => prev + curr, 0))   

        },[])

    return (
        <Container>
            <Row className='justify-content-around' style={{alignItems:"center"}}>
                <Col md={3}>


                    <p className='you-will-text'>You will have:</p>
                    {Have.map((have, id) => {
                        return (
                            <Row key={id}>
                                <Col className='text-price' xs={6}>
                                    $ {have.price}
                                </Col>
                                <Col className='text-header' xs={6}>

                                    {have.name}
                                </Col>
                            </Row>
                        )
                    })}
                    <hr />
                    <Row>

                        <Col className='text-price' xs={6}>
                            $ {totalPrice} 
                        </Col>
                        <Col className='text-header' xs={6}>
                            Total
                        </Col>
                    </Row>
                    <Row>

                        <Col className='text-price' xs={6}>
                            $ 2 
                        </Col>
                        <Col className='text-header' xs={6}>
                            Fee
                        </Col>
                    </Row>
                <Container className='preview-btn'>
                <Button  >Preview</Button>

                </Container>
                </Col>
                <Col md={6}>
                <Container className='chart-container' >
        <Pie  data={data} />

            </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Preview;