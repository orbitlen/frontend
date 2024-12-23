import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { mainnet, sepolia } from 'wagmi/chains'
import '@rainbow-me/rainbowkit/styles.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Chatbot from './components/Chatbot'
import './App.css'

const config = getDefaultConfig({
  appName: 'Orbitlen',
  projectId: 'YOUR_PROJECT_ID', // Get one from https://cloud.walletconnect.com
  chains: [mainnet, sepolia],
})

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {/* <Router> */}
            <div className="min-h-screen bg-gray-900">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/portfolio" element={<Home />} />
              </Routes>
            </div>
          {/* </Router> */}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
