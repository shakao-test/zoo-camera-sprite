namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
let __camera = sprites.create(image.create(150, 110), SpriteKind.Camera)
__camera.image.fill(4)
controller.moveSprite(__camera)
__camera.setFlag(SpriteFlag.Invisible, true)
__camera.setFlag(SpriteFlag.Ghost, true)
__camera.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(__camera)