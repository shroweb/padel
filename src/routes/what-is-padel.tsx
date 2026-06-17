import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/what-is-padel")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
});
