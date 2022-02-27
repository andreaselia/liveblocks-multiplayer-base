import { useOthers } from '@liveblocks/react'
import { useEffect, useState } from 'react'

export default function ConnectedUsers() {
  const others = useOthers()
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (others.count === 0) {
      setMessage('You\'re the only one here.')
    } else if (others.count === 1) {
      setMessage('There is one other person here.')
    } else {
      setMessage(`There are ${others.count} other people here.`)
    }
  }, [others])

  return (
    <div>
      {message}
    </div>
  )
}
