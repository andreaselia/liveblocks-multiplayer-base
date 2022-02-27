import { Presence, User } from '@liveblocks/client'
import { GameState, MAX_ROOM_PLAYERS } from './enum'

export function roomHasOpponentReady (others: User<Presence>[]) {
  if (! others.length) {
    return false
  }

  let opponent = null

  others.forEach(user => {
    if (user.presence?.state === GameState.READY) {
      opponent = user
    }
  })

  return opponent !== null
}

export function roomAlreadyPlaying (myPresence: Presence, others: User<Presence>[]) {
  if (! others.length) {
    return false
  }

  let alreadyPlayingCount = 0

  others.forEach(user => {
    if (user.presence?.state === GameState.PLAYING) {
      alreadyPlayingCount++
    }
  })

  return alreadyPlayingCount > (MAX_ROOM_PLAYERS - 1)
}
