<div align="center" className="flex flex-col items-center gap-4">
  <h1 align="center" className="text-3xl md:text-5xl font-bold">
    <a href="https://whopays.cibulka.me">whopays.cibulka.me</a>
  </h1>
</div>

<br />

<div align="center" className="flex justify-center items-center gap-4">
  <a aria-label="Next.js" href="https://www.nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-black?logo=next.js&labelColor=black" />
  </a>
  <a aria-label="TypeScript" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-black?logo=TypeScript&labelColor=black" />
  </a>
  <a aria-label="Tailwind" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-black?logo=tailwindcss&labelColor=black" />
  </a>
  <a aria-label="My resumé" href="https://www.cibulka.codes/en/cv.pdf">
    <img src="https://img.shields.io/badge/Download_my_resumé!-blue" />
  </a>
</div>

<br />

## ❓ What is this?

An interview assingment for [ematiq.com](https://www.ematiq.com/). The goal was to "create a web app that determines who pays for lunch". 🌮🍕🥪

## 📦  Features

<details>
  <summary><strong>Persisted state</strong></summary>
  <br />

The state is persisted in `localStorage` - the result, the number of players and their names. This way the tool can be used repeatedly from the same device - let's say everyday during a lunch hour.

To avoid showing the suspense animation on refresh, the suspense result is persisted as well.

</details>

<details>
  <summary><strong>Dynamic setting of users</strong></summary>
  <br />

User can set between 2 to 20 users. The names of users are either **typed by user**, or **automatically created** (according to the number defined in range).

</details>

<details>
  <summary><strong>Suspense animation</strong></summary>
  <br />

The transition between **settings page** and the **page with result** shows silly suspense animation, to increase the tension. The animation is shown only once per each game.

</details>

<details>
  <summary><strong>i18n</strong></summary>
  <br />

Application is ready to be translated to multiple languages with `react-intl`. So far Czech and English version is available, with the dictionaries, appropriate routing and automatic locale resolution.

</details>

## Tools

The app is built with [Next.js](https://nextjs.org/), as it is a library I'm most comfortable to use. CSS is handled by [Tailwind](https://tailwindcss.com/).

All UI is coded and styled by me, with the exception of headless [react-range](https://www.npmjs.com/package/react-range) (that provides a styling API that is a bit easier to use than native solution.)

### UI

- [react-range](https://www.npmjs.com/package/react-range) for headless implementation of range, that is a bit easier to style than native HTML input
- [react-confetti](https://www.npmjs.com/package/react-confetti) for cheering up the person who will need to pay for lunch

### i18n

- [react-intl](https://www.npmjs.com/package/react-intl) for translations
- [next-i18n-router](https://www.npmjs.com/package/next-i18n-router) for localized routing

### Other

- [react-use](https://www.npmjs.com/package/react-use) for reusable React hooks adhering to industry standards

## 🔧  Install & Use

You know the drill.

```
npm install
npm run dev # For development
npm run build && npm start # For production preview
```
