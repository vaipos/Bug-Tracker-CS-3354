"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../TesterHomePage Comps/NavbarTest";
import ProjectsSect from "../TesterHomePage Comps/ProjectsSectTest";
import Top from "../Top";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { Footer } from "../Footer";

interface CustomTooltipProps {
  active: boolean;
  payload: any[];
  label: string;
}

const Tester = () => {
  const [issues, setIssues] = useState<any[]>([]);
  const [priorityCounts, setPriorityCounts] = useState({});
  const [statusCounts, setStatusCounts] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/fetchAll`);
      setIssues(response.data);

      // Count the number of issues for each status
      const statusCounts = response.data.reduce(
        (acc: { [x: string]: number }, issue: { status: any }) => {
          const { status } = issue;
          if (!acc[status]) {
            acc[status] = 0;
          }
          acc[status]++;
          return acc;
        },
        {}
      );

      // Count the number of issues for each priority
      const priorityCounts = response.data.reduce(
        (acc: { [x: string]: number }, issue: { priority: any }) => {
          const { priority } = issue;
          if (!acc[priority]) {
            acc[priority] = 0;
          }
          acc[priority]++;
          return acc;
        },
        {}
      );

      setStatusCounts(statusCounts);
      setPriorityCounts(priorityCounts);
    } catch (error) {
      console.log("Nope Fetch Data Went Wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const priorityData = Object.entries(priorityCounts).map(
    ([priority, count]) => ({ name: priority, value: count })
  );
  const statusData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "default",
          }}
        >
          <p
            className="label"
            style={{ fontWeight: "bold" }}
          >{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="bg-slate-950 h-auto">
        <Navbar />
        <p className="text-xl mx-16 font-bold mt-8">Analytics</p>
        <div className="flex scale-75 -my-24 -mx-40">
         
          <div className=" w-2/5 bg-slate-900 rounded-xl my-10  shadow-xl overflow-hidden shadow-indigo-400 ">
            <div className="my-10 scale-90">
              <div className="mx-14 text-xl">Priority Analytics</div>
              <ResponsiveContainer height={500}>
                <BarChart data={priorityData}>
                  <XAxis dataKey="name" className="text-white" />
                  <YAxis type="number" domain={[0, "dataMax + 1"]} />

                  <Bar dataKey="value" fill="#8884d8" />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    content={
                      <CustomTooltip active={false} payload={[]} label={""} />
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-slate-900 mx-48 w-2/5 rounded-xl my-10 shadow-xl overflow-hidden shadow-indigo-400">
            <div className="my-10  scale-90">
              <div className=" text-xl mx-14">Status Analytics</div>
              <ResponsiveContainer height={500}>
                <BarChart data={statusData}>
                  <XAxis dataKey="name" />
                  <YAxis type="number" domain={[0, "dataMax + 1"]} />

                  <Bar dataKey="value" fill="#82ca9d" />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    content={
                      <CustomTooltip active={false} payload={[]} label={""} />
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className=""></div>
        <ProjectsSect />
      </div>
      <div className="py-20 bg-slate-950"></div>
      <Footer />
    </>
  );
};

export default Tester;
