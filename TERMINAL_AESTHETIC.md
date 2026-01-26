# Terminal Aesthetic Direction

## Core idea
Compact, old‑web, monospace terminal vibe: dense layout, minimal padding, high contrast, and a restrained palette that feels like a CRT or text console. The site reads like a well-structured terminal session rather than a modern hero-scroll page.

## Visual language
- Typography: one primary monospace family with strong personality; use regular and bold weights for hierarchy, keep sizes tight.
- Palette: charcoal/near-black background with muted phosphor green for primary, amber for secondary highlights, and soft gray for body text.
- Layout: tighter vertical rhythm, reduced section spacing, content stacked in bordered blocks that feel like terminal panes.
- Surfaces: subtle scanline or noise texture, hairline borders, and faint glow for interactive elements.
- Motion: minimal; use quick cursor blink and subtle focus outlines, avoid large scroll-reveal animations.

## Structure changes
- Replace large hero blocks with a compact “prompt” style intro.
- Convert sections into terminal “cards” with headers that look like command output (e.g., `> projects`).
- Move nav into a slim top bar that looks like a status line.
- Reduce max widths and margins; align to a consistent grid with narrow gutters.

## Component styling ideas
- Buttons: look like terminal commands (outlined, monospace, uppercase, `>` prefix).
- Links: underline with dotted/terminal-style, highlight on hover with invert.
- Cards: bordered rectangles with subtle inset shadow and a small title bar.
- Icons/emoji: keep, but render smaller and align to text baseline.

## UX details
- Show a blinking cursor in the intro and maybe in section headers.
- Keep interactions keyboard-friendly; focus rings should be bright and visible.
- Use concise copy and avoid excessive whitespace.

## Responsive behavior
- Mobile first: single-column, narrow paddings, and compact line heights.
- Desktop: keep density but allow wider panes; avoid huge vertical gaps.
- Nav: condensed status bar on mobile; expand to full inline menu on desktop.
- Cards: full-width on mobile, two-column grid only where it reads cleanly.
- Touch targets: keep 44px minimum height without inflating overall spacing.

## CSS primitives to introduce
- CSS variables for colors: `--terminal-bg`, `--terminal-fg`, `--terminal-accent`, `--terminal-muted`.
- Global font family set to the monospace font with fallbacks.
- Utility classes for `terminal-pane`, `terminal-title`, `terminal-prompt`.

## What stays the same
- Existing content, sections, and navigation structure.
- React component structure; changes are styling + light layout tweaks.

## Libraries
- No new libraries required. Tailwind + existing CSS are sufficient to reach the terminal look and responsive goals.
- If we choose a custom monospace font, we can load it via standard webfont link or a local asset, no framework change.

## Open questions for you
- Preferred monospace font: classic (e.g., IBM Plex Mono) or retro (e.g., VT323)?
- Accent color: phosphor green only, or green + amber highlights?
