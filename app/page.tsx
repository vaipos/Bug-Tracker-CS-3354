'use client';
import Link from 'next/link';
import React, { useState } from "react";
import Navbar from './TesterHomePage Comps/NavbarTest';
import ProjectsSect from './TesterHomePage Comps/ProjectsSectTest';
import Calendar  from "./TesterHomePage Comps/DatePick";
const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <details className="dropdown mb-40">
        <summary className="m-1 btn bg-indigo-100 text-black hover:bg-indigo-200">CHOOSE TESTER OR DEVELOPER</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><Link href='/Tester' className='text-xl'>Tester</Link> </li>
          <li><Link href='/Developer' className='text-xl'>Developer</Link></li>
        </ul>
      </details>
      <Calendar/>
    </div>
    
  );
};

export default Homepage;
