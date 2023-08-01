import { useContext } from 'react'
import { CardDetailsContext } from '../../context/cardDetailsContext'
import cardLogo from '../../assets/images/card-logo.svg'
import styles from './card.module.css'


const Card = ({ side }) => {
    const { state } = useContext(CardDetailsContext)
    console.log(state)

    return (
        <>
            {
                side === "front" ?
                    <div className={ `${styles.card} ${styles.cardFront}` } >
                        <div className={ styles.logo }></div>
                        <p className={ styles.cardNo }>{ state.num.padStart(16, '0').match(/.{1,4}/g).join(' ') }</p>
                        <div className={ styles.lowerInfo }>
                            <p className={ styles.name }>{ state.name }</p>
                            <p className={ styles.date }>{ state.dd.padStart(2, '0') }/{ state.yy.padStart(2, '0') }</p>
                        </div>
                    </div>
                    :
                    <div className={ `${styles.card} ${styles.cardBack}` }>
                        <div className={ styles.text }>
                            <p>{ state.cvc.padStart(3, '0') }</p>
                        </div>
                    </div>
            }
        </>
    )
}

export default Card