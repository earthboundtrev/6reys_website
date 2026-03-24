# 6R's Entertainment Yard — Website

This repository is the **public website for 6R's Entertainment Yard**, an arcade and gaming venue in Orange, Virginia. The site was built to **showcase the business**: location and hours, the games and hardware on the floor, events, and prize offerings, and to link visitors to social channels.

The venue is **permanently closed** (as of January 2026). The site remains online **as a historical record** of what 6R’s offered and to preserve photos, game lists, and context for the community.

## What’s on the site

- **Home** — Hero, visit/location details, and footer with contact and social links.
- **Games** — Photo gallery and catalog of arcade games and hardware (reflecting the collection while the business was open).
- **Events** — Archived photos and “Memories & Highlights” from when the venue was open.
- **Prizes** — Photos of ticket redemption, prize machines, and example prizes from the operating period.
- **Closure announcement** — Dedicated page for the permanent closure notice.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for client-side routes

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build   # production build
npm run preview # serve the build locally
```

Copy `.env.example` to `.env` if you add features that need environment variables (do not commit `.env`).
