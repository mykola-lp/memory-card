# Project: Memory Card

## Introduction

Here we go again with a new project! Let’s make sure you understand the concepts so far. The main goal of this project is to implement the concepts learned so far by using hooks to manage and utilize state while fetching and using data from an external API.

## Built With

- React
- Vite
- JavaScript

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run tests:

```bash
npm run test
```

## Assignment

1. Create a new React Project.

2. Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.

3. You also need a handful of cards that display images and possibly informational text. These images and texts need to be fetched from an external API. You can use anything from [Giphy](https://giphy.com/) to a [Pokemon API](https://pokeapi.co/).

4. Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components.

5. Style your application so you can show it off!

6. As always, push the project to GitHub, and don’t forget to deploy it.

**Note**

This project is deployed using GitHub Pages with a GitHub Actions workflow (`deploy.yml`) that automates the build and deployment process.

## Testing

Beyond the original assignment requirements, this project also includes tests using **Vitest** and **React Testing Library** to demonstrate three testing approaches:

- **Component test** — verifies a component renders correctly with given props (`Scoreboard.test.jsx`).
- **Event test** — simulates user interaction (clicks) and checks the resulting behavior (`Card.test.jsx`, `CardGrid.test.jsx`).
- **Snapshot test** — captures a component's rendered output and detects unintended changes over time (`Header.test.jsx`).

Tests run automatically in the CI pipeline before every deployment.
