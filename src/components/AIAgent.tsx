import { PublicKey } from '@solana/web3.js'
import { useState, useEffect } from 'react'
import { SolanaAgentKit, createSolanaTools } from 'solana-agent-kit'
// import * as dotenv from "dotenv";
// dotenv.config();

interface Message {
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

interface TransferEntities {
    amount?: string;
    to_addr?: string;
    transfer_token?: string;
}

interface BalanceEntities {
    balance_token?: string;
}


interface Entity {
    body: string;
    confidence: number;
    end: number;
    entities: Record<string, unknown>;
    id: string;
    name: string;
    role: string;
    start: number;
    suggested: boolean;
    type: string;
    value: string;
}

interface Intent {
    confidence: number;
    id: string;
    name: string;
}

interface WitAIResponse {
    entities: {
        [key: string]: Entity[];
    };
    intents: Intent[];
    text: string;
    traits: Record<string, unknown>;
}


const WitAIUrl = "https://api.wit.ai/message?v=20241224&q=";
const witAIAuth = 'Bearer ' + import.meta.env.VITE_WIT_AI_TOKEN;


const userARay = new PublicKey("4szNuBQkjUBmdsDCCyDEhHvk1Bqi7HWvF7ZokL69bTsM")

const userAWIF = new PublicKey(
    "BS5ZLt5GCiu5dfaQxna1xPSA7fzoN593JK86wgify3Zn"
);
const userBWIF = new PublicKey(
    "CM3FzZ5SXh5Q3nmaArYfXaVey7VuEwdr7rbFDGkqbbtq"
);
const WIFMint = new PublicKey(
    "6LYZ446PHTThBJtN7R3bCv6dkBdS83Zrm2cqtnekRQnV"
);
const UserB = new PublicKey(
    "FefN4V9GnLaNvgBSonxgkEsWy4Z97e8Y35jVw6SWYYzU"
);

const coinMint: PublicKey = new PublicKey("7JLuhte13cbFdzphGVkcvLDW3SiXPDrU78Qvu221svho") // Ray
const pcMint: PublicKey = new PublicKey("DceACY73GHpkFWLDn3cfy9QBUgDWH4SXRcFJ4pGUPi3A") // USDC

const AIAgent = () => {


    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hi! I\'m your DeFi investment assistant. How can I help you today?',
            timestamp: new Date()
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [agent, setAgent] = useState<SolanaAgentKit | null>(null)
    const [tools, setTools] = useState<any>(null)

    useEffect(() => {

        console.log("import.meta.env.userA", import.meta.env.VITE_USER_A);

        const initializeAgent = () => {
            const newAgent = new SolanaAgentKit(
                import.meta.env.VITE_USER_A as string,
                import.meta.env.VITE_RPC as string,
                import.meta.env.VITE_OPEN_AI_KEY as string
            )
            const newTools = createSolanaTools(newAgent)

            setAgent(newAgent)
            setTools(newTools)
        }

        initializeAgent()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || !agent || !tools) return

        const userMessage: Message = {
            role: 'user',
            content: input,
            timestamp: new Date()
        }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            let assistantMessage: Message = {
                role: 'assistant',
                timestamp: new Date(),
                content: ""
            }

            // wit AI parse
            let witAIRes = await fetch(WitAIUrl + input.trim(), { headers: { Authorization: witAIAuth } })
            const witAIData = await witAIRes.json();
            console.log("witAIData:", witAIData);


            const intentName = witAIData.intents[0].name;

            if (intentName === "transfer") {
                const result: TransferEntities = {};
                if (witAIData.entities) {
                    for (const [key, values] of Object.entries(witAIData.entities)) {
                        const entityName = key.split(":")[0] as keyof TransferEntities;
                        const entityValues = values as Entity[];
                        if (entityValues.length > 0) {
                            result[entityName] = entityValues[0].value;
                        }
                    }
                }
                let agentRes;
                if (result.to_addr === "lantianlaoli" && result.transfer_token?.toLowerCase() === "wif") {
                    agentRes = await agent.transfer(UserB, Number(result.amount), WIFMint);
                    console.log("trade:agentRes", agentRes);
                    let solscanlink = `https://solscan.io/tx/${agentRes}?cluster=devnet`;
                    assistantMessage.content = "trade result: " + solscanlink || 'I apologize, but I couldn\'t process that request.'
                }


            } else if (intentName === "balance") {
                const result: BalanceEntities = {};
                if (witAIData.entities) {
                    for (const [key, values] of Object.entries(witAIData.entities)) {
                        const entityName = key.split(":")[0] as keyof BalanceEntities;
                        const entityValues = values as Entity[];
                        if (entityValues.length > 0) {
                            result[entityName] = entityValues[0].value;
                        }
                    }
                }
                let agentRes;
                if (result.balance_token?.toLowerCase() === "ray") {
                    agentRes = await agent.getBalance(userARay);
                } else if (result.balance_token?.toLowerCase() === "wif") {
                    agentRes = await agent.getBalance(userAWIF);
                }
                console.log("balance:agentRes", agentRes);
                assistantMessage.content = "balance result: " + agentRes || 'I apologize, but I couldn\'t process that request.'
            } else {
                assistantMessage = {
                    role: 'assistant',
                    content: "unknow intent",
                    timestamp: new Date()
                }
            }
            setMessages(prev => [...prev, assistantMessage])

        } catch (error) {
            console.error('Error:', error)
            const errorMessage: Message = {
                role: 'assistant',
                content: 'I apologize, but I encountered an error. Please try again.',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="h-[calc(100vh-64px)] bg-gray-900 flex flex-col">
            {/* Header */}
            <div className="border-b border-gray-800 p-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-xl font-bold text-blue-500">Orbitlen AI Assistant</h1>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4" style={{ height: 'calc(100% - 130px)' }}>
                <div className="max-w-4xl mx-auto space-y-6">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-4 ${message.role === 'user'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-200'
                                    }`}
                            >
                                {message.role === 'assistant' && (
                                    <div className="flex items-center mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                                        <span className="text-sm font-medium text-blue-400">AI Assistant</span>
                                    </div>
                                )}
                                <p className="text-sm">{message.content}</p>
                                <span className="text-xs opacity-50 mt-2 block">
                                    {message.timestamp.toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-800 rounded-lg p-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-800 p-4 bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="flex space-x-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about DeFi investment strategies..."
                            className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className={`bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center
                ${(isLoading || !input.trim()) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        >
                            <span>Send</span>
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AIAgent 