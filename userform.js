import React from 'react';
import ReactDOM from 'react-dom';
import Form, {TextField, SubmitButton, List} from './src/index';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
  <Form>
    <TextField
        name="firstName"
        placeholder="First name"
        label="first name"/>
  </Form>
), document.getElementById('container'));
