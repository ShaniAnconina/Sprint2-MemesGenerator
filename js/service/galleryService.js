'use strict'

let gImgId = 0
let gImgs
let gSearchBy

_createImgs()

function _createImgs() {
    gImgs = []
    gImgs.push(_createImg(['celeb', 'politics', 'trump', 'man']))
    gImgs.push(_createImg(['cute', 'animals', 'dog']))
    gImgs.push(_createImg(['baby', 'cute', 'dog', 'animals']))
    gImgs.push(_createImg(['cat', 'animals', 'tired']))
    gImgs.push(_createImg(['baby', 'win', 'success']))
    gImgs.push(_createImg(['man', 'history', 'explain']))
    gImgs.push(_createImg(['baby', 'surprised', 'funny']))
    gImgs.push(_createImg(['celeb', 'man', 'funny', 'willy', 'wonka']))
    gImgs.push(_createImg(['baby', 'cute', 'funny']))
    gImgs.push(_createImg(['celeb', 'politics', 'obama', 'funny', 'man']))
    gImgs.push(_createImg(['kiss', 'man', 'basketball']))
    gImgs.push(_createImg(['celeb', 'haim', 'hecht', 'Point', 'finger']))
    gImgs.push(_createImg(['celeb', 'success', 'man', 'win', 'cheers']))
    gImgs.push(_createImg(['serious', 'man', 'sunglasses', 'matrix']))
    gImgs.push(_createImg(['celeb', 'lotr', 'mordor', 'man', 'explain']))
    gImgs.push(_createImg(['funny', 'celeb', 'man', 'startrack']))
    gImgs.push(_createImg(['celeb', 'putin', 'man', 'politics']))
    gImgs.push(_createImg(['toystory', 'caleb', 'funny']))
}

function _createImg(keywords) {
    gImgId++
    return { id: gImgId, url: `./img/${gImgId}.jpg`, keywords }
}

function getImgs() {
    if (gSearchBy) {
        let filteredImgs = []
        gImgs.forEach(img => {
            img.keywords.forEach(key => {
                if (key.includes(gSearchBy)){
                    if(!filteredImgs.some(filteredImg=> filteredImg.id === img.id)) filteredImgs.push(img)
                }
            })
        })
        return filteredImgs
    } else return gImgs
}

function searchByKeywords(filterBy = '') {
    if (filterBy !== undefined) gSearchBy = filterBy
    return gSearchBy
}

// ------------------ UPLOAD ------------------ //

function uploadImgToGallery (img){
    let uplodedImg = ({
        id: gImgs[gImgs.length-1].id+1,
        url: img.src,
        keywords:''
    })

    gImgs.unshift(uplodedImg)
    renderGallery()
}