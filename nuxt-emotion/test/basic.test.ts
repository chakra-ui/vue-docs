import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils";
describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../playground", import.meta.url)),
  });
  it("renders the index page", async () => {
    const html = await $fetch("/");
    expect(html).toContain("<style data-emotion");
    expect(html).toContain("<script data-emotion");
    expect(html).toContain("window.$emotionIds");
    expect(html).toMatchSnapshot();
  });
});
