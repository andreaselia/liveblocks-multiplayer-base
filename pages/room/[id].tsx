import { useRouter } from 'next/router'
import useGame from '../../context/useGame'
import { GameState } from '../../utils/enum'
import { RoomProvider } from '@liveblocks/react'
import Game from '../../components/Game'

const Room = () => {
  const router = useRouter()
  const { id } = router.query
  const { state } = useGame()

  return (
    <RoomProvider id={`room-${id}`}>
      <main>
        <h1 className="text-3xl font-bold">
          {state === GameState.READY ? 'Waiting for an opponent...' : 'Tic Tac Toe'}
        </h1>

        <Game />
      </main>
    </RoomProvider>
  )
}

export default Room
