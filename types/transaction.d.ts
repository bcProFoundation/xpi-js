export = Transaction;
declare class Transaction {
    constructor(config: any);
    slpUtils: import("./slp/utils");
    rawTransaction: import("./raw-transactions");
    /**
     * @api Transaction.get() get()
     * @apiName get
     * @apiGroup Transaction
     * @apiDescription
     * Returns an object of transaction data, including addresses for input UTXOs.
     * If it is a SLP token transaction, the token information for inputs and
     * outputs will also be included.
     *
     * This is an API heavy call. This function will only work with a single txid.
     * It does not yet support an array of TXIDs.
     *
     * @apiExample Example usage:
     * (async () => {
     * try {
     *  let txData = await bchjs.Transaction.get("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
     *  console.log(txData);
     * } catch(error) {
     * console.error(error)
     * }
     * })()
     */
    get(txid: any): Promise<any>;
}
