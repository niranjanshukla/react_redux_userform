import React from 'react';
import ReactDOM from 'react-dom';
import Form, {TextField, SubmitButton} from './src/index';
import {buttons, forms} from 'bootstrap-css';

ReactDOM.render((
  <Form>
    <TextField
        name="firstName"
        placeholder="First name"
        label="first name"/>
        <TextField
            name="lastName"
            placeholder="Last name"
            label="last name"/>    
    <SubmitButton/>

  </Form>
), document.getElementById('container'));
