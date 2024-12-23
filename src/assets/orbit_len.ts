/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/orbit_len.json`.
 */
export type OrbitLen = {
    "address": "QoB7dVkkZr3oLb95DMpSptvUF8mTygDHNjFQh5y5RAb",
    "metadata": {
        "name": "orbitLen",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "initialVault",
            "discriminator": [
                242,
                75,
                95,
                64,
                11,
                121,
                212,
                202
            ],
            "accounts": [
                {
                    "name": "admin",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "bankMint"
                },
                {
                    "name": "liquidityVaultAuthority",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104
                                ]
                            },
                            {
                                "kind": "arg",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "liquidityVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "arg",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "bank",
                    "type": "pubkey"
                }
            ]
        },
        {
            "name": "initializeAccount",
            "discriminator": [
                74,
                115,
                99,
                93,
                197,
                69,
                103,
                7
            ],
            "accounts": [
                {
                    "name": "orbitlenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    111,
                                    114,
                                    98,
                                    105,
                                    116,
                                    108,
                                    101,
                                    110,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "authority"
                            }
                        ]
                    }
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": []
        },
        {
            "name": "lendingAccountBorrow",
            "discriminator": [
                4,
                126,
                116,
                53,
                48,
                5,
                212,
                31
            ],
            "accounts": [
                {
                    "name": "orbitlenAccount",
                    "writable": true
                },
                {
                    "name": "signer",
                    "signer": true
                },
                {
                    "name": "bank",
                    "writable": true
                },
                {
                    "name": "destinationTokenAccount",
                    "writable": true
                },
                {
                    "name": "bankLiquidityVaultAuthority",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "bankLiquidityVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "tokenProgram"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "lendingAccountDeposit",
            "discriminator": [
                171,
                94,
                235,
                103,
                82,
                64,
                212,
                140
            ],
            "accounts": [
                {
                    "name": "orbitlenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    111,
                                    114,
                                    98,
                                    105,
                                    116,
                                    108,
                                    101,
                                    110,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "signer"
                            }
                        ]
                    }
                },
                {
                    "name": "signer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "bank",
                    "writable": true
                },
                {
                    "name": "signerTokenAccount",
                    "writable": true
                },
                {
                    "name": "bankLiquidityVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "lendingAccountLiquidate",
            "discriminator": [
                214,
                169,
                151,
                213,
                251,
                167,
                86,
                219
            ],
            "accounts": [
                {
                    "name": "assetBank",
                    "writable": true
                },
                {
                    "name": "liabBank",
                    "writable": true
                },
                {
                    "name": "liquidatorOrbitlenAccount",
                    "writable": true
                },
                {
                    "name": "signer",
                    "signer": true
                },
                {
                    "name": "liquidateeOrbitlenAccount",
                    "writable": true
                }
            ],
            "args": [
                {
                    "name": "assetAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "lendingPoolAddBank",
            "discriminator": [
                215,
                68,
                72,
                78,
                208,
                218,
                103,
                182
            ],
            "accounts": [
                {
                    "name": "admin",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "bankMint"
                },
                {
                    "name": "bank",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    98,
                                    97,
                                    110,
                                    107
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "bankMint"
                            }
                        ]
                    }
                },
                {
                    "name": "liquidityVaultAuthority",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "liquidityVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "bank"
                            }
                        ]
                    }
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "bankConfig",
                    "type": {
                        "defined": {
                            "name": "bankConfigCompact"
                        }
                    }
                }
            ]
        },
        {
            "name": "raydiumDeposit",
            "discriminator": [
                141,
                156,
                209,
                92,
                8,
                26,
                30,
                79
            ],
            "accounts": [
                {
                    "name": "ammProgram"
                },
                {
                    "name": "amm",
                    "writable": true
                },
                {
                    "name": "ammAuthority"
                },
                {
                    "name": "ammOpenOrders"
                },
                {
                    "name": "ammTargetOrders",
                    "writable": true
                },
                {
                    "name": "ammLpMint",
                    "writable": true
                },
                {
                    "name": "ammCoinVault",
                    "writable": true
                },
                {
                    "name": "ammPcVault",
                    "writable": true
                },
                {
                    "name": "market"
                },
                {
                    "name": "marketEventQueue"
                },
                {
                    "name": "userTokenCoin",
                    "writable": true
                },
                {
                    "name": "userTokenPc",
                    "writable": true
                },
                {
                    "name": "userTokenLp",
                    "writable": true
                },
                {
                    "name": "orbitlenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    111,
                                    114,
                                    98,
                                    105,
                                    116,
                                    108,
                                    101,
                                    110,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "userOwner"
                            }
                        ]
                    }
                },
                {
                    "name": "coinMint",
                    "writable": true
                },
                {
                    "name": "coinBank",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    98,
                                    97,
                                    110,
                                    107
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "coinMint"
                            }
                        ]
                    }
                },
                {
                    "name": "coinBankLiquidityVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "coinBank"
                            }
                        ]
                    }
                },
                {
                    "name": "coinBankLiquidityVaultAuthority",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    108,
                                    105,
                                    113,
                                    117,
                                    105,
                                    100,
                                    105,
                                    116,
                                    121,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "coinBank"
                            }
                        ]
                    }
                },
                {
                    "name": "userOwner",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                }
            ],
            "args": [
                {
                    "name": "coinAmount",
                    "type": "u64"
                },
                {
                    "name": "pcAmount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "bank",
            "discriminator": [
                142,
                49,
                166,
                242,
                50,
                66,
                97,
                188
            ]
        },
        {
            "name": "orbitlenAccount",
            "discriminator": [
                144,
                92,
                55,
                84,
                31,
                200,
                78,
                217
            ]
        }
    ],
    "events": [
        {
            "name": "lendingAccountBorrowEvent",
            "discriminator": [
                223,
                96,
                81,
                10,
                156,
                99,
                26,
                59
            ]
        },
        {
            "name": "lendingAccountDepositEvent",
            "discriminator": [
                161,
                54,
                237,
                217,
                105,
                248,
                122,
                151
            ]
        },
        {
            "name": "lendingAccountLiquidateEvent",
            "discriminator": [
                166,
                160,
                249,
                154,
                183,
                39,
                23,
                242
            ]
        },
        {
            "name": "lendingPoolBankCreateEvent",
            "discriminator": [
                236,
                220,
                201,
                63,
                239,
                126,
                136,
                249
            ]
        },
        {
            "name": "orbitlenAccountCreateEvent",
            "discriminator": [
                155,
                221,
                191,
                124,
                1,
                81,
                180,
                23
            ]
        },
        {
            "name": "raydiumDepositEvent",
            "discriminator": [
                203,
                240,
                184,
                87,
                203,
                52,
                149,
                200
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "getClockFailed",
            "msg": "Clock error"
        },
        {
            "code": 6001,
            "name": "mathError",
            "msg": "Math error on compute"
        },
        {
            "code": 6002,
            "name": "invalidTransfer",
            "msg": "Invalid transfer"
        },
        {
            "code": 6003,
            "name": "mintRequired",
            "msg": "Banks require mint account as first remaining account"
        },
        {
            "code": 6004,
            "name": "lendingAccountBalanceSlotsFull",
            "msg": "Lending account balance slots are full"
        },
        {
            "code": 6005,
            "name": "bankAccountNotFound",
            "msg": "Bank is missing"
        },
        {
            "code": 6006,
            "name": "illegalUtilizationRatio",
            "msg": "Invalid bank utilization ratio"
        },
        {
            "code": 6007,
            "name": "illegalLiquidation",
            "msg": "Illegal liquidation"
        },
        {
            "code": 6008,
            "name": "fetchPriceFailed",
            "msg": "fetch price failed"
        },
        {
            "code": 6009,
            "name": "invalidPriceFeedPk",
            "msg": "Invalid price feed pubkey"
        },
        {
            "code": 6010,
            "name": "interestRateConfigMathError",
            "msg": "Math error on interest rate config"
        },
        {
            "code": 6011,
            "name": "unsupportedTokenProgram",
            "msg": "Invalid token program"
        }
    ],
    "types": [
        {
            "name": "accountEventHeader",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "signer",
                        "type": "pubkey"
                    },
                    {
                        "name": "orbitlenAccount",
                        "type": "pubkey"
                    },
                    {
                        "name": "orbitlenAccountAuthority",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "balance",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bankPk",
                        "type": "pubkey"
                    },
                    {
                        "name": "assetShares",
                        "type": "u64"
                    },
                    {
                        "name": "liabilityShares",
                        "type": "u64"
                    },
                    {
                        "name": "lastUpdate",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "bank",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "mintDecimals",
                        "type": "u8"
                    },
                    {
                        "name": "assetShareValue",
                        "type": "u64"
                    },
                    {
                        "name": "liabilityShareValue",
                        "type": "u64"
                    },
                    {
                        "name": "liquidityVault",
                        "type": "pubkey"
                    },
                    {
                        "name": "liquidityVaultBump",
                        "type": "u8"
                    },
                    {
                        "name": "liquidityVaultAuthorityBump",
                        "type": "u8"
                    },
                    {
                        "name": "totalLiabilityShares",
                        "type": "u64"
                    },
                    {
                        "name": "totalAssetShares",
                        "type": "u64"
                    },
                    {
                        "name": "lastUpdate",
                        "type": "i64"
                    },
                    {
                        "name": "config",
                        "type": {
                            "defined": {
                                "name": "bankConfig"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "bankConfig",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "interestRateConfig",
                        "type": {
                            "defined": {
                                "name": "interestRateConfig"
                            }
                        }
                    },
                    {
                        "name": "feedDataKey",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "bankConfigCompact",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "interestRateConfig",
                        "type": {
                            "defined": {
                                "name": "interestRateConfigCompact"
                            }
                        }
                    },
                    {
                        "name": "feedDataKey",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "interestRateConfig",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "optimalUtilizationRate",
                        "type": "u16"
                    },
                    {
                        "name": "plateauInterestRate",
                        "type": "u16"
                    },
                    {
                        "name": "maxInterestRate",
                        "type": "u16"
                    }
                ]
            }
        },
        {
            "name": "interestRateConfigCompact",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "optimalUtilizationRate",
                        "type": "u16"
                    },
                    {
                        "name": "plateauInterestRate",
                        "type": "u16"
                    },
                    {
                        "name": "maxInterestRate",
                        "type": "u16"
                    }
                ]
            }
        },
        {
            "name": "lendingAccount",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "balances",
                        "type": {
                            "array": [
                                {
                                    "defined": {
                                        "name": "balance"
                                    }
                                },
                                6
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "lendingAccountBorrowEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "header",
                        "type": {
                            "defined": {
                                "name": "accountEventHeader"
                            }
                        }
                    },
                    {
                        "name": "bank",
                        "type": "pubkey"
                    },
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "lendingAccountDepositEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "header",
                        "type": {
                            "defined": {
                                "name": "accountEventHeader"
                            }
                        }
                    },
                    {
                        "name": "bank",
                        "type": "pubkey"
                    },
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "lendingAccountLiquidateEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "header",
                        "type": {
                            "defined": {
                                "name": "accountEventHeader"
                            }
                        }
                    },
                    {
                        "name": "liquidateeOrbitlenAccount",
                        "type": "pubkey"
                    },
                    {
                        "name": "liquidateeOrbitlenAccountAuthority",
                        "type": "pubkey"
                    },
                    {
                        "name": "assetBank",
                        "type": "pubkey"
                    },
                    {
                        "name": "assetMint",
                        "type": "pubkey"
                    },
                    {
                        "name": "liabilityBank",
                        "type": "pubkey"
                    },
                    {
                        "name": "liabilityMint",
                        "type": "pubkey"
                    },
                    {
                        "name": "preBalances",
                        "type": {
                            "defined": {
                                "name": "liquidationBalances"
                            }
                        }
                    },
                    {
                        "name": "postBalances",
                        "type": {
                            "defined": {
                                "name": "liquidationBalances"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "lendingPoolBankCreateEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "signer",
                        "type": "pubkey"
                    },
                    {
                        "name": "bank",
                        "type": "pubkey"
                    },
                    {
                        "name": "mint",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "liquidationBalances",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "liquidateeAssetBalance",
                        "type": "f64"
                    },
                    {
                        "name": "liquidateeLiabilityBalance",
                        "type": "f64"
                    },
                    {
                        "name": "liquidatorAssetBalance",
                        "type": "f64"
                    },
                    {
                        "name": "liquidatorLiabilityBalance",
                        "type": "f64"
                    }
                ]
            }
        },
        {
            "name": "orbitlenAccount",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": "pubkey"
                    },
                    {
                        "name": "lendingAccount",
                        "type": {
                            "defined": {
                                "name": "lendingAccount"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "orbitlenAccountCreateEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "header",
                        "type": {
                            "defined": {
                                "name": "accountEventHeader"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "raydiumDepositEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "header",
                        "type": {
                            "defined": {
                                "name": "raydiumEventHeader"
                            }
                        }
                    },
                    {
                        "name": "coinMint",
                        "type": "pubkey"
                    },
                    {
                        "name": "coinAmount",
                        "type": "u64"
                    },
                    {
                        "name": "pcAmount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "raydiumEventHeader",
            "docs": [
                "* Raydium events"
            ],
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "amm",
                        "type": "pubkey"
                    },
                    {
                        "name": "market",
                        "type": "pubkey"
                    },
                    {
                        "name": "signer",
                        "type": "pubkey"
                    },
                    {
                        "name": "orbitlenAccount",
                        "type": "pubkey"
                    },
                    {
                        "name": "orbitlenAccountAuthority",
                        "type": "pubkey"
                    }
                ]
            }
        }
    ]
};
