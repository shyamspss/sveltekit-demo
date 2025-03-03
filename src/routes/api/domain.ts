import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
  return new Response(
    JSON.stringify({ domain: url.hostname }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
