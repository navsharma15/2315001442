import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function NotificationCard({ item }) {
  const viewedKey = `viewed_${item.id}`
  const viewed = typeof window !== 'undefined' && localStorage.getItem(viewedKey) === '1'

  const toggle = () => {
    const v = localStorage.getItem(viewedKey) === '1' ? '0' : '1'
    localStorage.setItem(viewedKey, v)
    window.location.reload()
  }

  return (
    <Card style={{ opacity: viewed ? 0.6 : 1 }}>
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography color="textSecondary">{item.type} • {new Date(item.timestamp).toLocaleString()}</Typography>
        <Typography>{item.body}</Typography>
        <button onClick={toggle} style={{ marginTop: 8 }}>{viewed ? 'Mark Unviewed' : 'Mark Viewed'}</button>
      </CardContent>
    </Card>
  )
}
