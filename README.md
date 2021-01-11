I tested this repo using version `1.3.1` of `web3`

The code was sourced from the original issue [#3680](https://github.com/ChainSafe/web3.js/issues/3680)

## Running this repo

1. `npm i`
2. `INFURA_API_KEY=your-key node index.js`


## Expected Output

```javascript
[
  {
    address: '0x0825f16598AcB518851f8959b8267EF296c57f81',
    blockHash: '0xc6ccd170d9dd5d86906b0f7dd9c5d34cadc19bc8d9c54eba5c4b9a5f5cfe72bf',
    blockNumber: 19567645,
    logIndex: 7,
    removed: false,
    transactionHash: '0xae646874553121365f59bb08864a61b1a883f0a0d25d7ee100a3786e2a3a37b5',
    transactionIndex: 2,
    transactionLogIndex: '0x0',
    type: 'mined',
    id: 'log_dc96d986',
    returnValues: Result {
      '0': '28',
      '1': '/ipfs/QmTJXDEWMPwNq1qhXB9EKCT6L7oqcnZm5dbyqFZiPCQF2V/linguo-meta-evidence.json',
      _metaEvidenceID: '28',
      _evidence: '/ipfs/QmTJXDEWMPwNq1qhXB9EKCT6L7oqcnZm5dbyqFZiPCQF2V/linguo-meta-evidence.json'
    },
    event: 'MetaEvidence',
    signature: '0x61606860eb6c87306811e2695215385101daab53bd6ab4e9f9049aead9363c7d',
    raw: {
      data: '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004e2f697066732f516d544a584445574d50774e71317168584239454b4354364c376f71636e5a6d3564627971465a695043514632562f6c696e67756f2d6d6574612d65766964656e63652e6a736f6e',
      topics: [Array]
    }
  }
]
```