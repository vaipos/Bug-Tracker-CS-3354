// Assuming Next.js project structure
'use client'
// 1. Import necessary components (replace with your actual paths)
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Navbar from './TesterHomePage Comps/NavbarTest';
import Top from './Top';
import prisma from '@/prisma/client';
import { useSession } from 'next-auth/react';

const Homepage = () => {
  const { data: session } = useSession();

  return (
    <>

<Top/>
    </>
  );
};

export default Homepage;
