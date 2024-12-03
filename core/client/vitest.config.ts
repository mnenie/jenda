import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      setupFiles: ["./src/shared/lib/vitest-utils/cookiesI18n-mock.ts"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      css: {
        modules: {
          classNameStrategy: "non-scoped",
        },
      },
    },
  }),
);
