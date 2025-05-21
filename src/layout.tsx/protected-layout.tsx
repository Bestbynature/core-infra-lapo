import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import TitleBar from "../components/title-bar";

const ProtectedLayout = () => {
  return (
    <div className="w-full grid grid-cols-[230px_minmax(0,1fr)]">
      <Sidebar />
      <div className="flex flex-col">
        <TitleBar />
        <div className="bg-[#f7fbff] px-5 pt-2 pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
