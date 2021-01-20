import React from 'react';
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { FormGroup, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiLock, } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import history from "../history";
import {withRouter} from 'react-router';


const Div = styled.div`
width:60%;
display:flex;
position:center;
background:white;
margin:150px auto;
border:1px solid #eee;
box-shadow:0 2px 3px #ccc;
padding:16px;
text-align:center;
${props => props.vertical && "flex-direction: column;"}
`;
const Wrapper1 = styled.section`
width:60%;
  padding: 4em;
  background: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
  
text-align:start;
margin-top:-40px;
  color: black;
`;

const Para = styled.p`
font-size: 1em;
  
text-align:start;
margin-top:-20px;
  color: black;
`;

class Login extends React.Component {

  constructor(props) {
    super(props);

    

    this.state = {
      userName: "",
      password: "",
      roleName:"",
      loader:false,
      loginerror:false
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = () => {
    // history.push(`${process.env.PUBLIC_URL}/pages/managedebtors`);
    // window.location.reload();
    if(this.state.userName=="creditor" && this.state.password=="creditor"){
      history.push(`${process.env.PUBLIC_URL}/pages/managedebtors`);
      window.location.reload();
    }
else{
  this.setState({
    loginerror:true
  })
}
  };

  render(){
  return (
<div>
    <Div>
      <Wrapper1>
        <Title>Login</Title><br />
        <Para>Sign into your account</Para>
        <br />
        {this.state.loginerror?
        <h6 style={{color:"#E02725"}}><b>Invalid Credentials!!!</b></h6>:""
  }
        <FormGroup > <h5>{" "}  </h5>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>    <FaRegUser /></InputGroupText>
            </InputGroupAddon>
            <Input 
             type="text"
             name="userName"
             id="userName"
             onChange={this.onChange}
            value={this.state.userName} 
             placeholder=" Username" />
          </InputGroup>

        </FormGroup>
        <FormGroup > <h5>{" "}  </h5>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText> <BiLock /></InputGroupText>
            </InputGroupAddon>
            <Input   
             name="password"
             id="password"
             value={this.state.password} 
             onChange={this.onChange}
             placeholder=" Password" 
             type="password" />
          </InputGroup>

        </FormGroup>


        <div className="row">
          <div className="col-4">
           
              <button onClick={this.login} className="btn  px-4" style={{backgroundImage: 'linear-gradient(160deg, rgb(103, 183, 225) 25%, rgb(15, 105, 153))',color:'white',border:'none'}}>Login</button>
           
          </div>
          <div className="col-8 text-right">
          <Link to="/forgetpassword">   <button type="button" style={{ color: '#333333' }} className="btn btn-link px-0">Forgot
                      password?</button></Link>
          </div>
        </div>

      </Wrapper1>
  <div>
    <img style={{marginTop:'130px'}} src="https://brixo.se/resources/images/logo.png" alt="" />
    <h6 style={{marginTop:'15px'}}>CREDIT MANAGEMENT SYSTEM</h6>
  </div>
    </Div>
 </div>
  );}
};


export default withRouter(Login) ;