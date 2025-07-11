import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Employees",
    Intern: 15,
    Permanent: 60,
    Probationary: 25
  }
];

const COLORS = {
  Intern: "#facc15",        // Yellow
  Permanent: "#a78bfa",     // Purple
  Probationary: "#60a5fa"   // Blue
};

const total = 23;

const legendData = [
  { name: "Intern Employee", value: 4, percent: "15%", color: COLORS.Intern },
  { name: "Permanent Employee", value: 13, percent: "60%", color: COLORS.Permanent },
  { name: "Probationary Employee", value: 6, percent: "25%", color: COLORS.Probationary }
];

export default function Percentage() {
  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <ResponsiveContainer width="100%" height={30}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="Intern" stackId="a">
            <Cell fill={COLORS.Intern} />
          </Bar>
          <Bar dataKey="Permanent" stackId="a">
            <Cell fill={COLORS.Permanent} />
          </Bar>
          <Bar dataKey="Probationary" stackId="a">
            <Cell fill={COLORS.Probationary} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Percent Labels below the chart */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span>15%</span>
        <span>60%</span>
        <span>25%</span>
      </div>

      {/* Legend */}
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <strong>Total</strong>
          <strong>{total}</strong>
        </div>
        {legendData.map((item, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                  marginRight: 8
                }}
              ></span>
              <span>{item.name}</span>
            </div>
            <div>
              <span style={{ marginRight: 10 }}>
                {item.value.toString().padStart(2, "0")}
              </span>
              <span>{item.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
