import { useMyPresence, useOthers } from '@liveblocks/react'
import useGame from '../context/useGame'
import { GameState } from '../utils/enum'
import { useRouter } from 'next/router'
import { roomAlreadyPlaying } from '../utils/helpers'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function UserForm() {
  const router = useRouter()
  const { id } = router.query
  const { state, updateGameState } = useGame()
  const [myPresence, updateMyPresence] = useMyPresence()
  const others = useOthers().toArray()
  const [alreadyPlaying, setAlreadyPlaying] = useState(false)

  useEffect(() => {
    if (roomAlreadyPlaying(myPresence, others)) {
      setAlreadyPlaying(true)
    }
  }, [myPresence, others])

  const onSubmit = async (event: any) => {
    event.preventDefault()

    updateMyPresence({
      name: event.target.username.value,
      state: GameState.READY,
      opponent: null,
      roomId: id,
    })

    updateGameState(GameState.READY)

    router.push(`/room/${id}`)
  }

  if (alreadyPlaying) {
    return (
      <div>
        <p>Unable to join rooms which already have a game in progress.</p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm font-medium">Username</label>
        <input type="text" name="username" id="username" className="mt-1 bg-gray-100 rounded-lg px-4 py-2" />
      </div>

      <button type="submit" className="mt-3 w-full bg-sky-200 rounded-lg text-sm font-medium px-3.5 py-2">
        Join game
      </button>
    </form>
  )
}
