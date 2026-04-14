## Learned User Preferences

- Prefer being walked through multi-step work one step at a time.
- If a multi-step plan is in progress, prefer keeping the current step visible (e.g., “part 1/2/3” reminders).
- Branch-heavy Git workflows can be confusing; prefer the simplest workflow unless branching is explicitly required.
- For git tasks, prefer creating a fresh `cursor/...` branch and committing/pushing only the explicitly listed files (avoid committing directly to the default branch unless asked).

## Learned Workspace Facts

- This repo is a static site (root `index.html`) and does not build to a `dist/` directory by default.
- For Netlify, the correct publish directory is the repo root (`.`) with no build command unless a build step is added.
- `.cursor/` and Cursor state files under it should generally not be committed; they are typically ignored in git.