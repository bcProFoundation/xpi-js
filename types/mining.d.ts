export = Mining;
declare class Mining {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    getBlockTemplate(templateRequest: any): Promise<any>;
    getMiningInfo(): Promise<any>;
    getNetworkHashps(nblocks?: number, height?: number): Promise<any>;
    submitBlock(hex: any, parameters: any): Promise<any>;
}
