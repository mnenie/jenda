import type { SectionWrapperType } from "../types";
import { useDark } from "@vueuse/core";
import { computed, type MaybeRefOrGetter } from "vue";
import { useI18n } from "vue-i18n";

export default function useSection(
  _section: MaybeRefOrGetter<string>,
  imgPrefix: string,
  userImg: string,
) {
  const { t } = useI18n();
  const isDark = useDark();

  const img = computed(() =>
    isDark.value
      ? `/dev/${imgPrefix}-section-dark.png`
      : `/dev/${imgPrefix}-section.png`,
  );

  const parentKeys = ["name", "heading", "about", "writer"] as const;
  const childReviewKeys = ["name", "status", "comment"] as const;

  const section = computed<SectionWrapperType>(() => {
    return {
      ...(Object.fromEntries(
        parentKeys.map((key) => [key, t(`welcome.${_section}.${key}`)]),
      ) as Pick<SectionWrapperType, "name" | "heading" | "about" | "writer">),
      img: img.value,
      review: {
        ...Object.fromEntries(
          childReviewKeys.map((key) => [
            key,
            t(`welcome.${_section}.review.${key}`),
          ]),
        ),
        img: userImg,
      },
    };
  });

  return { section };
}
