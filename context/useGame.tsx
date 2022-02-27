import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { GameState } from '../utils/enum'

interface GameContextType {
  user?: User
  state: string
  loading: boolean
  error?: any
  updateGameState: (state: string) => void
}

const GameContext = createContext<GameContextType>(
  {} as GameContextType
)

export function GameProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User>()
  const [state, setState] = useState<string>(GameState.INTRO)
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    // set username from local storage?
  }, [])

  function updateGameState(newState: string) {
    setState(newState)
  }

  const memoedValue = useMemo(
    () => ({ user, state, loading, error, updateGameState }),
    [user, state, loading, error]
  )

  return (
    <GameContext.Provider value={memoedValue}>
      {children}
    </GameContext.Provider>
  )
}

export default function useGame() {
  return useContext(GameContext)
}
