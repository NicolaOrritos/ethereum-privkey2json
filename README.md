# Ethereum private-key to JSON file converter

Generates a JSON keystore file from a private key.

## Install

`$ npm install -g ethereum-privkey2json`


## Usage

`$ ethereum-privkey2json --key a1b2c3d4e5f6g7h8i9l0m --password mysuperstrongpassword`
`Saved to "UTC--2018-09-04T09-08-19.649Z--123456789wxyz000000000"`

Result:

`$ cat UTC--2018-09-04T09-08-19.649Z--123456789wxyz000000000`
`{"version":3,"id":"...","address":"...","crypto":{"ciphertext":"...","cipherparams":{"iv":"..."},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"...","n":26214,"r":8,"p":1},"mac":"..."}}`
