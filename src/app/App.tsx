import { Route, Routes } from 'react-router-dom'
import LoginPage from '../features/auth/components/LoginPage'
import HomePage from '../features/home/HomePage'
import NotFoundPage from '../features/misc/NotFoundPage'

const App = () => {
  return (
     <div className="App">
       <Routes>
         <Route path='/' element={<LoginPage/>} />
         <Route path='*' element={<NotFoundPage/>} />

         <Route path='/Login' element={<LoginPage/>} />
         <Route path='/Home' element={<HomePage/>} />
       </Routes>
     </div>
  )
}

export default App