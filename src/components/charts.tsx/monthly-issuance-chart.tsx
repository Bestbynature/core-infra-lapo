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

const data = [
  { name: "May", Personalized: 10, Instant: 40 },
  { name: "Jun", Personalized: 20, Instant: 50 },
  { name: "Jul", Personalized: 5, Instant: 25 },
  { name: "Aug", Personalized: 8, Instant: 52 },
  { name: "Sep", Personalized: 10, Instant: 40 },
  { name: "Oct", Personalized: 18, Instant: 65 },
  { name: "Nov", Personalized: 10, Instant: 60 },
];

// Custom shape component for bars with rounded top corners
import type { BarProps } from "recharts";

const RoundedBar = (props: BarProps) => {
  // Provide default values to avoid undefined and type errors
  const { x = 0, y = 0, width = 0, height = 0, fill } = props;
  const radius = 10; // Adjust this value for more or less rounded corners

  return (
    <g>
      <path
        d={`M${Number(x)},${Number(y) + radius}
           A${radius},${radius},0,0,1,${Number(x) + radius},${Number(y)}
           H${Number(x) + Number(width) - radius}
           A${radius},${radius},0,0,1,${Number(x) + Number(width)},${
          Number(y) + radius
        }
           V${Number(y) + Number(height)}
           H${Number(x)}
           Z`}
        fill={fill}
      />
    </g>
  );
};

const MonthlyIssuanceChart = () => {
  return (
    <div
      style={{ width: "100%", height: 300 }}
      className=" border border-[#E2E2E2] rounded-xl bg-white px-2 pt-2 pb-8"
    >
      <h2 className="text-lg font-medium text-primary">Monthly Issuance</h2>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={6}
            domain={[0, 100]}
            dx={-10}
          />
          <Tooltip
            cursor={{ fill: "rgba(206, 206, 206, 0.2)" }}
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
            labelStyle={{ fontWeight: "bold", color: "#333" }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            content={({ payload }) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingTop: "20px",
                }}
              >
                {payload?.map((entry, index) => (
                  <div
                    key={`item-${index}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      color: entry.color,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: entry.color,
                        marginRight: 5,
                      }}
                    />
                    {entry.value}
                  </div>
                ))}
              </div>
            )}
          />
          <Bar dataKey="Personalized" stackId="a" fill="#014DAF" barSize={40} />
          <Bar
            dataKey="Instant"
            stackId="a"
            fill="#CCE2FF"
            barSize={40}
            shape={(props: BarProps) => <RoundedBar {...props} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default MonthlyIssuanceChart;
