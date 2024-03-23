import React from "react";

const CreateIssueForm = () => {
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Issue Title</span>
        </div>
        <input
          type="text"
          placeholder="Title Name"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Issue Description</span>
        </div>
        <textarea
          placeholder="Description"
          className="input input-bordered w-full max-w-xs py-3 h-56"
          autoFocus 
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Set Priority</span>
        </div>
        <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Priority</option>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Set Deadline</span>
        </div>
        <input
          type="text"
          placeholder="Deadline"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </>
  );
};

export default CreateIssueForm;
