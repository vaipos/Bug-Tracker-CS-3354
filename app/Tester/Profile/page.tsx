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
          <Link href="/Tester">
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
                <p className="text-5xl font-bold">Tester</p>
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
                        <td>The Art of Software Testing</td>
                        <td>A comprehensive guide to software testing</td>
                        <td>
                          <a
                            href="https://example.com/art-of-software-testing"
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
                        <td>Effective Test Case Design</td>
                        <td>
                          Tips and techniques for writing better test cases
                        </td>
                        <td>
                          <a
                            href="https://example.com/effective-test-case-design"
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
                        <td>Automation Testing with Selenium</td>
                        <td>A guide to automating web application testing</td>
                        <td>
                          <a
                            href="https://example.com/automation-testing-selenium"
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
                        <td>Exploratory Testing Techniques</td>
                        <td>
                          Learn how to effectively explore and test software
                        </td>
                        <td>
                          <a
                            href="https://example.com/exploratory-testing-techniques"
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
                        <td>Mobile App Testing Essentials</td>
                        <td>Best practices for testing mobile applications</td>
                        <td>
                          <a
                            href="https://example.com/mobile-app-testing-essentials"
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
                        <td>Performance Testing Fundamentals</td>
                        <td>
                          Learn how to test and improve application performance
                        </td>
                        <td>
                          <a
                            href="https://example.com/performance-testing-fundamentals"
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
                        <td>API Testing with Postman</td>
                        <td>A practical guide to testing APIs with Postman</td>
                        <td>
                          <a
                            href="https://example.com/api-testing-postman"
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
                        <td>Security Testing Essentials</td>
                        <td>
                          Learn how to identify and mitigate security
                          vulnerabilities
                        </td>
                        <td>
                          <a
                            href="https://example.com/security-testing-essentials"
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
