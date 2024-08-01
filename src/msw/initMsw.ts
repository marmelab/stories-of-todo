import { http } from "msw";
import { setupWorker } from "msw/browser";
//@ts-expect-error - Don't know why cannot find module 'fakerest'
import { getMswHandler } from "fakerest";
import data from "./data.json";

export const initMsw = async () => {
  const handler = getMswHandler({
    baseUrl: "http://localhost:3000",
    data,
  });
  const worker = setupWorker(http.all(/http:\/\/localhost:3000/, handler));
  return worker.start({
    quiet: true, // Instruct MSW to not log requests in the console
    onUnhandledRequest: "bypass", // Instruct MSW to ignore requests we don't handle
  });
};
