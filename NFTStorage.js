const { NFTStorage, File } = require('nft.storage')
const fs = require('fs');
const mime = require('mime')
const path = require("path")
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdCYzczYWIwODI4NDVhNDkzZGIwOTdmMThlYkYyRGY4ZjFmNTg2ZDEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODUxNTUyOTkxNCwibmFtZSI6ImRlbW8ifQ.3QqRe8aN46hqawDq9y6eiK3UUsxO88qsr8rCHCXULgE'

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

async function storeNFT(imagePath,name) {
   
     const image = await fileFromPath(imagePath)

        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
        const cid = await nftstorage.store({
            image,
            name:"demo",
            description:"demo"
        })
    
    console.log(cid);
}
storeNFT("a.png");