import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { RoutesData } from './pages/RoutesData'

import './App.css'

const App: FC = () => {
  return (
    <div className='App'>
      <div className='main'>
        <BrowserRouter>
          <Header />
          <div className='appBody'>
            <Routes>
              {RoutesData.map(e => (
                <Route key={e.path} path={e.path} element={e.view} />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
        <div className='footer'>
          <span></span> {/*Footer*/}
        </div>
      </div>
    </div>
  )
}

export default App
