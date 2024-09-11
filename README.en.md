# ✨ Star Wars Character of the Day

[🇬🇧/🇺🇸 English Version](README.en.md)

[🇩🇪 Deutsche Version](README.md)

This web application displays daily information about a random character from the Star Wars universe.
Actually, this page is a solution for the next task.

  Create a (frontend) application “Star Wars Character of the Day”. To do this, use the [SWAPI](https://swapi.dev/api/).
  The React application should randomly select a Star Wars figure and present it in an
  appealing way. A user should always see the same figure as “SWCotD” for a day. Different
  users/browsers do not have to see the same figure on the same day.

## 🧑‍💻 Tech Stack

For the solution was used a stack of technologies that are listed below:

### 🎨 Frontend development
- [React.js](https://react.dev/learn)
- [Vite](https://vitejs.dev/guide/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Tailwind](https://tailwindcss.com/docs/installation)

### 🧪 Testing
- [Vitest](https://vitest.dev/guide/)
- [Playwright](https://playwright.dev/docs/intro)

### 🏭 DevOPS
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- [Docker](https://www.docker.com/get-started/)

## 🛠️ Project installation and start
1. Clone the project repository. ([Variations for cloning GitHub repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
2. Make sure Docker is installed and running. ([Get started with Docker](https://www.docker.com/get-started/))
3. Build the project by running the following command in your terminal:
```bash
  yarn dev:setup
```
4. Start the project locally in development mode (keep the terminal open):
```bash
yarn dev:start
```
5. Open a new terminal and run all unit and end-to-end tests:
```bash
yarn test
```
