# underlying-token-contracts

Contracts are retrieved from:
[Etherscan Token Tracker](https://etherscan.io/tokens)

## Arguments
Each token defines an `args.json` file which represents the constructor initialization arguments. Example for Tron:

    {
      "types": ["address"],
      "argument_names": ["_addressFounder"],
      "values": ["0x00e25bddcac7fcb56932c62fc8d662f85d126434"]
    }

### TODO
Allow custom addresses to be specified externally.
