"use client";
import React, { useState, useEffect } from "react";
import IssueTable from "./IssueTableDev";
import axios from "axios";
import { useSession } from "next-auth/react";

const ProjectsSect = () => {
  const [projectval, setProjectVal] = useState(0);
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showProjectSections, setShowProjectSections] = useState(false);
  const { status, data: session } = useSession();

  useEffect(() => {
    if (session && session.user && session.user.email) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    if (session && session.user) {
      try {
        setLoading(true);
        const url = `/api/fetchUserIssue?email=${session.user.email}`;
        const response = await axios.get(url);
        let maxChildren = 0;
        const filteredIssues = response.data.filter((issue: { children: number }) => issue.children > 0);
        filteredIssues.forEach((issue: { children: number }) => {
          if (issue.children > maxChildren) {
            maxChildren = issue.children;
          }
        });
        setProjectVal(maxChildren);
        setIssues(filteredIssues);
        setShowProjectSections(true); // Set showProjectSections to true after fetching data
      } catch (error) {
        console.log("Nope Fetch Data Went Wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  const renderProjectSections = () => {
    const projectSections = [];
    for (let i = 0; i < projectval; i++) {
      const projectIssues = issues.filter((issue) => issue.children === i + 1);
      if (projectIssues.length > 0) {
        projectSections.push(
          <div
            className={`collapse collapse-arrow bg-base-200 transition-opacity duration-500 ${showProjectSections ? 'opacity-100' : 'opacity-0'}`}
            key={i}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div key={i} className="collapse-title text-xl font-medium">
              Project {i + 1}
            </div>
            <div className="collapse-content">
              <IssueTable key={i} data={projectIssues}>
                {projectval}
              </IssueTable>
            </div>
          </div>
        );
      }
    }
    return projectSections;
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
      <div className="px-10 ml-3 py-10">
        <div className="flex">
          <div className="text-3xl font-bold py-3">Projects</div>
        </div>
        {renderProjectSections()}
      </div>
    </>
  );
};

export default ProjectsSect;