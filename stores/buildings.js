import { defineStore } from 'pinia'
import { buildingsData } from '~/utils/buildings'

export const useBuildingsStore = defineStore('buildings', {
  state: () => ({
    buildings: buildingsData,
  }),
  getters: {
    getBuildingById: (state) => (id) => {
      return state.buildings.find((b) => b.id === Number(id))
    },
  },
})
