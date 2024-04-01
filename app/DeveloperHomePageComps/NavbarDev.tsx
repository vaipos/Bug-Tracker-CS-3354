"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
//Navigational Bar to go inbetween pages for Developer users
const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <div className="px-7 py-8 flex justify-between mx-8 border-b-4 border-orange-500">
      <Link href="/" className="font-bold text-2xl my-3">
          Developer Dashboard
        </Link>

        <div className="flex items-center">
          <Link href="/Developer" className="px-10">
            Home
          </Link>
          <Link href="/" className="px-10">
            Status
          </Link>

          <div className="flex items-center ml-4">
            {status === "authenticated" && (
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  <div className="avatar">
                    <div className="w-17 rounded-full">
                      <div className="avatar placeholder">
                        <div className="bg-violet-600 text-neutral-content rounded-full w-12">
                          <span className="text-lg">{session.user?.name?.substring(0,1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{session.user?.email}</a>
                  </li>
                  <li>
                    <Link href="/api/auth/signout" className="">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {status === "unauthenticated" && (
               <Link href="/api/auth/signin" className="">
               Login
             </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
