import { createFileRoute } from "@tanstack/react-router";
import { handlePilotRequest } from "@/lib/sigiliu/pilot.server";

export const Route = createFileRoute("/api/pilot")({
  server: { handlers: { POST: ({ request }) => handlePilotRequest(request) } },
});
