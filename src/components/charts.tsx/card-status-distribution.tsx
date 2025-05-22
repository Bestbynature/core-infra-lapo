import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import type { LegendProps } from "recharts";

const CardStatusDistribution = () => {
  const data = [
    { name: "Active", value: 1200 },
    { name: "Expired", value: 450 },
    { name: "Inactive", value: 300 },
    { name: "Blocked", value: 200 },
    { name: "Lost", value: 300 },
  ];

  const COLORS = ["#00984C", "#FFBA24", "#014DAF", "#8020E7", "#FF4457"];

  const totalCards = data.reduce((sum, entry) => sum + entry.value, 0);

  const CustomLegend = (props: LegendProps) => {
    const { payload } = props;
    return (
      <ul className="flex justify-center gap-4 flex-wrap mt-4">
        {payload &&
          payload.map(
            (
              entry: { color?: string; value?: string | number },
              index: number
            ) => (
              <li
                key={`item-${index}`}
                className="flex items-center text-sm text-gray-500"
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: entry.color }}
                ></span>
                {entry.value}
              </li>
            )
          )}
      </ul>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto w-full flex flex-col items-center">
      <h2 className="text-lg font-medium text-primary  w-full">
        Card Status Distribution
      </h2>

      <div className="relative w-full h-68">
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={70}
                cornerRadius={10}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center justify-center pointer-events-none">
          <span className="text-secondary text-xs font-medium">
            Total Cards
          </span>
          <span className="text-primary text-2xl font-medium">
            {totalCards.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardStatusDistribution;
