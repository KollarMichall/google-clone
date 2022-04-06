import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to='/'>
                    <div className="flex flex-row">

                        <div className='text-4xl text-blue-500'>
                            G
                        </div>
                        <div className='text-4xl text-red-500'>
                            o
                        </div>
                        <div className='text-4xl text-yellow-500'>
                            o
                        </div>
                        <div className='text-4xl text-blue-500'>
                            g
                        </div>
                        <div className='text-4xl text-emerald-500'>
                            l
                        </div>
                        <div className='text-4xl text-red-500'>
                            e<span className='text-xs'>clone</span>
                        </div>
                    </div>
                </Link>
                <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-300  bg-gray-700  border rounded-full px-2 py-1 hover:shadow-lg'>
                    {darkTheme ? '💡' : '🌙'}
                </button>

            </div>
            <Search />
        </div>
    )
}

export default Navbar