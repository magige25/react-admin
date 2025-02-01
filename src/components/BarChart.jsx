import React from "react";
import { useTheme } from "@mui/material";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { tokens } from "../theme";

const data = [
  { month: "Jan", sales: 4000, expenses: 2400, profit: 1600 },
  { month: "Feb", sales: 3000, expenses: 1398, profit: 1602 },
  { month: "Mar", sales: 2000, expenses: 9800, profit: -7800 },
  { month: "Apr", sales: 2780, expenses: 3908, profit: -1128 },
  { month: "May", sales: 1890, expenses: 4800, profit: -2910 },
  { month: "Jun", sales: 2390, expenses: 3800, profit: -1410 },
  { month: "Jul", sales: 3490, expenses: 4300, profit: -810 },
];

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainer width="100%" height={isDashboard ? 200 : 350}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.blueAccent[500]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors.blueAccent[500]} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.redAccent[500]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors.redAccent[500]} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.greenAccent[500]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors.greenAccent[500]} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grey[300]} />
        <XAxis dataKey="month" stroke={colors.grey[100]} />
        <YAxis stroke={colors.grey[100]} />
        <Tooltip />
        <Area type="monotone" dataKey="sales" stroke={colors.blueAccent[500]} fillOpacity={1} fill="url(#colorSales)" />
        <Area type="monotone" dataKey="expenses" stroke={colors.redAccent[500]} fillOpacity={1} fill="url(#colorExpenses)" />
        <Area type="monotone" dataKey="profit" stroke={colors.greenAccent[500]} fillOpacity={1} fill="url(#colorProfit)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
