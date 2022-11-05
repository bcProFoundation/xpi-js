export = Address;
declare class Address {
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
     * @api Address.toLegacyAddress() toLegacyAddress()
     * @apiName toLegacyAddress
     * @apiGroup Address
     * @apiDescription Convert cashaddr to legacy address format
     *
     * @apiExample Example usage:
     * // mainnet w/ prefix
     * bchjs.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
     * // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
     *
     * // mainnet w/ no prefix
     * bchjs.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
     * // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
     *
     * // testnet w/ prefix
     * bchjs.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // mqc1tmwY2368LLGktnePzEyPAsgADxbksi
     *
     * // testnet w/ no prefix
     * bchjs.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // mqc1tmwY2368LLGktnePzEyPAsgADxbksi
     */
    toLegacyAddress(address: any): any;
    /**
     * @api Address.toCashAddress() toCashAddress()
     * @apiName toCashAddress
     * @apiGroup Address
     * @apiDescription Convert legacy to cashAddress format
     *
     * @apiExample Example usage:
     * // mainnet
     * bchjs.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
     * // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     * // mainnet no prefix
     * bchjs.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
     * // qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
     *
     * // tesnet
     * bchjs.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
     * // bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
     *
     * // testnet no prefix
     * bchjs.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
     * // qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
     */
    toCashAddress(address: any, prefix?: boolean, regtest?: boolean): any;
    /**
     * @api Address.toXddress() toXAddress()
     * @apiName toXAddress
     * @apiGroup Address
     * @apiDescription Convert legacy to cashAddress format
     *
     * @apiExample Example usage:
     * // mainnet
     * bchjs.Address.toXAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
     * // lotus_16PSJNj8qQUiF2nqfBNGNXk9bzL1ycs7ebawJiAjT
     */
    toXAddress(address: any, regtest?: boolean): any;
    toHash160(address: any): any;
    /**
     * @api Address.hash160ToLegacy() hash160ToLegacy()
     * @apiName hash160ToLegacy
     * @apiGroup Address
     * @apiDescription Convert hash160 to legacy address.
     *
     * @apiExample Example usage:
     * // legacy mainnet p2pkh
     * bchjs.Address.hash160ToLegacy("573d93b475be4f1925f3b74ed951201b0147eac1")
     * // 18xHZ8g2feo4ceejGpvzHkvXT79fi2ZdTG
     *
     * // legacy mainnet p2sh
     * bchjs.Address.hash160ToLegacy("7dc85da64d1d93ef01ef62e0221c02f512e3942f", 0x05)
     * // 3DA6RBcFgLwLTpnF6BRAee8w6a9H6JQLCm
     *
     * // legacy testnet p2pkh
     * bchjs.Address.hash160ToLegacy("155187a3283b08b30519db50bc23bbba9f4b6657", 0x6f)
     * // mhTg9sgNgvAGfmJs192oUzQWqAXHH5nqLE
     */
    hash160ToLegacy(hash160: any, network?: any): any;
    /**
     * @api Address.hash160ToCash() hash160ToCash()
     * @apiName hash160ToCash
     * @apiGroup Address
     * @apiDescription Convert hash160 to cash address.
     *
     * @apiExample Example usage:
     * bchjs.Address.hash160ToCash("573d93b475be4f1925f3b74ed951201b0147eac1")
     * 'bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh'
     * bchjs.Address.hash160ToCash("7dc85da64d1d93ef01ef62e0221c02f512e3942f", 0x05)
     * 'bitcoincash:pp7ushdxf5we8mcpaa3wqgsuqt639cu59ur5xu5fug'
     * bchjs.Address.hash160ToCash("155187a3283b08b30519db50bc23bbba9f4b6657", 0x6f)
     * 'bchtest:qq24rpar9qas3vc9r8d4p0prhwaf7jmx2u22nzt946'
     */
    hash160ToCash(hash160: any, network?: any, regtest?: boolean): any;
    _decode(address: any): any;
    _decodeLegacyAddress(address: any): {
        prefix: string;
        type: string;
        hash: any;
        format: string;
    };
    _decodeCashAddress(address: any): any;
    _decodeXAddress(address: any): import("@bcpros/xaddress").XAddress;
    _encodeAddressFromHash160(address: any): any;
    /**
     * @api Address.isLegacyAddress() isLegacyAddress()
     * @apiName isLegacyAddress
     * @apiGroup Address
     * @apiDescription Detect if legacy base58check encoded address.
     *
     * @apiExample Example usage:
     *  // cashaddr
     * bchjs.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // false
     *
     * // w/ no cashaddr prefix
     * bchjs.Address.isLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
     * // false
     *
     * // legacy
     * bchjs.Address.isLegacyAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
     * // true
     *
     * // testnet w/ cashaddr prefix
     * bchjs.Address.isLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // false
     *
     * // testnet w/ no cashaddr prefix
     * bchjs.Address.isLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // false
     *
     * // legacy testnet
     * bchjs.Address.isLegacyAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     * // true
     */
    isLegacyAddress(address: any): boolean;
    /**
     * @api Address.isCashAddress() isCashAddress()
     * @apiName isCashAddress
     * @apiGroup Address
     * @apiDescription Detect if cashAddr encoded address.
     *
     * @apiExample Example usage:
     * // mainnet cashaddr
     * bchjs.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // true
     *
     * // mainnet w/ no cashaddr prefix
     * bchjs.Address.isCashAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // true
     *
     * // mainnet legacy
     * bchjs.Address.isCashAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
     * // false
     *
     * // testnet w/ cashaddr prefix
     * bchjs.Address.isCashAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // true
     *
     * // testnet w/ no cashaddr prefix
     * bchjs.Address.isCashAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // true
     *
     * // testnet legacy
     * bchjs.Address.isCashAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     * // false
     */
    isCashAddress(address: any): boolean;
    /**
     * @api Address.isXAddress() isXAddress()
     * @apiName isXAddress
     * @apiGroup Address
     * @apiDescription Detect if xAddr encoded address.
     *
     * @apiExample Example usage:
     * // mainnet cashaddr
     * bchjs.Address.isXAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // false
     *
     * // mainnet w/ no cashaddr prefix
     * bchjs.Address.isXAddress('lotus_1PrR2xSL3xqNhu1nhDME4tjDijtxHRBkFwzvFE')
     * // true
     *
     * // mainnet legacy
     * bchjs.Address.isXAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
     * // false
     *
     */
    isXAddress(address: any): boolean;
    /**
     * @api Address.isHash160() isHash160()
     * @apiName isHash160
     * @apiGroup Address
     * @apiDescription Detect if an addess is a hash160.
     *
     * @apiExample Example usage:
     *  let hash160Address = '428df38e23fc879a25819427995c3e6355b12d33';
     *  bchjs.Address.isHash160(hash160Address);
     *  // true
     *
     *  let notHash160Address = 'bitcoincash:pz8a837lttkvjksg0jjmmulqvfkgpqrcdgufy8ns5s';
     *  bchjs.Address.isHash160(notHash160Address);
     *  // false
     */
    isHash160(address: any): boolean;
    /**
     * @api Address.isMainnetAddress() isMainnetAddress()
     * @apiName isMainnetAddress
     * @apiGroup Address
     * @apiDescription Detect if mainnet address .
     *
     * @apiExample Example usage:
     *  // mainnet cashaddr
     * bchjs.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // true
     *
     * // mainnet cashaddr w/ no prefix
     * bchjs.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // true
     *
     * // mainnet legacy
     * bchjs.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     * // true
     *
     * // testnet cashaddr
     * bchjs.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // false
     *
     * // testnet w/ no cashaddr prefix
     * bchjs.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // false
     *
     * // testnet legacy
     * bchjs.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     * // false
     */
    isMainnetAddress(address: any): boolean;
    /**
     * @api Address.isTestnetAddress() isTestnetAddress()
     * @apiName isTestnetAddress
     * @apiGroup Address
     * @apiDescription Detect if testnet address.
     *
     * @apiExample Example usage:
     *   // cashaddr mainnet
     * bchjs.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * //false
     *
     * // w/ no cashaddr prefix
     * bchjs.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // false
     *
     * // legacy mainnet
     * bchjs.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     * // false
     *
     * // cashaddr testnet
     * bchjs.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // true
     *
     * // testnet w/ no cashaddr prefix
     * bchjs.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // true
     *
     * // testnet legacy
     * bchjs.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     * // true
     */
    isTestnetAddress(address: any): boolean;
    /**
     * @api Address.isRegTestAddress() isRegTestAddress()
     * @apiName isRegTestAddress
     * @apiGroup Address
     * @apiDescription Detect if regtest address.
     *
     * @apiExample Example usage:
     *   // regtest
     * bchjs.Address.isRegTestAddress('bchreg:qzq9je6pntpva3wf6scr7mlnycr54sjgequ54zx9lh')
     * // true
     *
     * // regtest w/ no prefix
     * bchjs.Address.isRegTestAddress('qzq9je6pntpva3wf6scr7mlnycr54sjgequ54zx9lh')
     * // true
     *
     * // cashaddr mainnet
     * bchjs.Address.isRegTestAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * //false
     *
     * // w/ no cashaddr prefix
     * bchjs.Address.isRegTestAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     * // false
     *
     * // legacy mainnet
     * bchjs.Address.isRegTestAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     * // false
     *
     * // cashaddr testnet
     * bchjs.Address.isRegTestAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // false
     *
     * // testnet w/ no cashaddr prefix
     * bchjs.Address.isRegTestAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     * // false
     */
    isRegTestAddress(address: any): boolean;
    /**
     * @api Address.isP2PKHAddress() isP2PKHAddress()
     * @apiName isP2PKHAddress
     * @apiGroup Address
     * @apiDescription Detect if p2pkh address.
     *
     * @apiExample Example usage:
     *   // cashaddr
     *  bchjs.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // true
     *
     *  // w/ no cashaddr prefix
     *  bchjs.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // true
     *
     *  // legacy
     *  bchjs.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
     *  // true
     *
     *  // legacy testnet
     *  bchjs.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // true
     *
     *  // testnet w/ no cashaddr prefix
     *  bchjs.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // true
     *
     *  // legacy testnet
     *  bchjs.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // true
     */
    isP2PKHAddress(address: any): boolean;
    /**
     * @api Address.isP2SHAddress() isP2SHAddress()
     * @apiName isP2SHAddress
     * @apiGroup Address
     * @apiDescription Detect if p2sh address.
     *
     * @apiExample Example usage:
     *   // cashaddr
     *  bchjs.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // false
     *
     *  // cashaddr w/ no prefix
     *  bchjs.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // false
     *
     *  // legacy
     *  bchjs.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
     *  // false
     *
     *  // cashaddr testnet
     *  bchjs.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // false
     *
     *  // cashaddr testnet w/ no prefix
     *  bchjs.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // false
     *
     *  // legacy testnet
     *  bchjs.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // false
     */
    isP2SHAddress(address: any): boolean;
    /**
     * @api Address.detectAddressFormat() detectAddressFormat()
     * @apiName detectAddressFormat
     * @apiGroup Address
     * @apiDescription Detect address format.
     *
     * @apiExample Example usage:
     *   // cashaddr
     *  bchjs.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // cashaddr
     *
     *  // cashaddr w/ no prefix
     *  bchjs.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // cashaddr
     *
     *  // legacy
     *  bchjs.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
     *  // legacy
     *
     *  // cashaddr testnet
     *  bchjs.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // cashaddr
     *
     *  // cashaddr testnet w/ no prefix
     *  bchjs.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // cashaddr
     *
     *  // legacy testnet
     *  bchjs.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // legacy
     */
    detectAddressFormat(address: any): any;
    /**
     * @api Address.detectAddressNetwork() detectAddressNetwork()
     * @apiName detectAddressNetwork
     * @apiGroup Address
     * @apiDescription Detect address network.
     *
     * @apiExample Example usage:
     *   // cashaddr
     *  bchjs.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // mainnet
     *
     *  // cashaddr w/ no prefix
     *  bchjs.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
     *  // mainnet
     *
     *  // legacy
     *  bchjs.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
     *  // mainnet
     *
     *  // cashaddr testnet
     *  bchjs.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // testnet
     *
     *  // cashaddr testnet w/ no prefix
     *  bchjs.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
     *  // testnet
     *
     *  // legacy testnet
     *  bchjs.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
     *  // testnet
     */
    detectAddressNetwork(address: any): "testnet" | "mainnet" | "regtest";
    /**
     * @api Address.detectAddressType() detectAddressType()
     * @apiName detectAddressType
     * @apiGroup Address
     * @apiDescription Detect address type.
     *
     * @apiExample Example usage:
     *   // cashaddr
     *  bchjs.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
     *  // p2pkh
     *
     *  // cashaddr w/ no prefix
     *  bchjs.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
     *  // p2pkh
     *
     *  // legacy
     *  bchjs.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
     *  // p2pkh
     *
     *  // cashaddr testnet
     *  bchjs.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
     *  // p2pkh
     *
     *  // cashaddr testnet w/ no prefix
     *  bchjs.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
     *  // p2pkh
     *
     *  // legacy testnet
     *  bchjs.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
     *  // p2pkh
     */
    detectAddressType(address: any): any;
    /**
     * @api Address.fromXPub() fromXPub()
     * @apiName fromXPub
     * @apiGroup Address
     * @apiDescription Generates an address for an extended public key (xpub).
     *
     * @apiExample Example usage:
     *   // generate 5 mainnet external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
     *  let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
     *  for(let i = 0; i <= 4; i++) {
     *    console.log(bchjs.Address.fromXPub(xpub, "0/" + i))
     *  }
     *  // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
     *  // bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
     *  // bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
     *  // bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
     *  // bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l
     *
     *  // generate 5 testnet external change addresses for tpubDCrnMSKwDMAbxg82yqDt97peMvftCXk3EfBb9WgZh27mPbHGkysU3TW7qX5AwydmnVQfaGeNhUR6okQ3dS5AJTP9gEP7jk2Wcj6Xntc6gNh
     *  let xpub = 'tpubDCrnMSKwDMAbxg82yqDt97peMvftCXk3EfBb9WgZh27mPbHGkysU3TW7qX5AwydmnVQfaGeNhUR6okQ3dS5AJTP9gEP7jk2Wcj6Xntc6gNh';
     *  for(let i = 0; i <= 4; i++) {
     *    console.log(bchjs.Address.fromXPub(xpub, "0/" + i))
     *  }
     *  // bchtest:qrth8470sc9scek9u0jj2d0349t62gxzdstw2jukl8
     *  // bchtest:qpm56zc5re0nhms96r7p985aajthp0vxvg6e4ux3kc
     *  // bchtest:qqtu3tf6yyd73ejhk3a2ylqynpl3mzzhwuzt299jfd
     *  // bchtest:qzd7dvlnfukggjqsf5ju0qqwwltakfumjsck33js6m
     *  // bchtest:qq322ataqeas4n0pdn4gz2sdereh5ae43ylk4qdvus
     */
    fromXPub(xpub: any, path?: string): any;
    /**
     * @api Address.fromOutputScript() fromOutputScript()
     * @apiName fromOutputScript
     * @apiGroup Address
     * @apiDescription Detect an addess from an OutputScript..
     *
     * @apiExample Example usage:
     *  const script = bchjs.Script.encode([
     *    Buffer.from("BOX", "ascii"),
     *    bchjs.Script.opcodes.OP_CAT,
     *    Buffer.from("BITBOX", "ascii"),
     *    bchjs.Script.opcodes.OP_EQUAL
     *  ]);
     *  const p2sh_hash160 = bchjs.Crypto.hash160(script);
     *  const scriptPubKey = bchjs.Script.scriptHash.output.encode(p2sh_hash160);
     *
     *  // mainnet address from output script
     *  bchjs.Address.fromOutputScript(scriptPubKey);
     *  // bitcoincash:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqncnufkrl
     *
     *  // testnet address from output script
     *  bchjs.Address.fromOutputScript(scriptPubKey, 'testnet');
     *  // bchtest:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqh2hmtpyr
     */
    fromOutputScript(scriptPubKey: any, network?: string): any;
}
