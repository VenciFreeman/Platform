import React, { Component } from "react";
import { Segment, Input, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";

class Register extends Component { 
  render() {
    return (
      <Segment style={{textAlign:'center'}}>
        <Input id='邮箱' placeholder='邮箱' style={{marginBottom:'20px'}}/><br/>
        <Input id='密码' placeholder='密码' style={{marginBottom:'20px'}}/><br/> 
        <Input id='确认密码' placeholder='确认密码' style={{marginBottom:'20px'}}/><br/> 
        <Input id='昵称' placeholder='昵称' style={{marginBottom:'20px'}}/><br/> 
        <Input id='手机号码' placeholder='手机号码' style={{marginBottom:'20px'}}/><br/>
        <Link to ='/'>              
        <Button type="primary" className="login-form-button" >register</Button>
        </Link>   
      </Segment>
    );
  }
}

export default Register;
