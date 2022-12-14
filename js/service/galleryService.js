'use strict'

var gImgId = 0
var gImgs
_createImgs()
console.log('gImgs:', gImgs)
function _createImgs() {
    gImgs = []
    gImgs.push(_createImg(['funny', 'cat']))
}

function _createImg(keywords) {
    gImgId++
    return { id: gImgId, url: `img/${gImgId}.jpg`, keywords }
}

function getImgs() {
    return gImgs
}

// function addImg(img) {
//     gImgs.unshift({ id: gImgId++, url: img.src, keywords: [] })
// }
