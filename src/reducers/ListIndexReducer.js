const initialState = []

const ListIndexReducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {
        case "lists/create":
            newState = [ ...state, action.payload]
            break
        case "lists/fetchAll":
            newState = state
            break
        default:
            newState = state
    }
    return newState
}

export default ListIndexReducer
