import { useContext } from "react"
import { CardDetailsContext } from "../../context/cardDetailsContext"


const InputArea = () => {
    const { dispatch } = useContext(CardDetailsContext)

    return (
        <form className='inputs'>

            <label htmlFor="chNo">Card Holder's Number: </label>
            <input type="text" name='chNo' id="chNo" onInput={ (e) => {
                dispatch({ type: "SET_NUM", payload: e.target.value })
            } } />
            <br />

            <label htmlFor="chName">Card Holder's Name</label>
            <input type="text" name='chName' id="chName" onInput={ (e) => {
                dispatch({ type: "SET_NAME", payload: e.target.value })
            } } />

            <div style={ { display: "flex", placeItems: 'center' } }>
                <label>Expiry</label>
                <input type="text" placeholder='DD' onChange={ (e) => {
                    dispatch({ type: "SET_DD", payload: e.target.value })
                } } />
                <input type="text" placeholder='yy' onChange={ (e) => {
                    dispatch({ type: "SET_YY", payload: e.target.value })
                } } />

                <label>CVC</label>
                <input type="text" placeholder='eg. 123' onInput={ (e) => {
                    dispatch({ type: "SET_CVC", payload: e.target.value })
                } } />
            </div>

        </form>
    )
}

export default InputArea