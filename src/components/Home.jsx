import { BsSearch } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';

const Home = ({ setDarkTheme, darkTheme }) => {
    const { setSearchTerm } = useResultContext();
    const [text, setText] = useState('');
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setSearchTerm(text)
    }, [text]);

    if (redirect) { return <Navigate to='/search' /> }


    return (
        <div className='min-h-screen w-full flex flex-col flex-wrap justify-center items-center'>
            <div className="flex flex-row p-10 pt-0">

                <div className='text-9xl text-blue-500'>
                    G
                </div>
                <div className='text-9xl text-red-500'>
                    o
                </div>
                <div className='text-9xl text-yellow-500'>
                    o
                </div>
                <div className='text-9xl text-blue-500'>
                    g
                </div>
                <div className='text-9xl text-emerald-500'>
                    l
                </div>
                <div className='text-9xl text-red-500'>
                    e<span className='text-sm'>clone</span>
                </div>
            <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='absolute top-5 right-5 text-xl dark:bg-gray-300  bg-gray-700 border rounded-full px-2 py-1 hover:shadow-lg'>
                {darkTheme ? '💡' : '🌙'}
            </button>
            </div>
            <div className='relative'>
                <BsSearch className='absolute top-4 left-4 '/>
                <input autoFocus type="text" className="pl-10 mb-20 border w-96 max-h-10 rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg "
                    placeholder="Search Google or type URL"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") setRedirect(true) }}
                    />
                {text !== '' && (<>
                    <button type="button" className="absolute top-4 right-4 text-sm text-gray-500 " onClick={() => setText('')}>
                        &#10005;
                    </button>
                    <button className="absolute top1text-2xl text-gray-500 hover:bg-gray-200 rounded-full p-3" onClick={() => setRedirect(true)} >
                        GO!
                    </button>
                </>
                )}
            </div>
        </div>
    )
}

export default Home