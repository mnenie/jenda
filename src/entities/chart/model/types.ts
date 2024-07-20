import type { Component } from 'vue';

export interface Chart {
  id: string;
  titleKeyI18n: string;
  descriptionKeyI18n: string;
  chart: Component;
}
