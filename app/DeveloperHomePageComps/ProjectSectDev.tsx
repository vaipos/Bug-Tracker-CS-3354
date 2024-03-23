import React from "react";
import IssueTable from "./IssueTableDev";

const ProjectsSect = () => {
  const projectval = 1;
  return (
    <>
      <div className="px-10 mr-96 ml-3  py-10">
        <div className="text-3xl font-bold py-3">Projects</div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Project 1</div>
          <div className="collapse-content">
            <IssueTable>{projectval}</IssueTable>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Project 2</div>
          <div className="collapse-content">
          <IssueTable>{projectval}</IssueTable>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Project 3</div>
          <div className="collapse-content">
          <IssueTable>{projectval}</IssueTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSect;