/// <reference types="safe-buffer" />
export = Mnemonic;
declare class Mnemonic {
    constructor(address: any);
    _address: any;
    /**
     * @api Mnemonic.generate() generate()
     * @apiName generate
     * @apiGroup Mnemonic
     * @apiDescription
     * Generate BIP39 mnemonic from entropy.
     *
     * @apiExample Example usage:
     * // generate 12 word mnemonic
     * bchjs.Mnemonic.generate(128);
     * // boil lonely casino manage habit where total glory muffin name limit mansion
     *
     * // generate 15 word mnemonic
     * bchjs.Mnemonic.generate(160);
     * // steak prevent estate save dance design close noise cheap season among train sleep ketchup gas
     *
     * // generate 18 word mnemonic
     * bchjs.Mnemonic.generate(192);
     * // fever endorse purpose normal fashion desert blood robust prevent clean guard display raise virtual again unit banana rich
     *
     * // generate 21 word mnemonic
     * bchjs.Mnemonic.generate(224);
     * // scan pink shock describe chicken edit budget exit camera morning awesome silk inner pair sea few flock walnut write mountain surface
     *
     * // generate 24 word mnemonic
     * bchjs.Mnemonic.generate(256);
     * // disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid
     *
     * // generate 12 french word mnemonic
     * bchjs.Mnemonic.generate(128, bitbox.Mnemonic.wordLists().french);
     * // annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne
     *
     * // generate 256 bit korean word mnemonic
     * bchjs.Mnemonic.generate(256, bitbox.Mnemonic.wordLists().korean)
     * // 기능 단추 교육 비난 시집 근육 운동 코미디 숟가락 과목 한동안 유적 시리즈 삼월 앞날 유난히 흰색 사실 논문 장사 어른 논문 의논 장차
     */
    generate(bits?: number, wordlist?: any): string;
    /**
     * @api Mnemonic.fromEntropy() fromEntropy()
     * @apiName fromEntropy
     * @apiGroup Mnemonic
     * @apiDescription
     * Create mnemonic from entropy.
     *
     * @apiExample Example usage:
     * // generate 16 bytes of entropy
     * let entropy = bchjs.Crypto.randomBytes(16);
     * //
     * // turn entropy to 12 word mnemonic
     * bchjs.Mnemonic.fromEntropy(entropy)
     * // security question relief cruel nephew jump chest copper axis assist gift correct
     *
     * // generate 20 bytes of entropy
     * let entropy = bchjs.Crypto.randomBytes(20);
     * //
     * // turn entropy to 15 word mnemonic
     * bchjs.Mnemonic.fromEntropy(entropy)
     * // impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt
     *
     * // generate 24 bytes of entropy
     * let entropy = bchjs.Crypto.randomBytes(24);
     * //
     * // turn entropy to 18 word mnemonic
     * bchjs.Mnemonic.fromEntropy(entropy)
     * // bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real
     *
     * // generate 28 bytes of entropy
     * let entropy = bchjs.Crypto.randomBytes(28);
     * //
     * // turn entropy to 21 word mnemonic
     * bchjs.Mnemonic.fromEntropy(entropy)
     * // orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel
     *
     * // generate 32 bytes of entropy
     * let entropy = bchjs.Crypto.randomBytes(32);
     * //
     * // turn entropy to 24 word mnemonic
     * bchjs.Mnemonic.fromEntropy(entropy)
     * // vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property
     *
     * // generate 16 bytes of entropy
     * let entropy = bchjs.Crypto.randomBytes(16);
     * //
     */
    fromEntropy(bytes: any, wordlist: any): string;
    /**
     * @api Mnemonic.toEntropy() toEntropy()
     * @apiName toEntropy
     * @apiGroup Mnemonic
     * @apiDescription
     * Turn mnemonic to entropy.
     *
     * @apiExample Example usage:
     * // turn 12 word mnemonic to entropy
     * let mnemonic = 'security question relief cruel nephew jump chest copper axis assist gift correct';
     * bchjs.Mnemonic.toEntropy(mnemonic)
     * // <Buffer c2 d5 f2 d5 1a 49 44 f1 c9 e1 7f 10 e1 b9 87 18>
     *
     * // turn 15 word mnemonic to entropy
     * let mnemonic = 'impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt';
     * bchjs.Mnemonic.toEntropy(mnemonic)
     * // <Buffer 71 cd d2 85 75 53 48 07 b1 b4 77 86 9c 72 6a 81 6b b1 fe 1b>
     *
     * // turn 18 word mnemonic to entropy
     * let mnemonic = 'bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real';
     * bchjs.Mnemonic.toEntropy(mnemonic)
     * // <Buffer 16 15 e8 a1 c4 2d c0 08 ac f0 3d 4a 8d 4a 60 46 7d 29 a1 b8 c5 23 27 56>
     *
     * // turn 21 word mnemonic to entropy
     * let mnemonic = 'orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel';
     * bchjs.Mnemonic.toEntropy(mnemonic)
     * // <Buffer 9c 17 b1 86 cc fd dd 4a a1 31 4e 1c 3f 0f 86 e6 05 79 87 0c b5 d9 3f a6 c1 00 ed b1>
     *
     * // turn 24 word mnemonic to entropy
     * let mnemonic = 'vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property';
     * bchjs.Mnemonic.toEntropy(mnemonic)
     * // <Buffer f3 79 da 02 cc 42 6e 6e 26 43 0d 25 e6 cc 37 2d fd 0a 1a 2e 4a 33 ac 4d c6 ae 6d 56 01 7f 64 2d>
     */
    toEntropy(mnemonic: any, wordlist: any): import("safe-buffer").Buffer;
    /**
     * @api Mnemonic.validate() validate()
     * @apiName validate
     * @apiGroup Mnemonic
     * @apiDescription
     * Validate mnemonic.
     *
     * @apiExample Example usage:
     * bchjs.Mnemonic.validate('ca', bchjs.Mnemonic.wordLists().english)
     * // ca is not in wordlist, did you mean cabbage?
     *
     * bchjs.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion', bitbox.Mnemonic.wordLists().english)
     * // Valid mnemonic
     *
     * bchjs.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion boil lonely casino manage habit where total glory muffin name limit mansion', bitbox.Mnemonic.wordLists().english)
     * // Invalid mnemonic
     */
    validate(mnemonic: any, wordlist: any): string;
    /**
     * @api Mnemonic.toSeed() toSeed()
     * @apiName toSeed
     * @apiGroup Mnemonic
     * @apiDescription
     * Create root seed from mnemonic. Returns a Promise.
     *
     * @apiExample Example usage:
     * await bchjs.Mnemonic.toSeed('enable stem left method one submit coach bid inspire cluster armed bracket')
     * // <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >
     *
     * await bchjs.Mnemonic.toSeed('vendor talk alone sick balance tissue number armor frequent plug transfer chest', 'password');
     * // <Buffer 2d a5 46 52 36 a4 1c 90 bf c5 38 c9 78 16 03 26 1f 70 7c 67 44 aa e0 97 fa 96 1b a1 23 16 a0 e2 0c f6 ac b6 09 cc 2f af 9a 99 50 b3 f9 a9 be c9 f4 19 ... >
     *
     * await bchjs.Mnemonic.toSeed('idea relax weird defense body bronze champion ancient vocal peanut similar dose grit company peasant gate sunset deal library act include penalty annual main', '');
     * // <Buffer c1 56 36 5b 0f 2a 16 04 dd 6f 53 ad 7d 0a 4c 14 ba 38 f9 81 fb 18 0f df c3 14 6e 6a fc d8 af 2f 1f c4 2c b2 d3 65 8a 31 2e a8 48 59 12 bd f0 f1 8d e4 ... >
     *
     * await bchjs.Mnemonic.toSeed('bus aware census desk orphan zebra fashion host try muscle pig close jealous slice elegant prison reject ship great program trumpet syrup tray remove', '');
     * // <Buffer f4 2c e8 e1 88 d1 5a 66 5c 18 c0 cf ae df 09 3c 75 d2 4c 47 9d 52 87 f4 be c0 6b 13 e7 da 04 01 a3 50 36 87 22 1f ee cf c8 57 e8 6e ae bb 17 4b 83 60 ... >
     *
     * await bchjs.Mnemonic.toSeed('frost deliver coin clutch upon round scene wonder various wise luggage country', 'yayayayay');
     * // <Buffer 1d 00 9f a3 a8 86 51 a4 04 d5 03 3d eb 6d b1 01 e2 f1 3b c3 c8 6d 1f b9 93 b4 d1 33 dc 84 21 12 2c 9b 52 10 ba d8 96 15 e0 b0 9a 34 33 52 f8 07 c8 c4 ... >
     */
    toSeed(mnemonic: any, password?: string): Promise<Buffer>;
    /**
     * @api Mnemonic.wordLists() wordLists()
     * @apiName wordLists
     * @apiGroup Mnemonic
     * @apiDescription
     * Return mnemonic word lists.
     *
     * @apiExample Example usage:
     * bchjs.Mnemonic.wordLists();
     * // {
     * //   EN: [],
     * //   JA: [],
     * //   chinese_simplified: [],
     * //   chinese_traditional: [],
     * //   english: [],
     * //   french: [],
     * //   italian: [],
     * //   japanese: [],
     * //   korean: [],
     * //   spanish: []
     * // }
     */
    wordLists(): {
        [index: string]: string[];
    };
    /**
     * @api Mnemonic.toKeypairs() toKeypairs()
     * @apiName toKeypairs
     * @apiGroup Mnemonic
     * @apiDescription
     * Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: m/44’/145’/0’/0/n
     *
     * @apiExample Example usage:
     * // First create a mnemonic from 32 bytes of random entropy
     * let entropy = bchjs.Crypto.randomBytes(32);
     * // <Buffer bd 94 ad 86 be 19 5e 6c 51 b1 aa 52 b3 61 0b f8 9a 5d db 43 ac ee 8a ea 3a 38 6c ac 75 9e b5 42>
     * let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
     * // rural pistol giant label nominee curtain egg crystal famous only drill van place unit attitude oven memory fade mix sun shrug soon steak easily
     *
     * // Then call toKeypairs and pass in your mnemonic and how many keypairs you'd like
     * bchjs.Mnemonic.toKeypairs(mnemonic, 5)
     * // [ { privateKeyWIF: 'KwuSgSuV6m3U1oahRQEhSQ6e4gRE6LZXNGDTETGPGotKQJdH7ADd',
     * //     address: 'bitcoincash:qqvk7aculs8r6t29pj23de35t43tupks2ua6wmc2hy' },
     * //   { privateKeyWIF: 'L34pfoBm2swLBX5vAx1ReeYbSnpsvu7DRVaiLW8e9wNEJw5p3mV5',
     * //     address: 'bitcoincash:qzt8ju6au2075cpzrhzwe5n96ycqnurarur5k92nd5' },
     * //   { privateKeyWIF: 'L2nCRgDzmTRrQzSssFvVA7xiYHBJyfj62jdDwu1bTjHKVoLGxsqs',
     * //     address: 'bitcoincash:qpdjwtyvqqaapykxr3pr6cty4gpww30aucam9l0qzn' },
     * //   { privateKeyWIF: 'KyDLLa4RZKhnBP78Ue6557B55Jmffu1y8mH8p8WKA12knJUjiq4u',
     * //     address: 'bitcoincash:qq8kee4k4h9fn22xya9p5u203vg69aat3usqdvkdkn' },
     * //   { privateKeyWIF: 'L5gB66JqhfouEtZG5aRMQ9JaVS2ggkK3YozGfzZegBupaPXqdfaz',
     * //     address: 'bitcoincash:qphwlpu2wzjxrjts94pn4wh778fwsu2afg2aj5her9' } ]
     */
    toKeypairs(mnemonic: any, numberOfKeypairs?: number, regtest?: boolean): Promise<{
        privateKeyWIF: any;
        address: any;
    }[]>;
    /**
     * @api Mnemonic.findNearestWord() findNearestWord()
     * @apiName findNearestWord
     * @apiGroup Mnemonic
     * @apiDescription
     * Returns nearest matching word from provided word list.
     *
     * @apiExample Example usage:
     * // english
     * let word = 'ab';
     * let wordlist = bchjs.Mnemonic.wordLists().english;
     * bchjs.Mnemonic.findNearestWord(word, wordlist);
     * // abandon
     *
     * // french
     * let word = 'octu';
     * let wordlist = bchjs.Mnemonic.wordLists().french;
     * bchjs.Mnemonic.findNearestWord(word, wordlist);
     * // octupler
     *
     * // spanish
     * let word = 'foobaro';
     * let wordlist = bchjs.Mnemonic.wordLists().spanish;
     * bchjs.Mnemonic.findNearestWord(word, wordlist);
     * // forro
     *
     * // italian
     * let word = 'nv';
     * let wordlist = bchjs.Mnemonic.wordLists().italian;
     * bchjs.Mnemonic.findNearestWord(word, wordlist);
     * // neve
     */
    findNearestWord(word: any, wordlist: any): any;
}
