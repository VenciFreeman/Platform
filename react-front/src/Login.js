import React, { Component } from "react";
import { Form, Icon, Button} from "antd";
import { withRouter,Link} from "react-router-dom";
import { Segment, Input } from 'semantic-ui-react'
import "./App.css";


class Login extends Component {    
    constructor(props){
        super(props);
        this.state = {
          username: "",
          password: ""
        };
      }
    handleSubmit = async (e) => {
        let res = await fetch("http://localhost:8080/UserManager1",{
          method: "get",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
        });
        let result = await res.json();
        let valid = false;
        for(let i = 0; i < result.length; i++)
        {
            if(this.state.username === result[i]["username"] && this.state.password === result[i]["password"])
            {
                valid = true;
                this.props.setUser(result[i]["userid"], result[i]["username"]);
                this.props.history.push("/Home");
            }
        }
        if(!valid){alert("用户名或密码错误");}
    }
    userChange = (e) => { this.setState({ username: e.target.value }); }
    passwordChange = (e) => { this.setState({ password: e.target.value }); }
    render()
    {
        const { getFieldDecorator } = this.props.form;
        return(
            <Segment style={{textAlign:'center'}}>
            <Form onSubmit={this.handleSubmit} >
                <Form.Item>
                    { getFieldDecorator("userName", {
                        rules: [{ required: true, message: "Please input your username!"}],
                        })(
                            <Input prefix={ <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} value="" onChange={ this.userChange } placeholder="Username" />
                        )}
                </Form.Item>
                <Form.Item>
                    { getFieldDecorator("password", {
                        rules: [{ required: true, message: "Please input your password!" }],
                    })(
                        <Input prefix={ <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" value="" onChange={ this.passwordChange } placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={ this.handleSubmit }>Log in</Button>or
                <Link to="/Register">
                    <Button type="primary" >Register</Button>
                </Link>
                </Form.Item>
            </Form>
            </Segment>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default withRouter(WrappedLogin);