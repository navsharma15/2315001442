# Campus Notification System — Stage 1

Project setup

1. Install dependencies

```bash
npm install
```

2. Set an optional API token (if you have one)

```bash
# Windows (PowerShell)
$env:NOTIFICATION_API_TOKEN = "your_token_here"

# macOS / Linux
export NOTIFICATION_API_TOKEN=your_token_here
```

3. Start the server

```bash
npm start
```

API endpoint

- `GET /priority-inbox` — returns top 10 notifications sorted by priority (Placement=3, Result=2, Event=1) and timestamp (latest first for ties).

Files

- `loggingMiddleware.js` — logs HTTP method, URL, and timestamp
- `notificationService.js` — fetches notifications from configured API, assigns priorities
- `server.js` — Express server and `GET /priority-inbox`
- `sampleNotifications.js` — sample fallback notification data
- `stages/stage-1/Notification_System_Design.md` — design document

Notes

- The service will attach an `Authorization: Bearer <token>` header if `NOTIFICATION_API_TOKEN` is set.
- No database or frontend included; this is a simple beginner-level server.
- Recommended VS Code extensions: ESLint, Node.js Extension Pack, Prettier.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
