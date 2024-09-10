# ✨ Star Wars Charakter des Tages

[🇬🇧/🇺🇸 English Version](README.en.md)

[🇩🇪 Deutsche Version](README.md)

Diese Webanwendung zeigt täglich Informationen über einen zufälligen Charakter aus dem Star Wars Universum an.
Tatsächlich ist diese Seite die Lösung für die folgende Aufgabe.

Erstelle eine (Frontend-)Anwendung „Star Wars Charakter des Tages“. Verwende dazu die [SWAPI](https://swapi.dev/api/). Die React-Anwendung sollte zufällig eine Star Wars-Figur auswählen und ansprechend präsentieren. Ein Benutzer sollte jeden Tag dieselbe Figur als „SWCotD“ sehen. Verschiedene Benutzer/Browser müssen nicht dieselbe Figur am selben Tag sehen.


## 🧑‍💻 Technologie stack

Für die Lösung wurde der unten aufgeführte Technologiestack verwendet:

### 🎨 Frontend-Entwicklung
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

## 🛠️ Projekt installation und Start
1. Klone das Projekt-Repository. ([Anleitungen zum Klonen eines GitHub-Repositorys](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
2. Stelle sicher, dass Docker installiert und gestartet ist. ([Docker Einrichten](https://www.docker.com/get-started/))
3. Baue das Projekt, indem du den folgenden Befehl im Terminal ausführst:
```bash
  yarn dev:setup
```
4. Starte das Projekt lokal im Entwicklungsmodus (lasse das Terminal geöffnet):
```bash
yarn dev:start
```
5. Öffne ein neues Terminal und führe alle Unit- und End-to-End-Tests aus:
```bash
yarn test
```
