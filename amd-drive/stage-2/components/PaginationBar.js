import { Button } from '@mui/material'

export default function PaginationBar({ page, setPage }) {
  return (
    <div style={{ marginTop: 12 }}>
      <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
      <span style={{ margin: '0 8px' }}>Page {page}</span>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </div>
  )
}
