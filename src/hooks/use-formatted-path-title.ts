import { useLocation } from "react-router-dom";

export function useFormattedPathTitle() {
  const { pathname } = useLocation();

  const routeMap: Record<string, string> = {
    "/dashboard/roles": "Roles",
    "/dashboard/create-role": "Roles",
    "/dashboard/block-unblock-card": "Block/Unblock Card",
    "/dashboard/card-profile": "Card Profile",
    "/dashboard/create-profile": "Card Profile",
  };

  const matchedKey = Object.keys(routeMap).find((key) =>
    pathname.startsWith(key)
  );

  if (matchedKey) {
    return routeMap[matchedKey];
  }

  const pathParts = pathname.split("/");
  const lastPathPart = pathParts[pathParts.length - 1];

  const formattedTitle = lastPathPart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedTitle;
}
