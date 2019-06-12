import React, { Component } from "react";
import { Form, Button} from 'antd';
import { Segment, Input } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
const FormItem = Form.Item;
class Register extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    username: "",
    password: "",
    email: "",
    phone: "",
  };

  userChange = (e) => { this.setState({ username: e.target.value }); }
  passwordChange = (e) => { this.setState({ password: e.target.value }); }
  emailChange = (e) => { this.setState({ email: e.target.value }); }
  phoneChange = (e) => { this.setState({ phone: e.target.value }); }

  handleSubmit = async (e) => {
    let url = "http://localhost:8080/UserManager?username=" + this.state.username + "&password=" + this.state.password + "&email=" + this.state.email + "&phone=" + this.state.phone;
    let res = await fetch(url,{
      method: "post",
      headers: {
        "Accept": "text/html",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    let result = await res.text();
    if("success" === result)
    {
      this.props.history.push("/Home");
    }
    else
    {
      alert("register failed!");
    }
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Segment style={{textAlign:'center'}}>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input onChange={ this.emailChange } id='邮箱' placeholder='邮箱' />
          )}
        </FormItem><br/>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" onChange={ this.passwordChange } id='密码' placeholder='密码'/>
          )}
        </FormItem><br/>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} id='确认密码' placeholder='确认密码'/>
          )}
        </FormItem><br/>
        <FormItem>
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input onChange={ this.userChange } id='昵称' placeholder='昵称'/>
          )}
        </FormItem><br/>
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input onChange={ this.phoneChange } id='手机号码' placeholder='手机号码' />
          )}
        </FormItem><br/>
        <FormItem>
          <Button type="primary" onClick={ this.handleSubmit } >Register</Button>
        </FormItem>
      </Form>
      </Segment>
    );
  }
}

const WrappedRegister = Form.create()(Register);

export default withRouter(WrappedRegister);