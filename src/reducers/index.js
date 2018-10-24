export function rootReducer(state = [], action) {
    let clonedState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GET_TODOS':
            clonedState.todos = action.payload
            clonedState.isLoading = false
            return clonedState
        case 'ADD_TODO':
            return clonedState
        case 'TOGGLE_TODO':
            clonedState.todos[action.payload].complete = !clonedState.todos[action.payload].complete
            return clonedState
        case 'LOADING':
            clonedState.isLoading = true
            return clonedState
        case 'VALID_INPUT':
            clonedState.validInput = true
            return clonedState
        case 'INVALID_INPUT':
            clonedState.validInput = false
            return clonedState
        case 'GET_TODOS_ERROR':
            console.log("ERROR : ", action.payload)
            return clonedState
        default:
            return state
    }
}