import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hull")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
