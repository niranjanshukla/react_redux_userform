import React from 'react';
import ReactDOM from 'react-dom';
import {Form, TextField, SubmitButton} from '../index';

ReactDOM.render((
<Form>
  <UserField
        id="firstName"
        placeholder="First name"
        label="first name"/>
        <UserField
              id="lastName"
              placeholder="Last name"
              label="last name"/>
              <SubmitButton name="Submit"/>
              </Form>
), document.getElementById('container'));
