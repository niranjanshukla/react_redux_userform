import * as c from './constants';

export function update(name, value) {
  return dispatch => dispatch({
    type: c.FORM_UPDATE_VALUE,
    name, value
  });
}

export function submit() {
  return dispatch => {
    dispatch({
      type: c.SHOW_PROGRESS
    });
    setTimeout(() => {
      dispatch({
        type: c.FORM_SUBMIT
      });
    }, 3000);
  }
}

export function reset() {
  return dispatch => dispatch({
    type: c.FORM_RESET
  });
}
