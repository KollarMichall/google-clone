import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Routers from './components/Routers'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    const location = useLocation()
    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                {location.pathname === '/' ? (
                    <Home setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                ) : (<>
                    <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                    <Routers />
                    <Footer />
                </>
                )}
            </div>
        </div>
    )
}

export default App