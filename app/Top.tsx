import Link from 'next/link'
import React from 'react'
import Calendar  from "./TesterHomePage Comps/DatePick";

const Top = () => {
  return (
    <>
  
    <div className="hero min-h-screen bg-base-200">
  <div className="ml-10 hero-content flex-col lg:flex-row-reverse h-72">
    <img src="atr.png" className="" />
    <div>
      <h1 className="text-8xl font-bold">BugTracker</h1>
      <p className="py-6">Tester to developer, help track your project issues and bugs. Bring organization and efficiency through analytics on project progression. </p>
      <div className="flex flex-col ">
      <details className="dropdown mb-40">
        <summary className="m-1 btn bg-indigo-100 text-black hover:bg-indigo-200">CHOOSE TESTER OR DEVELOPER</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><Link href='/Tester' className='text-xl'>Tester</Link> </li>
          <li><Link href='/Developer' className='text-xl'>Developer</Link></li>
        </ul>
      
      </details>
      <Calendar/>
    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Top