let nit1 = sprites.create(assets.image`nit1`, SpriteKind.Player)
controller.moveSprite(nit1)
nit1.startEffect(effects.fire, 1000)
nit1.sayText(game.ask("Haluny?? "), 5000, true)
