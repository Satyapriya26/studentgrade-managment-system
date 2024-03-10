import React,{Component} from "react";
import './Register.css'; 
import app from "./Firebase_config";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
// import { NavLink } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';
// import { useState } from 'react';
const auth = getAuth(app);
export default class Register extends Component {


  // const navigate=useNavigate();
  // const [res, setRes] = useState(null);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
    // axios.post('http://localhost:8888/', {
  //     username: data.get('username'),
  //     email : data.get('email'),
  //     mobileno : data.get('mobileno'),
  //     password : data.get('password'),
  //     reentered_password : data.get('repassword')
      
  //   }).then((response)=>{
  //     navigate("/");
  //     console.log(response.data);

      
  //     setRes(response.data)
  //   }).catch((err)=>{console.log(err)})

  constructor(props) {
    super(props);
      this.state = {
        username: "",
        email: "",
        mobileno: "",
        password: "",
        verifyButton: false,
        verifyOtp : false,
        otp:"",
        verified:false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.onSignInSubmit = this.onSignInSubmit.bind(this);
      this.verifyCode=this.verifyCode.bind(this);
  }

  onCaptchVerify(){

window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
    this.onSignInSubmit();
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // ...
  },
},
 auth);
  }
  onSignInSubmit(){
    this.onCaptchVerify();
    const phoneNumber = "+91" + this.state.mobile;
const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("otp sent");
      this.setState({verifyOtp: true});
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

  }

  verifyCode(){
   window.confirmationResult.confirm(this.state.otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      alert("Verification done");
      this.setState({
        verified:true,
        verifyOtp:false,

      });
      // ...
    }).catch((error) => {
      alert("Invalid otp");
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  changeMobile(e){
    this.setState({mobile : e.target.value },function(){
      if(this.state.mobile.length === 10){
        this.setState({
          verifyButton:true,
        });
      }
    });
  }


  handleSubmit(e){
    e.preventDefault();
    if(this.state.verified){
      const { username,email,mobileno,password } =this.state;
    console.log(username,email,mobileno,password);
    fetch("http://localhost:8888/register",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        mobileno,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if(data.status === "saved succesfully"){
          alert("Registration Successfull");
         window.location.href = "./";
         }
    });
    }else{
      alert("Please verify mobile");
    }
    
    
  }
  render(){
  return (
    <>
     <center>
    <body className="registerbody">
   
  
    <form  className='forms' onSubmit={this.handleSubmit}>

      <div id="recaptcha-container">

      </div>
      
  <div className="col-md-6">
    <label  className="form-label">USERNAME<input type="text" name="username" className="form-control" id="Enter user name"
     onChange={(e) =>this.setState({ username: e.target.value})}
    ></input></label><br></br>
    
  </div>
  <div className="col-md-3">
    <label  className="form-label">E-MAIL<input type="email" name="email" className="form-control" id="Enter E-MAIL"
    onChange={(e) =>this.setState({ email: e.target.value})}
    ></input></label>
    
  </div>

  <div className="col-md-6">
    <label  className="form-label">MobileNo<input type="text" name="mobileno" className="form-control" id="Enter mobileno"
     onChange={(e) =>this.changeMobile(e)}
    ></input></label><br></br>
    {this.state.verifyButton? <input
    type="button"
     value={this.state.verified?"Verified" : "Verify"}
     onClick={this.onSignInSubmit}
      style ={{ 
        backgroundColor:"#0163d2",
        width:"20%",
        padding:2,
        color:"white",
        border:"none"
      }}
    />:null}
    
  </div>
  {this.state.verifyOtp? (
  <div className="col-md-6">
    <label  className="form-label">otp<input type="text" name="otp" className="form-control" id="Enter mobileno"
     onChange={(e) =>this.setState({ otp: e.target.value})}
    ></input></label><br></br>

    <input type="button" value="otp"
    onClick={this.verifyCode}
    style ={{ backgroundColor:"#0163d2",width:"20%",padding:2,color:"white",border:"none"}}/>
    </div>
  ):null}


  <div className="col-12">
    <label className="form-label">PASSWORD<input type="password" name="password"className="form-control"
     onChange={(e) =>this.setState({ password: e.target.value})}
    ></input></label><br></br>
  </div>
  

  <div className="col-12">
    <input type='submit'className="btn btn-primary" value='Sign Up' />
  </div>
 

</form>



</body>
</center>
    </>
  );
  
}
}