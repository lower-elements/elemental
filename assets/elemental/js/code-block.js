(() => {
  'use strict'

  const initialise = () => {
    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') return

    document.querySelectorAll('.code-block-copy').forEach(button => {
      const block = button.closest('.code-block')
      const code = block?.querySelector('.lntd:last-child code') ||
        block?.querySelector('.highlight > pre > code')
      const status = block?.querySelector('[data-copy-status]')

      if (!block || !code) return

      button.hidden = false

      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent)
          if (status) status.textContent = 'Copied.'
        } catch {
          if (status) status.textContent = 'Copy failed. Select the code and copy it manually.'
        }
      })
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise)
  } else {
    initialise()
  }
})()
