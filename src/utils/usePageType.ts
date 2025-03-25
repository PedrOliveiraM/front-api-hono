import { useRouter } from "@tanstack/react-router";

export function usePageType() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  
  if (currentPath.includes("update")) return "update";
  if (currentPath.includes("create")) return "create";

  return "unknown";
}
