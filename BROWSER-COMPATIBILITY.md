# Browser compatibility

The portfolio is designed for current versions of Google Chrome, Microsoft Edge,
Mozilla Firefox and Apple Safari, including their current Android and iOS browsers.

Compatibility and resilience improvements in this release:

- Responsive layouts for desktop, tablet and mobile viewports.
- CSS Grid fallbacks using wrapping Flexbox for browsers without Grid support.
- Fixed font-size fallbacks where CSS `clamp()` is unavailable.
- Spacing fallbacks for older Safari versions without Flexbox `gap` support.
- Native HTML dialog previews where supported, with an accessible fixed-overlay
  fallback where `HTMLDialogElement.showModal()` is unavailable.
- JavaScript feature checks for reduced-motion preferences and IntersectionObserver.
- Content remains visible if reveal animations cannot run.
- Analytics consent storage is guarded when browser storage is disabled or blocked.
- Explicit button types and keyboard focus styling for more predictable interaction.

The website uses progressive enhancement. Browsers that do not support modern
features retain the content and core navigation, although some visual effects may
be simplified. Internet Explorer is not a supported target.

## Quick manual test matrix

| Browser | Desktop | Mobile |
| --- | --- | --- |
| Chrome | Check navigation, filters, slides, project preview and CV download | Check menu, layout, consent panel and touch controls |
| Edge | Check all interactive controls and PDF download | Check responsive layout |
| Firefox | Check typography, sticky header, preview overlay and image scaling | Check responsive layout and menu |
| Safari | Check fonts, image scaling, preview overlay and reduced motion | Check iOS menu, viewport sizing and consent panel |

Also test with JavaScript disabled: the page content and links should remain available,
though interactive filtering, slideshow controls and project previews will not run.
