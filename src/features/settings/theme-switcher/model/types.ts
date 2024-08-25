import type { Component } from 'vue';

type Theme = 'light' | 'dark' | 'auto';

export const THEME: Record<string, Theme> = {
  light: 'light',
  dark: 'dark',
  auto: 'auto'
};

export interface ThemeBlock {
  id: number;
  item: Component;
  active?: boolean;
  value: Theme;
}
