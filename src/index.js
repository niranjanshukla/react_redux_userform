import React, {PropTypes} from 'react';
import { createStore, compose } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Form from './components/Form';
import * as actions from './formActions';
import store from './formStore';

const UserForm = connect(state => state, actions)(Form);

export default props => (
  <Provider store={compose(createStore)(store)}>
    <UserForm {...props}/>
  </Provider>
);

export {default as TextField} from './components/TextField';
export {default as SubmitButton} from './components/SubmitButton';
export {default as List} from './components/List';
