import React, { useState } from 'react';
import { Row, Container, Navbar, Nav, Col, Table, Form, FormControl, Button } from 'react-bootstrap';
import './Home.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

  const PortfolioData=[
      {
          portfolio:"Portfolio A",
          apr:"APR",
          percentage:90,
          remark:"Top Is",
      },
      {
          portfolio:"Portfolio B",
          apr:"APR",
          percentage:45,
          remark:"Gaming",
      },
      {
          portfolio:"Portfolio C",
          apr:"APR",
          percentage:180,
          remark:"Nft",
      },
      {
          portfolio:"Portfolio D",
          apr:"APR",
          percentage:70,
          remark:"Low Risk",
      },
      {
          portfolio:"Portfolio E",
          apr:"APR",
          percentage:60,
          remark:"High Risk",
      },
      {
          portfolio:"Portfolio F",
          apr:"APR",
          percentage:20,
          remark:"Good",
      },
      {
          portfolio:"Portfolio G",
          apr:"APR",
          percentage:50,
          remark:"Nice",
      },
      {
          portfolio:"Portfolio H",
          apr:"APR",
          percentage:90,
          remark:"Better",
      },
      {
          portfolio:"Portfolio I",
          apr:"APR",
          percentage:28,
          remark:"Risky",
      },
  ]
  
const Home = (props) => {

    return (
        <div>
            <Row className='main-row-home'>
                <Col md={10}>

                    <Navbar bg="" expand="lg">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    style={{ justifyContent: "space-around" }}
                                    navbarScroll
                                >
                                    <Nav.Link  className='nav-li' >
                                       <Link to="/">
                                        Home
                                       </Link>
                                        </Nav.Link>
                                    <Nav.Link  className='nav-li'>
                                    <Link to="/pools">
                                        Pools
                                       </Link>
                                    </Nav.Link>
                                    <Nav.Link  className='nav-li'>
                                        <Link to="/">
                                        Deposit/Withdraw
                                       </Link>
                                        </Nav.Link>
                                    <Nav.Link  className='nav-li'>
                                        <Link to="/">
                                        Search
                                       </Link>

                                        </Nav.Link>

                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                   
                </Col>
               
            </Row>
            <Container style={{marginTop:"5%"}}>
            <Table  bordered  style={{backgroundColor:"white"}}>
  
  <tbody>
      {PortfolioData.map((data,id)=>{
          return(
              <tr key={id} >
                    <Link to="/portfolio" style={{textTransform:"uppercase",textDecoration:"none",color:"black"}}>
                <td style={{cursor:"pointer"}} onClick={()=>props.setData(data.portfolio)} >
                    {data.portfolio}
                    
                    </td>
                    </Link>
                <td>{data.apr}</td>
                <td>{data.percentage} %</td>
                <td style={{textTransform:"uppercase"}}>{data.remark}</td>
              </tr>
              
          )
      })}
   
  </tbody>
</Table>
            </Container>
        </div>
    );
}

export default Home;