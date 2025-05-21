import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon 1", income: 20 },
  { name: "Mon 2", income: 35 },
  { name: "Mon 3", income: 50 },
  { name: "Mon 4", income: 45 },
  { name: "Tue 1", income: 25 },
  { name: "Tue 2", income: 30 },
  { name: "Tue 3", income: 38 },
  { name: "Tue 4", income: 42 },
  { name: "Wed 1", income: 33 },
  { name: "Wed 2", income: 36 },
  { name: "Wed 3", income: 40 },
  { name: "Wed 4", income: 37 },
  { name: "Thu 1", income: 48 },
  { name: "Thu 2", income: 52 },
  { name: "Thu 3", income: 55 },
  { name: "Thu 4", income: 58 },
  { name: "Fri 1", income: 32 },
  { name: "Fri 2", income: 33 },
  { name: "Fri 3", income: 35 },
  { name: "Fri 4", income: 34 },
  { name: "Sat 1", income: 22 },
  { name: "Sat 2", income: 25 },
  { name: "Sat 3", income: 27 },
  { name: "Sat 4", income: 24 },
  { name: "Sun 1", income: 60 },
  { name: "Sun 2", income: 65 },
  { name: "Sun 3", income: 70 },
  { name: "Sun 4", income: 78 },
];

const ThisWeeksIncomeChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
      className="pb-12 px-5 pt-5"
    >
      <h3
        style={{ marginBottom: "20px" }}
        className="text-lg font-medium text-primary"
      >
        This Week's Income
      </h3>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 0 }}
            interval={0}
            tick={({ x, y, payload, index }) => {
              const shouldShow = index % 4 === 0;
              return (
                <text
                  x={x}
                  y={y + 10}
                  textAnchor="middle"
                  fill="#666"
                  opacity={shouldShow ? 1 : 0}
                >
                  {shouldShow ? payload.value.split(" ")[0] : ""}
                </text>
              );
            }}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            axisLine={false}
            tickLine={false}
            width={35}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4DAF01"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ThisWeeksIncomeChart;
