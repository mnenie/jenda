import type { Component } from 'vue';

export interface Chart {
  id: string;
  title: string;
  description: string;
  chart: Component;
}
