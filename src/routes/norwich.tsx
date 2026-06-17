import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/norwich")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
