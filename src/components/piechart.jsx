import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "On time", value: 30 },
  { name: "Permission", value: 2 },
  { name: "Leave", value: 3 },
  { name: "Late", value: 4 },
];

const COLORS = ["#34d399", "#38bdf8", "#f87171", "#c4b5fd"]; // Green, Blue, Red, Purple

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: "none", padding: 15, margin: 0 }}>
      {payload.map((entry, index) => (
        <li key={index} style={{ marginBottom: 10, display: 'flex', alignItems: 'center',fontSize:"10px" }}>
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: entry.color,
              borderRadius: 4,
              marginRight: 8,
            }}
          />
          <span style={{ color: "#4B5563" }}>
            {entry.value}: <strong>{data[index].value.toString().padStart(2, "0")}</strong>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default function Example() {
  return (
    <ResponsiveContainer width="100%" height={165}>
      <PieChart>
        <Pie
            data={data}
            cx="40%"
            cy="48%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          iconType="circle"
          content={renderLegend}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
