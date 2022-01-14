import React, { useState } from 'react';
import { Row, Container, Navbar, Nav, Col, Table, Form, FormControl, Button } from 'react-bootstrap';
import './Portfolio.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);



  const ChartData=[
      {
          name:"Bitcoin",
          value:32
      },
      {
          name:"Ethereum",
          value:20
      },
      {
          name:"Cardand",
          value:10
      },
      {
          name:"Soland",
          value:8
      },
      {
          name:"Xrp",
          value:5
      },
      {
          name:"Litecoin",
          value:5
      },
      {
          name:"Doge",
          value:5
      },
      {
          name:"Luna",
          value:5
      },
      {
          name:"xxxxx",
          value:5
      },
  ]

  const data = {
    labels: ChartData.map((data)=>{return data.name}),
    datasets: [
      {
        label: "First dataset",
        data: ChartData.map((data)=>{return data.value}),
        fill: true,
        backgroundColor: [
            '#FF0000',
            '#FF7300',
            '#26D7AE',
            '#E01E84',
            '#2DCB75',
            '#8399EB',
            '#FFEC00',
            '#9C46D0',
            '#007ED6',
          ],
          borderColor: [
            '#b2cbfd3b',
            '#b2cbfd3b',
            '#b2cbfd3b',
            '#b2cbfd3b',
          ],
          borderWidth: 3,
        },
          
      
    ]
  };
  
const Portfolio = (props) => {

    return (
        <div>
           
            <Container>
                <h3 className='mt-3'>{props.data}</h3>
                <Row className='mt-5 justify-content-between'>
                    <Col xs={12} md={4} lg={6}>
                        {ChartData.map((data,id)=>{
                            return(
                        <Row key={id} style={{color:"white"}} className='mt-2' >
                            <Col xs={6}>
                                <h5>{data.name}</h5>
                            </Col>
                            <Col xs={6}>
                                <h5>{data.value}%</h5>
                            </Col>
                        </Row>

                            )
                        })}
                    </Col>
                    <Col  xs={10} md={6} lg={4} style={{textAlign:"center",marginTop:"20px"}}>
                        <Pie  data={data} />
                        <Button className='buy-btn'>
                            <Link to="/available">

                            Buy
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
         
        </div>
    );
}

export default Portfolio;