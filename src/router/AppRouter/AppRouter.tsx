import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../../components/common'
import { ErrorPage } from '../../pages'

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<>HomePage</>}/>
            <Route path='/home' element={<>HomePage</>}/>
            <Route path='/producto' element={<>ProductPage</>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default AppRouter