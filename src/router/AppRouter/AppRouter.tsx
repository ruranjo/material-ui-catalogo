import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../../components/common'
import { ErrorPage, HomePage, ProductPage } from '../../pages'


const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/producto/:name' element={<ProductPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter