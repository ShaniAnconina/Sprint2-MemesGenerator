'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I love pizza',
            size: 40,
            align: 'center',
            color: 'white',
            family: 'impact'
        },
        {
            txt: 'I love food',
            size: 30,
            align: 'center',
            color: 'white',
            family: 'impact'
        },
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(lineTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = lineTxt
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function pickFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

// function pickStrokeColor(color) {
//     gMeme.lines[gMeme.selectedLineIdx].color = color
// }

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 1
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 1
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    console.log('selectedLineIdx:', gMeme.selectedLineIdx)
    console.log('lines.length:', gMeme.lines.length)

}

function setFontFamily(fontFamily) {
    gMeme.lines[gMeme.selectedLineIdx].family = fontFamily
}

function alignmentLCR(alignTo) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignTo
}

function _createLine() {
    return {
        txt: '',
        size: 40,
        align: 'left',
        color: ''
    }

}