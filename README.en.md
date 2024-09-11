# ✨ Star Wars Character of the Day

[🇬🇧/🇺🇸 English Version](README.en.md)

[🇩🇪 Deutsche Version](README.md)

[🛜 Live website](https://slobodadev.github.io/hvv-tender-frontend/)

This web application displays daily information about a random character from the Star Wars universe.
Actually, this page is a solution for the next task.

  Create a (frontend) application “Star Wars Character of the Day”. To do this, use the [SWAPI](https://swapi.dev/api/).
  The React application should randomly select a Star Wars figure and present it in an
  appealing way. A user should always see the same figure as “SWCotD” for a day. Different
  users/browsers do not have to see the same figure on the same day.

## 👷🏽‍♂️ Solution

For fast development we choose React library. It's help make application not very large memory. Initisalizating React app with Vite helping make local development faster and safe time for configurations. For scalability we provide simple architechture ased inFor fast development, we chose the React library. It helps keep the application lightweight in terms of memory usage. Initializing a React app with Vite speeds up local development and saves time on configuration. For scalability, we provide a simple architecture based on [Feature Sliced design](https://feature-sliced.design/) where:

- /app — this directory includes hooks, services, and other components required for the application logic.
- /pages — directory where the application pages are built.
- /shared — directory that includes reusable elements such as UI components, TypeScript types, constants, etc
  
For unit testing, we use the Vitest library because it’s easy to integrate with React + Vite apps and has excellent documentation. For end-to-end (e2e) testing, we chose Playwright, as it also offers great documentation, is easy to integrate with JavaScript and TypeScript, and provides a useful UI mode to improve debugging experience.

## 🤔 Possible improvements: Provide SSO access for hvv employees 

To enhance security, we can enable Single Sign-On (SSO) access for HVV employees. Ideally, this would be handled by a dedicated backend service. On the client and backend sides, we can implement SSO with the following steps::

- configure the application to support SAML or OAuth-based SSO using the chosen IdP. This involves setting up the appropriate service provider metadata within the IdP dashboard and configuring the application to handle SSO authentication flows.

- in the backend, we implement middleware to handle the authentication process. This middleware verifies the SSO tokens or assertions provided by the IdP and securely grants access to the application based on the user’s role and permissions.

- enforce role-based access control (RBAC) to ensure that HVV employees are granted appropriate access based on their role within the organization. This ensures that sensitive areas of the application are protected and that users only have access to the resources they need.

- handle session management using secure tokens (e.g., OAuth) to maintain authenticated sessions. This approach ensures that users remain logged in while providing additional security measures, such as token expiration and refresh mechanisms.


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
