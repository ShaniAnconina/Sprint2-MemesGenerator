'use stirct'

let gCanvas
let gCtx
let gCurrImgId

function onInitCanvas() {
    gCanvas = document.getElementById('meme-canvas')
    gCtx = gCanvas.getContext('2d')
}

function renderMeme() {
    const meme = getMeme()
    const img = new Image()
    img.src = `./img/${gCurrImgId}.jpg`
    img.onload = function () {
        gCanvas.width = this.naturalWidth
        gCanvas.height = this.naturalHeight
        gCtx.drawImage(this, 0, 0)
        drawText(`${meme.lines[0].txt}`, gCanvas.width / 2, 0)
        if (meme.lines[meme.lines.length - 1].txt && meme.lines.length !== 1) drawText(`${meme.lines[meme.lines.length - 1].txt}`, gCanvas.width / 2, gCanvas.height - 40)
    }
    document.querySelector('.editor-screen').classList.remove('hide')
    document.querySelector('.gallery-screen').classList.add('hide')
}

function onMoveToGalleryScreen(){
    document.querySelector('.editor-screen').classList.add('hide')
    document.querySelector('.gallery-screen').classList.remove('hide')
}

function drawText(text, x, y) {
    const meme = getMeme()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = `${meme.lines[meme.selectedLineIdx].color}`
    gCtx.font = `${meme.lines[meme.selectedLineIdx].size}px ${meme.lines[meme.selectedLineIdx].family}`;
    gCtx.textAlign = `${meme.lines[0].align}`
    gCtx.textBaseline = 'top'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetLineTxt(lineTxt) {
    setLineTxt(lineTxt)
    renderMeme()
}

function onImgSelect(imgId){
    setImg(imgId)
    gCurrImgId = imgId
    renderMeme()
}

function onPickFillColor(color){
    pickFillColor(color)
    renderMeme()
}

// function onPickStrokeColor(color){
//     pickStrokeColor(color)
//     renderMeme()
// }

function onIncreaseFont(){
    increaseFont()
    renderMeme()
}

function onDecreaseFont(){
    decreaseFont()
    renderMeme()
}

function onSwitchLine(){
    switchLine()
    renderMeme()
}

function onSetFontFamily(fontFamily){
    setFontFamily(fontFamily)
    renderMeme()
}

function onAlignmentLCR(alignTo){
    alignmentLCR(alignTo)
    renderMeme()
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
}