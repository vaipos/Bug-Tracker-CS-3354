
import React from "react";
interface props{
  children: number
}
const IssueTable = (children:props) => {
  return (
    <>
   

      <div className="overflow-x-auto">
        <table className="table bg-gray-500 ">
          <thead>
            <tr>
              <th></th>
              <th>Issue Title</th>
              <th>Description</th>
              <th>Due Date </th>
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
              <td>Red</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Red</td>
              <td>Red</td>
            </tr>
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssueTable;
