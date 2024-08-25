import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Details from './components/Details/Details'
import Card from './components/Card/Card'

function App() {
  const [userDeatils , SetUserDeatils] = useState([]);
  return (
    <>
      <Details SetUserDeatils={SetUserDeatils} />
      <Card userDeatils={userDeatils} />
    </>
  )
}

export default App
