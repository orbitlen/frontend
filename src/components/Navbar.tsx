import { Link } from 'react-router-dom'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import React, { useMemo } from 'react';
import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import {
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  WalletConnectWallet,
  solanaDevnet,
  solana
} from '@ant-design/web3-solana';

const Navbar = () => {

  // const { account } = useAccount();



  const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
      console.log(provider.publicKey.toString());

      if (provider?.isPhantom) {
        return provider;
      }
    }

    window.open('https://phantom.app/', '_blank');
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-500">OrbitAI</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/chatbot" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Questionnaire
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Portfolio
            </Link>
            {/* <ConnectButton /> */}
            <SolanaWeb3ConfigProvider
              autoAddRegisteredWallets
              balance
              chains={[solanaDevnet, solana]}
              rpcProvider={"https://devnet.helius-rpc.com/?api-key=f84a6f24-1feb-4290-bc2f-4fc95cf5e7f0"}
              wallets={[PhantomWallet(), OKXWallet()]}
            >
              <Connector modalProps={{ mode: 'simple', group: false }}>
                <ConnectButton />
              </Connector>
            </SolanaWeb3ConfigProvider>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar