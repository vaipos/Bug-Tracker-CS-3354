import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateIssueForm from "./CreateIssueForm";

interface Props {
  data: IssueDetails[];
  children: number;
}

interface IssueDetails {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  priority: string;
  status: string;
}

const IssueTable: React.FC<Props> = ({ children, data }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<IssueDetails | null>(null);

  const handleRowClick = (issue: IssueDetails) => {
    setSelectedIssue(issue);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIssue(null);
  };

  useEffect(() => {}, [children, data]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table bg-gray-700">
          <thead className="">
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
            {data.map((issue) => (
              <tr
                key={issue.id}
                className="hover px-3 cursor-pointer"
                onClick={() => handleRowClick(issue)}
              >
                <td>{issue.id}</td>
                <td>{truncateDescription(issue.title)}</td>
                <td>{truncateDescription(issue.description)}</td>
                <td>{formatDate(issue.createdAt)}</td>
                <td>
                  <div
                    className={`badge p-3 font-bold badge-outline ${
                      issue.priority === "MEDIUM" ? "text-amber-400" : ""
                    } ${issue.priority === "LOW" ? "text-emerald-400" : ""} ${
                      issue.priority === "HIGH" ? "text-red-400" : ""
                    }`}
                  >
                    {issue.priority.toLowerCase()}
                  </div>
                </td>
                <td>
                  <div className="badge p-4 text-white badge-neutral">
                    {issue.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedIssue && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center backdrop-blur-sm">
          <div className="bg-slate-950 rounded-lg shadow-lg p-6 w-3/4 h-3/4 max-w-screen-lg relative">
          <h2 className="text-3xl font-bold mb-4 pt-5">{selectedIssue.title}</h2>
            <div className="grid grid-cols-12 gap-4 h-3/5">
              <div className="col-span-7">
                <p className="text-xl">
                  <strong>Description:</strong> 
                  <br></br>
                  <div className="text-gray-300 text-sm">
                    {selectedIssue.description}
                  </div>
                </p>
                <button
                className="bg-indigo-800 text-white px-4 py-2 mx-5 my-5 rounded absolute bottom-0 left-0"
                onClick={closeModal}
                >
                  Close
                </button>
              </div>
              <div className="justify-end col-span-5 border border-gray-400 rounded-lg bg-base-200">
                <p className="text-xl text-bold border rounded-t-lg px-2 py-1">Details</p>
                <p className="py-2">
                  <strong className="font-normal text-xs px-2">Priority:</strong> 
                  <div className={`badge p-2 font-bold badge-outline text-xs inline-flex ml-5 ${
                      selectedIssue.priority === "MEDIUM" ? "text-amber-400" : ""
                    } ${selectedIssue.priority === "LOW" ? "text-emerald-400" : ""} ${
                      selectedIssue.priority === "HIGH" ? "text-red-400" : ""
                    }`}>
                    {selectedIssue.priority}
                  </div>
                </p>
                  <strong className="font-normal text-xs px-2">Status:</strong>{selectedIssue.status}
                  
                  <br></br>
                  <div className="font-normal text-xs p-2 inline-block">Due Date:</div>  
                  <div className="font-normal text-xs p-2 inline-block">{formatDate(selectedIssue.createdAt)}</div>          
                  <br></br>
              </div>
            </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default IssueTable;
const truncateDescription = (description: string) => {
  if (description.length > 30) {
    return description.slice(0, 30) + "...";
  }
  return description;
};

const formatDate = (dateString: string) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const due = new Date(dateString);
  const year = due.getFullYear();
  const month = due.getMonth();
  const day = due.getDate(); 

  return months[month] + " " + day + ", " + year;
};
