import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ReactDOM from 'react-dom';

const GoldPrice = () => {
  const [prices, setprices] = useState([])
  const [golddate, setgolddate] = useState('')
  const [dollar, setDollar] = useState(18.87)
  const [updatedEgpprice, setUpdatedEgpprice] = useState()
  const [updatedAedprice] = useState(3.67)
 
  const GetHandler = () => {
    async function fetchData() {
      const request = await axios.get('https://data-asg.goldprice.org/dbXRates/USD')
      console.log(request.data)
      setprices(request.data.items[0].xauPrice)
      setgolddate(request.data.date)
      setUpdatedEgpprice(prices * dollar)
      return request;
    }
    fetchData();
    alert('Gold Price Updated')
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://data-asg.goldprice.org/dbXRates/USD')
      console.log(request.data)
      setprices(request.data.items[0].xauPrice)
      setgolddate(request.data.date)
      let h2 = React.createElement("h2", null, prices)
      ReactDOM.render(h2, document.getElementById('container'))
      return request;
    }
    fetchData();
  })
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div>
          <img className='rounded' style={{ width: '300px', height: '200px' }} src='./images/stocks.jpeg' alt='stocks' />
          </div>
          <div className='mt-4'>
          <img className='rounded' style={{ width: '300px', height: '200px' }} src='./images/gold.jpeg' alt='gold' />
          </div>
          <div className="text-danger text-decoration-underline mt-2" id="container"></div>
        </div>
        <div className='col-lg-8 col-md-6 col-sm-6'>
          <Card className="text-center">
            <Card.Header className="text-danger fw-bold fs-2">Gold Prices Daily</Card.Header>
            <Card.Body>
              <Card.Title className="text-success text-decoration-underline">Sharaf Gate Rights</Card.Title>
              <Card.Text className="text-danger fs-2 fw-bold">
                Gold Price in USD : {prices}<br />
              </Card.Text>
              <Card.Text className="text-secondary fs-2 fw-bold">
                <div>
                  Gold Price in EGP : {updatedEgpprice}
                </div>
                <div>
                  Gold 24 Gram price in EGP : {updatedEgpprice/31.1}
                </div>
                <div>
                  Gold Price in AED : {prices * updatedAedprice}
                </div>
              </Card.Text>
              <div>
                <input type='number' onChange={(e) => setDollar(e.target.value)} value={dollar} className='text-center fw-bold'/>
              </div>
              <div className='mt-2'>
                <Button variant="success text-light fw-bold" onClick={GetHandler}>Update Gold Price</Button>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted fs-3">{golddate}</Card.Footer>
          </Card>
          
        </div>
      </div>
      
      <div>
        <table className='text-dark table text-center table-primary table-hover table-bordered border-danger table-striped'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Address</th>
            </tr>
          </thead>
          <tbody className='fw-bold'>
            <tr>
              <td>Ashraf</td>
              <td>40</td>
              <td>egypt</td>
            </tr>
            <tr>
              <td>Mohamed</td>
              <td>30</td>
              <td>UAE</td>
            </tr>
            <tr>
              <td>Khalid</td>
              <td>35</td>
              <td>Qatar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GoldPrice