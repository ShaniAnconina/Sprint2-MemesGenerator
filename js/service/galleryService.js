'use strict'

let gImgId = 0
let gImgs

_createImgs()

function _createImgs() {
    gImgs = []
    gImgs.push(_createImg(['celeb', 'politics', 'trump','man']))
    gImgs.push(_createImg(['cute', 'animals', 'dog']))
    gImgs.push(_createImg(['baby', 'cute', 'dog', 'animals']))
    gImgs.push(_createImg(['cat', 'animals', 'tired']))
    gImgs.push(_createImg(['baby', 'win', 'success']))
    gImgs.push(_createImg(['man', 'history', 'explain']))
    gImgs.push(_createImg(['baby', 'surprised', 'funny']))
    gImgs.push(_createImg(['celeb','man', 'funny', 'willy', 'wonka']))
    gImgs.push(_createImg(['baby', 'cute', 'funny']))
    gImgs.push(_createImg(['celeb', 'politics', 'obama', 'funny','man']))
    gImgs.push(_createImg(['kiss', 'man', 'basketball']))
    gImgs.push(_createImg(['celeb','haim', 'hecht', 'Point','finger']))
    gImgs.push(_createImg(['celeb','success', 'man', 'win','cheers']))
    gImgs.push(_createImg(['serious', 'man', 'sunglasses','matrix']))
    gImgs.push(_createImg(['celeb','lotr', 'mordor', 'man','explain']))
    gImgs.push(_createImg(['funny', 'celeb', 'man','startrack']))
    gImgs.push(_createImg(['celeb', 'putin', 'man','politics']))
    gImgs.push(_createImg(['toystory', 'caleb', 'funny']))
}

function _createImg(keywords) {
    gImgId++
    return { id: gImgId, url: `img/${gImgId}.jpg`, keywords }
}

function getImgs() {
    return gImgs
}


// celeb funny cute animals dog history surprised  explain win politics success man women