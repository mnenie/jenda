import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiRadioGroupItem from "../UiRadioGroupItem.vue";

describe("uiRadioGroup", () => {
  const wrapper = shallowMount(UiRadioGroupItem, {
    props: {
      inputId: "radio-input-id",
      modelValue: "",
      value: undefined,
      name: "radio-input-name",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should update value with @change", async () => {
    const input = wrapper.find("input");
    await input.setValue("on");
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["on"]);
  });
});
