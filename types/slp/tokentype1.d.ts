export = TokenType1;
declare class TokenType1 {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    Script: import("../script");
    axios: typeof import("axios");
    /**
     * @api SLP.TokenType1.generateSendOpReturn() generateSendOpReturn()
     * @apiName generateSendOpReturn
     * @apiGroup SLP TokenType1
     * @apiDescription Generate the OP_RETURN value needed to create an SLP Send transaction.
     * It's assumed all elements in the tokenUtxos array belong to the same token.
     *
     * Returns a Buffer representing a transaction output, ready to be added to
     * the Transaction Builder.
     *
     * @apiExample Example usage:
     *
     *  const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
     *  const utxos = await bchjs.Blockbook.utxos(addr)
     *
     *  // Identify the SLP token UTXOs.
     *  let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);
     *
     *  // Filter out the token UTXOs that match the user-provided token ID.
     *  tokenUtxos = tokenUtxos.filter((utxo, index) => {
     *    if (
     *      utxo && // UTXO is associated with a token.
     *      utxo.tokenId === TOKENID && // UTXO matches the token ID.
     *      utxo.tokenType === "token" // UTXO is not a minting baton.
     *    )
     *    return true;
     *  });
     *
     *  // Generate the SEND OP_RETURN
     *  const slpData = bchjs.SLP.TokenType1.generateSendOpReturn(
     *    tokenUtxos,
     *    TOKENQTY
     *  );
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/send-token/send-token.js
     */
    generateSendOpReturn(tokenUtxos: any, sendQty: any): {
        script: Buffer;
        outputs: number;
    };
    /**
     * @api SLP.TokenType1.generateBurnOpReturn() generateBurnOpReturn()
     * @apiName generateBurnOpReturn
     * @apiGroup SLP TokenType1
     * @apiDescription Generate the OP_RETURN value needed to create a SLP Send
     * transaction that burns tokens.
     * This is a slight variation of generateSendOpReturn(). It generates a SLP
     * SEND transaction designed to burn a select quantity of tokens.
     *
     * It's assumed all elements in the tokenUtxos array belong to the same token.
     *
     * Returns a Buffer representing a transaction output, ready to be added to
     * the Transaction Builder.
     *
     * @apiExample Example usage:
     *
     *  const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
     *  const utxos = await bchjs.Blockbook.utxos(addr)
     *
     *  // Identify the SLP token UTXOs.
     *  let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);
     *
     *  // Filter out the token UTXOs that match the user-provided token ID.
     *  tokenUtxos = tokenUtxos.filter((utxo, index) => {
     *    if (
     *      utxo && // UTXO is associated with a token.
     *      utxo.tokenId === TOKENID && // UTXO matches the token ID.
     *      utxo.tokenType === "token" // UTXO is not a minting baton.
     *    )
     *    return true;
     *  });
     *
     *  // Generate the SEND OP_RETURN
     *  const slpData = bchjs.SLP.TokenType1.generateBurnOpReturn(
     *    tokenUtxos,
     *    10 // Burn 10 tokens
     *  );
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/burn-tokens/burn-tokens.js
     *
     */
    generateBurnOpReturn(tokenUtxos: any, burnQty: any): Buffer;
    /**
     * @api SLP.TokenType1.generateGenesisOpReturn() generateGenesisOpReturn()
     * @apiName generateGenesisOpReturn
     * @apiGroup SLP TokenType1
     * @apiDescription Generate the OP_RETURN value needed to create a new SLP token class.
     *
     * Expects a config object as input, see the example for properties.:
     *
     * Returns a Buffer representing a transaction output, ready to be added to
     * the Transaction Builder.
     *
     * @apiExample Example usage:
     *
     *   const configObj = {
     *     name: "SLP Test Token",
     *     ticker: "SLPTEST",
     *     documentUrl: "https://FullStack.cash",
     *     documentHash: "",
     *     decimals: 8,
     *     initialQty: 10
     *   }
     *
     *   const result = await bchjs.SLP.TokenType1.generateGenesisOpReturn(
     *     configObj
     *   )
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/create-token/create-token.js
     *
     */
    generateGenesisOpReturn(configObj: any): Buffer;
    /**
     * @api SLP.TokenType1.generateMintOpReturn() generateMintOpReturn()
     * @apiName generateMintOpReturn
     * @apiGroup SLP TokenType1
     * @apiDescription Generate the OP_RETURN value needed to create an SLP Mint transaction.
     * It's assumed all elements in the tokenUtxos array belong to the same token.
     *
     * Returns a Buffer representing a transaction output, ready to be added to
     * the Transaction Builder.
     *
     * @apiExample Example usage:
     *
     *  const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
     *  const utxos = await bchjs.Blockbook.utxos(addr)
     *
     *  // Identify the SLP token UTXOs.
     *  let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);
     *
     *  // Filter out the minting baton.
     *  tokenUtxos = tokenUtxos.filter((utxo, index) => {
     *    if (
     *      utxo && // UTXO is associated with a token.
     *      utxo.tokenId === TOKENID && // UTXO matches the token ID.
     *      utxo.utxoType === "minting-baton" // UTXO is not a minting baton.
     *    )
     *    return true;
     *  });
     *
     *  // Generate the SLP OP_RETURN
     *  const slpData = bchjs.SLP.TokenType1.generateMintOpReturn(
     *    tokenUtxos,
     *    100 // Mint 100 new tokens.
     *  );
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/mint-token/mint-token.js
     */
    generateMintOpReturn(tokenUtxos: any, mintQty: any, destroyBaton?: boolean): Buffer;
    /**
     * @api SLP.TokenType1.getHexOpReturn() getHexOpReturn()
     * @apiName getHexOpReturn
     * @apiGroup SLP TokenType1
     * @apiDescription Get hex representation of an SLP OP_RETURN
     * This command returns a hex encoded OP_RETURN for SLP Send (Token Type 1)
     * transactions. Rather than computing it directly, it calls bch-api to do
     * the heavy lifting. This is easier and lighter weight for web apps.
     *
     * @apiExample Example usage:
     *
     *  const tokenUtxos = [{
     *   tokenId: "0a321bff9761f28e06a268b14711274bb77617410a16807bd0437ef234a072b1",
     *   decimals: 0,
     *   tokenQty: 2
     *  }]
     *
     *  const sendQty = 1.5
     *
     *  const result = await bchjs.SLP.TokenType1.getHexOpReturn(tokenUtxos, sendQty)
     *
     *  // result:
     *  {
     *    "script": "6a04534c500001010453454e44200a321bff9761f28e06a268b14711274bb77617410a16807bd0437ef234a072b1080000000000000001080000000000000000",
     *    "outputs": 2
     *  }
     */
    getHexOpReturn(tokenUtxos: any, sendQty: any): Promise<any>;
}
