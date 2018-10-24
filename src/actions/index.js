import todoService from '../todoService'

const GET_TODOS = 'GET_TODOS',
  LOADING = 'LOADING',
  VALID_INPUT = 'VALID_INPUT',
  INVALID_INPUT = 'INVALID_INPUT',
  ERROR = 'ERROR'


export const loading = () => {
  return {
    type: LOADING
  }
}

export const validInput = () => {
  return {
    type: VALID_INPUT
  }
}

export const invalidInput = () => {
  return {
    type: INVALID_INPUT
  }
}

export const error = () => {
  return {
    type: ERROR
  }
}

export const getTodos = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    var todos = await todoService.getTodos();
    dispatch({
      type: GET_TODOS,
      payload: todos
    });
  } catch (error) {
    dispatch({ type: ERROR });
  }
}

export const addTodo = (title) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await todoService.addTodo(title)
  } catch (error) {

    dispatch({ type: ERROR });
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await todoService.deleteTodo(id)
  } catch (error) {
    dispatch({ type: ERROR });
  }
}

export const toggleTodo = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await todoService.toggleTodo(id)
  } catch (error) {
    dispatch({ type: ERROR });
  }
}


