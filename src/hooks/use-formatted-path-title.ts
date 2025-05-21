import { useLocation } from "react-router-dom";

export function useFormattedPathTitle() {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/");
  const lastPathPart = pathParts[pathParts.length - 1];

  const formattedTitle = lastPathPart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Block Unblock", "Block/Unblock");

  return formattedTitle;
}
