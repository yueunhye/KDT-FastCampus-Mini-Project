import { useState } from 'react'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AppRouter />
    </div>
  )
}

export default App
