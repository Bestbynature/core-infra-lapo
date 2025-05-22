import { type FC } from "react";
import type { IconProps } from "./types/login-types";
import {
  BranchesIcon,
  RolesIcon,
  UsersIcon,
  CardProfileIcon,
  CardRequestIcon,
  StockIcon,
  BlockCardIcon,
  CardsIcon,
  AuthListIcon,
  AuthQueueIcon,
  TrailIcon,
  ProfileIcon,
  CardSchemeIcon,
  GenerateReissuePinIcon,
} from "../assets/icons";
import { routePaths } from "../routes/routes-config";

type SidebarItem = {
  label: string;
  icon: FC<IconProps>;
  path: string;
};

export const sidebarItems: SidebarItem[] = [
  { label: "Branches", icon: BranchesIcon, path: routePaths.branches },
  { label: "Roles", icon: RolesIcon, path: routePaths.roles },
  { label: "Users", icon: UsersIcon, path: routePaths.users },
  {
    label: "Card Scheme",
    icon: CardSchemeIcon,
    path: routePaths.cardScheme,
  },
  {
    label: "Card Profile",
    icon: CardProfileIcon,
    path: routePaths.cardProfile,
  },
  {
    label: "Card Request",
    icon: CardRequestIcon,
    path: routePaths.cardRequest,
  },
  { label: "Stock", icon: StockIcon, path: routePaths.stock },
  {
    label: "Block/Unblock Card",
    icon: BlockCardIcon,
    path: routePaths.blockCard,
  },
  {
    label: "Generate/Reissue Pin",
    icon: GenerateReissuePinIcon,
    path: routePaths.generateReissuePin,
  },
  { label: "Cards", icon: CardsIcon, path: routePaths.cards },
  {
    label: "Authorization List",
    icon: AuthListIcon,
    path: routePaths.authList,
  },
  {
    label: "Authorization Queue",
    icon: AuthQueueIcon,
    path: routePaths.authQueue,
  },
  { label: "Trail", icon: TrailIcon, path: routePaths.trail },
  { label: "Account", icon: ProfileIcon, path: routePaths.account },
];
