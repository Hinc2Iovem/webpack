import type { Configuration as DevServerConfigurtaion } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfigurtaion {
  return {
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
