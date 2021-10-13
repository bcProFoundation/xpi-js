export = Address;
declare const Address_base: typeof import("../address");
declare class Address extends Address_base {
    constructor(config: any);
    /**
     * @api SLP.Address.toSLPAddress() toSLPAddress()
     * @apiName toSLPAddress
     * @apiGroup SLP
     * @apiDescription Converting legacy or cashaddr to slpAddress format.
     *
     * @apiExample Example usage:
     *  // mainnet legacy
     *  bchjs.SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
     *  // simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzd
     *
     *  // mainnet legacy return no prefix
     *  bchjs.SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
     *  // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     *  // mainnet cashaddr
     *  bchjs.SLP.Address.toSLPAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
     *  // simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp
     *
     *  // mainnet slpaddr no prefix
     *  bchjs.SLP.Address.toSLPAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
     *  // simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp
     *
     *  // tesnet legacy
     *  bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
     *  // slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv
     *
     *  // testnet legacy return no prefix
     *  bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
     *  // qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv
     *
     *  // tesnet cashaddr
     *  bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
     *  // slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv
     *
     *  // testnet cashaddr no prefix
     *  bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
     *  // qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv
     */
    toSLPAddress(address: any, prefix?: boolean, regtest?: boolean): string;
    /**
     * @api SLP.Address.toCashAddress() toCashAddress()
     * @apiName toCashAddress
     * @apiGroup SLP
     * @apiDescription Converting legacy or slpaddr to cashAddress format.
     *
     * @apiExample Example usage:
     *  // mainnet legacy
     *  bchjs.SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
     *  // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     *  // mainnet legacy return no prefix
     *  bchjs.SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
     *  // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     *  // mainnet slpaddr
     *  bchjs.SLP.Address.toCashAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
     *  // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     *  // mainnet slpaddr no prefix
     *  bchjs.SLP.Address.toCashAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
     *  // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     *  // tesnet legacy
     *  bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
     *  // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
     *
     *  // testnet legacy return no prefix
     *  bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
     *  // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
     *
     *  // tesnet cashaddr
     *  bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
     *  // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
     *
     *  // testnet cashaddr no prefix
     *  bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
     *  // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
     */
    toCashAddress(address: any, prefix?: boolean, regtest?: boolean): string;
    isLegacyAddress(address: any): any;
    isCashAddress(address: any): any;
    isXAddress(address: any): any;
    /**
     * @api SLP.Address.isSLPAddress() isSLPAddress()
     * @apiName isSLPAddress
     * @apiGroup SLP
     * @apiDescription Detect if slpAddr encoded address.
     *
     * @apiExample Example usage:
     *
     *  // mainnet slpaddr
     *  bchjs.SLP.Address.isSLPAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // true
     *
     *  // mainnet w/ no slpaddr prefix
     *  bchjs.SLP.Address.isSLPAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // true
     *
     *  // mainnet legacy
     *  bchjs.SLP.Address.isSLPAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
     *  // false
     *
     *  // testnet w/ slpaddr prefix
     *  bchjs.SLP.Address.isSLPAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // true
     *
     *  // testnet w/ no slpaddr prefix
     *  bchjs.SLP.Address.isSLPAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // true
     *
     *  // testnet legacy
     *  bchjs.SLP.Address.isSLPAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // false
     */
    isSLPAddress(address: any): boolean;
    /**
     * @api SLP.Address.isMainnetAddress() isMainnetAddress()
     * @apiName isMainnetAddress
     * @apiGroup SLP
     * @apiDescription Detect if mainnet address.
     *
     * @apiExample Example usage:
     *
     *  // mainnet cashaddr
     *  bchjs.SLP.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // true
     *
     *  // mainnet cashaddr w/ no prefix
     *  bchjs.SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // true
     *
     *  // mainnet slpaddr
     *  bchjs.SLP.Address.isMainnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // true
     *
     *  // mainnet slpaddr w/ no prefix
     *  bchjs.SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // true
     *
     *  // mainnet legacy
     *  bchjs.SLP.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     *  // true
     *
     *  // testnet cashaddr
     *  bchjs.SLP.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // false
     *
     *  // testnet w/ no cashaddr prefix
     *  bchjs.SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // false
     *
     *  // testnet slpaddr
     *  bchjs.SLP.Address.isMainnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // false
     *
     *  // testnet w/ no slpaddr prefix
     *  bchjs.SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // false
     *
     *  // testnet legacy
     *  bchjs.SLP.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // false
     */
    isMainnetAddress(address: any): any;
    /**
     * @api SLP.Address.isTestnetAddress() isTestnetAddress()
     * @apiName isTestnetAddress
     * @apiGroup SLP
     * @apiDescription Detect if testnet address.
     *
     * @apiExample Example usage:
     *  // cashaddr mainnet
     *  bchjs.SLP.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  //false
     *
     *  // w/ no cashaddr prefix
     *  bchjs.SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // false
     *
     *  // slpaddr mainnet
     *  bchjs.SLP.Address.isTestnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  //false
     *
     *  // w/ no slpaddr prefix
     *  bchjs.SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // false
     *
     *  // legacy mainnet
     *  bchjs.SLP.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     *  // false
     *
     *  // cashaddr testnet
     *  bchjs.SLP.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // true
     *
     *  // testnet w/ no cashaddr prefix
     *  bchjs.SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // true
     *
     *  // slpaddr testnet
     *  bchjs.SLP.Address.isTestnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // true
     *
     *  // testnet w/ no slpaddr prefix
     *  bchjs.SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // true
     *
     *  // testnet legacy
     *  bchjs.SLP.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // true
     */
    isTestnetAddress(address: any): any;
    /**
     * @api SLP.Address.isP2PKHAddress() isP2PKHAddress()
     * @apiName isP2PKHAddress
     * @apiGroup SLP
     * @apiDescription Detect if p2pkh address.
     *
     * @apiExample Example usage:
     *  // mainnet cashaddr
     *  bchjs.SLP.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // true
     *
     *  // mainnet w/ no cashaddr prefix
     *  bchjs.SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // true
     *
     *  // mainnet slpaddr
     *  bchjs.SLP.Address.isP2PKHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // true
     *
     *  // mainnet w/ no slpaddr prefix
     *  bchjs.SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // true
     *
     *  // legacy
     *  bchjs.SLP.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     *  // true
     *
     *  // cashaddr testnet
     *  bchjs.SLP.Address.isP2PKHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // true
     *
     *  // testnet w/ no cashaddr prefix
     *  bchjs.SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // true
     *
     *  // slpaddr testnet
     *  bchjs.SLP.Address.isP2PKHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // true
     *
     *  // testnet w/ no slpaddr prefix
     *  bchjs.SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // true
     *
     *  // legacy testnet
     *  bchjs.SLP.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // true
     */
    isP2PKHAddress(address: any): any;
    /**
     * @api SLP.Address.isP2SHAddress() isP2SHAddress()
     * @apiName isP2SHAddress
     * @apiGroup SLP
     * @apiDescription Detect if p2sh address.
     *
     * @apiExample Example usage:
     *  // mainnet cashaddr
     *  bchjs.SLP.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // false
     *
     *  // mainnet cashaddr w/ no prefix
     *  bchjs.SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // false
     *
     *  // mainnet slpaddr
     *  bchjs.SLP.Address.isP2SHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // false
     *
     *  // mainnet slpaddr w/ no prefix
     *  bchjs.SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // false
     *
     *  // mainnet legacy
     *  bchjs.SLP.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
     *  // false
     *
     *  // cashaddr testnet
     *  bchjs.SLP.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // false
     *
     *  // cashaddr testnet w/ no prefix
     *  bchjs.SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // false
     *
     *  // slpaddr testnet
     *  bchjs.SLP.Address.isP2SHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // false
     *
     *  // slpaddr testnet w/ no prefix
     *  bchjs.SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // false
     *
     *  // legacy testnet
     *  bchjs.SLP.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // false
     */
    isP2SHAddress(address: any): any;
    /**
     * @api SLP.Address.detectAddressNetwork() detectAddressNetwork()
     * @apiName detectAddressNetwork
     * @apiGroup SLP
     * @apiDescription Detect address network.
     *
     * @apiExample Example usage:
     *  // mainnet cashaddr
     *  bchjs.SLP.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // mainnet
     *
     *  // mainnet cashaddr w/ no prefix
     *  bchjs.SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // mainnet
     *
     *  // mainnet slpaddr
     *  bchjs.SLP.Address.detectAddressNetwork('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // mainnet
     *
     *  // mainnet slpaddr w/ no prefix
     *  bchjs.SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
     *  // mainnet
     *
     *  // mainnet legacy
     *  bchjs.SLP.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
     *  // mainnet
     *
     *  // cashaddr testnet
     *  bchjs.SLP.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // testnet
     *
     *  // cashaddr testnet w/ no prefix
     *  bchjs.SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // testnet
     *
     *  // slpaddr testnet
     *  bchjs.SLP.Address.detectAddressNetwork('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // testnet
     *
     *  // slpaddr testnet w/ no prefix
     *  bchjs.SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
     *  // testnet
     *
     *  // legacy testnet
     *  bchjs.SLP.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // testnet
     */
    detectAddressNetwork(address: any): any;
    _ensureValidAddress(address: any): void;
}
