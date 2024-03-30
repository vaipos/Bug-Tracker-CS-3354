"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Choose = () => {
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const requestData = {
        ...data,
        email: session?.user?.email || "", // Add the current user's email
      };

      const response = await axios.patch("/api/update-role", requestData);
      console.log(response.data);

      // Call the API to check the user's role
      const { data: roleData } = await axios.get("/api/check", {
        params: { email: session?.user?.email },
      });
      console.log("roleData:", roleData.message);
      if (roleData.message === "TESTER") {
        router.push("/Tester");
      } else if (roleData.message === "DEVELOPER") {
        router.push("/Developer");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     <div className="min-h-screen flex justify-center items-center ">
     
      <div className="card lg:card-side text-black bg-blue-100 shadow-xl w-3/4 h-auto">
 
        <figure>
        <img src="dog.png" alt="Album" className="object-cover z-90 h-full" />
        </figure>
        <div className="card-body my-20">
          <h1 className="card-title text-3xl ">Select Account Type</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-baseline">
            <div className="form-control py-4">
              <label className="label cursor-pointer flex items-center gap-2">
                <input
                  type="radio"
    
                 className="radio radio-primary"
                  value="Tester"
                  {...register('role')}
                />
                <span className="label-text text-black text-xl">Tester</span>
              </label>
            </div>
            <div className="form-control py-4">
              <label className="label cursor-pointer flex items-center gap-2">
                <input
                  type="radio"
                 className="radio radio-primary"
                  value="Developer"
                  {...register('role')}
                />
                <span className="label-text text-black text-xl">Developer</span>
              </label>
            </div>
            <button className="btn btn-primary mt-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Choose;
