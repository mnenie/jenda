import { nextTick } from "vue";

export function useScroll<T extends string[]>(arr: T) {
  const keys = [...arr] as const;

  const scrollToEl = async (key: (typeof keys)[number]) => {
    const el = document.getElementById(key);
    if (!el) {
      throw new Error(`${key} is undefined`);
    }
    await nextTick(() => {
      el.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  };

  return {
    scrollToEl,
  };
}
