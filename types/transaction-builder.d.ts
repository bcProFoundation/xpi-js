export = TransactionBuilder;
declare class TransactionBuilder {
    static setAddress(address: any): void;
    constructor(network?: string);
    transaction: any;
    DEFAULT_SEQUENCE: number;
    hashTypes: {
        SIGHASH_ALL: number;
        SIGHASH_NONE: number;
        SIGHASH_SINGLE: number;
        SIGHASH_ANYONECANPAY: number;
        SIGHASH_BITCOINCASH_BIP143: number;
        ADVANCED_TRANSACTION_MARKER: number;
        ADVANCED_TRANSACTION_FLAG: number;
    };
    signatureAlgorithms: {
        ECDSA: any;
        SCHNORR: any;
    };
    bip66: any;
    bip68: any;
    p2shInput: boolean;
    /**
     * @api Transaction-Builder.addInput() addInput()
     * @apiName AddInput
     * @apiGroup TransactionBuilder
     * @apiDescription Add input to transaction.
     *
     * @apiExample Example usage:
     * // txid of vout
     * let txid = 'f7890915febe580920df2681d2bac0909ae89bd0cc1d3ed763e5eeba7f337f0e';
     * // add input with txid and index of vout
     * transactionBuilder.addInput(txid, 0);
     */
    addInput(txHash: any, vout: any, sequence?: number, prevOutScript: any): void;
    addInputScript(vout: any, script: any): void;
    tx: any;
    addInputScripts(scripts: any): void;
    /**
     * @api Transaction-Builder.addOutput() addOutput()
     * @apiName AddOutput
     * @apiGroup TransactionBuilder
     * @apiDescription Add output to transaction.
     *
     * @apiExample Example usage:
     *  let originalAmount = 100000;
     *  let byteCount = bchjs.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
     *  // amount to send to receiver. It's the original amount - 1 sat/byte for tx size
     *  let sendAmount = originalAmount - byteCount;
     *  // add output w/ address and amount to send
     *  transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);
     */
    addOutput(scriptPubKey: any, amount: any): void;
    /**
     * @api Transaction-Builder.setLockTime() setLockTime()
     * @apiName SetLockTime
     * @apiGroup TransactionBuilder
     * @apiDescription Set locktime.
     *
     * @apiExample Example usage:
     *  let originalAmount = 100000;
     *  let byteCount = bchjs.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
     *  // amount to send to receiver. It's the original amount - 1 sat/byte for tx size
     *  let sendAmount = originalAmount - byteCount;
     *  // add output w/ address and amount to send
     *  transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);
     *  transactionBuilder.setLockTime(50000)
     */
    setLockTime(locktime: any): void;
    /**
     * @api Transaction-Builder.sign() sign()
     * @apiName Sign.
     * @apiGroup TransactionBuilder
     * @apiDescription Sign transaction. It creates the unlocking script needed to spend an input. Each input has its own script and thus 'sign' must be called for each input even if the keyPair is the same..
     *
     * @apiExample Example usage:
     *  let originalAmount = 100000;
     *  // node of address which is going to spend utxo
     *  let hdnode = bchjs.HDNode.fromXPriv("xprvA3eaDg64MwDr72PVGJ7CkvshNAzCDRz7rn98sYrZVAtDSWCAmNGQhEQeCLDcnmcpSkfjhHevXmu4ZL8ZcT9D4vEbG8LpiToZETrHZttw9Yw");
     *  // keypair
     *  let keyPair = bchjs.HDNode.toKeyPair(hdnode);
     *  // empty redeemScript variable
     *  let redeemScript;
     *  // sign w/ keyPair
     *  transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount, transactionBuilder.signatureAlgorithms.SCHNORR);
     */
    sign(vin: any, keyPair: any, redeemScript: any, hashType?: number, value: any, signatureAlgorithm: any): void;
    /**
     * @api Transaction-Builder.build() build()
     * @apiName Build.
     * @apiGroup TransactionBuilder
     * @apiDescription Build transaction.
     *
     * @apiExample Example usage:
     * // build tx
     * let tx = bchjs.transactionBuilder.build();
     */
    build(): any;
}
