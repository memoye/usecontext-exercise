
export default function reducer(state, action) {
    switch (action.type) {
        case "SET_NUM":
            return { ...state, num: action.payload }

        case "SET_NAME":
            return { ...state, name: action.payload }

        case "SET_DD":
            return { ...state, dd: action.payload }

        case "SET_YY":
            return { ...state, yy: action.payload }

        case "SET_CVC":
            return { ...state, cvc: action.payload }

        default:
            return state
    }
}

