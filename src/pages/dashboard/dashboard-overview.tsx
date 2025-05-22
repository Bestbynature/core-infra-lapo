import {
  ArrowUpRightIcon,
  CalendarIcon,
  CardRequestIcon,
  ChevronRight,
  ExclamationCircleIcon,
  FullscreenIcon,
  HourglassIcon,
  InstantCardIcon,
  ManageCardIcon,
  PersonalizedCardIcon,
  RevenueIcon,
  ReviewCardIcon,
} from "../../assets/icons";
import CardStatusDistribution from "../../components/charts.tsx/card-status-distribution";
import MonthlyIssuanceChart from "../../components/charts.tsx/monthly-issuance-chart";
import ThisWeeksIncomeChart from "../../components/charts.tsx/this-weeks-income-chart";

const DashboardOverview = () => {
  const userName = JSON.parse(
    localStorage.getItem("loginData") || "{}"
  ).username;

  const capitaliseFirstLetter = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const userNameCapitalised = capitaliseFirstLetter(userName);

  return (
    <main className="flex flex-col gap-3">
      <div className="flex items-center">
        <div className="flex-1 flex flex-col gap-[6px]">
          <h2 className="text-lg font-bold text-primary">
            Hi {userNameCapitalised || "Nazeer"}, what would you like to do
            today?
          </h2>
          <p className="text-xs text-primary">
            <span className="font-bold">Last login:</span> 26/11/2024 14:39:58
          </p>
        </div>
        <div className="rounded-[4px] border border-gray-300 py-2 px-3 flex items-center gap-2">
          <div className="flex gap-1">
            <CalendarIcon />
            <p className="font-medium text-[11px] text-primary">Today</p>
          </div>
          <div className="border-l border-gray-300 h-4"></div>
          <span className="text-primary text-[11px]">
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      <YourQuickAccess />

      <div className="flex gap-3 items-center">
        <p className="font-bold text-lg text-black">Analytics</p>
        <hr className="border border-gray-300 flex-1" />
      </div>

      <div className="flex flex-col gap-2">
        <Metrics />
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <MonthlyIssuanceChart />
            <ThisWeeksIncomeChart />
          </div>
          <div className="flex flex-col gap-2">
            <RecentCardRequestsTable />
            <CardStatusDistribution />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardOverview;

const YourQuickAccess = () => {
  const quickAccessItems = [
    { label: "Manage a Card", icon: <ManageCardIcon /> },
    { label: "Issue Instant Card", icon: <InstantCardIcon /> },
    { label: "Issue Personalized Card", icon: <PersonalizedCardIcon /> },
    { label: "Review Card Requests", icon: <ReviewCardIcon /> },
  ];

  return (
    <div className="rounded-lg border border-[#E2E2E2] p-4 bg-white">
      <h2 className="text-base font-medium text-primary mb-4">
        Your Quick Access
      </h2>
      <div className="flex gap-4 flex-wrap">
        {quickAccessItems.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex items-center gap-2 bg-[#F1F7FF] hover:bg-blue-100 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 "
          >
            <div className="text-white bg-[#024db0] rounded-full p-2 text-xl w-7 h-7 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="font-medium text-sm text-primary flex items-center gap-3">
              {item.label}
              <ChevronRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MetricCardProps {
  icon: React.ReactElement;
  iconColorClass: string;
  title: string;
  value: string;
  change?: string;
  changeDescription?: string;
  changeDirection?: "increase" | "decrease";
  requiresAttention?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  change,
  changeDescription,
  changeDirection,
}) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-[#E2E2E2] flex-1 flex flex-col gap-3 ">
      <div className="flex flex-col gap-1">
        {icon}
        <p className="text-sm font-medium text-black/56">{title}</p>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg 2xl:text-2xl font-medium xl:font-bold text-primary">
          {value}
        </h2>
        <div className="">
          {change && changeDescription ? (
            <div className="flex items-center gap-1">
              <div className="bg-[#EFFAF6] flex items-center p-1 rounded-[4px]">
                <ArrowUpRightIcon />
                <span
                  className={`text-xs font-medium ${
                    changeDirection === "increase"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {change}
                </span>
              </div>
              <p className="text-xs text-black/56">{changeDescription}</p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <ExclamationCircleIcon />
              <span className="text-xs text-[#E78020]">Requires attention</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Metrics: React.FC = () => {
  const metricsData = [
    {
      id: 1,
      icon: <CardRequestIcon outlineColor="#00984C" />,
      iconColorClass: "text-green-700",
      title: "Total Active Cards",
      value: "26,478",
      change: "+9%",
      changeDescription: "this month",
      changeDirection: "increase" as "increase" | "decrease",
    },
    {
      id: 2,
      icon: <PersonalizedCardIcon outlineColor="#8020E7" />,
      iconColorClass: "text-purple-700",
      title: "Total Personalized Cards",
      value: "15,703",
      change: "+8.5%",
      changeDescription: "this month",
      changeDirection: "increase" as "increase" | "decrease",
    },
    {
      id: 3,
      icon: <RevenueIcon />,
      iconColorClass: "text-blue-700",
      title: "Today's Revenue",
      value: "₦9.3M",
      change: "+6%",
      changeDescription: "vs yesterday",
      changeDirection: "increase" as "increase" | "decrease",
    },
    {
      id: 4,
      icon: <HourglassIcon />,
      iconColorClass: "text-orange-700",
      title: "Pending Requests",
      value: "38",
      requiresAttention: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metricsData.map((metric) => (
        <MetricCard
          key={metric.id}
          icon={metric.icon}
          iconColorClass={metric.iconColorClass}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          changeDescription={metric.changeDescription}
          changeDirection={metric.changeDirection}
          requiresAttention={metric.requiresAttention}
        />
      ))}
    </div>
  );
};

const RecentCardRequestsTable = () => {
  const cardRequests = [
    {
      id: 1,
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Ready",
    },
    {
      id: 2,
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "In Progress",
    },
    {
      id: 3,
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "Acknowledged",
    },
    {
      id: 4,
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Pending",
    },
  ];

  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-orange-100 text-orange-800";
      case "Acknowledged":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E2E2] p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-primary">
          Recent Card Requests
        </h2>
        <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
          <FullscreenIcon />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Branch", "Card Type", "Quantity", "Status", "Action"].map(
                (header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-4 py-2 text-center text-xs font-medium text-gray-500 tracking-tight whitespace-nowrap"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cardRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.branch}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.cardType}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.quantity}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-[10px] text-center">
                  <span
                    className={`px-3 py-1 inline-flex justify-center text-[10px] leading-5 font-medium rounded-full ${getStatusBadgeClasses(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] font-bold">
                  <button className="text-[#014DAF] hover:text-blue-900 cursor-pointer">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
