export = Control;
declare class Control {
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
     * @api Control.getNetworkInfo() getNetworkInfo()
     * @apiName getNetworkInfo
     * @apiGroup Control
     * @apiDescription Returns an object containing various network info.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     let getInfo = await bchjs.Control.getNetworkInfo();
     *     console.log(getInfo);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * // returns
     * { version: 190500,
     *   subversion: '/Bitcoin ABC:0.19.5(EB32.0)/',
     *   protocolversion: 70015,
     *   localservices: '0000000000000425',
     *   localrelay: true,
     *   timeoffset: 0,
     *   networkactive: true,
     *   connections: 17,
     *   networks:
     *   [ { name: 'ipv4',
     *       limited: false,
     *       reachable: true,
     *       proxy: '',
     *       proxy_randomize_credentials: false },
     *     { name: 'ipv6',
     *       limited: false,
     *       reachable: true,
     *       proxy: '',
     *       proxy_randomize_credentials: false },
     *     { name: 'onion',
     *       limited: true,
     *       reachable: false,
     *       proxy: '',
     *       proxy_randomize_credentials: false } ],
     *   relayfee: 0.00001,
     *   excessutxocharge: 0,
     *   warnings:
     *   'Warning: Unknown block versions being mined! It\'s possible unknown rules are in effect' }}
     */
    getNetworkInfo(): Promise<any>;
    getMemoryInfo(): Promise<any>;
}
