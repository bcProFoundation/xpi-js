export = Encryption;
declare class Encryption {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    axios: typeof import("axios");
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    getPubKey(addr: any): Promise<any>;
}
