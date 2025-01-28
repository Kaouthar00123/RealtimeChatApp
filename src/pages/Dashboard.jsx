import React from "react";
import CardDash from "../components/dashboard/CardDash";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const resumedashborad = [
  {
    title: "Earnings (before taxes)",
    price: "$842.00",
    details: "sales 01/09/2024 - 13/09/2024",
    color: "green",
  },
  {
    title: "Your balance",
    price: "$735.00",
    details: "To be paid on 15/09/2024",
    color: "blue",
  },
  {
    title: "Your balance",
    price: "$735.00",
    details: "To be paid on 15/09/2024",
    color: "pink",
  },
];

const data = [
  {
    date: "22 Junary",
    "sales(DZD)": 4000,
  },
  {
    date: "2 Fubrary",
    "sales(DZD)": 3000,
  },
  {
    date: "12 Fubrary",
    "sales(DZD)": 2000,
  },
  {
    date: "22 Fubrary",
    "sales(DZD)": 2780,
  },
  {
    date: "2 March",
    "sales(DZD)": 1890,
  },
];

export default function Dashboard() {
  return (
    <div className="w-full h-full">
      <h2 className="py-3 px-1">Dashboard</h2>
      <div className="flex flex-col gap-5">
        <div id="resumedashboard" className="flex gap-[3%]">
          {resumedashborad.map((e) => (
            <CardDash
              title={e.title}
              details={e.details}
              price={e.price}
              color={e.color}
            />
          ))}
        </div>
        <div id="charts" className="w-full h-full">
          <div
            id="earcningChart"
            className="w-full h-full border rounded-4 py-4 px-3 px-sm-4"
          >
            {/* Earnings Chart */}
            <h3>Earnings History</h3>
            <ResponsiveContainer width={800} height={350}>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Area
                  type="monotone"
                  dataKey="sales(DZD)"
                  stroke="#008000"
                  fill="#cbddcb"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
