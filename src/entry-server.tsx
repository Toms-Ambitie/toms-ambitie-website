import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";

/** Renders one route to HTML at build time, waiting until every lazy page has loaded. */
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
      {
        onAllReady() {
          const sink = new PassThrough();
          sink.on("data", (chunk) => (html += chunk));
          sink.on("end", () => resolve(html));
          stream.pipe(sink);
        },
        onShellError: reject,
        onError: reject,
      },
    );
  });
}
