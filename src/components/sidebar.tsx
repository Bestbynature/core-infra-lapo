import {
  AuthListIcon,
  AuthQueueIcon,
  BranchesIcon,
  CardProfileIcon,
  CardRequestIcon,
  CardSchemeIcon,
  CardsIcon,
  HomeIcon,
  LogoutIcon,
  ProfileIcon,
  RolesIcon,
  StockIcon,
  TrailIcon,
  UsersIcon,
} from "../assets/icons";
import { CardInfraLogo, Logo } from "../assets/images";
import { routePaths } from "../routes/routes-config";
import type { IconProps } from "../utils/types/login-types";
import MenuComponent from "./menu-component";

const Sidebar = () => {
  type SidebarItem = {
    label: string;
    icon: React.ReactElement<IconProps>;
    path: string;
  };

  const sidebarItems: SidebarItem[] = [
    { label: "Branches", icon: <BranchesIcon />, path: routePaths.branches },
    { label: "Roles", icon: <RolesIcon />, path: routePaths.roles },
    { label: "Users", icon: <UsersIcon />, path: routePaths.users },
    {
      label: "Card Scheme",
      icon: <CardSchemeIcon />,
      path: routePaths.cardScheme,
    },
    {
      label: "Card Profile",
      icon: <CardProfileIcon />,
      path: routePaths.cardProfile,
    },
    {
      label: "Card Request",
      icon: <CardRequestIcon />,
      path: routePaths.cardRequest,
    },
    { label: "Stock", icon: <StockIcon />, path: routePaths.stock },
    { label: "Cards", icon: <CardsIcon />, path: routePaths.cards },
    {
      label: "Authorization List",
      icon: <AuthListIcon />,
      path: routePaths.authList,
    },
    {
      label: "Authorization Queue",
      icon: <AuthQueueIcon />,
      path: routePaths.authQueue,
    },
    { label: "Trail", icon: <TrailIcon />, path: routePaths.trail },
    { label: "Account", icon: <ProfileIcon />, path: routePaths.account },
  ];

  return (
    <div className="border-r border-[#DEDEDF] py-6 px-3">
      <div className="flex flex-col gap-[165px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8">
            <div className="">
              <img src={Logo} alt="Logo" className="" />
            </div>
            <MenuComponent
              icon={<HomeIcon />}
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
            icon={<LogoutIcon />}
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
