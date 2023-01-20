import { extractCritical } from "@emotion/server";
import { defineNitroPlugin } from "#imports";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    const { ids, css } = extractCritical(html.body);
    html.head.push(`<style data-emotion="${ids.join(" ")}">${css}</style>`);
    html.head.push(
      `<script data-emotion="${ids.join(
        " "
      )}">window.$emotionIds=${JSON.stringify(ids)}</script>`
    );
  });
});
