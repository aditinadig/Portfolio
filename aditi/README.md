# Aditi Arun Nadig Portfolio

**Live:** [aditinadig.netlify.app](https://aditinadig.netlify.app)

A software engineering portfolio that goes beyond a list of roles. It reflects how I approach engineering problems: understand the real failure point, model the data flow, build from clear specs, and review generated or handwritten code with the same level of care.


## What It Covers

- Production experience across healthcare, academic, and enterprise workflows
- React UI work with strong attention to interaction states, accessibility, and performance
- AI-assisted development used as leverage, not as a replacement for engineering judgment
- A product-minded way of explaining work: problem, system behavior, responsibilities, tools, and tradeoffs
- My overlap between software, HCI, research, and music coordination

## Engineering Style

I build from structure first.

Before implementation, I care about the source of truth, failure states, permissions, API boundaries, and what happens when data is delayed, empty, malformed, or inconsistent. The frontend matters, but I do not treat UI polish as separate from system behavior. A clean interface is only useful if the workflow underneath it is reliable.

I use AI tools such as GitHub Copilot, Codex, and Claude for speed: scaffolding, repetitive refactors, first-pass test ideas, documentation drafts, and comparing implementation options. Architecture, security-sensitive logic, data-flow decisions, naming, and the final shipping call stay with me.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- DaisyUI
- JSON-driven content modules

## Project Structure

```text
src/
  components/       Shared navigation and footer
  data/             Portfolio copy, work history, projects, skills, values
  pages/            Main portfolio sections
  assets/           Fonts and static UI assets
public/
  images/           Public image assets
  resume.pdf        Current resume
```

Most content lives in `src/data` so the site can be updated like a structured profile rather than by editing JSX copy directly.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```