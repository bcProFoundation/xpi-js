export = IPFS;
declare class IPFS {
    constructor(config: any);
    IPFS_API: string;
    axiosOptions: {
        headers: {
            timeout: number;
        };
    };
    initUppy(): import("@uppy/core").Uppy<import("@uppy/core").TypeChecking>;
    /**
     * @api IPFS.createFileModelServer()  createFileModelServer()
     * @apiName createFileModelServer()
     * @apiGroup IPFS
     * @apiDescription Creates a new model on the server. If successful, will
     * return an object with file data. That object contains a BCH address,
     * payment amount, and _id required to be able to upload a file.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const path = `${__dirname}/ipfs.js`
     *     let fileData = await bchjs.IPFS.createFileModelServer(path);
     *     console.log(fileData);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * {
     *   "success": true,
     *   "hostingCostBCH": 0.00004197,
     *   "hostingCostUSD": 0.01,
     *   "file": {
     *   "payloadLink": "",
     *   "hasBeenPaid": false,
     *   "_id": "5ec562319bfacc745e8d8a52",
     *   "schemaVersion": 1,
     *   "size": 4458,
     *   "fileName": "ipfs.js",
     *   "fileExtension": "js",
     *   "createdTimestamp": "1589994033.655",
     *   "hostingCost": 4196,
     *   "walletIndex": 49,
     *   "bchAddr": "bchtest:qzrpkevu7h2ayfa4rjx08r5elvpfu72dg567x3mh3c",
     *   "__v": 0
     * }
     */
    createFileModelServer(path: any): Promise<any>;
    /**
     * @api IPFS.uploadFileServer()  uploadFileServer()
     * @apiName uploadFile()
     * @apiGroup IPFS
     * @apiDescription Upload a file to the FullStack.cash IPFS server. If
     * successful, it will return an object with an ID, a BCH address, and an
     * amount of BCH to pay.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const path = `${__dirname}/ipfs.js`
     *     let fileData = await bchjs.IPFS.uploadFileServer(path, "5ec562319bfacc745e8d8a52");
     *     console.log(fileData);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * {
     *   "schemaVersion": 1,
     *   "size": 2374,
     *   "fileId": "5ec562319bfacc745e8d8a52",
     *   "fileName": "ipfs.js",
     *   "fileExtension": "js"
     * }
     */
    uploadFileServer(path: any, modelId: any): Promise<false | {
        schemaVersion: number;
        size: any;
        fileId: any;
        fileName: any;
        fileExtension: any;
    }>;
    /**
     * @api IPFS.getStatus()  getStatus()
     * @apiName getStatus()
     * @apiGroup IPFS
     * @apiDescription Gets the status of the uploaded file. Will return an object
     * that indicates the payment status. If the file is paid, it should contain
     * an IPFS hash.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const modelId = "5ec7392c2acfe57aa62e945a"
     *     let fileData = await bchjs.IPFS.getStatus(modelId)
     *     console.log(fileData)
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * {
     *    "hasBeenPaid": true,
     *    "satCost": 4403,
     *    "bchAddr": "bchtest:qz5z82u0suqh80x5tfx4ht8kdrkkw664vcy44uz0wk",
     *    "ipfsHash": "QmRDHPhY5hCNVRMVQvS2H9uty8P1skdwgLaHpUAkEvsjcE",
     *    "fileId": "5ec7392c2acfe57aa62e945a",
     *    "fileName": "ipfs-e2e.js"
     * }
     */
    getStatus(modelId: any): Promise<{
        hasBeenPaid: any;
        satCost: any;
        bchAddr: any;
        ipfsHash: any;
        fileId: any;
        fileName: any;
    }>;
    /**
     * @api IPFS.createFileModelWeb()  createFileModelWeb()
     * @apiName createFileModelWeb()
     * @apiGroup IPFS
     * @apiDescription Creates a new model on the server. If successful, will
     * return an object with file data. That object contains a BCH address,
     * payment amount, and _id required to be able to upload a file.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *     const content = ['PSF']
     *     const name = 'psf.txt' // Content can be Array , ArrayBuffer , Blob
     *     const options = { type: "text/plain" }
     *     const file =  new File(content,name,options)
     *     let fileData = await bchjs.IPFS.createFileModelWeb(file);
     *     console.log(fileData);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * {
     *   "success": true,
     *   "hostingCostBCH": 0.00004197,
     *   "hostingCostUSD": 0.01,
     *   "file": {
     *   "payloadLink": "",
     *   "hasBeenPaid": false,
     *   "_id": "5ec562319bfacc745e8d8a52",
     *   "schemaVersion": 1,
     *   "size": 4458,
     *   "fileName": "ipfs.js",
     *   "fileExtension": "js",
     *   "createdTimestamp": "1589994033.655",
     *   "hostingCost": 4196,
     *   "walletIndex": 49,
     *   "bchAddr": "bchtest:qzrpkevu7h2ayfa4rjx08r5elvpfu72dg567x3mh3c",
     *   "__v": 0
     * }
     */
    createFileModelWeb(file: any): Promise<any>;
    /**
     * @api IPFS.uploadFileWeb()  uploadFileWeb()
     * @apiName uploadFileWeb()
     * @apiGroup IPFS
     * @apiDescription Upload a file to the FullStack.cash IPFS server. If
     * successful, it will return an object with an ID, a BCH address, and an
     * amount of BCH to pay.
     *
     * @apiExample Example usage:
     * (async () => {
     *   try {
     *    *     const content = ['PSF']
     *     const name = 'psf.txt' // Content can be Array , ArrayBuffer , Blob
     *     const options = { type: "text/plain" }
     *     const file =  new File(content,name,options)
     *     let fileData = await bchjs.IPFS.uploadFile(file, "5ec562319bfacc745e8d8a52");
     *     console.log(fileData);
     *   } catch(error) {
     *    console.error(error)
     *   }
     * })()
     *
     * {
     *   "schemaVersion": 1,
     *   "size": 2374,
     *   "fileId": "5ec562319bfacc745e8d8a52",
     *   "fileName": "ipfs.js",
     *   "fileExtension": "js"
     * }
     */
    uploadFileWeb(file: any, modelId: any): Promise<false | {
        schemaVersion: number;
        size: any;
        fileId: any;
        fileName: any;
        fileExtension: any;
    }>;
}
