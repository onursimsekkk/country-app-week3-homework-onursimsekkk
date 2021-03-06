import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function CountryCard() {
  const [countries, setCountries] = useState([]);  
  const [details, setDetails] = useState(false);
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);


return (
  <Container className="mt-4">
    <Row className="justify-content-center mb-3">
    {countries.map(country => {
      return (
        
          <Col className="col-lg-4 col-md-6 col-sm-12" key={country.name}>
            <Card className="shadow mx-auto mb-5" style={{ width: '18rem', height:'24rem'}}>
              <Card.Img variant="top" src={country.flag} alt={country.name + " flag"} />
              <Card.Body className="row d-flex align-items-center">
                <Card.Title>{country.name}</Card.Title>
                {details ? (
                  <>
                  <Card.Text>
                    Population{": " + country.population}
                  </Card.Text>
                  <Card.Text>
                    Most Spoken Language{": " + country.languages[0].name}
                  </Card.Text>
                  </>
                ) : (
                  <Card.Text>
                    <span className="text-decoration-underline">Capital</span>{": " + country.capital}
                  </Card.Text>
                )}
                
                <Button onClick={() => setDetails(!details)} variant="outline-primary" className="shadow letter-space">
                  {details ? "Close" : "Show details"}
                </Button>
              </Card.Body>
            </Card>
          </Col> 
        
      )
    })}
    </Row>
  </Container>
);
};

export default CountryCard;

