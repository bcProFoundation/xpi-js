export = RawTransactions;
declare class RawTransactions {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    axios: typeof import("axios");
    /**
     * @api RawTransactions.decodeRawTransaction() decodeRawTransaction()
     * @apiName decodeRawTransaction
     * @apiGroup RawTransactions
     * @apiDescription
     * Return an Array of JSON objects representing the serialized, hex-encoded transactions.
     *
     * @apiExample Example usage:
     * (async () => {
     * try {
     * let decodeRawTransaction = await bchjs.RawTransactions.decodeRawTransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000');
     * console.log(decodeRawTransaction);
     * } catch(error) {
     * console.error(error)
     * }
     * })()
     *
     * // { txid: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
     * //   hash:
     * //    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
     * //   size: 191,
     * //   version: 1,
     * //   locktime: 0,
     * //   vin:
     * //    [ { txid:
     * //         '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
     * //        vout: 0,
     * //        scriptSig: [Object],
     * //        sequence: 4294967295 } ],
     * //   vout: [ { value: 12.5, n: 0, scriptPubKey: [Object] } ] }
     *
     * (async () => {
     *  try {
     *    let decodeRawTransaction = await bchjs.RawTransactions.decodeRawTransaction([
     *      '01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000',
     *      '01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000'
     *    ]);
     *    console.log(decodeRawTransaction);
     *  } catch(error) {
     *   console.error(error)
     *  }
     * })()
     *
     * // [ { txid:
     * //    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
     * //   hash:
     * //    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
     * //   size: 191,
     * //   version: 1,
     * //   locktime: 0,
     * //   vin: [ [Object] ],
     * //   vout: [ [Object] ] },
     * // { txid:
     * //    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
     * //   hash:
     * //    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
     * //   size: 191,
     * //   version: 1,
     * //   locktime: 0,
     * //   vin: [ [Object] ],
     * //   vout: [ [Object] ] } ]
     */
    decodeRawTransaction(hex: any): Promise<any>;
    /**
     * @api RawTransactions.decodeScript() decodeScript()
     * @apiName decodeScript
     * @apiGroup RawTransactions
     * @apiDescription
     * Decode hex-encoded scripts.
     *
     * @apiExample Example usage:
     * (async () => {
     * try {
     *  let decodeScript = await bchjs.RawTransactions.decodeScript('4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16');
     *  console.log(decodeScript);
     * } catch(error) {
     *  console.error(error)
     * }
     * })()
     *
     * // { asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16', type: 'nonstandard', p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }
     *
     *
     * (async () => {
     * try {
     *  let decodeScript = await bchjs.RawTransactions.decodeScript(['4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16']);
     *  console.log(decodeScript);
     * } catch(error) {
     * console.error(error)
     * }
     * })()
     *
     * // [{ asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16',
     * // type: 'nonstandard',
     * // p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }]
     */
    decodeScript(script: any): Promise<any>;
    /**
     * @api RawTransactions.getRawTransaction() getRawTransaction()
     * @apiName getRawTransaction
     * @apiGroup RawTransactions
     * @apiDescription
     * Return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.
     *
     * @apiExample Example usage:
     * (async () => {
     * try {
     *  let getRawTransaction = await bchjs.RawTransactions.getRawTransaction("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
     *  console.log(getRawTransaction);
     * } catch(error) {
     * console.error(error)
     * }
     * })()
     *
     * //  01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000
     *
     * (async () => {
     * try {
     *  let getRawTransaction = await bchjs.RawTransactions.getRawTransaction([
     *    "0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098",
     *    "b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f"
     *  ], true);
     *  console.log(getRawTransaction);
     * } catch(error) {
     * console.error(error)
     * }
     * })()
     *
     * // [ { hex:
     * //  '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000',
     * //   txid:
     * //    '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
     * //   hash:
     * //    '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
     * //   size: 134,
     * //   version: 1,
     * //   locktime: 0,
     * //   vin: [ [Object] ],
     * //   vout: [ [Object] ],
     * //   blockhash:
     * //    '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
     * //   confirmations: 581882,
     * //   time: 1231469665,
     * //   blocktime: 1231469665 },
     * // { hex:
     * //    '01000000010f3cb469bc82f931ee77d80b3dd495d02f9ed7cdc455cea3e7baa4bdeea6a78d000000006a47304402205ce3e1dfe4b5207818ce27035bc7cc03a5631f806d351535b32ce77c8d136aed02204e66e1fa4c2e12feab0d41a5593aff9629cdbc6ccb6126bc3d1a20404be7760c412103d44946d17e00179bbfc3b723aedc1831d8604e6a04bbd91170f1d894d04657bbffffffff02e6ec8500000000001976a914b5befddad83d9180fd4082c5528cf5a779b0fa6688acdf220000000000001976a9142c21a1be4239eeed678a456627a08d5f813d5c9288ac00000000',
     * //   txid:
     * //    'b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f',
     * //   hash:
     * //    'b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f',
     * //   size: 225,
     * //   version: 1,
     * //   locktime: 0,
     * //   vin: [ [Object] ],
     * //   vout: [ [Object], [Object] ],
     * //   blockhash:
     * //    '000000000000000003a09a7d68a0d62fd0ab51c368372e46bac84277e2df47e2',
     * //   confirmations: 16151,
     * //   time: 1547752564,
     * //   blocktime: 1547752564 } ]
     */
    getRawTransaction(txid: any, verbose?: boolean, usrObj?: any): Promise<any>;
    _getInputAddrs(txDetails: any): Promise<{
        vin: number;
        address: any;
        value: any;
    }[]>;
    /**
     * @api RawTransactions.getTxData() getTxData()
     * @apiName getTxData
     * @apiGroup RawTransactions
     * @apiDescription
     * Returns an object of transaction data, including addresses for input UTXOs.
     *
     * This function is equivalent to running `getRawTransaction (txid, true)`,
     * execept the `vin` array will be populated with an `address` property that
     * contains the `bitcoincash:` address of the sender for each input.
     *
     * This function will only work with a single txid. It does not yet support an
     * array of TXIDs.
     *
     * @apiExample Example usage:
     * (async () => {
     * try {
     *  let txData = await bchjs.RawTransactions.getTxData("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
     *  console.log(txData);
     * } catch(error) {
     * console.error(error)
     * }
     * })()
     */
    getTxData(txid: any): Promise<any>;
    /**
     * @api RawTransactions.sendRawTransaction() sendRawTransaction()
     * @apiName sendRawTransaction
     * @apiGroup RawTransactions
     * @apiDescription
     * Submits raw transaction (serialized, hex-encoded) to local node and network. Also see createrawtransaction and signrawtransaction calls.
     *
     * For bulk uploads, transactions must use different UTXOs.
     *
     * @apiExample Example usage:
     * // single tx
     * (async () => {
     * try {
     *  let sendRawTransaction = await bchjs.RawTransactions.sendRawTransaction("01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000");
     *  console.log(sendRawTransaction);
     * } catch(error) {
     *  console.error(error)
     * }
     * })()
     * // 0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098
     *
     * // single tx as array
     * (async () => {
     * try {
     *  let sendRawTransaction = await bchjs.RawTransactions.sendRawTransaction(["01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000"]);
     *  console.log(sendRawTransaction);
     * } catch(error) {
     *  console.error(error)
     * }
     * })()
     * // ['0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098']
     */
    sendRawTransaction(hex: any, allowhighfees?: boolean): Promise<any>;
}
