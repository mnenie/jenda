import i18n from "@/shared/lib/i18n";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { ref, shallowRef } from "vue";
import useTheme from "../../model/composables/useTheme";
import ThemeSwitcher from "../ThemeSwitcher.vue";
import "@/shared/lib/vitest-utils/cookiesI18n-mock";

vi.mock("@vueuse/core", () => ({
  useColorMode: vi.fn(() => ({
    store: ref("auto"),
  })),
}));

describe("tests for ThemeSwitcher.vue", () => {
  const wrapper = shallowMount(ThemeSwitcher, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            "settings.theme.variants.light": "light",
            "settings.theme.variants.dark": "dark",
            "settings.theme.variants.auto": "system",
          };
          return translations[key];
        },
      },
    },
  });

  it("should render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("should render subcomponents", () => {
    expect(
      wrapper.findComponent({ name: "UiRadioGroupContainer" }).exists(),
    ).toBe(true);
    expect(wrapper.findComponent({ name: "UiButton" }).exists()).toBe(true);
  });

  it("computed `themeAbout` is working correctly", () => {
    // @ts-expect-error PublicInstance
    const themeAbout = wrapper.vm.themeAbout;
    expect(themeAbout("light")).toBe("Light");
    expect(themeAbout("dark")).toBe("Dark");
    expect(themeAbout("auto")).toBe("System");
  });
});

describe("useTheme composable tests", () => {
  it("should change active theme correctly", () => {
    const themeBlocks = shallowRef([
      { id: 0, active: true, value: "light" },
      { id: 1, active: false, value: "dark" },
      { id: 2, active: false, value: "auto" },
    ]);

    const { changeActiveTheme } = useTheme(themeBlocks as unknown as any);

    changeActiveTheme(1);
    expect(themeBlocks.value[0].active).toBe(false);
    expect(themeBlocks.value[1].active).toBe(true);
    expect(themeBlocks.value[2].active).toBe(false);
  });
});
