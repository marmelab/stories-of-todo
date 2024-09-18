import { http } from "msw";
import { setupWorker } from "msw/browser";
//@ts-expect-error - Don't know why cannot find module 'fakerest'
import { getMswHandler } from "fakerest";

export const initMsw = async (data: object) => {
  const handler = getMswHandler({
    baseUrl: "https://localhost",
    data,
  });
  const worker = setupWorker(http.all(/https:\/\/localhost/, handler));
  return worker.start({
    quiet: true, // Instruct MSW to not log requests in the console
    onUnhandledRequest: "bypass", // Instruct MSW to ignore requests we don't handle
  });
};
