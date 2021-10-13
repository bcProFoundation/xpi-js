export = DSProof;
declare class DSProof {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axios: typeof import("axios");
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    /**
     * @api DSProof.getDSProof() getDSProof()
     * @apiName getDSProof
     * @apiGroup DSProof
     * @apiDescription Checks if a transaction generated a double-spend proof.
     *
     * If a double-spend is attempted, one of the transactions will generate a
     * 'double spend proof'. This call can be used to check if a transaction
     * generated such a proof.
     *
     * Merchants should wait 3-5 seconds after receiving notification of a
     * transaction before calling this endpoint, to see if the TXID generated a
     * proof. If this method returns no data, then the TX can be considered 'safe'
     * and not a double spend. If proof data is returned by this method, then
     * the transaction generated a proof and can be considered a 'double spend'.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const txid = 'ee0df780b58f6f24467605b2589c44c3a50fc849fb8f91b89669a4ae0d86bc7e'
     *     const result = await bchjs.DSProof.getDSProof(txid)
     *     console.log(result);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // returns
     * null
     */
    getDSProof(txid: any): Promise<any>;
}
