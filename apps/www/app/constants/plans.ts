export const priceListPerMonth: Record<string, number[]> = {
  ru: [0, 199, 249, 320],
  en: [0, 3.99, 4.99, 6],
  zh: [0, 15.92, 19.92, 25.6],
}

export const priceListPerYear: Record<string, number[]> = {
  ru: [0, 159.2, 199.2, 256],
  en: [0, 3.19, 3.99, 4.8],
  zh: [0, 12.73, 15.93, 20.48],
}

export const plans = [
  {
    plan: 'Free',
    description: 'prefix_free',
  },
  {
    plan: 'Lite',
    description: 'prefix_lite',
  },
  {
    plan: 'Pro',
    description: 'prefix_pro',
    isPopular: true,
  },
  {
    plan: 'Business',
    description: 'prefix_business',
  },
] as const

export const tabs = [
  {
    value: 'month',
    name: 'prefix_month',
  },
  {
    value: 'year',
    name: 'prefix_year',
  },
]
