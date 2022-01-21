import faker from "faker";
import { createServer, Response } from "miragejs";

faker.seed(5);

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    timing: 750,

    routes() {
      this.namespace = "api";

      this.get(
        "/checking",
        () => {
          // Force an error
          return new Response(500);

          return {
            stat: "$8,027",
            change: "$678",
            changeType: "increase",
          };
        },
        { timing: 500 }
      );

      this.get(
        "/savings",
        () => {
          // Force an error
          // return new Response(500);

          return {
            stat: "$24,581",
            change: "$1,167",
            changeType: "decrease",
          };
        },
        { timing: 1500 }
      );

      this.get(
        "/credit",
        () => {
          return {
            stat: "$4,181",
            change: "$412",
            changeType: "increase",
          };
        },
        { timing: 750 }
      );

      this.namespace = "";
      this.passthrough();
    },
  });

  // Don't log passthrough
  server.pretender.passthroughRequest = () => {};

  server.logging = false;

  return server;
}

let isClient = typeof window !== "undefined";
if (isClient && !window.server) {
  window.server = makeServer({ environment: "development" });
}
