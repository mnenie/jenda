import i18n from "@/shared/lib/i18n";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ColumnItem from "../ColumnItem.vue";
import "@/shared/lib/vitest-utils/cookiesI18n-mock";

describe("tests for ColumnItem.vue", () => {
  const wrapper = mount(ColumnItem, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            "kanban.cards.add": "Add card (test)",
          };
          return translations[key];
        },
      },
    },
    props: {
      column: {
        _id: "0",
        title: "test",
        cards: [],
      },
    },
    slots: {
      default: "test name of column",
      content: "test content",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should correctly works with i18n", () => {
    const date = wrapper.find(".add");
    expect(date.text()).toContain("Add card (test)");
  });
});
