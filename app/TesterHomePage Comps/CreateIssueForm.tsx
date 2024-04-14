import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface User {
  id: string;
  name: string;
}
interface Props {
  children: number;
  modalId: string;
}
//This displays the Issue Create Form and accepts input from user for Issue Details
const CreateIssueForm = ({ children, modalId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/fetchUsers");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const onSubmit = async (data: any) => {
    try {
      const p: number = children;
      const response = await axios.post("/api/Issue", { ...data, p });
      const modal = document.getElementById(modalId);
      if (modal) {
        (modal as HTMLDialogElement).close();
      }
      reset();
      setError("");
      window.location.reload();
    } catch (error) {
      setError("Fill All Fields Appropriately");
    }
  };

  const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

  return (
    <div>
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Issue Title</span>
          </div>
          <input
            type="text"
            placeholder="Title Name"
            className="input input-bordered w-full max-w-xs"
            {...register("title", { required: true })}
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
            {...register("description", { required: true })}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Set Priority</span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("priority", { required: true })}
          >
            <option disabled selected>
              Priority
            </option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Assign</span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("assignee", { required: true })}
          >
            <option disabled selected>
              Assign
            </option>
            {Array.isArray(users) &&
              users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Set Deadline</span>
          </div>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className="input input-bordered w-full max-w-xs"
            {...register("createdAt", {
              required: true,
              pattern: {
                value: datePattern,
                message: "Please enter the date in MM/DD/YYYY format",
              },
            })}
          />
          {errors.createdAt && (
            <div role="alert" className="alert alert-error mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Invalid Date Format</span>
            </div>
          )}
        </label>
        <button type="submit" className="btn my-10 btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateIssueForm;
