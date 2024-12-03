import i18n from "@/shared/lib/i18n";
import { UiDropdown, UiDropdownItem } from "@/shared/ui";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { type ComponentPublicInstance, nextTick } from "vue";
import UserMenu from "../UserMenu.vue";
import "@/shared/lib/vitest-utils/cookiesI18n-mock";

type UserMenuDropdownInstance = ComponentPublicInstance<
  {},
  {},
  {
    handleDropdown: () => void;
  }
>;

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
};

describe("tests for UserMenu.vue", () => {
  const wrapper = mount(UserMenu, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            "header.user.welcome": "welcome",
            "header.user.logout": "logout",
          };
          return translations[key];
        },
        $router: mockRouter,
      },
    },
  });

  it("should be render correctly", async () => {
    wrapper
      .findComponent(UiDropdown as unknown as UserMenuDropdownInstance)
      .vm.handleDropdown();
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should redirect coorectly", async () => {
    const welcomeTrigger = wrapper
      .find(".content")
      .findAllComponents(UiDropdownItem)
      .at(0);

    await welcomeTrigger.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith({ name: "welcome" });
  });
});
