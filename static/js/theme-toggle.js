(() => {
  'use strict'

  const storageKey = 'theme'
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const storedTheme = () => localStorage.getItem(storageKey) || 'auto'
  const resolvedTheme = theme => theme === 'auto'
    ? (mediaQuery.matches ? 'dark' : 'light')
    : theme

  const applyTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', resolvedTheme(theme))
  }

  applyTheme(storedTheme())

  window.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('#elemental-theme')
    const choices = document.querySelectorAll('[data-bs-theme-value]')

    if (!switcher || !choices.length) return

    const showActiveTheme = theme => {
      choices.forEach(choice => {
        const active = choice.dataset.bsThemeValue === theme
        choice.classList.toggle('active', active)
        choice.setAttribute('aria-pressed', active.toString())
      })
    }

    showActiveTheme(storedTheme())

    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        const theme = choice.dataset.bsThemeValue
        localStorage.setItem(storageKey, theme)
        applyTheme(theme)
        showActiveTheme(theme)
        switcher.focus()
      })
    })

    mediaQuery.addEventListener('change', () => {
      if (storedTheme() === 'auto') applyTheme('auto')
    })
  })
})()
