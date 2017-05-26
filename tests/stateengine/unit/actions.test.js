import test from 'tape'
import deepFreeze from 'deep-freeze'

import store from '../../../src/store'
import * as actions from '../../../src/actions'

// Test update action
test('update value', (t) => {
    const stateBefore = {
        values: {
          firstname: "john"
        }
    }
    const stateAfter = {
      values: {
        firstname: "john",
        lastname: "doe"
      }
    }

    deepFreeze(stateBefore)
    deepFreeze(stateAfter)

    t.deepEqual(
        store(stateBefore, actions.update("lastname","doe")),
        stateAfter,
        'entering lastname after firstname should update state with both firstname and lastname'
    )

    t.end()
}),



// Test submit action
test('submit values', (t) => {
    const stateBefore = {
        values: {
          firstname: "john",
          lastname: "doe"
        }
    }
    const stateAfter = {
      values: {
        firstname: "john",
        lastname: "doe",
        result: "john doe"
      }
    }

    deepFreeze(stateBefore)
    deepFreeze(stateAfter)

    t.deepEqual(
        store(stateBefore, actions.submit()),
        stateAfter,
        'submitting after entering first and last names should populate result'
    )

    t.end()
}),


//Test reset action
test('reset values', (t) => {
    const stateBefore = {
        values: {
          firstname: "john",
          lastname: "doe",
          result: "john doe"
        }
    }
    const stateAfter = {}

    deepFreeze(stateBefore)
    deepFreeze(stateAfter)

    t.deepEqual(
        store(stateBefore, actions.reset()),
        stateAfter,
        'reset should clear the state'
    )

    t.end()
})
