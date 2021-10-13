export = Utils;
declare class Utils {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    slpParser: typeof import("slp-parser");
    authToken: any;
    axios: typeof import("axios");
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    whitelist: any[];
    util: import("../util");
    /**
     * @api SLP.Utils.list() list()
     * @apiName list
     * @apiGroup SLP Utils
     * @apiDescription List all tokens or list single token by id.
     *
     * @apiExample Example usage:
     *
     * // List all tokens
     *
     * (async () => {
     * try {
     * let list = await bchjs.SLP.Utils.list();
     *  console.log(list);
     * } catch (error) {
     *  console.error(error);
     * }
     * })();
     *
     * // returns
     * [ { decimals: 5,
     * timestamp: '2019-04-20 05:03',
     * versionType: 1,
     * documentUri: 'developer.bitcoin.com',
     * symbol: 'MYSTERY',
     * name: 'Mystery',
     * containsBaton: true,
     * id:
     *  '10528f22fc20422f7c1075a87ed7270c0a17bc17ea79c6e2f426c6cc14bb25f2',
     * documentHash:
     *  '1010101010101010101010101010101010101010101010101010101010101010',
     * initialTokenQty: 500,
     * blockCreated: 579041,
     * blockLastActiveSend: null,
     * blockLastActiveMint: null,
     * txnsSinceGenesis: 1,
     * validAddresses: 1,
     * totalMinted: 500,
     * totalBurned: 0,
     * circulatingSupply: 500,
     * mintingBatonStatus: 'ALIVE' },
     * { decimals: 8,
     * timestamp: '2019-04-20 04:54',
     * versionType: 1,
     * documentUri: 'developer.bitcoin.com',
     * symbol: 'ENIGMA',
     * name: 'Enigma',
     * containsBaton: true,
     * id:
     * '113c55921fe29919ff84e53a6d5af39ed9d983a1c3b3000f27125688489935fa',
     * documentHash:
     * '1010101010101010101010101010101010101010101010101010101010101010',
     * initialTokenQty: 1234,
     * blockCreated: 579040,
     * blockLastActiveSend: null,
     * blockLastActiveMint: 579040,
     * txnsSinceGenesis: 2,
     * validAddresses: 2,
     * totalMinted: 1334,
     * totalBurned: 0,
     * circulatingSupply: 1334,
     * mintingBatonStatus: 'ALIVE' }
     * ]
     *
     * // List single token
     *
     * (async () => {
     * try {
     *   let list = await bchjs.SLP.Utils.list(
     *     "b3f4f132dc3b9c8c96316346993a8d54d729715147b7b11aa6c8cd909e955313"
     *   );
     *   console.log(list);
     * } catch (error) {
     *   console.error(error);
     * }
     * })();
     *
     * // returns
     * { decimals: 8,
     * timestamp: '2019-04-20 04:54',
     * versionType: 1,
     * documentUri: 'developer.bitcoin.com',
     * symbol: 'ENIGMA',
     * name: 'Enigma',
     * containsBaton: true,
     * id:
     * '113c55921fe29919ff84e53a6d5af39ed9d983a1c3b3000f27125688489935fa',
     * documentHash:
     * '1010101010101010101010101010101010101010101010101010101010101010',
     * initialTokenQty: 1234,
     * blockCreated: 579040,
     * blockLastActiveSend: null,
     * blockLastActiveMint: 579040,
     * txnsSinceGenesis: 2,
     * validAddresses: 2,
     * totalMinted: 1334,
     * totalBurned: 0,
     * circulatingSupply: 1334,
     * mintingBatonStatus: 'ALIVE' }
     *
     * // List multiple tokens by tokenIds
     *
     *  (async () => {
     * try {
     *   let list = await bchjs.SLP.Utils.list([
     *     "fa6c74c52450fc164e17402a46645ce494a8a8e93b1383fa27460086931ef59f",
     *     "38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0"
     *   ]);
     *   console.log(list);
     * } catch (error) {
     *   console.error(error);
     * }
     * })();
     *
     * // returns
     * [ { decimals: 0,
     * timestamp: '2019-02-18 14:47',
     * versionType: 1,
     * documentUri: 'https://simpleledger.cash',
     * symbol: 'SLP',
     * name: 'Official SLP Token',
     * containsBaton: true,
     * id:
     * 'fa6c74c52450fc164e17402a46645ce494a8a8e93b1383fa27460086931ef59f',
     * documentHash: null,
     * initialTokenQty: 18446744073709552000,
     * blockCreated: 570305,
     * blockLastActiveSend: 580275,
     * blockLastActiveMint: 575914,
     * txnsSinceGenesis: 4537,
     * validAddresses: 164,
     * totalMinted: 19414628793626410000,
     * totalBurned: 18446568350267302000,
     * circulatingSupply: 968060443359109600,
     * mintingBatonStatus: 'ALIVE' },
     * { decimals: 8,
     * timestamp: '2019-02-14 03:11',
     * versionType: 1,
     * documentUri: 'psfoundation.cash',
     * symbol: 'PSF',
     * name: 'Permissionless Software Foundation',
     * containsBaton: true,
     * id:
     * '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
     * documentHash: null,
     * initialTokenQty: 19882.09163133,
     * blockCreated: 569658,
     * blockLastActiveSend: 580153,
     * blockLastActiveMint: null,
     * txnsSinceGenesis: 51,
     * validAddresses: 9,
     * totalMinted: 19882.09163133,
     * totalBurned: 0.0534241,
     * circulatingSupply: 19882.03820723,
     * mintingBatonStatus: 'ALIVE' } ]
     */
    list(id: any): Promise<any>;
    /**
     * @api SLP.Utils.balancesForAddress() balancesForAddress()
     * @apiName balancesForAddress
     * @apiGroup SLP Utils
     * @apiDescription Return all balances for an address or array of addresses.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     * let balances = await bchjs.SLP.Utils.balancesForAddress('simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk');
     * console.log(balances);
     * } catch (error) {
     * console.error(error);
     * }
     * })();
     *
     * // returns
     * // [ { tokenId:
     * //      '968ff0cc4c93864001e03e9524e351250b94ec56150fa4897f65b0b6477d44d4',
     * //     balance: '9980',
     * //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
     * //     decimalCount: 9 },
     * //   { tokenId:
     * //      'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     * //     balance: '617',
     * //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
     * //     decimalCount: 8 },
     * //   { tokenId:
     * //      'b96304d12f1bbc2196df582516410e55a9b34e13c7b4585bf5c1770af30d034f',
     * //     balance: '1',
     * //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
     * //     decimalCount: 0 },
     * //   { tokenId:
     * //      'a436c8e1b6bee3d701c6044d190f76f774be83c36de8d34a988af4489e86dd37',
     * //     balance: '776',
     * //     slpAddress: 'simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk',
     * //     decimalCount: 7 } ]
     *
     * // balances for Cash Address
     * (async () => {
     *  try {
     *    let balances = await bchjs.SLP.Utils.balancesForAddress('bitcoincash:qr4zg7xth86yzq94gl8jvnf5z4wuupzt3g4hl47n9y');
     *    console.log(balances);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * // [ { tokenId:
     * // '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5',
     * // balance: '507',
     * // decimalCount: 2 } ]
     *
     * // balances for Legacy Address
     * (async () => {
     *  try {
     *    let balances = await bchjs.SLP.Utils.balancesForAddress('1NM2ozrXVSnMRm66ua6aGeXgMsU7yqwqLS');
     *    console.log(balances);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * // [ { tokenId:
     * // '467969e067f5612863d0bf2daaa70dede2c6be03abb6fd401c5ef6e1e1f1f5c5',
     * // balance: '507',
     * // decimalCount: 2 } ]
     *
     * Note: Balances for multiple addresses can be retrieves by passing in an
     * array of addresses.
     */
    balancesForAddress(address: any): Promise<any>;
    /**
     * @api SLP.Utils.balancesForToken() balancesForToken()
     * @apiName balancesForToken
     * @apiGroup SLP Utils
     * @apiDescription List all balances for tokenId.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     * let balances = await bchjs.SLP.Utils.balancesForToken(
     *   "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     * )
     * console.log(balances)
     * } catch (error) {
     * console.error(error)
     * }
     * })()
     *
     * // returns
     * [
     * {
     * tokenId: "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
     * tokenBalance: 20,
     * slpAddress: 'simpleledger:qp4g0q97tq53pasnxk2rs570c6573qvylunsf5gy9e'
     * },
     * {
     * tokenId: "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
     * tokenBalance: 335.55,
     * slpAddress: 'simpleledger:qqcraw7q0ys3kg4z6f2zd267fhg2093c5c0spfk03f'
     * }
     * ]
     *
     */
    balancesForToken(tokenId: any): Promise<any>;
    /**
     * @api SLP.Utils.validateTxid() validateTxid()
     * @apiName validateTxid
     * @apiGroup SLP Utils
     * @apiDescription Validate that txid is an SLP transaction.
     *
     * @apiExample Example usage:
     *
     * // validate single SLP txid
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.validateTxid(
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     *    );
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [ { txid:
     * 'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     * valid: true } ]
     *
     * // validate multiple SLP txids
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.validateTxid([
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
     *      "00ea27261196a411776f81029c0ebe34362936b4a9847deb1f7a40a02b3a1476"
     *    ]);
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [ { txid:
     *     'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     *    valid: true },
     *  { txid:
     *     '00ea27261196a411776f81029c0ebe34362936b4a9847deb1f7a40a02b3a1476',
     *    valid: true } ]
     */
    validateTxid(txid: any, usrObj?: any): Promise<any>;
    /**
     * @api SLP.Utils.validateTxid2() validateTxid2()
     * @apiName validateTxid2
     * @apiGroup SLP Utils
     * @apiDescription Validate that txid is an SLP transaction.
     *
     * This second validatoin version uses the slp-validate slp library. It is
     * much slower and less efficient than SLPDB and is prone to time-outs for
     * tokens with large DAGs. However, it operates independently of SLPDB and
     * is a great second validation option, particularly when SLPDB returns 'null'
     * values.
     *
     * Due to the inefficiency of this call, only a single TXID can be input at a
     * time. This call will throw an error if the input is an array.
     *
     * @apiExample Example usage:
     *
     * // validate single SLP txid
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.validateTxid2(
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     *    );
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [ { txid:
     * 'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     * valid: true } ]
     */
    validateTxid2(txid: any): Promise<any>;
    /**
     * @api SLP.Utils.whitelist() whitelist()
     * @apiName whitelist
     * @apiGroup SLP Utils
     * @apiDescription Get SLP tokens in whitelist
     * Retrieves a list of the SLP tokens that in the whitelist. Tokens in the
     * whitelist can be validated with the validateTxid3() function. validateTxid3()
     * will still work when the SLP network is under stress.
     *
     * @apiExample Example usage:
     *
     * // validate single SLP txid
     * (async () => {
     *  try {
     *    let list = await bchjs.SLP.Utils.whitelit();
     *    console.log(list);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [
     *   {
     *     name: 'USDH',
     *     tokenId:
     *       'c4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479'
     *   },
     *   {
     *     name: 'SPICE',
     *     tokenId:
     *       '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'
     *   },
     *   {
     *     name: 'PSF',
     *     tokenId:
     *       '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'
     *   },
     *   {
     *     name: 'TROUT',
     *     tokenId:
     *       'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'
     *   },
     *   {
     *     name: 'PSFTEST',
     *     tokenId:
     *       'd0ef4de95b78222bfee2326ab11382f4439aa0855936e2fe6ac129a8d778baa0'
     *   }
     * ]
     */
    getWhitelist(): Promise<any[]>;
    /**
     * @api SLP.Utils.validateTxid3() validateTxid3()
     * @apiName validateTxid3
     * @apiGroup SLP Utils
     * @apiDescription
     * Validate that txid is an SLP transaction using the SLPDB whitelist server.
     * Same exact functionality as the validateTxid() function, but this function
     * calls the whitelist SLPDB. It will only validate SLP tokens that are in the
     * whitelist. You can retrieve the whitelist with the SLP.Utils.whitelist()
     * function.
     *
     * @apiExample Example usage:
     *
     * // validate single SLP txid
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.validateTxid3(
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     *    );
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [ { txid:
     * 'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     * valid: true } ]
     *
     * // validate multiple SLP txids
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.validateTxid3([
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb",
     *      "00ea27261196a411776f81029c0ebe34362936b4a9847deb1f7a40a02b3a1476"
     *    ]);
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [ { txid:
     *     'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     *    valid: true },
     *  { txid:
     *     '00ea27261196a411776f81029c0ebe34362936b4a9847deb1f7a40a02b3a1476',
     *    valid: true } ]
     */
    validateTxid3(txid: any, usrObj?: any): Promise<any>;
    /**
     * @api SLP.Utils.tokenStats() tokenStats()
     * @apiName tokenStats
     * @apiGroup SLP Utils
     * @apiDescription Stats for token by tokenId.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  let stats = await bchjs.SLP.Utils.tokenStats(
     *    "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     *  )
     *  console.log(stats)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * { tokenId:
     *  'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     *  documentUri: '',
     *  symbol: 'NAKAMOTO',
     *  name: 'NAKAMOTO',
     *  decimals: 8,
     *  txnsSinceGenesis: 367,
     *  validUtxos: 248,
     *  validAddresses: 195,
     *  circulatingSupply: 20995990,
     *  totalBurned: 4010,
     *  totalMinted: 21000000,
     *  satoshisLockedUp: 135408
     * }
     */
    tokenStats(tokenId: any): Promise<any>;
    /**
     * @api SLP.Utils.transactions() transactions()
     * @apiName transactions
     * @apiGroup SLP Utils
     * @apiDescription SLP Transactions by tokenId and address.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  let transactions = await bchjs.SLP.Utils.transactions(
     *    "495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a",
     *    "qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz"
     *  )
     *  console.log(transactions)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * [
     *  {
     *    "txid": "27e27170b546f05b2af69d6eddff8834038facf5d81302e9e562df09a5c4445f",
     *    "tokenDetails": {
     *      "valid": true,
     *      "detail": {
     *        "decimals": null,
     *        "tokenIdHex": "495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a",
     *        "timestamp": null,
     *        "transactionType": "SEND",
     *        "versionType": 1,
     *        "documentUri": null,
     *        "documentSha256Hex": null,
     *        "symbol": null,
     *        "name": null,
     *        "batonVout": null,
     *        "containsBaton": null,
     *        "genesisOrMintQuantity": null,
     *        "sendOutputs": [
     *          {
     *            "$numberDecimal": "0"
     *          },
     *          {
     *            "$numberDecimal": "25"
     *          },
     *          {
     *            "$numberDecimal": "77"
     *          }
     *        ]
     *      },
     *      "invalidReason": null,
     *      "schema_version": 30
     *    }
     *  }
     * ]
     */
    transactions(tokenId: any, address: any): Promise<any>;
    /**
     * @api SLP.Utils.burnTotal() burnTotal()
     * @apiName burnTotal
     * @apiGroup SLP Utils
     * @apiDescription List input, output and burn total for slp transaction.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  const burnTotal = await bchjs.SLP.Utils.burnTotal(
     *    "c7078a6c7400518a513a0bde1f4158cf740d08d3b5bfb19aa7b6657e2f4160de"
     *  )
     *  console.log(burnTotal)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * {
     *  transactionId: 'c7078a6c7400518a513a0bde1f4158cf740d08d3b5bfb19aa7b6657e2f4160de',
     *  inputTotal: 100000100,
     *  outputTotal: 100000000,
     *  burnTotal: 100
     * }
     */
    burnTotal(transactionId: any): Promise<any>;
    /**
     * @api SLP.Utils.txDetails() txDetails()
     * @apiName txDetails
     * @apiGroup SLP Utils
     * @apiDescription Transaction details on a token transfer.
     * There is no bulk method for this endpoint. Can only get one tx at a time.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  const details = await bchjs.SLP.Utils.txDetails(
     *    "c7078a6c7400518a513a0bde1f4158cf740d08d3b5bfb19aa7b6657e2f4160de"
     *  )
     *  console.log(details)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     */
    txDetails(txid: any): Promise<any>;
    /**
     * @api SLP.Utils.decodeOpReturn() decodeOpReturn()
     * @apiName decodeOpReturn
     * @apiGroup SLP Utils
     * @apiDescription
     * Retrieves transactions data from a txid and decodes the SLP OP_RETURN data.
     *
     * Throws an error if given a non-SLP txid.
     *
     * If optional associative array parameter cache is used, will cache and
     * reuse responses for the same input.
     *
     * A third optional input, `usrObj`, is used by bch-api for managing rate limits.
     * It can be safely ignored when writing apps using this call.
     *
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  const txid =
     *   "266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1"
     *
     *  const data = await slp.Utils.decodeOpReturn2(txid)
     *
     *  console.log(`Decoded OP_RETURN data: ${JSON.stringify(data,null,2)}`)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * {
     *  "tokenType": 1,
     *  "txType": "SEND",
     *  "tokenId": "497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7"
     *  "amounts": [
     *    "100000000",
     *    "99883300000000"
     *  ]
     * }
     *
     */
    decodeOpReturn(txid: any, cache?: any, usrObj?: any): Promise<any>;
    /**
     * @api SLP.Utils.tokenUtxoDetails() tokenUtxoDetails()
     * @apiName tokenUtxoDetails
     * @apiGroup SLP Utils
     * @apiDescription Hydrate a UTXO with SLP token metadata.
     *
     * Expects an array of UTXO objects as input. Returns an array of equal size.
     * Returns UTXO data hydrated with token information.
     *
     * - If the UTXO does not belong to a SLP transaction, it will return an
     * `isValid` property set to `false`.
     *
     * - If the UTXO is part of an SLP transaction, it will return the UTXO object
     * with additional SLP information attached. An `isValid` property will be
     * included.
     *   - If the `isValid` property is `true`, the UTXO is a valid SLP UTXO.
     *   - If the `isValid` property is `null`, then SLPDB has not yet processed
     *     that txid and validity has not been confirmed, or a 429 rate-limit error
     *     was enountered during the processing of the request.
     *
     * An optional second input object, `usrObj`, allows the user to inject an
     * artifical delay while processing UTXOs. If `usrObj.utxoDelay` is set to
     * a number, the call will delay by that number of milliseconds between
     * processing UTXOs.
     *
     * This is an API-heavy call. If you get a lot of `null` values, then slow down
     * the calls by using the usrObj.utxoDelay property, or request info on fewer
     * UTXOs at a
     * time. `null` indicates that the UTXO can *not* be safely spent, because
     * a judgement as to weather it is a token UTXO has not been made. Spending it
     * could burn tokens. It's safest to ignore UTXOs with a value of `null`.
     *
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  const utxos = await bchjs.Electrumx.utxo(`bitcoincash:qpcqs0n5xap26un2828n55gan2ylj7wavvzeuwdx05`)
     *
     *  // Delay 100mS between processing UTXOs, to prevent rate-limit errors.
     *  const utxoInfo = await bchjs.SLP.Utils.tokenUtxoDetails(utxos, { utxoDelay: 100 })
     *
     *  console.log(`utxoInfo: ${JSON.stringify(utxoInfo, null, 2)}`)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * {
     *  "txid": "fde117b1f176b231e2fa9a6cb022e0f7c31c288221df6bcb05f8b7d040ca87cb",
     *  "vout": 1,
     *  "amount": 0.00000546,
     *  "satoshis": 546,
     *  "height": 596089,
     *  "confirmations": 748,
     *  "utxoType": "token",
     *  "tokenId": "497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7",
     *  "tokenTicker": "TOK-CH",
     *  "tokenName": "TokyoCash",
     *  "tokenDocumentUrl": "",
     *  "tokenDocumentHash": "",
     *  "decimals": 8,
     *  "tokenQty": 2,
     *  "isValid": true,
     *  "tokenType": 1
     * }
     */
    tokenUtxoDetails(utxos: any, usrObj?: any): Promise<any[]>;
    /**
     * @api SLP.Utils.tokenUtxoDetailsWL() tokenUtxoDetailsWL()
     * @apiName tokenUtxoDetailsWL
     * @apiGroup SLP Utils
     * @apiDescription
     *
     * Same as tokenUtxoDetails(), but it only uses the whitelist SLPDB to
     * validate UTXOs. This will result in a lot of `isValid: null` values,
     * but much more performant handling of SLP tokens. Some wallet apps prefer
     * the scaling performance over the breadth of supported tokens.
     *
     * An optional second input object, `usrObj`, allows the user to inject an
     * artifical delay while processing UTXOs. If `usrObj.utxoDelay` is set to
     * a number, the call will delay by that number of milliseconds between
     * processing UTXOs.
     *
     * This is an API-heavy call. If you get a lot of `null` values, then slow down
     * the calls by using the usrObj.utxoDelay property, or request info on fewer
     * UTXOs at a
     * time. `null` indicates that the UTXO can *not* be safely spent, because
     * a judgement as to weather it is a token UTXO has not been made. Spending it
     * could burn tokens. It's safest to ignore UTXOs with a value of `null`.
     *
     */
    tokenUtxoDetailsWL(utxos: any, usrObj?: any): Promise<any[]>;
    _hydrateUtxo(utxos: any, usrObj?: any): Promise<any[]>;
    /**
     * @api SLP.Utils.waterfallValidateTxid() waterfallValidateTxid()
     * @apiName waterfallValidateTxid
     * @apiGroup SLP Utils
     * @apiDescription Use multiple validators to validate an SLP TXID.
     *
     * This function aggregates all the available SLP token validation sources.
     * It starts with the fastest, most-efficient source first, and continues
     * to other validation sources until the txid is validated (true or false).
     * If the txid goes through all sources and can't be validated, it will
     * return null.
     *
     * Validation sources from most efficient to least efficient:
     * - SLPDB with whitelist filter
     * - SLPDB general purpose
     * - slp-api
     *
     * Currently only supports a single txid at a time.
     *
     * @apiExample Example usage:
     *
     * // validate single SLP txid
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.waterfallValidateTxid(
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     *    );
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * true
     */
    waterfallValidateTxid(txid: any, usrObj?: any): Promise<any>;
    /**
     * @api SLP.Utils.hydrateUtxos() hydrateUtxos()
     * @apiName hydrateUtxos
     * @apiGroup SLP Utils
     * @apiDescription Hydrate a UTXO with SLP token metadata.
     *
     * The same as tokenUtxoDetails(), but uses bch-api to do the heavy lifting,
     * which greatly increases the speed, since fewer API calls need to be made.
     * However, internal API calls are still counted against your rate limits.
     *
     * This function expects an array of UTXO objects as input. It returns an
     * array of equal size. The UTXO data hydrated with token information.
     * - If the UTXO does not belong to a SLP transaction, it will return an
     *   `isValid` property set to `false`.
     * - If the UTXO is part of an SLP transaction, it will return the UTXO object
     *   with additional SLP information attached. An `isValid` property will be
     *   included.
     *     - If `isValid` is `true`, the UTXO is a valid SLP UTXO.
     *     - If `isValid` is `null`, then SLPDB has not yet processed that txid
     *       and validity has not been confirmed,
     *       or a 429 rate-limit error was enountered during the processing of the
     *       request.
     *
     * An optional second input object, `usrObj`, allows the user to inject an
     * artifical delay while processing UTXOs. If `usrObj.utxoDelay` is set to
     * a number, the call will delay by that number of milliseconds between
     * processing UTXOs.
     *
     * This is an API-heavy call. If you get a lot of `null` values, then slow down
     * the calls by using the usrObj.utxoDelay property, or request info on fewer
     * UTXOs at a
     * time. `null` indicates that the UTXO can *not* be safely spent, because
     * a judgement as to weather it is a token UTXO has not been made. Spending it
     * could burn tokens. It's safest to ignore UTXOs with a value of `null`.
     *
     * @apiExample Example usage:
     *
     * (async () => {
     * try {
     *  const utxos = await bchjs.Electrumx.utxo([
     *   "bitcoincash:qq6mvsm7l92d77zpymmltvaw09p5uzghyuyx7spygg",
     *   "bitcoincash:qpjdrs8qruzh8xvusdfmutjx62awcepnhyperm3g89",
     *   "bitcoincash:qzygn28zpgeemnptkn26xzyuzzfu9l8f9vfvq7kptk"
     *  ])
     *
     *  // Wait 100mS between processing UTXOs, to prevent rate limit errors.
     *  const utxoInfo = await bchjs.SLP.Utils.hydrateUtxos(utxos.utxos, { utxoDelay: 100 })
     *
     *  console.log(`${JSON.stringify(utxoInfo, null, 2)}`)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * {
     *  "slpUtxos": [
     *   {
     *    "utxos": [
     *      {
     *        "height": 654522,
     *         "tx_hash": "516e763932061f9e868652d727045b714db1ecac459e84cd52b5b4cb39572ecc",
     *        "tx_pos": 0,
     *        "value": 6000,
     *        "satoshis": 6000,
     *        "txid": "516e763932061f9e868652d727045b714db1ecac459e84cd52b5b4cb39572ecc",
     *        "vout": 0,
     *        "isValid": false
     *      }
     *    ],
     *    "address": "bitcoincash:qq6mvsm7l92d77zpymmltvaw09p5uzghyuyx7spygg"
     *   },
     *   {
     *    "utxos": [
     *      {
     *        "height": 654522,
     *        "tx_hash": "8ec01d851d9df9fb4b4331275e2ff680257c224100d0081cec6fbeedf982f738",
     *        "tx_pos": 1,
     *        "value": 546,
     *        "satoshis": 546,
     *        "txid": "8ec01d851d9df9fb4b4331275e2ff680257c224100d0081cec6fbeedf982f738",
     *        "vout": 1,
     *        "utxoType": "token",
     *        "transactionType": "send",
     *        "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
     *        "tokenTicker": "TROUT",
     *        "tokenName": "Trout's test token",
     *        "tokenDocumentUrl": "troutsblog.com",
     *        "tokenDocumentHash": "",
     *        "decimals": 2,
     *        "tokenType": 1,
     *        "tokenQty": 10,
     *        "isValid": true
     *      }
     *    ],
     *    "address": "bitcoincash:qpjdrs8qruzh8xvusdfmutjx62awcepnhyperm3g89"
     *   },
     *   {
     *    "utxos": [
     *      {
     *        "height": 654522,
     *        "tx_hash": "072a1e2c2d5f1309bf4eef7f88684e4ecd544a903b386b07f3e04b91b13d8af1",
     *        "tx_pos": 0,
     *        "value": 6999,
     *        "satoshis": 6999,
     *        "txid": "072a1e2c2d5f1309bf4eef7f88684e4ecd544a903b386b07f3e04b91b13d8af1",
     *        "vout": 0,
     *        "isValid": false
     *      },
     *      {
     *        "height": 654522,
     *        "tx_hash": "a72db6a0883ecb8e379f317231b2571e41e041b7b1107e3e54c2e0b3386ac6ca",
     *        "tx_pos": 1,
     *        "value": 546,
     *        "satoshis": 546,
     *        "txid": "a72db6a0883ecb8e379f317231b2571e41e041b7b1107e3e54c2e0b3386ac6ca",
     *        "vout": 1,
     *        "utxoType": "token",
     *        "transactionType": "send",
     *        "tokenId": "6201f3efe486c577433622817b99645e1d473cd3882378f9a0efc128ab839a82",
     *        "tokenTicker": "VALENTINE",
     *        "tokenName": "Valentine day token",
     *        "tokenDocumentUrl": "fullstack.cash",
     *        "tokenDocumentHash": "",
     *        "decimals": 2,
     *        "tokenType": 1,
     *        "tokenQty": 5,
     *        "isValid": true
     *      }
     *    ],
     *    "address": "bitcoincash:qzygn28zpgeemnptkn26xzyuzzfu9l8f9vfvq7kptk"
     *   }
     *  ]
     * }
     *
     * (async () => {
     * try {
     *   const utxos = [
     *     {
     *       utxos: [
     *         {
     *           txid: "d56a2b446d8149c39ca7e06163fe8097168c3604915f631bc58777d669135a56",
     *           vout: 3,
     *           value: "6816",
     *           height: 606848,
     *           confirmations: 13,
     *           satoshis: 6816
     *         }
     *       ]
     *    }
     *  ]
     *
     *  const utxoInfo = await bchjs.SLP.Utils.hydrateUtxos(utxos)
     *
     *  console.log(`${JSON.stringify(utxoInfo, null, 2)}`)
     * } catch (error) {
     *  console.error(error)
     * }
     * })()
     *
     * // returns
     * {
     *  "slpUtxos": [
     *   {
     *    "utxos": [
     *      {
     *        "txid": "d56a2b446d8149c39ca7e06163fe8097168c3604915f631bc58777d669135a56",
     *        "vout": 3,
     *        "value": "6816",
     *        "height": 606848,
     *        "confirmations": 13,
     *        "satoshis": 6816,
     *        "isValid": false
     *      }
     *    ]
     *  }
     *  ]
     */
    hydrateUtxos(utxos: any, usrObj: any): Promise<any>;
    /**
     * @api SLP.Utils.hydrateUtxosWL() hydrateUtxosWL()
     * @apiName hydrateUtxosWL
     * @apiGroup SLP Utils
     * @apiDescription
     * This call is exactly the same as `hydrateUtxos()`. This version hydrate a
     * UTXO with SLP token metadata, but only uses the whitelist SLPDB for
     * validation.
     *
     * Whitelist SLPDBs will return `isValid: null` for any token not in the
     * 'whitelist' filter. Filtered SLPDBs are much smaller and more reliable
     * to operate.
     *
     */
    hydrateUtxosWL(utxos: any): Promise<any>;
    /**
     * @api SLP.Utils.getStatus() getStatus()
     * @apiName getStatus
     * @apiGroup SLP Utils
     * @apiDescription Get the status and health of the SLPDB connected to bch-api.
     *
     * @apiExample Example usage:
     *
     * // Get the current blockheight of the SLPDB indexer.
     * (async () => {
     *  try {
     *    let validated = await bchjs.SLP.Utils.validateTxid(
     *      "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
     *    );
     *    console.log(validated);
     *  } catch (error) {
     *    console.error(error);
     *  }
     * })();
     *
     * // returns
     * [ { txid:
     * 'df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb',
     * valid: true } ]
     *
     */
    getStatus(txid: any): Promise<any>;
}
