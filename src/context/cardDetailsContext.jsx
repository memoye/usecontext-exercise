import { createContext, useReducer } from "react"
import reducer from "../reducer/reducerActions"


export const CardDetailsContext = createContext(null)

const initialState = {
    name: "John Doe",
    num: "0000 0000 0000 0000",
    dd: "02",
    yy: "24",
    cvc: "123"
}


const DetailsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <CardDetailsContext.Provider value={ { state, dispatch } } >
            { children }
        </CardDetailsContext.Provider>
    )
}

export default DetailsProvider