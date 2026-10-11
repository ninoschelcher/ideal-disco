import { makeRouteHandler } from "@keystatic/next/route-handler";

import config from "../../../../../keystatic.config";

// makeRouteHandler validates the GitHub secrets as soon as it's called, but
// those are Worker runtime secrets and aren't available during `next build`.
// Creating it on the first request keeps the build from needing them.
let handler: ReturnType<typeof makeRouteHandler> | undefined;

function getHandler() {
  handler ??= makeRouteHandler({ config });
  return handler;
}

export function GET(request: Request) {
  return getHandler().GET(request);
}

export function POST(request: Request) {
  return getHandler().POST(request);
}
