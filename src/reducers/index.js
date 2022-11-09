const reducer = (state, action) => {
    console.log(state)

    switch (action.type) {
        case "SESSIONTYPE":
            return {
                ...state,
                activeSession: action.payload
            }
        case "INCREASE":
            const sessionType = action.payload.toLowerCase();
            return {
                ...state,
                [sessionType]: state[sessionType] + 1
            }
        case "DECREASE":
            const session  = action.payload.toLowerCase();
            return {
                ...state,
                [session]: Math.max(0,state[session] - 1)
            }
        default:
            return state


    }
}

export default reducer;