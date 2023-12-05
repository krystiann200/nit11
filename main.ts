let nit1 = sprites.create(img`
    ffffffffffffffffffffffff
    fffffbbbbbffffffffffffff
    ffffb33333bbffffffffffff
    fffb33331113bfffffffffff
    fffb333311113bffffffffff
    ffb1133331113bcfffffffff
    fb11133333333bbbffffffff
    bb1133113333bbbcfbbbbfff
    cbb3311113bbddbcb3311bff
    cbbbbddddbbdddcbb33113cf
    fcbbbbddbbbddbbddb3333bc
    ffccbbbbbbbbccbddbbbddbc
    ffffcccccccbfccbbbbbddbc
    ffffffb1ddbffffccbbbbbcf
    fffffb11ddbfffffbcccccff
    fffffb1ddbbfffffbddbffff
    `, SpriteKind.Player)
let nit2 = sprites.create(img`
    f f f f f f b b b b f f f f f f 
    f f f f b b 3 3 3 3 b b f f f f 
    f f f f b 3 3 3 3 1 1 b c f f f 
    f f c b 3 3 3 3 3 1 1 1 b c f f 
    f c c 1 1 1 3 3 3 3 1 1 3 c c f 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    f c b b b b d d b b b b b b c f 
    f f c c b b b b b b b b c c f f 
    f f f f c c c c c c c c f f f f 
    f f f f f f b 1 1 b f f f f f f 
    f f f f f f b 1 1 b b f f f f f 
    f f f f f b b d 1 1 b f f f f f 
    f f f f f b d d 1 1 b f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(nit1)
