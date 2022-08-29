import { useState } from 'react'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div style={{ position: 'fixed', zIndex: 100 }}>미니 프로젝트 2조!</div>
      <AppRouter />
    </div>
  )
}

export default App
