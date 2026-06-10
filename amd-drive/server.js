const express = require('express');
const loggingMiddleware = require('./loggingMiddleware');
const { fetchNotifications } = require('./notificationService');

const app = express();
app.use(loggingMiddleware);

app.get('/priority-inbox', async (req, res) => {
  try {
    const items = await fetchNotifications();
    items.forEach(i => { if (typeof i.priority !== 'number') i.priority = 1; });
    items.sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      const ta = new Date(a.timestamp).getTime() || 0;
      const tb = new Date(b.timestamp).getTime() || 0;
      return tb - ta;
    });
    res.json(items.slice(0, 10));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get notifications' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
