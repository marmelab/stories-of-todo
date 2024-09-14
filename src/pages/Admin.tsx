import { HydraAdmin } from "@api-platform/admin";

export const Admin = () => (
  <HydraAdmin entrypoint="https://localhost/" basename="/admin" />
);
