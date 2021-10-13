export = Nft1;
declare class Nft1 {
    constructor(config: any);
    restURL: any;
    /**
     * @api SLP.NFT1.newNFTGroupOpReturn() newNFTGroupOpReturn()
     * @apiName newNFTGroupOpReturn
     * @apiGroup SLP NFT1
     * @apiDescription Generate the OP_RETURN value needed to create an SLP
     * NFT Group token.
     * It's assumed all elements in the tokenUtxos array belong to the same token.
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
     *     initialQty: 1
     *   }
     *
     *   const result = await bchjs.SLP.NFT1.newNFTGroupOpReturn(
     *     configObj
     *   )
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
     *
     */
    newNFTGroupOpReturn(configObj: any): Buffer;
    /**
     * @api SLP.NFT1.mintNFTGroupOpReturn() mintNFTGroupOpReturn()
     * @apiName mintNFTGroupOpReturn
     * @apiGroup SLP NFT1
     * @apiDescription Generate the OP_RETURN value needed to create an SLP Mint
     * transaction for an NFT Group token.
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
     *      utxo.utxoType === "minting-baton" && // UTXO is not a minting baton.
     *      utxo.tokenType === 129 // UTXO is for NFT Group
     *    )
     *    return true;
     *  });
     *
     *  // Generate the SLP OP_RETURN
     *  const slpData = bchjs.SLP.NFT1.mintNFTGroupOpReturn(
     *    tokenUtxos,
     *    1 // Mint 1 new token.
     *  );
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
     */
    mintNFTGroupOpReturn(tokenUtxos: any, mintQty: any, destroyBaton?: boolean): Buffer;
    /**
     * @api SLP.NFT1.generateNFTChildGenesisOpReturn() generateNFTChildGenesisOpReturn()
     * @apiName generateNFTChildGenesisOpReturn
     * @apiGroup SLP NFT1
     * @apiDescription Generate the OP_RETURN value needed to create an SLP
     * NFT Child token.
     * It's assumed all elements in the tokenUtxos array belong to the same token.
     *
     * Returns a Buffer representing a transaction output, ready to be added to
     * the Transaction Builder.
     *
     * @apiExample Example usage:
     *
     *   const configObj = {
     *     name: "NFT Child",
     *     ticker: "NFTC",
     *     documentUrl: "https://FullStack.cash",
     *   }
     *
     *   const result = await bchjs.SLP.NFT1.generateNFTChildGenesisOpReturn(
     *     configObj
     *   )
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
     *
     */
    generateNFTChildGenesisOpReturn(configObj: any): Buffer;
    /**
     * @api SLP.NFT1.generateNFTChildSendOpReturn() generateNFTChildSendOpReturn()
     * @apiName generateNFTChildSendOpReturn
     * @apiGroup SLP NFT1
     * @apiDescription Generate the OP_RETURN value needed to send an SLP NFT
     * Child token to another address.
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
     *      utxo.tokenType === "token" && // UTXO is not a minting baton.
     *      utxo.tokenType === 65 // UTXO is for an NFT Child
     *    )
     *    return true;
     *  });
     *
     *  // Generate the SEND OP_RETURN
     *  const slpData = bchjs.SLP.NFT1.generateNFTChildSendOpReturn(
     *    tokenUtxos,
     *    TOKENQTY
     *  );
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
     */
    generateNFTChildSendOpReturn(tokenUtxos: any, sendQty: any): {
        script: Buffer;
        outputs: number;
    };
    /**
     * @api SLP.NFT1.generateNFTGroupSendOpReturn() generateNFTGroupSendOpReturn()
     * @apiName generateNFTGroupSendOpReturn
     * @apiGroup SLP NFT1
     * @apiDescription Generate the OP_RETURN value needed to send an SLP NFT
     * Group token to another address.
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
     *      utxo.tokenType === "token" && // UTXO is not a minting baton.
     *      utxo.tokenType === 129 // UTXO is for an NFT Group
     *    )
     *    return true;
     *  });
     *
     *  // Generate the SEND OP_RETURN
     *  const slpData = bchjs.SLP.NFT1.generateNFTGroupSendOpReturn(
     *    tokenUtxos,
     *    TOKENQTY
     *  );
     *
     *  ...
     *  // Add OP_RETURN as first output.
     *  transactionBuilder.addOutput(slpData, 0);
     *
     *  // See additional code here:
     *  // https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
     */
    generateNFTGroupSendOpReturn(tokenUtxos: any, sendQty: any): {
        script: Buffer;
        outputs: number;
    };
    /**
     * @api SLP.NFT1.listNFTGroupChildren() listNFTGroupChildren()
     * @apiName listNFTGroupChildren
     * @apiGroup SLP NFT1
     * @apiDescription Return list of NFT children tokens in a NFT Group.
     * It's assumed provided groupId parameter is for an NFT Group token (type=129)
     *
     * Returns an Array with GENESIS transaction IDs of the children tokens.
     *
     * @apiExample Example usage:
     *
     * const groupId = '68cd33ecd909068fbea318ae5ff1d6207cf754e53b191327d6d73b6916424c0a'
     * const children = await bchjs.SLP.Nft1.listNFTGroupChildren(groupId)
     *
     * children = {
     *  "nftChildren": [
     *    "45a30085691d6ea586e3ec2aa9122e9b0e0d6c3c1fd357decccc15d8efde48a9",
     *    "928ce61fe1006b1325a0ba0dce700bf83986a6f0691ba26e121c9ac035d12a55"
     *  ]
     * }
     */
    listNFTGroupChildren(groupId: any): Promise<any>;
    /**
     * @api SLP.NFT1.parentNFTGroup() parentNFTGroup()
     * @apiName parentNFTGroup
     * @apiGroup SLP NFT1
     * @apiDescription Return parent NFT Group information for a given NFT child token.
     * It's assumed provided groupId parameter is for an NFT Child token (type=65)
     *
     * Returns a JSON with NFT group information.
     *
     * @apiExample Example usage:
     *
     * const tokenId = '45a30085691d6ea586e3ec2aa9122e9b0e0d6c3c1fd357decccc15d8efde48a9'
     * const group = await bchjs.SLP.Nft1.parentNFTGroup(tokenId)
     *
     * group = {
     *   "nftGroup": {
     *     "decimals": 0,
     *     "timestamp": "2021-05-03 10:36:01",
     *     "timestamp_unix": 1620038161,
     *     "versionType": 129,
     *     "documentUri": "psfoundation.cash",
     *     "symbol": "PSF.TEST.GROUP",
     *     "name": "PSF Test NFT Group",
     *     "containsBaton": true,
     *     "id": "68cd33ecd909068fbea318ae5ff1d6207cf754e53b191327d6d73b6916424c0a",
     *     "documentHash": null,
     *     "initialTokenQty": 1000000,
     *     "blockCreated": 686117,
     *     "totalMinted": null,
     *     "totalBurned": null,
     *     "circulatingSupply": null
     *   }
     * }
     */
    parentNFTGroup(tokenId: any): Promise<any>;
}
