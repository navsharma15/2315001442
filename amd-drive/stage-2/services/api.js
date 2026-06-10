export async function fetchNotifications({ page = 1, limit = 5 } = {}) {
  // build query params
  const url = `http://localhost:3000/priority-inbox?page=${page}&limit=${limit}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Network error')
  const data = await res.json()
  return data
}
