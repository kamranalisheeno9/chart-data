import React ,{useState} from 'react'
import './Available.css';
import { Button,Container,Offcanvas,Row,Col,InputGroup,FormControl } from 'react-bootstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Available =()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [usd,setUsd]=useState('')
    const [available,setAvailable]=useState(22)
   

    const data = {
        labels: ['BTC', 'ETH', 'BNB', 'USDT',],
        datasets: [
          {
            label: '# of Votes',
            data: [133,636.66 ,254.27, 386.99,],
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

  return (
    <Container className="">
        <Row className='justify-content-between' className='home-row'>
        <Col xs={9} lg={6}>
            <Container className='chart-container' >
        <Pie data={data} />

            </Container>
        </Col>
        <Col xs={3} sm={1}>

     
     <Button className='arrow-btn' variant="primary" onClick={handleShow}>
        $
      </Button>

      <Offcanvas className="canvas-container" placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <div className='input-body'>

        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">USD$</InputGroup.Text>
    <FormControl
    className='usd-input'
    placeholder="00"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    value={usd}
    onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }}}
        onChange={(e)=>setUsd(e.target.value)}
        />
  </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Available $</InputGroup.Text>
    <FormControl
    className='usd-input'
    placeholder="00"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    value={available}
    onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }}}
        onChange={(e)=>setAvailable(e.target.value)}
        />
  </InputGroup>
        </div>
        <Container className='btn-container'>
        <Link to="/preview-page">
            
        <Button variant="primary">Preview Buy</Button>{' '}
        </Link>
        </Container>

        </Offcanvas.Body>
      </Offcanvas>
        </Col>
       
        </Row>
    </Container>
  );
}

export default Available;
