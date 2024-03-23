"use client";
import React, { useState } from "react";
import IssueTable from "./IssueTableTest";

const ProjectsSect = () => {
  const [projectval, setProjectVal] = useState(1);

  const add = () => {
    setProjectVal(projectval + 1);
  };

  const renderProjectSections = () => {
    const projectSections = [];
    for (let i = 0; i < projectval; i++) {
      projectSections.push(
        <div className="collapse collapse-arrow bg-base-200" key={i}>
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Project {i + 1}
          </div>

          <div className="collapse-content">
            <IssueTable>{projectval}</IssueTable>
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

