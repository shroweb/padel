import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-1")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
