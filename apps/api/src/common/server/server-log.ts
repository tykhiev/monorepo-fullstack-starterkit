import { COLOR_CODE } from "@/common/const/color-code";
import type { AddressInfo } from "node:net";

export const logServerInfo = (address: AddressInfo) => {
  // Log the server is running
  process.stdout.write(
    `${COLOR_CODE.BLUE}BOOTSTRAP: ${COLOR_CODE.MAGENTA}Server\x1b[0m is running on http://localhost:${address.port}\n`,
  );

  // Log the OpenAPI docs is running
  process.stdout.write(
    `${COLOR_CODE.BLUE}BOOTSTRAP: ${COLOR_CODE.GREEN}OpenAPI\x1b[0m doc is running on http://localhost:${address.port}/docs\n`,
  );
};

export const logShutdown = () => {
  process.stdout.write(
    `\n${COLOR_CODE.YELLOW}INFO: ${COLOR_CODE.RED}Shutting down server...\x1b[0m\n`,
  );

  process.stdout.write(
    `${COLOR_CODE.YELLOW}INFO: ${COLOR_CODE.GREEN}Server closed\x1b[0m\n`,
  );
};
