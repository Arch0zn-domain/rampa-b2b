import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/sigiliu/landing";

export const Route = createFileRoute("/")({
  head: () => ({ links: [{ rel: "canonical", href: "https://rampa-mea.vercel.app/" }] }),
  component: Landing,
});
