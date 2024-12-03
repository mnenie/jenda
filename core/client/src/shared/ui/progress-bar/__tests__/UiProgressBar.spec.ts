import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiProgressBar from "../UiProgressBar.vue";

describe("uiProgressBar", () => {
  const wrapper = shallowMount(UiProgressBar);

  it("should render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
