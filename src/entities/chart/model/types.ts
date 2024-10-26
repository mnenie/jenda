import type { MaybeRefOrGetter } from 'vue';

export interface Chart {
  key: 'users' | 'boards' | 'tasks';
  config: any;
  section: string;
  dataset: MaybeRefOrGetter;
}
