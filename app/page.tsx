'use client';
import Link from 'next/link';
import Top from './Top';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from 'next-auth';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const { data: session } = useSession();
  const [apiResponse, setApiResponse] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      if (session && session.user) {
        const { data } = await axios.get('/api/check', {
          params: { email: session.user.email },
        });
        setApiResponse(data);
      }
    };
    fetchUsers();
  }, [session]);

  const handleLoginClick = () => {
    if (session) {
      // User is signed in
      if (apiResponse && (apiResponse.message === 'TESTER' || apiResponse.message === 'DEVELOPER')) {
        // Navigate to the appropriate route if the user has a valid role
        if (apiResponse.message === 'TESTER') {
          router.push('/Tester');
        } else if (apiResponse.message === 'DEVELOPER') {
          router.push('/Developer');
        }
      } else {
        // Navigate to the '/Choose' route if the user doesn't have a valid role
        router.push('/Choose');
      }
    } else {
      // User is not signed in, navigate to the login page
      router.push('/api/auth/signin');
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="ml-10 hero-content flex-col lg:flex-row-reverse h-72">
          <img src="atr.png" className="" />
          <div>
            <h1 className=" text-8xl font-bold ">BugTracker</h1>
            <p className="py-6">
              Tester to developer, help track your project issues and bugs. Bring
              organization and efficiency through analytics on project
              progression.
            </p>
            <div className="flex flex-col "></div>
            <button
              className="btn bg-orange-300 text-black btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-indigo-200"
              onClick={handleLoginClick}
            >
              {session ? (
                apiResponse && (apiResponse.message === 'TESTER' || apiResponse.message === 'DEVELOPER') ? (
                  'Head to Dashboard'
                ) : (
                  'Set-up Account'
                )
              ) : (
                'Login To Get Started'
              )}
            </button>
          </div>
        </div>
      </div>
      {apiResponse && apiResponse.message !== 'OH NO' && (
        <div>
          {apiResponse.message ? (
            <p>{}</p>
          ) : (
            <>
              <p>Email: {apiResponse.email}</p>
              <p>Role: {apiResponse.role}</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Homepage;