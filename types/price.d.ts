export = Price;
declare class Price {
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
    current(currency?: string): Promise<any>;
    /**
     * @api price.getUsd() getUsd()
     * @apiName Price getUsd()
     * @apiGroup Price
     * @apiDescription Return current price of BCH in USD.
     * This endpoint gets the USD price of BCH from the Coinbase API. The price
     * comes from bch-api, so it has a better chance of working in Tor.
     *
     * @apiExample Example usage:
     *(async () => {
     *  try {
     *    let current = await bchjs.Price.getUsd();
     *    console.log(current);
     *  } catch(err) {
     *   console.err(err)
     *  }
     *})()
     *
     * // 266.81
     */
    getUsd(): Promise<any>;
    /**
     * @api price.rates() rates()
     * @apiName Price rates()
     * @apiGroup Price
     * @apiDescription Return current price of BCH in several different currencies.
     * This endpoint gets the price of BCH from the Coinbase API in many different
     * currencies. The price
     * comes from bch-api, so it has a better chance of working in Tor.
     *
     * @apiExample Example usage:
     *(async () => {
     *  try {
     *    let current = await bchjs.Price.rates();
     *    console.log(current);
     *  } catch(err) {
     *   console.err(err)
     *  }
     *})()
     *
     * {
     *   AED: "915.049218",
     *   AFN: "19144.48874646",
     *   ALGO: "826.6633482661356600405",
     *   ...
     *   ZRX: "644.844402797695193656",
     *   ZWL: "80215.03"
     * }
     */
    rates(): Promise<any>;
    /**
     * @api price.getBchaUsd() getBchaUsd()
     * @apiName Price getBchaUsd()
     * @apiGroup Price
     * @apiDescription Return current price of BCHA in USD.
     * This endpoint gets the USD price of BCHA from the Coinex API. The price
     * comes from bch-api, so it has a better chance of working in Tor.
     *
     * @apiExample Example usage:
     *(async () => {
     *  try {
     *    let current = await bchjs.Price.getBchaUsd();
     *    console.log(current);
     *  } catch(err) {
     *   console.err(err)
     *  }
     *})()
     *
     * // 18.81
     */
    getBchaUsd(): Promise<any>;
    /**
     * @api price.getBchUsd() getBchUsd()
     * @apiName Price getBchUsd()
     * @apiGroup Price
     * @apiDescription Return current price of BCH in USD.
     * This endpoint gets the USD price of BCH from the Coinex API. The price
     * comes from bch-api, so it has a better chance of working in Tor.
     *
     * @apiExample Example usage:
     *(async () => {
     *  try {
     *    let current = await bchjs.Price.getBchUsd();
     *    console.log(current);
     *  } catch(err) {
     *   console.err(err)
     *  }
     *})()
     *
     * // 512.81
     */
    getBchUsd(): Promise<any>;
}
