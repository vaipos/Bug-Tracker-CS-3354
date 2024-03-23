import React from "react";
import { ReactNode } from "react";
import CreateIssueForm from "./CreateIssueForm";
interface props {
  children: number;
}
const IssueTable = (children: props) => {
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
        {" "}
        Create New Issue
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create Issue</h3>
          <p className="py-4">
            Please fill all the necessary fields. ESC to Leave.
          </p>
          <CreateIssueForm />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Exit</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto">
        <table className="table bg-gray-500 ">
          <thead>
            <tr>
              <th></th>
              <th>Issue Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Red</td>
              <td>
                <select className="select select-primary w-full max-w-xs">
                  <option disabled selected>
                    Not Started
                  </option>
                  <option>In-progress</option>
                  <option>Stuck</option>
                  <option>Complete</option>
                </select>
              </td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Red</td>
              <td>
                <select className="select select-primary w-full max-w-xs">
                  <option disabled selected>
                    Not Started
                  </option>
                  <option>In-progress</option>
                  <option>Stuck</option>
                  <option>Complete</option>
                </select>
              </td>
            </tr>
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
              <td>
                <select className="select select-primary w-full max-w-xs">
                  <option disabled selected>
                    Not Started
                  </option>
                  <option>In-progress</option>
                  <option>Stuck</option>
                  <option>Complete</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssueTable;
