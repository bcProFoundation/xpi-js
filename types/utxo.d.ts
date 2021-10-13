export = UTXO;
declare class UTXO {
    constructor(config: any);
    electrumx: import("./electrumx");
    slp: import("./slp/slp");
    /**
     * @api Utxo.get() get()
     * @apiName get
     * @apiGroup UTXO
     * @apiDescription Get UTXOs for an address
     *
     * Given an address, this function will return an object with thre following
     * properties:
     * - address: "" - the address these UTXOs are associated with
     * - bchUtxos: [] - UTXOs confirmed to be spendable as normal BCH
     * - nullUtxo: [] - UTXOs that did not pass SLP validation. Should be ignored and
     *   not spent, to be safe.
     * - slpUtxos: {} - UTXOs confirmed to be colored as valid SLP tokens
     *   - type1: {}
     *     - tokens: [] - SLP token Type 1 tokens.
     *     - mintBatons: [] - SLP token Type 1 mint batons.
     *   - nft: {}
     *     - tokens: [] - NFT tokens
     *     - groupTokens: [] - NFT Group tokens, used to create NFT tokens.
     *     - groupMintBatons: [] - Minting baton to create more NFT Group tokens.
     *
     * Note: You can pass in an optional second Boolean argument. The default
     * `false` will use the normal waterfall validation method. Set to `true`,
     * SLP UTXOs will be validated with the whitelist filtered SLPDB. This will
     * result is many more UTXOs in the `nullUtxos` array.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     let utxos = await bchjs.Utxo.get('simpleledger:qrm0c67wwqh0w7wjxua2gdt2xggnm90xwsr5k22euj');
     *     console.log(utxos);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // returns
     * [
     *  {
     *   "address": "bitcoincash:qrm0c67wwqh0w7wjxua2gdt2xggnm90xws00a3lezv",
     *   "bchUtxos": [
     *    {
     *      "height": 674513,
     *      "tx_hash": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     *      "tx_pos": 3,
     *      "value": 38134,
     *      "txid": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     *      "vout": 3,
     *      "isValid": false
     *    }
     *   ],
     *   "nullUtxos": [],
     *   "slpUtxos": {
     *    "type1": {
     *      "mintBatons": [
     *        {
     *          "height": 674512,
     *          "tx_hash": "acbb0d3ceef55aa3e5fafc19335ae4bf2f8edba3c0567547dfd402391db32230",
     *          "tx_pos": 2,
     *          "value": 546,
     *          "txid": "acbb0d3ceef55aa3e5fafc19335ae4bf2f8edba3c0567547dfd402391db32230",
     *          "vout": 2,
     *          "utxoType": "minting-baton",
     *          "tokenId": "acbb0d3ceef55aa3e5fafc19335ae4bf2f8edba3c0567547dfd402391db32230",
     *          "tokenTicker": "SLPTEST",
     *          "tokenName": "SLP Test Token",
     *          "tokenDocumentUrl": "https://FullStack.cash",
     *          "tokenDocumentHash": "",
     *          "decimals": 8,
     *          "tokenType": 1,
     *          "isValid": true
     *        }
     *      ],
     *      "tokens": [
     *        {
     *          "height": 674512,
     *          "tx_hash": "acbb0d3ceef55aa3e5fafc19335ae4bf2f8edba3c0567547dfd402391db32230",
     *          "tx_pos": 1,
     *          "value": 546,
     *          "txid": "acbb0d3ceef55aa3e5fafc19335ae4bf2f8edba3c0567547dfd402391db32230",
     *          "vout": 1,
     *          "utxoType": "token",
     *          "tokenQty": "100",
     *          "tokenId": "acbb0d3ceef55aa3e5fafc19335ae4bf2f8edba3c0567547dfd402391db32230",
     *          "tokenTicker": "SLPTEST",
     *          "tokenName": "SLP Test Token",
     *          "tokenDocumentUrl": "https://FullStack.cash",
     *          "tokenDocumentHash": "",
     *          "decimals": 8,
     *          "tokenType": 1,
     *          "isValid": true
     *        }
     *      ]
     *   },
     *   "nft": {
     *      "groupMintBatons": [
     *        {
     *          "height": 674513,
     *          "tx_hash": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     *          "tx_pos": 2,
     *          "value": 546,
     *          "txid": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     *          "vout": 2,
     *          "utxoType": "minting-baton",
     *          "transactionType": "mint",
     *          "tokenId": "a9a2458a0f9f0761d5b8725c256f2e7fa35b9de4dec6f47b46e9f20d92d0e395",
     *          "tokenType": 129,
     *          "tokenTicker": "NFTGT",
     *          "tokenName": "NFT Test Group Token",
     *          "tokenDocumentUrl": "https://FullStack.cash",
     *          "tokenDocumentHash": "",
     *          "decimals": 0,
     *          "mintBatonVout": 2,
     *          "isValid": true
     *        }
     *      ],
     *      "groupTokens": [
     *        {
     *          "height": 674513,
     *          "tx_hash": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     *          "tx_pos": 1,
     *          "value": 546,
     *          "txid": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     *          "vout": 1,
     *          "utxoType": "token",
     *          "tokenQty": "10",
     *          "transactionType": "mint",
     *          "tokenId": "a9a2458a0f9f0761d5b8725c256f2e7fa35b9de4dec6f47b46e9f20d92d0e395",
     *          "tokenType": 129,
     *          "tokenTicker": "NFTGT",
     *          "tokenName": "NFT Test Group Token",
     *          "tokenDocumentUrl": "https://FullStack.cash",
     *          "tokenDocumentHash": "",
     *          "decimals": 0,
     *          "mintBatonVout": 2,
     *          "isValid": true
     *        }
     *      ],
     *      "tokens": [
     *        {
     *          "height": 674512,
     *          "tx_hash": "eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b",
     *          "tx_pos": 1,
     *          "value": 546,
     *          "txid": "eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b",
     *          "vout": 1,
     *          "utxoType": "token",
     *          "tokenQty": "1",
     *          "tokenId": "eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b",
     *          "tokenTicker": "NFT004",
     *          "tokenName": "NFT Child",
     *          "tokenDocumentUrl": "https://FullStack.cash",
     *          "tokenDocumentHash": "",
     *          "decimals": 0,
     *          "tokenType": 65,
     *          "isValid": true
     *        }
     *      ]
     *    }
     *   }
     *  }
     * ]
     *
     *
     */
    get(address: any, useWhitelist?: boolean): Promise<{
        address: any;
    }[]>;
    /**
     * @api Utxo.findBiggestUtxo() findBiggestUtxo()
     * @apiName findBiggestUtxo
     * @apiGroup UTXO
     * @apiDescription Get the biggest UTXO in an array.
     *
     * Given an array of BCH UTXOs, this method will return the biggest UTXO.
     * This is often the simplest way to pick a UTXO for generating a transaction.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const utxos = await bchjs.Utxo.get('bitcoincash:qq54fgjn3hz0357n8a6guy4demw9xfkjk5jcj0xr0z');
     *     const utxo = bchjs.Utxo.findBiggestUtxo(utxos[0].bchUtxos)
     *     console.log(utxo);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // returns
     *  {
     *   "height": 655431,
     *   "tx_hash": "7a091716f8137e94f87e7760648cd34a17e32754ef95f7c7bda38a635c9b2b1b",
     *   "tx_pos": 0,
     *   "value": 800,
     *   "txid": "7a091716f8137e94f87e7760648cd34a17e32754ef95f7c7bda38a635c9b2b1b",
     *   "vout": 0,
     *   "isValid": false,
     *   "satoshis": 800
     *  }
     */
    findBiggestUtxo(utxos: any): any;
}
