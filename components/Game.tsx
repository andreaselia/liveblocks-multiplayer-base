import { useMyPresence, useOthers } from '@liveblocks/react'
import { useEffect } from 'react'
import useGame from '../context/useGame'
import { GameState } from '../utils/enum'
import { roomHasOpponentReady } from '../utils/helpers'
import Board from './Board'
import UserForm from './UserForm'

export default function Game() {
  const { state, updateGameState } = useGame()
  const others = useOthers().toArray()
  const [presence, updateMyPresence] = useMyPresence()

  useEffect(() => {
    const opponent = roomHasOpponentReady(others)

    if (opponent && state === GameState.READY) {
      updateGameState(GameState.PLAYING)

      updateMyPresence({
        ...presence,
        state: GameState.PLAYING,
      })
    }
  }, [state, others])

  return (
    <>
      {state}
      {state === GameState.INTRO && <UserForm />}
      {state === GameState.PLAYING && <Board />}
    </>
  )
}
