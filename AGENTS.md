# AGENTS

This file guides agentic contributors in this repo.

## Repository layout
- `app/` Vite + React + Tailwind source.
- `.github/workflows/` CI and deploy workflows.
- `CNAME` GitHub Pages custom domain.

## Working directory
- Run all node commands from `app/`.
- Node version in CI: 20.

## Install
- `cd app`
- `npm install`

## Dev server
- `npm run dev`
- Default Vite host/port.

## Build
- `npm run build`
- Output in `app/dist/`.

## Preview production build
- `npm run preview`

## Lint
- `npm run lint`
- Uses `app/eslint.config.js`.

## Tests
- No test runner is configured.
- There is no `npm test` script.
- Single test execution: not applicable.
- If you add tests, document the new command here.

## CI / CD
- CI runs in `.github/workflows/ci.yml`.
- Steps: `npm ci`, `npm run lint`, `npm run build`.
- Deploy workflow builds and publishes `app/dist`.

## Code style overview
- React 19 with JSX, function components, and hooks.
- JavaScript only (no TypeScript).
- PropTypes are used for public component props.
- Prefer small, focused components with clear props.
- Keep UI state in component state; lift only when needed.
- Tailwind utility classes are the primary styling method.

## Imports
- Group imports: external packages first, then local modules.
- Use relative imports within `app/src`.
- Use default exports for components.
- Keep `import` order stable within a file.

## Formatting
- Indentation: 2 spaces.
- Most `app/src` files use double quotes and semicolons.
- Some tooling files use single quotes and no semicolons.
- Match existing style in the file you edit.
- Keep JSX props aligned and readable.

## Naming
- Component files use PascalCase: `Card.jsx`.
- Component functions use PascalCase.
- Local variables use camelCase.
- Constants use `const` and uppercase only for invariants.

## Types and props
- Use PropTypes at the bottom of the file.
- Mark required props with `isRequired`.
- Prefer simple primitive prop types when possible.

## Error handling
- Use `try/catch` around async UI flows.
- Provide a user-visible fallback message on failure.
- Avoid throwing in render paths.

## State and effects
- Keep effect dependencies accurate and minimal.
- Clean up event listeners and side effects.
- Avoid unnecessary global DOM changes.

## Styling and CSS
- Tailwind classes live in `className` strings.
- Prefer existing CSS variables in `app/src/index.css`.
- Avoid inline styles unless required for dynamic values.
- Animations are handled via classes in CSS.

## Content and data
- Static content lives in component files.
- Blog posts are Markdown in `app/src/posts/`.
- `import.meta.glob` is used to load posts.

## Accessibility
- Include `aria-*` when needed for interactive elements.
- Buttons and links should be keyboard-accessible.
- Use `rel="noopener noreferrer"` for new tabs.

## Deployment notes
- GitHub Pages uses `CNAME` and `app/dist`.
- Vite base is `/` for the custom domain.

## Cursor / Copilot rules
- No `.cursor/rules`, `.cursorrules`, or Copilot instructions found.
- If new rules are added, mirror them here.

## Agent workflow
- Read `README.md` and `app/package.json` first.
- Prefer edits that keep the UI consistent with existing sections.
- Avoid introducing new frameworks or build tools.
- Keep changes scoped to `app/` unless instructed.

## Suggested quick checks
- Run `npm run lint` after code edits.
- Run `npm run build` before deploying.

## File references
- Entry: `app/src/main.jsx`.
- App shell: `app/src/App.jsx`.
- Pages: `app/src/pages/*`.
- Shared components: `app/src/components/*`.
- Global styles: `app/src/index.css`.

## Known gaps
- No automated tests.
- No formatter configured (Prettier not present).

## When adding new files
- Use `.jsx` for React components.
- Export a default component.
- Add PropTypes if the component accepts props.
- Keep file location consistent with current structure.

## When editing existing files
- Preserve the component API unless asked to change it.
- Keep class names consistent with existing naming.
- Follow the same quote and semicolon style in the file.

## Misc
- `npm run deploy` uses `gh-pages` and expects `app/dist`.
- `npm run predeploy` runs `npm run build`.

## Contact
- Project owner: Benjamin Churchill.
- Website: https://qwex.co

## End
