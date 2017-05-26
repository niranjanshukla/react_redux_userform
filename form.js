import React from 'react';
import ReactDOM from 'react-dom';
import Form, {Text, ResultArea, DropDown, SubmitButton, ResetButton} from './src/index';

ReactDOM.render((
  <Form onSubmit={data => console.log(data)}>
    <Text
      name="firstname"
      placeholder="First name"
      label="First name"/>
    <Text
        name="lastname"
        placeholder="Last name"
        label="Last name"/>
    <DropDown name="hobbies" hobbies={['Soccer','Badminton','Art']}/>
    <SubmitButton/>
    <ResetButton/>
    <ResultArea
          name="result"
          placeholder="result"
          label="Result"/>
  </Form>
), document.getElementById('container'));
