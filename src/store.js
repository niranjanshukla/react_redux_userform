import * as c from './constants';
import assign from 'lodash.assign';

const initialState = {
  values: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

    case c.FORM_UPDATE_VALUE:
    return assign({}, state, {
      values: assign({}, state.values, {
        [action.name]: action.value
      })
    });

    case c.SHOW_PROGRESS: return assign({}, state, {
      values: assign({}, state.values, {
        ["loading"]: true
      })
    });

    case c.FORM_SUBMIT:

    delete state.values.loading;

    if(typeof state.values.firstname === 'undefined'){
      state.values.firstname = '';
    }
    if(typeof state.values.lastname === 'undefined'){
      state.values.lastname = '';
    }

    return assign({}, state, {
      values: assign({}, state.values, {
        ["result"]: state.values.firstname + ' ' + state.values.lastname
      })
    });

    case c.FORM_RESET:
    return initialState;

    default:
    return state;
  }
}
