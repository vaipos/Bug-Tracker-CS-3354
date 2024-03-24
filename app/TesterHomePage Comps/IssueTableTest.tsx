import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateIssueForm from "./CreateIssueForm";

interface Props {
  data: any[];
  children: number;
}

const IssueTable: React.FC<Props> = ({ children, data }: Props) => {
  // Remove the state for issues
  // const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    // No need to fetch data here since it's already passed through props

    // If you want to fetch data conditionally, you can keep the fetchData function
    // but you'll need to adjust it to use data passed via props
    /*
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/fetchIssue?children=${children}`);
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    */
  }, [children, data]); // Include data in the dependency array

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
          <thead>
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
              <tr key={issue.id} className="hover">
                <td>{issue.id}</td>
                <td>{issue.title}</td>
                <td>{issue.description}</td>
                <td>{issue.dueDate}</td>
                <td>{issue.priority}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssueTable;
