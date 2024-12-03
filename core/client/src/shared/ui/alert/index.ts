import type { AlertVariant, VariantChilds } from "./types";

export { default as UiAlert } from "./UiAlert.vue";

export const variants: Record<AlertVariant, VariantChilds> = {
  default: {
    light: {
      background: "#fafafa",
      border: "1.5px solid #e4e4e7",
    },
    dark: {
      background: "#27272a",
      border: "1.5px solid #3f3f46",
    },
  },
  success: {
    light: {
      background:
        "linear-gradient(0deg, rgba(0, 255, 0, 0.05), rgba(0, 255, 0, 0.05)), #f0fff4",
      border: "1.5px solid #38a169",
    },
    dark: {
      background: "#1b4731",
      border: "1.5px solid #0b8141",
    },
  },
  warning: {
    light: {
      background:
        "linear-gradient(0deg, rgba(255, 202, 13, 0.05), rgba(255, 202, 13, 0.05)), #fff",
      border: "1.5px solid #f8d040",
    },
    dark: {
      background: "#3d351a",
      border: "1.5px solid #9f8745",
    },
  },
  important: {
    light: {
      background:
        "linear-gradient(0deg, rgba(255, 0, 0, 0.05), rgba(255, 0, 0, 0.05)), #fff5f5",
      border: "1.5px solid #e53e3e",
    },
    dark: {
      background: "#692525",
      border: "1.5px solid #c73939",
    },
  },
};
