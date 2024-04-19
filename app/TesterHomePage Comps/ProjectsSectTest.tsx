"use client";
import React, { useState, useEffect } from "react";
import IssueTable from "./IssueTableTest";
import axios from "axios";
import CreateIssueForm from "./CreateIssueForm";

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
  // Function to show projects and the table for issues
  const renderProjectSections = () => {
    const projectSections = [];
    for (let i = 0; i < projectval; i++) {
      const projectIssues = issues.filter((issue) => issue.children === i + 1);
      const modalId = `my_modal_${i + 1}`;
  
      projectSections.push(
        <div className="collapse collapse-arrow bg-base-200" key={i}>
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div key={i} className="collapse-title text-xl font-medium">
            Project {i + 1}
          </div>
          <div className="collapse-content">
            <button
              className="btn my-5 bg-orange-300 text-black hover:bg-white"
              onClick={() => {
                const modal = document.getElementById(modalId) as HTMLDialogElement;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              Create New Issue
            </button>
            <dialog id={modalId} className="modal backdrop-blur-sm">
              <div className="modal-box w-11/12 max-w-5xl h-auto ">
                <h3 className="font-bold text-lg">Create Issue</h3>
                <p className="py-4">Please fill all the necessary fields. ESC to Leave.</p>
                <CreateIssueForm modalId={modalId}>{i+1}</CreateIssueForm> {/* Pass modalId */}
                <div className="modal-action">
                  <form method="dialog">
               
                  </form>
                </div>
              </div>
            </dialog>
            <IssueTable key={i} data={projectIssues}>
              {projectval}
            </IssueTable>
          </div>
        </div>
      );
    }
    return projectSections;
  };

  return (
    <>
      <div className="px-10 mr-8 ml-3  py-10">
        <div className="flex">
          <div className="text-2xl font-bold py-3">Projects</div>
          <button className="btn ml-5 text-white text-2xl" onClick={add}>
            +
          </button>
        </div>
        {renderProjectSections()}
      </div>
    </>
  );
};

export default ProjectsSect;
