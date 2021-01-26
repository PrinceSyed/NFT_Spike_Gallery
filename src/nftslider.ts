import utils from "../node_modules/decentraland-ecs-utils/index"
import { NFT } from "./nft"
import { data } from "./data"
import { InfoPanel } from "./infoPanel"

export function nftslider(): void {
    
// UI Elements
const canvas = new UICanvas()
const infoPanel = new InfoPanel(canvas)

// NFTs
const nft1 = new NFT(
  new NFTShape("ethereum://" + data[0].address),
  new Transform({
    position: new Vector3(5, 2.5, 13),
    scale: new Vector3(5,5,5),
  }),
  new Color3(0.0, 1.0, 1.5),
  
  data[0].id,
  infoPanel
)


const nft2 = new NFT(
  new NFTShape("ethereum://" + data[1].address),
  new Transform({
    position: new Vector3(8, 2.5, 13),
    scale: new Vector3(5,5,5),
  }),
  new Color3(1.5, 1.5, 0.0),
  data[1].id,
  infoPanel
)

const nft3 = new NFT(
  new NFTShape("ethereum://" + data[2].address),
  new Transform({
    position: new Vector3(11, 2.5, 13),
    scale: new Vector3(5,5,5),
  }),
  new Color3(1.5, 0.5, 0.0),
  data[2].id,
  infoPanel
)

const nft4 = new NFT(
  new NFTShape("ethereum://" + data[3].address),
  new Transform({
    position: new Vector3(5, 2.5, 13),
    scale: new Vector3(5,5,5),
  }),
  new Color3(1.5, 0.8, 0.8),
  data[3].id,
  infoPanel
)
nft4.getComponent(Transform).scale.setAll(0)

const nft5 = new NFT(
  new NFTShape("ethereum://" + data[4].address),
  new Transform({
    position: new Vector3(8, 2.5, 13),
    scale: new Vector3(5,5,5),
  }),
  new Color3(0.0, 1.0, 1.5),
  data[4].id,
  infoPanel
)
nft5.getComponent(Transform).scale.setAll(0)

const nft6 = new NFT(
  new NFTShape("ethereum://" + data[5].address),
  new Transform({
    position: new Vector3(11, 2.5, 13),
    scale: new Vector3(5,5,5),
  }),
  new Color3(1.25, 1.25, 1.25),
  data[5].id,
  infoPanel
)
nft6.getComponent(Transform).scale.setAll(0)

const nfts: NFT[] = [nft1, nft2, nft3, nft4, nft5, nft6]
const swapNFTEntity = new Entity()

// NOTE: Using the scale instead of the visibility to turn the NFT on / off 
// as there are issues with the colliders getting in the way of each other
// when the user tries to click on an NFT to get more information.....
swapNFTEntity.addComponent(
  new utils.Interval(8000, () => {
    for (let i = 0; i < nfts.length; i++) {
      if (nfts[i].getComponent(Transform).scale.x == 0) {
        nfts[i]
        .getComponent(Transform)
        .scale.set(
          nfts[i].originalScale.x,
          nfts[i].originalScale.y,
          nfts[i].originalScale.z
        )
      } else {
        nfts[i].getComponent(Transform).scale.setAll(0)
      }
    }
  })
)
engine.addEntity(swapNFTEntity)
}