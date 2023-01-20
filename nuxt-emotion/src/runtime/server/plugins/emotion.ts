import { extractCritical } from "@emotion/server";
import { NitroApp } from "nitropack";

export interface NitroAppPlugin {
  (nitro: NitroApp): void;
}

export function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def;
}

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
