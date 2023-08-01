import { useReducer } from 'react'
import './App.css'
import DetailsProvider from './context/cardDetailsContext'
import Card from './components/Card'
import InputArea from './components/InputArea'




function App() {


  return (
    <DetailsProvider>

      <div className='App'>
        <div className='cardsContainer'>
          <Card side={ "front" } />
          <Card side={ "back" } />
        </div>

        <InputArea />
      </div>
    </DetailsProvider>



  )
}

export default App
