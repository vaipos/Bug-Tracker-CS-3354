import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateIssueForm from "./CreateIssueForm";

interface Props {
  data: any[];
  children: number;
}

const IssueTable: React.FC<Props> = ({ children, data }: Props) => {
  useEffect(() => {}, [children, data]);
  return (
    <>


      <div className="overflow-x-auto">
        <table className="table bg-gray-700">
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
            {data.map((issue) => (
                <tr key={issue.id} className="hover px-3" >
                  <td>{issue.id}</td>
                  <td>{issue.title}</td>
                  <td>{issue.description}</td>
                  <td>{issue.createdAt}</td>
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
                      Not Started
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssueTable;
