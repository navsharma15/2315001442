# Stage 2 - Notification Dashboard (Next.js + MUI)

Install

```bash
cd stage-2
npm install
```

Run (dev)

```bash
npm run dev
```

Files

- `app/page.js`: main page using components
- `components/Header.js`: top bar
- `components/FilterBar.js`: type filters and limit
- `components/NotificationCard.js`: card UI and localStorage viewed state
- `components/PaginationBar.js`: simple pagination
- `services/api.js`: fetch from `http://localhost:3000/priority-inbox`

Notes

- Keep backend running on `http://localhost:3000` (Stage 1 server).
- Beginner-friendly code uses only `useState` and `useEffect`.
