import { useNavigate } from "react-router-dom";
import { HomeIcon, LogoutIcon } from "../assets/icons";
import { CardInfraLogo, Logo } from "../assets/images";
import { routePaths } from "../routes/routes-config";
import { sidebarItems } from "../utils/data";
import MenuComponent from "./menu-component";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="border-r border-[#DEDEDF] py-6 px-3">
      <div className="flex flex-col gap-[165px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8">
            <div
              className="cursor-pointer"
              onClick={() => navigate(routePaths.dashboard)}
            >
              <img src={Logo} alt="Logo" className="" />
            </div>
            <MenuComponent
              icon={HomeIcon}
              text="Dashboard"
              path={routePaths.dashboard}
            />
          </div>
          {/* main menu start */}
          <div className="flex flex-col gap-2">
            <p className="text-[8.5px] font-medium text-[#7E8B9C] px-5">
              MAIN MENU
            </p>
            {/* list of menus */}
            <div className="">
              {sidebarItems.map((item) => (
                <MenuComponent
                  key={item.label}
                  icon={item.icon}
                  text={item.label}
                  path={item.path}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[135px]">
          <MenuComponent
            icon={LogoutIcon}
            text="Logout"
            textClassName="text-primary font-medium"
            path="#"
          />
          <div className="flex flex-col gap-1 px-3">
            <p className="text-[8.5px] font-medium text-[#808080]">
              POWERED BY
            </p>
            <div className="">
              <img src={CardInfraLogo} alt="Card Infra logo" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
