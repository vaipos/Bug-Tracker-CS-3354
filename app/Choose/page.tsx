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
        email: session?.user?.email || "", 
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
     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-Fuchsia-900 to-Purple-950">
     
      <div className="card lg:card-side text-Sky-100 bg-gray-800 w-1/3 h-auto shadow-2xl shadow-cyan-400 rounded-lg border border-cyan-400 hover:shadow-xl transition-shadow duration-300"
           style={{ boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.5)' }}>
        <figure>
        </figure>
        <div className="card-body mt-20 mb-4 flex flex-col items-center">
          <h1 className="card-title text-3xl mt-[-80px]">Select Account Type</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-baseline">
            <div className="form-control py-2">
              <label className="label cursor-pointer flex items-center gap-2">
                <input
                  type="radio"
    
                 className="radio radio-primary"
                  value="Tester"
                  {...register('role')}
                />
                <span className="label-text text-Sky-100 text-xl">Tester</span>
              </label>
            </div>
            <div className="form-control py-2">
              <label className="label cursor-pointer flex items-center gap-2">
                <input
                  type="radio"
                 className="radio radio-primary"
                  value="Developer"
                  {...register('role')}
                />
                <span className="label-text text-Sky-100 text-xl">Developer</span>
              </label>
            </div>
            <button className="btn btn-primary mx-auto block mt-12" type="submit">
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
