import { ofetch } from 'ofetch'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:31299/api/mcs'

export const $fetch = ofetch.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // _todo: token, credentials
  },
  async onRequest() {
    // _todo: token
  },
})
