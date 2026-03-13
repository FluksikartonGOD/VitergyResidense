import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Add your global state properties here
    isMobileMenuOpen: false,
  }),
  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
})
