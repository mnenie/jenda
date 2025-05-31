function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'lucide': () => import('@iconify-json/lucide/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'radix-icons': () => import('@iconify-json/radix-icons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'tabler': () => import('@iconify-json/tabler/icons.json', { with: { type: 'json' } }).then(m => m.default),
}