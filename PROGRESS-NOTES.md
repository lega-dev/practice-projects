# Learning Progress Notes — Software Development (Si)

## Goal
Complete beginner learning to build websites/apps. Pace: a few hours a week.
Following a roadmap with 6 phases: Programming Fundamentals, Web Building Blocks (HTML/CSS/JS),
Developer's Toolkit (VS Code/Git), Real Projects, Backend/Databases, Frameworks.

## Completed so far

### Phase 1 — Programming Fundamentals (done)
Learned via browser console: variables, conditionals (if/else), loops (for),
functions, arrays, the modulo operator (%), objects and dot notation, typeof,
the difference between string/array/object/primitive, JSON.stringify/parse.

### Phase 2 — Web Building Blocks (done)
Built two files in this folder:
- `index.html` — first practice page: headings, paragraphs, lists, links,
  CSS (selectors, box model, classes, Flexbox cards), a button wired up with
  addEventListener + textContent to change the page live.
- `todo.html` — a real working to-do list app: add tasks, delete tasks
  (document.createElement, appendChild, remove), and persistence across
  page refresh using localStorage + JSON.stringify/parse.
- `mathHelpers.js` — a tiny example "library" (double/square/isEven/average
  functions) linked into todo.html via `<script src="mathHelpers.js">`,
  used to explain what a library/module is and why code gets split into files.

### Phase 3 — Developer's Toolkit (in progress)
VS Code installed and set up (Workspace Trust accepted). About to start
Git basics (init, add, commit, push, pull) and a GitHub repo.

## Teaching style that has worked well
- One concept at a time; confirm actual output before moving to the next step.
- Always give the FULL file contents when sharing code, never a diff/snippet.
- When something breaks, walk through the real error/typo together rather
  than just handing over the fix (e.g. case-sensitivity, missing parens,
  smart quotes from copy-paste, stale state needing a refresh).
- Explain the "why" behind syntax, not just the syntax itself.

## Next up
1. Git: init a repo in this folder, first commit, create a GitHub account/repo, push.
2. Phase 4: deploy index.html/todo.html publicly (GitHub Pages or Netlify),
   then build 2-3 more small projects (weather app calling a public API,
   a notes app using localStorage) to round out the portfolio.
