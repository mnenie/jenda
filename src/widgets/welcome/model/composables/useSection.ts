import { computed, type MaybeRefOrGetter } from 'vue';
import { useI18n } from 'vue-i18n';
import type { SectionWrapperType } from '../types';

export default function useSection(_section: MaybeRefOrGetter<string>, imgUrl: string, userImg: string) {
  const { t } = useI18n();

  const parentKeys = ['name', 'heading', 'about', 'writer'] as const;
  const childReviewKeys = ['name', 'status', 'comment'] as const;

  const section = computed<SectionWrapperType>(() => {
    return {
      ...(Object.fromEntries(parentKeys.map((key) => [key, t(`welcome.${_section}.${key}`)])) as Pick<
        SectionWrapperType,
        'name' | 'heading' | 'about' | 'writer'
      >),
      img: imgUrl,
      review: {
        ...Object.fromEntries(childReviewKeys.map((key) => [key, t(`welcome.${_section}.review.${key}`)])),
        img: userImg
      }
    };
  });

  return { section };
}
