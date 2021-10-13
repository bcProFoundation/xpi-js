export = SLP;
declare class SLP {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authToken: any;
    axiosOptions: {
        headers: {
            authorization: any;
        };
    };
    Address: import("./address");
    ECPair: typeof import("./ecpair");
    TokenType1: import("./tokentype1");
    NFT1: import("./nft1");
    Utils: import("./utils");
}
