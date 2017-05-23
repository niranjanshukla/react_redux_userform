import * as constants from './constants';

export function update(name, value) {
  return dispatch => dispatch({
    type: constants.FORM_UPDATE_VALUE,
    name, value
  });
}

export function reset() {
  return dispatch => dispatch({
    type: constants.FORM_RESET
  });
}
