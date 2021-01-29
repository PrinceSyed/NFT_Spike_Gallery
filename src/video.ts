export function Video ():void {
// Adding video
const myVideoClip = new VideoClip(
    "images/video.mp4"
  )
  
  
  const myVideoTexture = new VideoTexture(myVideoClip)
  
  
  const myMaterial = new BasicMaterial()
  myMaterial.texture = myVideoTexture
  
  
  const screen = new Entity()
  screen.addComponent(new PlaneShape())
  screen.addComponent(
    new Transform({
      position: new Vector3(15, 5, 8),
      scale: new Vector3(-8, -8, -8),
      rotation: Quaternion.Euler(-180, -90, 0),
    })
  )
  screen.addComponent(myMaterial)
  screen.addComponent(
    new OnPointerDown(() => {
      myVideoTexture.playing = !myVideoTexture.playing
    })
  )
  engine.addEntity(screen)
  
  
  myVideoTexture.playing = false

}