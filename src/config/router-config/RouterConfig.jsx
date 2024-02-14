import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../components/Home'
import Navbar from '../../components/Nav'

const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterConfig