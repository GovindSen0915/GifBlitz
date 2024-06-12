import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [categories, setCategories] = useState([])
    const [showCategories, setShowCategories] = useState(false)

  return (
    <nav>
        <div className='relative flex gap-4 justify-between items-center mb-2'>
            <Link to="/" className='flex gap-2'>
            <img src="/logo.svg" className='w-8' alt="Giphy Logo" />
            <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIPHY</h1>
            </Link>

            <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
            Reactions
            </Link>
        </div>
    </nav>
  )
}

export default Header