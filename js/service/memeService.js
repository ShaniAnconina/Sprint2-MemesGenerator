'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let canvas = document.getElementById('meme-canvas')
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Change this text',
            size: 40,
            align: 'center',
            fillColor: 'white',
            strokeColor: 'black',
            family: 'impact',
            isDrag: false,
            x: canvas.width / 2,
            y: 35
        },
        {
            txt: 'Change this text',
            size: 40,
            align: 'center',
            fillColor: 'white',
            strokeColor: 'black',
            family: 'impact',
            isDrag: false,
            x: canvas.width / 2,
            y: canvas.height - 5
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
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
        return
    }
    document.querySelector('.text-editor').value = gMeme.lines[gMeme.selectedLineIdx].txt
    gMeme.selectedLineIdx++
}

function createLine() {
    const newLine = {
        txt: 'I\'m a new line',
        size: 40,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        family: 'impact',
        isDrag: false,
        x: canvas.width / 2,
        y: canvas.height / 2
    }
    gMeme.lines.push(newLine)
    document.querySelector('.text-editor').value = ''
    gMeme.selectedLineIdx++
}

function deleteLine() {
    document.querySelector('.text-editor').value = ''
    let currLineIdx = gMeme.lines[gMeme.selectedLineIdx]
    if (gMeme.selectedLineIdx === 0 || gMeme.selectedLineIdx === 1) {
        currLineIdx.txt = ''
        currLineIdx.size = 40
        currLineIdx.align = 'center'
        currLineIdx.fillColor = 'white'
        currLineIdx.strokeColor = 'black'
        currLineIdx.family = 'impact'
        currLineIdx.isDrag = 'false'
        currLineIdx.x = canvas.width / 2
        currLineIdx.y = (gMeme.selectedLineIdx === 0) ? 35 : canvas.height - 5
    } else {
        gMeme.lines.splice(gMeme.selectedLineIdx, 1)
        gMeme.selectedLineIdx = 0
    }
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

function lineUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 1
}

function lineDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 1
}

// ------------------ SHARE & DOWNLOAD ------------------ //

function shareImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
        .then(res => res.text())
        .then(url => {
            console.log('url:', url)
            onSuccess(url)
        })
}