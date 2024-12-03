import type { ButtonSize, ButtonType } from "../types";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiButton from "../UiButton.vue";

describe("uiButton", () => {
  const wrapper = shallowMount(UiButton, {
    props: {
      variant: "default",
      size: "md",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.html());
  });

  it("should have content at slot", () => {
    const _w = shallowMount(UiButton, {
      slots: {
        default: "ui button",
      },
    });
    expect(_w.html()).toMatchSnapshot();
  });

  it("should apply correct styles for variants", () => {
    const variants = [
      "default",
      "secondary",
      "destructive",
      "ghost",
      "outline",
      "dashed",
    ] as ButtonType[];

    variants.forEach((variant) => {
      const wrapper = shallowMount(UiButton, {
        props: {
          variant,
          size: "md",
        },
      });
      const button = wrapper.find("button");
      expect(button.attributes("class")).toContain(`${variant}`);
    });
  });

  it("should apply correct styles for size", () => {
    const sizes = ["lg", "md", "sm"] as ButtonSize[];
    sizes.forEach((size) => {
      const wrapper = shallowMount(UiButton, {
        props: {
          variant: "dashed",
          size,
        },
      });
      const button = wrapper.find("button");
      expect(button.attributes("class")).toContain(`${size}`);
    });
  });
});
