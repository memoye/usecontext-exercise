import { useReducer } from 'react'
import './App.css'
import DetailsProvider from './context/cardDetailsContext'
import Card from './components/Card'
import InputArea from './components/InputArea'




function App() {


  return (
    <DetailsProvider>
      <>
        <Card side={ "front" } />
        <Card side={ "back" } />

        <InputArea />
      </>
    </DetailsProvider>



  )
}

export default App
