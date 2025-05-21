import { Outlet } from "react-router-dom";

const UnprotectedLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UnprotectedLayout;
