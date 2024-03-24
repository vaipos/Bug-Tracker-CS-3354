import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateIssueForm from "./CreateIssueForm";

interface Props {
  data: any[];
  children: number;
}

const IssueTable: React.FC<Props> = ({ children, data }: Props) => {

  useEffect(() => {

  }, [children, data]); 
  return (
    <>
      <button
        className="btn my-5 bg-orange-300 text-black hover:bg-white"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_4"
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Create New Issue
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create Issue</h3>
          <p className="py-4">
            Please fill all the necessary fields. ESC to Leave.
          </p>
          <CreateIssueForm>{children}</CreateIssueForm>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Exit</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto">
        <table className="table bg-gray-500">
          <thead className=" ">
            <tr>
            <th>ID</th>
              <th>Issue Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((issue) => ( // Change issues to data
              <tr key={issue.id} className="hover px-3">
                 <td >{issue.id}</td>
                <td >{issue.title}</td>
                <td>{issue.description}</td>
                <td>{issue.createdAt}</td>
                <td>{issue.priority}</td>
                <td>
                <div className="badge p-5 text-white badge-neutral">Not Started</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssueTable;
