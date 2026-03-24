import { buildingsData } from './buildings'

const buildingSubmenuItems = buildingsData.map((building) => ({
  to: `/buildings/${building.id}`,
  labelKey: 'nav.building',
  labelSuffix: ` ${building.id}`,
}))

export const mainNavLinks = [
  {
    to: '/',
    labelKey: 'nav.home',
  },
  {
    to: '/buildings',
    labelKey: 'nav.buildings',
    hasSubmenu: true,
    submenuItems: buildingSubmenuItems,
  },
  {
    to: '/za-nas',
    labelKey: 'nav.about',
  },
  {
    to: '/kontakti',
    labelKey: 'nav.contact',
  },
]
