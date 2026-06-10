const axios = require('axios');
const sampleData = require('./sampleNotifications');

const API_URL = 'http://4.224.186.213/evaluation-service/notifications';
const TOKEN = process.env.NOTIFICATION_API_TOKEN;

function getPriority(type) {
  if (!type) return 1;
  const t = String(type).toLowerCase();
  if (t.includes('placement')) return 3;
  if (t.includes('result')) return 2;
  if (t.includes('event')) return 1;
  return 1;
}

async function fetchNotifications() {
  try {
    const headers = {};
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;
    const res = await axios.get(API_URL, { headers, timeout: 5000 });
    const raw = Array.isArray(res.data) ? res.data : (res.data && res.data.notifications) || [];

    const mapped = raw.map(n => ({
      id: n.id || n._id || Math.random().toString(36).slice(2, 9),
      title: n.title || n.message || 'No title',
      body: n.body || n.message || '',
      type: n.type || n.category || 'Event',
      priority: getPriority(n.type || n.category),
      timestamp: n.timestamp || n.createdAt || n.date || new Date().toISOString()
    }));

    mapped.sort((a, b) => b.priority - a.priority || new Date(b.timestamp) - new Date(a.timestamp));
    return mapped.slice(0, 10);
  } catch (e) {
    console.error('Fetch error, using sample data:', e && e.message ? e.message : e);
    const fallback = sampleData.map(n => ({ ...n, priority: getPriority(n.type) }));
    fallback.sort((a, b) => b.priority - a.priority || new Date(b.timestamp) - new Date(a.timestamp));
    return fallback.slice(0, 10);
  }
}

module.exports = { fetchNotifications };
