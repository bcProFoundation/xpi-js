export = ECPair;
declare const ECPair_base: typeof import("../ecpair");
declare class ECPair extends ECPair_base {
    /**
     * @api SLP.ECPair.toSLPAddress() toSLPAddress()
     * @apiName toSLPAddress
     * @apiGroup SLP
     * @apiDescription Get slp address of ECPair.
     *
     * @apiExample Example usage:
     *  // create ecpair from wif
     *  let ecpair = bchjs.SLP.ECPair.fromWIF('cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS')
     *  // to slp address
     *  bchjs.SLP.ECPair.toSLPAddress(ecpair);
     *  // slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03
     */
    static toSLPAddress(ecpair: any): string;
}
