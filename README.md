# @devolutions/iron-remote-desktop — aktraen fork (prebuilt)

Prebuilt `dist/` of the backend-agnostic IronRDP web component, consumed by
`frontends/learn` as a `github:` tarball dependency (no npm publish).

Source of record: https://github.com/aktraen/IronRDP (branch `aktraen/autologon`).

Fork changes vs upstream `0.11.0`:
- **Layout-independent keyboard shortcuts** — `sendKeyboard` derives a held-modifier
  letter shortcut's scancode from the typed CHARACTER, not the physical key position,
  so Ctrl/Cmd+V pastes on QWERTY, BEPO and AZERTY alike. Plain typing keeps the unicode
  (WYSIWYG) path untouched.
- **Container-size resize** — `fitResize`/`fullResize`/`realResize` plus a `ResizeObserver`
  scale to the host custom element's own client box instead of the browser viewport, so
  an embedded (non-fullscreen) instance no longer over-scales and clips the desktop.
