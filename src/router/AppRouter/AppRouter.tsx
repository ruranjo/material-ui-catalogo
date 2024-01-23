import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../../components/common'
import { ErrorPage, HomePage, ProductPage, SingleProductPage } from '../../pages'


const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/material-ui-catalogo/' element={<Layout/>}>
            <Route path='/material-ui-catalogo/' element={<HomePage/>}/>
            <Route path='/material-ui-catalogo/home' element={<HomePage/>}/>
            <Route path='/material-ui-catalogo/producto/:name' element={<ProductPage/>}/>
            <Route path='/material-ui-catalogo/producto/:name/:id' element={<SingleProductPage/>}/>
            <Route path='/material-ui-catalogo/home/:id' element={<SingleProductPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter