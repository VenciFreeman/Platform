import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
class Login extends React.Component {    
    constructor(props) {        
        super(props);        
        this.state = {                    

        }    
    }   
    render(){        
        return(        
        <div style={{margin:'10px'}}>            
        <Segment style={{textAlign:'center'}}>                
        <h2>Login in or register</h2>                
        <Input id='user' placeholder='用户名' style={{marginBottom:'10px'}}/><br/>                
        <Input id='password' type='password' placeholder='密码' style={{marginBottom:'10px'}}/>                
        <br/>
        <Link to ='/Home/'>              
        <Button type="primary" className="login-form-button" >Log in</Button>
        </Link>
        OR
        <Link to ='/Register/'>              
        <Button type="primary" className="login-form-button" >register</Button>
        </Link>         
        </Segment>        
        </div>    
        )    
    }

}
export default Login;

