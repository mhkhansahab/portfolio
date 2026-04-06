# Portfolio

This repository is my **personal portfolio website** — a place to present who I am, what I build, and how to reach me. It is built with [Next.js](https://nextjs.org/), React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/).

## Environment variables

For the live GitHub contribution graph, add a GitHub token in `.env.local`:

```bash
GITHUB_TOKEN=ghp_your_github_token_here
```

The token is used only on the server route (`/api/github/contributions/[username]`) and is never exposed to the client.
