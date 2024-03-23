import Link from '@/node_modules/next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="px-7 py-8 flex justify-between mx-8 border-b-4 border-orange-500">
        <Link href='/' className='font-bold text-xl'>Developer</Link> 
        
        <div className="flex ">
        <Link href='/' className='px-10'>Home</Link> 
        <Link href='/' className='px-10'>Status</Link> 
        <Link href='/'><svg className="h-6 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg></Link>
        </div>
        
        </div>
    </>
  )
}

export default Navbar