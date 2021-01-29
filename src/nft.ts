
export function NftGallery():void {
  // NFT #1 AAVe --------------------------------------------------------------------------------|

const nft1 = new Entity()
const nft1shape = new NFTShape(
  "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/37195",
  {
    // color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
)
nft1.addComponent(nft1shape)
nft1.addComponent(
  new Transform({
    position: new Vector3(5, 3, 13),
    scale: new Vector3(4,4,4),
  })
)

nft1.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/37195"
    )
  })
)
engine.addEntity(nft1)


// NFT #2 UNI cartiride --------------------------------------------------------------------------------|

const nft2 = new Entity()
const nft2shape = new NFTShape(
  "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/33358",
  {
    // color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
)
nft2.addComponent(nft2shape)
nft2.addComponent(
  new Transform({
    position: new Vector3(8, 3, 13),
    scale: new Vector3(4,4,4),
  })
)

nft2.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/33358"
    )
  })
)
engine.addEntity(nft2)


// NFT #3 BTC cartiride --------------------------------------------------------------------------------|

const nft3 = new Entity()
const nft3shape = new NFTShape(
  "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/8",
  {
    // color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
)
nft3.addComponent(nft3shape)
nft3.addComponent(
  new Transform({
    position: new Vector3(11, 3, 13),
    scale: new Vector3(4,4,4),
  })
)

nft3.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/8"
    )
  })
)
engine.addEntity(nft3)


// NFT #4 Beeple --------------------------------------------------------------------------------|

const nft4 = new Entity()
const nft4shape = new NFTShape(
  "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/30"
  {
    // color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
)
nft4.addComponent(nft4shape)
nft4.addComponent(
  new Transform({
    position: new Vector3(5, 6.5, 13),
    scale: new Vector3(4,4,4),
  })
)

nft4.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/30"
    )
  })
)
engine.addEntity(nft4)


// NFT #5 Onlifans --------------------------------------------------------------------------------|

const nft5 = new Entity()
const nft5shape = new NFTShape(
  "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/25"
  {
    // color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
)
nft5.addComponent(nft5shape)
nft5.addComponent(
  new Transform({
    position: new Vector3(8, 6.5, 13),
    scale: new Vector3(4,4,4),
  })
)

nft5.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/25"
    )
  })
)
engine.addEntity(nft5)


// NFT #6 Unisuit --------------------------------------------------------------------------------|

const nft6 = new Entity()
const nft6shape = new NFTShape(
  "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/140"
  {
    // color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
)
nft6.addComponent(nft6shape)
nft6.addComponent(
  new Transform({
    position: new Vector3(11, 6.5, 13),
    scale: new Vector3(4,4,4),
  })
)

nft6.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0xe39a238d74bdd95a895026fc25ec97fb8a4b1959/140"
    )
  })
)
engine.addEntity(nft6)
}