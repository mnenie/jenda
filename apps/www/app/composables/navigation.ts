export function useNavigation() {
  // _todo
  const navigationMenuItems = [
    {
      label: 'Навигатор',
      items: [
        {},
      ],
    },
    {
      label: 'Модули',
      items: [
        {},
      ],
    },
    {
      label: 'Для кого',
      items: [
        {},
      ],
    },
    {
      label: 'Цены',
      to: 'https://github.com/una-ui/una-ui',
      target: '_blank',
      class: '!navigation-menu-trigger-extended',
    },
    {
      label: 'Блог',
      class: '!navigation-menu-trigger-extended',
      disabled: true,
    },
    {
      label: 'Помощь',
      to: 'https://github.com/una-ui/una-ui',
      target: '_blank',
      class: '!navigation-menu-trigger-extended',
    },
  ]

  return {
    navigationMenuItems,
  }
}
