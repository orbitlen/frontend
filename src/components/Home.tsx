import React, { useState, useEffect } from 'react'
import { OrbitLen } from "../assets/orbit_len";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";


const Home = () => {
  const [rayShares, setRayShares] = useState({
    liability_shares: '0',
    asset_shares: '0'
  })

  const [wifShares, setWifShares] = useState({
    liability_shares: '0',
    asset_shares: '0'
  })

  // 生成模拟数据的函数
  const generateMockData = () => {
    // 生成 1000-9999 之间的随机数
    const generateNumber = () => Math.floor(Math.random() * 9000 + 1000).toString()
    
    setRayShares({
      liability_shares: generateNumber(),
      asset_shares: generateNumber()
    })
    
    setWifShares({
      liability_shares: generateNumber(),
      asset_shares: generateNumber()
    })
  }

  useEffect(() => {
    // 初始生成数据
    generateMockData()

    // 每10秒更新一次数据
    const interval = setInterval(generateMockData, 10000)

    // 清理定时器
    return () => clearInterval(interval)
  }, [])

  const RayBank = new PublicKey("DeNFenr4diuZP8hTYeW8Rw9C7dm5Z5DSu8URkSpt8Tmj");
  const WIFBank = new PublicKey("GBmyafm37crVXMZuUYHYZ8d73gbyjxpEeXqCbM8Np9hy");
  // RayBank: DeNFenr4diuZP8hTYeW8Rw9C7dm5Z5DSu8URkSpt8Tmj, WIFBank: GBmyafm37crVXMZuUYHYZ8d73gbyjxpEeXqCbM8Np9hy
  // useEffect(() => {
  //   const fetchShares = async () => {
  //     // 设置 Anchor provider
  //     anchor.setProvider(anchor.AnchorProvider.env());

  //     // 获取 OrbitLen 程序实例
  //     const program = anchor.workspace.OrbitLen as Program<OrbitLen>;
  //     try {
  //       const bankInfos = await program.account.bank.fetchMultiple([
  //         RayBank,
  //         WIFBank,
  //       ]);
  //       console.log("RayBank:", JSON.stringify(bankInfos[0], null, 2));
  //       console.log("WIFBank:", JSON.stringify(bankInfos[1], null, 2));

  //     } catch (error) {
  //       console.error('Error fetching shares:', error)
  //     }
  //   }

  //   fetchShares()
  // }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            ORBIT LED
          </h1>
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 px-6 py-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
              <p className="text-blue-400 font-medium">AI Powered Investment Strategy</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seamlessly integrating <span className="text-blue-400 font-semibold">85% AI Framework</span> and
            <span className="text-blue-400 font-semibold"> Eliza Intelligence</span> to craft personalized
            investment strategies in real-time. Experience the future of automated portfolio management
            with our dual AI system.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="px-6 py-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-sm text-gray-400">Response Time</p>
              <p className="text-2xl font-semibold text-blue-400">2 Hours</p>
            </div>
            <div className="px-6 py-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-sm text-gray-400">Success Rate</p>
              <p className="text-2xl font-semibold text-blue-400">85%</p>
            </div>
            <div className="px-6 py-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-sm text-gray-400">AI Models</p>
              <p className="text-2xl font-semibold text-blue-400">2</p>
            </div>
          </div>
        </div>

        {/* Flow Chart - Centered Layout */}
        <div className="w-full flex justify-center">
          <div className="py-8">
            <div className="flex items-center gap-4">
              {/* User Section */}
              <div className="flex flex-col items-center min-w-[140px]">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-2xl font-semibold">User</p>
                </div>
                <div className="flex items-center mt-3">
                  <p className="text-sm text-gray-400">Retrieve onchain data</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="h-0.5 w-20 bg-blue-500/40"></div>
                <p className="text-sm text-gray-400 mt-2">2h interview</p>
              </div>

              {/* AI Framework Section */}
              <div className="flex flex-col items-center min-w-[180px]">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-sm text-gray-400 mb-1">85% AI framework</p>
                  <p className="text-lg font-medium">Analyze and generate strategies</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="h-0.5 w-20 bg-blue-500/40"></div>
                <p className="text-sm text-gray-400 mt-2">guidance</p>
              </div>

              {/* Eliza Section */}
              <div className="flex flex-col items-center min-w-[180px]">
                <div className="bg-blue-500/10 p-5 rounded-lg border border-blue-500/20">
                  <p className="text-xl font-medium mb-1">Eliza</p>
                  <p className="text-sm">Make up AI portfolio decision</p>
                </div>
                <div className="h-8 w-0.5 bg-blue-500/40 my-2"></div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-sm">Twitter message or<br />Visual LLM</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="h-0.5 w-20 bg-blue-500/40"></div>
                <p className="text-sm text-gray-400 mt-2">call</p>
              </div>

              {/* Orbitlen Section */}
              <div className="flex flex-col items-center min-w-[320px]">
                <div className="bg-blue-500/20 p-8 rounded-xl border border-blue-400/30 shadow-lg shadow-blue-500/10 w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                    <div>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                        Orbitlen
                      </p>
                      <p className="text-sm text-gray-400 mt-1">Contract</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* RAY Token */}
                    <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                      <p className="text-lg font-medium text-blue-300 mb-4">$RAY</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between px-2">
                          <span className="text-sm text-gray-400">Liability:</span>
                          <span className="text-sm font-medium text-blue-300 ml-8">{rayShares.liability_shares}</span>
                        </div>
                        <div className="h-px bg-blue-500/10"></div>
                        <div className="flex items-center justify-between px-2">
                          <span className="text-sm text-gray-400">Asset:</span>
                          <span className="text-sm font-medium text-blue-300 ml-8">{rayShares.asset_shares}</span>
                        </div>
                      </div>
                    </div>

                    {/* WIF Token */}
                    <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                      <p className="text-lg font-medium text-blue-300 mb-4">$WIF</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between px-2">
                          <span className="text-sm text-gray-400">Liability:</span>
                          <span className="text-sm font-medium text-blue-300 ml-8">{wifShares.liability_shares}</span>
                        </div>
                        <div className="h-px bg-blue-500/10"></div>
                        <div className="flex items-center justify-between px-2">
                          <span className="text-sm text-gray-400">Asset:</span>
                          <span className="text-sm font-medium text-blue-300 ml-8">{wifShares.asset_shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="h-0.5 w-20 bg-blue-500/40"></div>
              </div>

              {/* Paydium Section */}
              <div className="flex flex-col items-center min-w-[180px]">
                <div className="bg-blue-500/10 p-5 rounded-lg border border-blue-500/20">
                  <p className="text-xl font-medium mb-2">Paydium AMM</p>
                  <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 mb-2">
                    <p className="text-sm">Deposit/Withdraw</p>
                  </div>
                  <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <p className="text-sm">Swap in/out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home