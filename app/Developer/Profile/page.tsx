"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "../../DeveloperHomePageComps/NavbarDev";
import Link from "next/link";
import { Footer } from "../../Footer";

interface Prop {
    children : string
}

const Profile = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <div className="h-screen">
        <button className="m-8 mx-14 btn btn-circle btn-outline">
          <Link href="/Developer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </button>
        <div className="flex ">
          <div className="bg-slate-950 py-20 px-10 mx-14 rounded-3xl skeleton">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 ring-offset-2 w-56 mx-16 my-10 ring rounded-full">
                <div className="avatar placeholder">
                  <div className="bg-violet-600 text-neutral-content rounded-full w-56">
                    <span className="text-7xl">
                      {session?.user?.name?.substring(0, 1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-96 ">
              <div className="card-body">
                <h2 className="card-title text-3xl">{session?.user?.name}</h2>
                <p>{session?.user?.email}</p>
                <button className="btn btn-wide bg-blue-700 my-5">
                  {" "}
                  <Link href="/api/auth/signout" className="text-white">
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-slate-900">
            <div className="mockup-window border bg-base-300">
              <div className=" justify-center px-4 py-16 bg-base-200">
                <p className="text-5xl font-bold">Developer</p>
                <div className="overflow-x-auto my-10">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>1</th>
                        <td>The Clean Coder</td>
                        <td>A guide to professional software development</td>
                        <td>
                          <a
                            href="https://example.com/the-clean-coder"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>2</th>
                        <td>Effective JavaScript</td>
                        <td>
                          Mastering modern JavaScript techniques and best practices
                        </td>
                        <td>
                          <a
                            href="https://example.com/effective-javascript"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>3</th>
                        <td>React Patterns and Best Practices</td>
                        <td>A comprehensive guide to building React applications</td>
                        <td>
                          <a
                            href="https://example.com/react-patterns-best-practices"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <th>4</th>
                        <td>Node.js Design Patterns</td>
                        <td>
                          Learn how to design and build scalable Node.js applications
                        </td>
                        <td>
                          <a
                            href="https://example.com/nodejs-design-patterns"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 5 */}
                      <tr>
                        <th>5</th>
                        <td>Mastering Git</td>
                        <td>Become a Git expert and streamline your workflow</td>
                        <td>
                          <a
                            href="https://example.com/mastering-git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 6 */}
                      <tr>
                        <th>6</th>
                        <td>Serverless Architectures</td>
                        <td>
                          Learn how to build and deploy serverless applications
                        </td>
                        <td>
                          <a
                            href="https://example.com/serverless-architectures"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 7 */}
                      <tr>
                        <th>7</th>
                        <td>Secure Coding Practices</td>
                        <td>A practical guide to writing secure code</td>
                        <td>
                          <a
                            href="https://example.com/secure-coding-practices"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                      {/* row 8 */}
                      <tr>
                        <th>8</th>
                        <td>Progressive Web Apps</td>
                        <td>
                          Build fast, reliable, and engaging web applications
                        </td>
                        <td>
                          <a
                            href="https://example.com/progressive-web-apps"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;