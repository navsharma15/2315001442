import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FilterBar from '../components/FilterBar'
import NotificationCard from '../components/NotificationCard'
import PaginationBar from '../components/PaginationBar'
import { fetchNotifications } from '../services/api'

export default function Page() {
  const [type, setType] = useState('All')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    // fetch with query params
    fetchNotifications({ page, limit })
      .then(data => {
        // filter by type if selected
        const filtered = type === 'All' ? data : data.filter(i => i.type === type)
        setItems(filtered)
      })
      .catch(e => setError('Failed to load'))
      .finally(() => setLoading(false))
  }, [type, page, limit])

  return (
    <div style={{ padding: 16 }}>
      <Header />
      <FilterBar type={type} setType={setType} setLimit={setLimit} />

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div style={{ display: 'grid', gap: 12 }}>
        {items.map(it => (
          <NotificationCard key={it.id} item={it} />
        ))}
      </div>

      <PaginationBar page={page} setPage={setPage} />
    </div>
  )
}
