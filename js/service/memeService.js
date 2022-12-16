'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'center',
            fillColor: 'white',
            strokeColor: 'black',
            family: 'impact'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

// ------------------ CRUD ------------------ //

function switchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    document.querySelector('.text-editor').value = gMeme.lines[gMeme.selectedLineIdx].txt
    gMeme.selectedLineIdx++
}

function createLine() {
    const newLine = {
        txt: '',
        size: 40,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        family: 'impact'
    }
    gMeme.lines.push(newLine)
    document.querySelector('.text-editor').value = ''
    gMeme.selectedLineIdx++
    console.log('gMeme.lines:', gMeme.lines)
}

// ------------------ EDITOR BUTTONS & INPUTS ------------------ //

function setLineTxt(lineTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = lineTxt
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 1
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 1
}

function alignmentLCR(alignTo) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignTo
}

function setFontFamily(fontFamily) {
    gMeme.lines[gMeme.selectedLineIdx].family = fontFamily
}

function pickFillColor(fillColor) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = fillColor
}

function pickStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeColor
}
