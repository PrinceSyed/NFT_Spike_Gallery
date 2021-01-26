
import utils from "../node_modules/decentraland-ecs-utils/index"
import { NFT } from "./nft"
import { data } from "./data"
import { InfoPanel } from "./infoPanel"
import { nftslider } from "./nftslider"

const baseScene = new Entity();

engine.addEntity(baseScene)

baseScene.addComponent(new GLTFShape("models/spike gallery v3.5.glb"));

baseScene.addComponentOrReplace(new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}));

nftslider();
