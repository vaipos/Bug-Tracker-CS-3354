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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      if (session && session.user) {
        setIsLoading(true);
        const { data } = await axios.get('/api/check', { params: { email: session.user.email } });
        setApiResponse(data);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [session]);

  const handleLoginClick = () => {
    if (session) {
      if (apiResponse && (apiResponse.message === 'TESTER' || apiResponse.message === 'DEVELOPER')) {
        if (apiResponse.message === 'TESTER') {
          router.push('/Tester');
        } else if (apiResponse.message === 'DEVELOPER') {
          router.push('/Developer');
        }
      } else {
        router.push('/Choose');
      }
    } else {
      router.push('/api/auth/signin');
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-slate-950 animate-ease-out ">
        <div className="hero-content ml-20 flex-col lg:flex-row-reverse h-72">
          <img src="atr.png" className="animate-fade animate-duration-[2500ms]" />
          <div>
            <h1 className="text-9xl font-bold animate-fade-up animate-duration-[2500ms]">Bug Tracker</h1>
            <p className="py-6 animate-fade-up animate-duration-[2500ms]">
              Tester to developer, help track your project issues and bugs. Bring organization and efficiency through analytics on project progression.
            </p>
            <div className="flex flex-col animate-fade-up animate-duration-[2500ms]"></div>
            <button
              className="btn shadow-xl shadow-blue-950 bg-indigo-200 text-black btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-white hover:shadow-lg hover:shadow-blue-950"
              onClick={handleLoginClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </div>
              ) : session ? (
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