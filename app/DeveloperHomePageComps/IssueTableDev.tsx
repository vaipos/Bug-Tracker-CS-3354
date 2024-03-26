import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  data: any[];
  children: number;
}

const IssueTable: React.FC<Props> = ({ children, data }: Props) => {

  useEffect(() => {

  }, [children, data]); 
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table bg-gray-500">
          <thead className=" ">
            <tr>
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
