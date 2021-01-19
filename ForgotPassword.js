import React from 'react';
import {
  Card, CardHeader, CardBody,
} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  red;
  color: white;
  width:560px;
height: 40px;
  font-size: 1.2em;
  
  padding: 0.25em 1em;
  border: 2px ;
  border-radius: 3px;
`;


const ForgotPassword = (props) => {
  return (
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      <div className="e-card e-card-horizontal" style={{ width: `600px` }}>

        <br />
        <Card>
       
          <CardBody>

   
          <h1><b>Forgot Password</b></h1>

       
          <h6>HrPortal Forgot Password</h6>


        

      <FormGroup > <h5>{" "}  </h5>
      <InputGroup> 
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder=" Enter username" />
      </InputGroup> 
            </FormGroup>






            <FormGroup >
            
                <Link to="/"> 
                <Button color="danger" size="lg" block>Reset Account</Button>
                
                </Link>
                </FormGroup>
             
           
          </CardBody>

        </Card>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ForgotPassword;