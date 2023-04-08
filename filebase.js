const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: '4BF1F0158C7F6A71E067',
    secretAccessKey: 'DkdcmLHHkJNcUC5eBCMnHDJ1UlrFNREBwqImhkxu',
    endpoint: 'https://s3.filebase.com',
    region: 'us-east-1',
    signatureVersion: 'v4',
});

fs.readFile('a.png', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const params = {
        Bucket: 'narutovengersheavendemo',
        Key: 'demo',
        Body: data,
    };
    
    const request = s3.putObject(params);
    request.on('httpHeaders', (statusCode, headers) => {
        console.log(`CID: ${headers['x-amz-meta-cid']}`);
    });
    request.send();
});