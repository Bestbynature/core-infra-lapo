import { useNavigate } from "react-router-dom";
import { Header, SearchRow } from "../../components";
import { routePaths } from "../../routes/routes-config";
import { useForm } from "../../utils/context/use-form";

const CardRequest = () => {
  return (
    <main className="">
      <Header
        title="Card Request"
        description="View and attend to card requests here."
      />
      <SearchRow placeholderText="Search by branch" />
      <CardRequestsTable />
    </main>
  );
};

export default CardRequest;

const CardRequestsTable = () => {
  const navigate = useNavigate();

  const { cardRequests, setSelectedCardId } = useForm();

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

  const handleNavigate = (id: number) => {
    setSelectedCardId(id);
    navigate(routePaths.requestDetails);
  };

  return (
    <div className="bg-white rounded-lg border border-[#E2E2E2] p-4 mx-auto mt-[10px]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Branch",
                "Initiator",
                "Quantity",
                "Batch",
                "Date Requested",
                "Status",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-tight whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cardRequests.map((request) => (
              <tr
                key={request.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleNavigate(request.id)}
              >
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.branch}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.initiator}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.quantity}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.batch}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] text-gray-900">
                  {request.dateRequested}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-[10px] text-center">
                  <span
                    className={`px-3 py-1 inline-flex justify-center text-xs leading-5 font-medium rounded-full ${getStatusBadgeClasses(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center text-[10px] font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
