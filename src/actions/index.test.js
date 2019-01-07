import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      id:0,
      type: 'ADD_TODO',
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})