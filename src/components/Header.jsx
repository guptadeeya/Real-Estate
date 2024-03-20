// import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md p-1'>

        <div className='flex justify-between items-center max-w-6xl mx-auto p-1'>

            <Link to='/'>
      <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Real</span>
        <span className='text-slate-700'>Growth</span>
      </h1>
      </Link>

      <form className='bg-slate-100 rounded-lg p-2 flex items-center'>
        <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-700 m-1'/>
      </form>

      <ul className='flex gap-4'>

        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
        </Link>

        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
        </Link>

        <Link to='/signin'>
        <li className='text-slate-700 hover:underline cursor-pointer'>SignIn</li>
        </Link>
      </ul>
        </div>
    </header>
  )
}
