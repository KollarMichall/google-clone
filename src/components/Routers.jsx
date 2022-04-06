import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Results from './Results'

const Routers = () => {
    return (
        <div className='p-4'>
            <Routes>
                {/* <Route path='/' element={<Navigate to={'/search'} />} /> */}
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/search" element={<Results />} />
                <Route path="/image" element={<Results />} />
                <Route path="/news" element={<Results />} />
                <Route path="/video" element={<Results />} /> 
            </Routes>
        </div>
    )
}

export default Routers