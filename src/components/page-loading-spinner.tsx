import { useLocation } from "react-router-dom";

const PageLoadingSpinner = () => {
  const location = useLocation();

  const height = location.pathname.includes("/message") ? "h-full" : "h-screen";
  return (
    <div className={`flex justify-center items-center ${height} `}>
      <div className="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageLoadingSpinner;
