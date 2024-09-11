# ✨ Star Wars Charakter des Tages

[🇬🇧/🇺🇸 English Version](README.en.md)

[🇩🇪 Deutsche Version](README.md)

[🛜 Live Website](https://slobodadev.github.io/hvv-tender-frontend/)

Diese Webanwendung zeigt täglich Informationen über einen zufälligen Charakter aus dem Star Wars Universum an.
Tatsächlich ist diese Seite die Lösung für die folgende Aufgabe.

Erstelle eine (Frontend-)Anwendung „Star Wars Charakter des Tages“. Verwende dazu die [SWAPI](https://swapi.dev/api/). Die React-Anwendung sollte zufällig eine Star Wars-Figur auswählen und ansprechend präsentieren. Ein Benutzer sollte jeden Tag dieselbe Figur als „SWCotD“ sehen. Verschiedene Benutzer/Browser müssen nicht dieselbe Figur am selben Tag sehen.

## 👷🏽‍♂️ Lösung

Für eine schnelle Entwicklung haben wir die React-Bibliothek gewählt. Sie hilft dabei, die Anwendung speichereffizient zu gestalten. Die Initialisierung der React-App mit Vite beschleunigt die lokale Entwicklung und spart Zeit bei der Konfiguration. Für die Skalierbarkeit bieten wir eine einfache Architektur basierend auf dem [Feature Sliced Design](https://feature-sliced.design/), bei der:

- /app — Dieses Verzeichnis enthält Hooks, Services und andere Komponenten, die für die Anwendungslogik erforderlich sind.
- /pages — Verzeichnis, in dem die Anwendungsseiten erstellt werden.
- /shared — Verzeichnis, das wiederverwendbare Elemente wie UI-Komponenten, TypeScript-Typen, Konstanten usw. enthält.

Für Unit-Tests verwenden wir die Vitest-Bibliothek, da sie sich leicht in React + Vite-Apps integrieren lässt und eine hervorragende Dokumentation bietet. Für End-to-End-Tests (E2E) haben wir Playwright gewählt, da es ebenfalls eine großartige Dokumentation bietet, leicht in JavaScript und TypeScript integriert werden kann und einen nützlichen UI-Modus zur Verbesserung des Debugging-Erlebnisses bietet.

## 🤔 Mögliche Verbesserungen: SSO-Zugriff für HVV-Mitarbeiter bereitstellen

Um die Sicherheit zu erhöhen, können wir den Single-Sign-On (SSO)-Zugriff für HVV-Mitarbeiter aktivieren. Idealerweise wird dies von einem dedizierten Backend-Dienst verwaltet. Auf der Client- und Serverseite können wir SSO mit den folgenden Schritten implementieren:

- Konfigurieren Sie die Anwendung zur Unterstützung von SAML- oder OAuth-basiertem SSO unter Verwendung des ausgewählten IdP. Dazu gehört das Einrichten der entsprechenden Service-Provider-Metadaten im IdP-Dashboard und das Konfigurieren der Anwendung zur Handhabung der SSO-Authentifizierungsabläufe.

- Im Backend implementieren wir Middleware, die den Authentifizierungsprozess abwickelt. Diese Middleware überprüft die vom IdP bereitgestellten SSO-Tokens oder Assertions und gewährt basierend auf der Rolle und den Berechtigungen des Benutzers sicher Zugriff auf die Anwendung.

- Durchsetzen einer rollenbasierten Zugriffskontrolle (RBAC), um sicherzustellen, dass HVV-Mitarbeiter basierend auf ihrer Rolle innerhalb der Organisation den entsprechenden Zugriff erhalten. Dies stellt sicher, dass sensible Bereiche der Anwendung geschützt sind und Benutzer nur Zugriff auf die Ressourcen haben, die sie benötigen.

- Sitzungshandhabung mit sicheren Tokens (z.B. OAuth) zur Aufrechterhaltung authentifizierter Sitzungen. Dieser Ansatz stellt sicher, dass Benutzer eingeloggt bleiben, während zusätzliche Sicherheitsmaßnahmen wie Token-Ablauf und Refresh-Mechanismen implementiert werden.



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
