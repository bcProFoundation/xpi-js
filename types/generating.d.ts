export = Generating;
declare class Generating {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    generateToAddress(blocks: any, address: any, maxtries?: number): Promise<any>;
}
