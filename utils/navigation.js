export const mainNavLinks = [
  {
    to: '/',
    labelKey: 'nav.home'
  },
  {
    to: '/sgradi',
    labelKey: 'nav.buildings',
    hasSubmenu: true,
    submenuItems: [
      { to: '/sgradi/1', labelKey: 'nav.building', labelSuffix: ' 1' },
      { to: '/sgradi/2', labelKey: 'nav.building', labelSuffix: ' 2' },
      { to: '/sgradi/3', labelKey: 'nav.building', labelSuffix: ' 3' },
      { to: '/sgradi/4', labelKey: 'nav.building', labelSuffix: ' 4' }
    ]
  },
  {
    to: '/za-nas',
    labelKey: 'nav.about'
  },
  {
    to: '/kontakti',
    labelKey: 'nav.contact'
  }
]
