import React from 'react'
import { useContext } from 'react'
import { CardDetailsContext } from '../../context/cardDetailsContext'

const Card = ({ side }) => {
    const { state } = useContext(CardDetailsContext)
    console.log(state)

    return (
        <>
            {
                side === "front" ?
                    <div className='display'>
                        <p>{ state.num.padStart(16, '0') }</p>
                        <div style={ { display: "flex", placeItems: 'center' } }>
                            <p>{ state.name }</p>
                            <p>{ state.dd }/{ state.yy }</p>
                        </div>
                    </div>
                    :
                    <div>
                        <p>{ state.cvc }</p>
                    </div>


            }
        </>
    )
}

export default Card