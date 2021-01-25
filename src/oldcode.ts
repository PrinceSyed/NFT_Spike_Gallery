
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const spikeGalleryV = new Entity('spikeGalleryV')
engine.addEntity(spikeGalleryV)
spikeGalleryV.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spikeGalleryV.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/spike gallery v3.3.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
spikeGalleryV.addComponentOrReplace(gltfShape2)


// const clickableImage = new UIImage(canvas, new Texture("icon.png"))
// clickableImage.name = "clickable-image"
// clickableImage.width = "300px"
// clickableImage.height = "300px"
// clickableImage.sourceWidth = 92
// clickableImage.sourceHeight = 91
// clickableImage.isPointerBlocker = true
// clickableImage.onClick = new OnClick(() => {
//   openExternalURL("https://docs.decentraland.org")
// })