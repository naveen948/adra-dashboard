
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", amount: 400000 },
  { month: "Feb", amount: 480000 },
  { month: "Mar", amount: 430000 },
  { month: "Apr", amount: 360000 },
  { month: "May", amount: 390000 },
  { month: "Jun", amount: 470000 },
  { month: "Jul", amount: 420000 },
  { month: "Aug", amount: 410000 },
  { month: "Sep", amount: 430000 },
  { month: "Oct", amount: 410000 },
  { month: "Nov", amount: 440000 },
  { month: "Dec", amount: 420000 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="120%" height={230}>
      <BarChart data={data} barSize={30}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
            <stop offset="100%" stopColor="#818cf8" stopOpacity={1} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `₹ ${(value / 1000).toFixed(0)}k`} />
        <Tooltip formatter={(value) => `₹ ${value.toLocaleString()}`} />
        <Bar
          dataKey="amount"
          fill="url(#colorGradient)"
          radius={[10, 10, 0, 0]} // Rounded top corners
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
