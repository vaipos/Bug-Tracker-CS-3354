import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const truncateDescription = (description: string) => {
    if (description.length > 30) {
      return description.slice(0, 30) + "...";
    }
    return description;
  };
  const late = (dateString: string) => {
    const today = new Date();
    const day_rn = today.getDate();
    const month_rn = today.getMonth() + 1;
    const year_rn = today.getFullYear();
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const isLate =
      year < year_rn ||
      (year === year_rn && month < month_rn) ||
      (year === year_rn && month === month_rn && day < day_rn);

    return isLate ? "LATE" : "GOOD";
  };
  const formatDate = (dateString: string) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const due = new Date(dateString);
    const year = due.getFullYear();
    const month = due.getMonth();
    const day = due.getDate();

    return months[month] + " " + day + ", " + year;
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
              <th className="flex">
                Status 
                <div className="tooltip tooltip-right" data-tip="click issue to change status">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6 ml-2 -my-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </th>
              <th>Time Left</th>
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
                <td>{issue.title}</td>
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

                <td>{late(issue.createdAt)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedIssue && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center backdrop-blur-sm">
          <div className="bg-slate-950 rounded-lg shadow-lg p-6 w-3/4 h-3/4 max-w-screen-lg">
            <h2 className="text-2xl font-bold mb-4 pb-10">Issue Details</h2>
            <p className="">
              <strong>Title:</strong> {selectedIssue.title}
            </p>
            <p className="">
              <strong>Description:</strong> {selectedIssue.description}
            </p>
            <p className="">
              <strong>Due Date:</strong> {selectedIssue.createdAt}
            </p>
            <p className="">
              <strong>Priority:</strong> {selectedIssue.priority}
            </p>
            <p className="">
              <strong>Status:</strong>{" "}
              <label className="form-control w-full max-w-xs">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Priority
                  </option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </label>
            </p>
            <button
              className="bg-indigo-800 text-white px-4 py-2 mt-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default IssueTable;
