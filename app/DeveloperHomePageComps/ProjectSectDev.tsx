"use client";
import React, { useState, useEffect } from "react";
import IssueTable from "./IssueTableDev";
import axios from "axios";

const ProjectsSect = () => {
  const [projectval, setProjectVal] = useState(0);
  const [issues, setIssues] = useState<any[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/fetchAll`);
      let maxChildren= 0;
      response.data.forEach((issue: { children: number; }) => {
        if (issue.children > maxChildren) {
          maxChildren = issue.children;
        }
      });
      
      // Set projectval to the maximum value found
      setProjectVal(maxChildren);
      setIssues(response.data);
    } catch (error) {
      console.log('Nope Fetch Data Went Wrong')
    }
  };

  const add = () => {
    setProjectVal(projectval + 1);
  };

  const renderProjectSections = () => {
    const projectSections = [];
    for (let i = 0; i < projectval; i++) {
      const projectIssues = issues.filter(issue => issue.children === i + 1);
      projectSections.push(
        <div className="collapse collapse-arrow bg-base-200" key={i}>
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div key = {i} className="collapse-title text-xl font-medium">
            Project {i + 1}
          </div>
          <div className="collapse-content">
            <IssueTable key={i} data={projectIssues}>{projectval}</IssueTable>
          </div>
        </div>
      );
    }
    return projectSections;
  };

  return (
    <>
      <div className="px-10 mr-96 ml-3  py-10">
        <div className="flex">
          <div className="text-3xl font-bold py-3">Projects</div>
        </div>
        {renderProjectSections()}
      </div>
    </>
  );
};

export default ProjectsSect;
