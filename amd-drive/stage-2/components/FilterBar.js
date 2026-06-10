import { Button, ButtonGroup } from '@mui/material'

export default function FilterBar({ type, setType, setLimit }) {
  return (
    <div style={{ margin: '12px 0' }}>
      <ButtonGroup>
        <Button onClick={() => setType('All')} variant={type === 'All' ? 'contained' : 'outlined'}>All</Button>
        <Button onClick={() => setType('Event')} variant={type === 'Event' ? 'contained' : 'outlined'}>Event</Button>
        <Button onClick={() => setType('Result')} variant={type === 'Result' ? 'contained' : 'outlined'}>Result</Button>
        <Button onClick={() => setType('Placement')} variant={type === 'Placement' ? 'contained' : 'outlined'}>Placement</Button>
      </ButtonGroup>
      <div style={{ marginTop: 8 }}>
        <label>Limit: </label>
        <select onChange={e => setLimit(Number(e.target.value))} defaultValue={5}>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </div>
  )
}
