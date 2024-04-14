"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../TesterHomePage Comps/NavbarTest";
import ProjectsSect from "../TesterHomePage Comps/ProjectsSectTest";
import Top from "../Top";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

interface CustomTooltipProps {
  active: boolean;
  payload: any[];
  label: string;
}

const Tester = () => {
  const [issues, setIssues] = useState<any[]>([]);
  const [statusCounts, setStatusCounts] = useState({});
  const [priorityCounts, setPriorityCounts] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/fetchAll`);
      setIssues(response.data);

      // Count the number of issues for each status and priority
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

  const priorityData = Object.entries(priorityCounts).map(([priority, count]) => ({
    name: priority,
    value: count,
  }));

  const data = Object.entries(statusCounts).map(([status, count]) => ({
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
          <p className="label" style={{ fontWeight: "bold" }}>
            {`${label} : ${payload[0].value}`}
          </p>
    
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="bg-slate-950 h-auto">
        <Navbar />
        <div className="my-10 mx-10 flex">
          <ResponsiveContainer width="45%" height={500}>
            <BarChart data={data}>
              <XAxis dataKey="name" className="text-white" />
              <YAxis type="number" domain={[0, "dataMax + 1"]} />
              <CartesianGrid strokeDasharray="3 3 " />
              <Bar dataKey="value" fill="#8884d8" />
              <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip active={false} payload={[]} label={""} />} />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="45%" height={500}>
            <BarChart data={priorityData}>
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, "dataMax + 1"]} />
              <CartesianGrid strokeDasharray="3 3 " />
              <Bar dataKey="value" fill="#82ca9d" />
              <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip active={false} payload={[]} label={""} />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <ProjectsSect />
      </div>
    </>
  );
};

export default Tester;