export = Ninsight;
declare class Ninsight {
    constructor(config: any);
    ninsightURL: any;
    axiosOptions: {
        headers: {
            authorization: string;
            timeout: number;
        };
    };
    /**
     * @api Ninsight.utxo()  utxo()
     * @apiName Ninsight Utxo
     * @apiGroup Ninsight
     * @apiDescription Return list of uxto for address.
     *
     * @apiExample Example usage:
     *    (async () => {
     *   try {
     *     let utxo = await bchjs.Ninsight.utxo('bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c');
     *     console.log(utxo);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     *  // [
     *  //   {
     *  //     "txid": "d31dc2cf66fe4d3d3ae18e1065def58a64920746b1702b52f060e5edeea9883b",
     *  //     "vout": 1,
     *  //     "amount": 0.03608203,
     *  //     "satoshis": 3608203,
     *  //     "height": 585570,
     *  //     "confirmations": 10392
     *  //   },
     *  //   {
     *  //     "txid": "41e9a118765ecf7a1ba4487c0863e23dba343cc5880381a72f0365ac2546c5fa",
     *  //     "vout": 0,
     *  //     "amount": 0.03608203,
     *  //     "satoshis": 3608203,
     *  //     "height": 577125,
     *  //     "confirmations": 18837
     *  //   }
     *  // ]
     *
     */
    utxo(address: any): Promise<any>;
    /**
     * @api Ninsight.unconfirmed()  unconfirmed()
     * @apiName Ninsight Unconfirmed Utxo
     * @apiGroup Ninsight
     * @apiDescription Returns a list of unconfirmed UTXOs for an address.
     *
     * @apiExample Example usage:
     *    (async () => {
     *   try {
     *     let utxo = await bchjs.Ninsight.unconfirmed('bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c');
     *     console.log(utxo);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     *  // [
     *  //   {
     *  //     "txid": "d31dc2cf66fe4d3d3ae18e1065def58a64920746b1702b52f060e5edeea9883b",
     *  //     "vout": 1,
     *  //     "amount": 0.03608203,
     *  //     "satoshis": 3608203,
     *  //     "confirmations": 0
     *  //     "ts": 1559670801
     *  //   },
     *  //   {
     *  //     "txid": "41e9a118765ecf7a1ba4487c0863e23dba343cc5880381a72f0365ac2546c5fa",
     *  //     "vout": 0,
     *  //     "amount": 0.03608203,
     *  //     "satoshis": 3608203,
     *  //     "confirmations": 0
     *  //     "ts": 1559670902
     *  //   }
     *  // ]
     *
     */
    unconfirmed(address: any): Promise<any>;
    /**
     * @api Ninsight.transactions()  transactions()
     * @apiName Ninsight TX History
     * @apiGroup Ninsight
     * @apiDescription Return transactions history for address.
     *
     * @apiExample Example usage:
     *    (async () => {
     *   try {
     *     let txs = await bchjs.Ninsight.transactions('bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c');
     *     console.log(txs);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     *  // [
     *  //   {
     *  //     "pagesTotal": 1,
     *  //     "txs": [
     *  //       {
     *  //         "txid": "ec7bc8349386e3e1939bbdc4f8092fdbdd6a380734e68486b558cd594c451d5b",
     *  //         "version": 2,
     *  //         "locktime": 0,
     *  //         "vin": [
     *  //           {
     *  //             "txid": "4f1fc57c33659628938db740449bf92fb75799e1d5750a4aeef80eb52d6df1e0",
     *  //             "vout": 0,
     *  //             "sequence": 4294967295,
     *  //             "n": 0,
     *  //             ...
     *  //           }
     *  //           ...
     *  //         ]
     *  //         ...
     *  //       }
     *  //     ],
     *  //     "legacyAddress": "1LpbYkEM5cryfhs58tH8c93p4SGzit7UrP",
     *  //     "cashAddress": "bitcoincash:qrvk436u4r0ew2wj0rd9pnxhx4w90p2yfc29ta0d2n",
     *  //     "currentPage": 0
     *  //   }
     *  // ]
     *  //
     *
     */
    transactions(address: any): Promise<any>;
    /**
     * @api Ninsight.txDetails()  txDetails()
     * @apiName Ninsight TX Details
     * @apiGroup Ninsight
     * @apiDescription Return transactions details for address(es).
     *
     * @apiExample Example usage:
     *    (async () => {
     *   try {
     *     let result = await bchjs.Ninsight.txDetails('fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33');
     *     console.log(result);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     *  // [
     *  //   {
     *  //     "txid": "fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33",
     *  //     "version": 1,
     *  //     "locktime": 0,
     *  //     "vin": [
     *  //       {
     *  //         "sequence": 4294967295,
     *  //         "n": 0
     *  //       }
     *  //     ],
     *  //     "vout": [
     *  //       ...
     *  //     ],
     *  //     "blockhash": "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09",
     *  //     "blockheight": 1000,
     *  //     "confirmations": 659909,
     *  //     "time": 1232346882,
     *  //     "blocktime": 1232346882,
     *  //     "firstSeenTime": null,
     *  //     "valueOut": 50,
     *  //     "size": 135
     *  //   }
     *  // ]
     *
     */
    txDetails(txid: any): Promise<any>;
}
