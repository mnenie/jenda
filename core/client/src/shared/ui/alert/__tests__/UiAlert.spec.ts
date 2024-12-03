import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";
import UiAlert from "../UiAlert.vue";

describe("uiAlert", () => {
  const wrapper = shallowMount(UiAlert, {
    props: {
      variant: "default",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.html());
  });

  it("should have content at slot and render x icon", async () => {
    const _w = shallowMount(UiAlert, {
      slots: {
        default: "hello from alert",
      },
      props: {
        closable: true,
      },
    });
    await nextTick();
    expect(_w.html()).toMatchSnapshot();
  });
});
