import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../../components/common'

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<>HomePage</>}/>
            <Route path='/producto' element={<>ProductPage</>}/>
        </Route>
        <Route path='/login' element={<>LoginPage</>}/>
    </Routes>
  )
}

export default AppRouter