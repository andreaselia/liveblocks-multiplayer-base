import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createClient } from '@liveblocks/client'
import { LiveblocksProvider } from '@liveblocks/react'
import { GameProvider } from '../context/useGame'

const client = createClient({
  authEndpoint: '/api/auth',
})

function MyApp({ Component, pageProps }: AppProps) {
  return <LiveblocksProvider client={client}>
    <GameProvider>
      <div className="font-sans antialiased py-10 flex flex-col items-center justify-between h-screen">
        <Component {...pageProps} />

        <footer className="text-sm text-gray-500">
          Built by Andreas Elia using Liveblocks.
        </footer>
      </div>
    </GameProvider>
  </LiveblocksProvider>
}

export default MyApp
