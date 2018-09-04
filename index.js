#!/usr/bin/env node

'use strict'

/* jshint asi: true */
/* jshint node: true */
/* jshint esversion: 6 */

const fs     = require('fs')
const args   = require('command-line-args')
const wallet = require('ethereumjs-wallet')

const optionsDefinitions =
[
    { name: 'key',      alias: 'k', type: String },
    { name: 'password', alias: 'p', type: String }
]

const options = args(optionsDefinitions)

if (options && options.key)
{
    if (options.password)
    {
        const pk = new Buffer.from(options.key, 'hex') // replace by correct private key
        const account = wallet.fromPrivateKey(pk)
        const json = JSON.stringify(account.toV3(options.password))

        // Writes to a file:
        const address = account.getAddress().toString('hex')
        const file = `UTC--${new Date().toISOString().replace(/[:]/g, '-')}--${address}`

        fs.writeFileSync(file, json)

        console.log(`Saved to "${file}"`)
    }
    else
    {
        console.error('Missing password')

        process.exit(1)
    }
}
else
{
    console.error('Missing key')

    process.exit(1)
}
