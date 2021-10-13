export = Util;
declare class Util {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    /**
     * @api Util.floor8() floor8()
     * @apiName floor8
     * @apiGroup Util
     * @apiDescription Round a number down to 8 decimal places.
     *
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const num = 1.234567891111
     *     const result = bchjs.Util.floor8(num)
     *     console.log(result)
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // returns
     *  1.23456789
     */
    floor8(num: any): number;
    /**
     * @api Util.floor2() floor2()
     * @apiName floor2
     * @apiGroup Util
     * @apiDescription Round a number down to 2 decimal places.
     *
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const num = 1.234567891111
     *     const result = bchjs.Util.floor2(num)
     *     console.log(result)
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // returns
     *  1.23
     */
    floor2(num: any): number;
    /**
     * @api Util.chunk20() chunk20()
     * @apiName chunk20
     * @apiGroup Util
     * @apiDescription chunk up an array into multiple arrays of 20 elements each.
     * Input: arrayToSlice - a one-dimensional array of elements.
     * Returns a two-dimensional array. An array of 20-element arrays.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *      const bigArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
     *
     *      const chunked = bchjs.Util.chunk20(bigArray)
     *      console.log(chunked)
     *   } catch(error) {
     *      console.error(error)
     *   }
     * })()
     *
     * // returns
     *  [
     *    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
     *    [20,21,22,23,24,25,26]
     *  ]
     */
    chunk20(arrayToSlice: any): any[][];
    /**
     * @api Util.sleep() sleep()
     * @apiName sleep
     * @apiGroup Util
     * @apiDescription Promise-based delay.
     * Expects an integer as input, which represents milliseconds. This function
     * will return a Promise that resolves that many milliseconds later.
     *
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const tenSeconds = 10000
     *     await bchjs.Util.sleep(tenSeconds)
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     */
    sleep(ms: any): Promise<any>;
    /**
     * @api Util.validateAddress() validateAddress()
     * @apiName Validate Address.
     * @apiGroup Util
     * @apiDescription Return information about the given bitcoin address.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     let validateAddress = await bchjs.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f");
     *     console.log(validateAddress);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // { isvalid: true,
     * // address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
     * // scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
     * // ismine: true,
     * // iswatchonly: false,
     * // isscript: false,
     * // pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
     * // iscompressed: true,
     * // account: 'Test' }
     *
     * (async () => {
     *   try {
     *     let validateAddress = await bchjs.Util.validateAddress(["bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f"]);
     *     console.log(validateAddress);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // [{ isvalid: true,
     * // address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
     * // scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
     * // ismine: true,
     * // iswatchonly: false,
     * // isscript: false,
     * // pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
     * // iscompressed: true,
     * // account: 'Test' }]
     */
    validateAddress(address: any): Promise<any>;
}
