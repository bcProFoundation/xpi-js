export = BCHJS;
declare class BCHJS {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    authPass: any;
    authToken: string;
    Ninsight: import("./ninsight");
    Electrumx: import("./electrumx");
    Control: import("./control");
    Mining: import("./mining");
    RawTransactions: import("./raw-transactions");
    Address: import("./address");
    BitcoinCash: import("./bitcoincash");
    Blockchain: import("./blockchain");
    Crypto: typeof import("./crypto");
    ECPair: typeof import("./ecpair");
    encryption: import("./encryption");
    Generating: import("./generating");
    HDNode: import("./hdnode");
    Mnemonic: import("./mnemonic");
    Price: import("./price");
    Script: import("./script");
    TransactionBuilder: typeof import("./transaction-builder");
    Util: import("./util");
    Schnorr: import("./schnorr");
    SLP: import("./slp/slp");
    IPFS: import("./ipfs");
    Utxo: import("./utxo");
    Transaction: import("./transaction");
    DSProof: import("./dsproof");
}