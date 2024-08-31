import type { Component } from 'vue';

export type Link = {
  id: number;
  title: string;
  pathName: string;
  icon: Component;
};

export type HeaderNavLink = {
  id: number;
  name: string;
  pagePrefix: string;
};