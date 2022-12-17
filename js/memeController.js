'use stirct'

let gCanvas
let gCtx
let gCurrImgId

function onInitCanvas() {
    gCanvas = document.getElementById('meme-canvas')
    gCtx = gCanvas.getContext('2d')
  }

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function renderMeme() {
    const meme = getMeme()
    const img = new Image()
    img.src = `./img/${gCurrImgId}.jpg`
    img.onload = function () {
        gCanvas.width = this.naturalWidth
        gCanvas.height = this.naturalHeight
        gCtx.drawImage(this, 0, 0)
        let lineIdx = 0
        meme.lines.forEach(line => {
            drawText(line)
            lineIdx++
        })
    }
    document.querySelector('.editor-screen').classList.remove('hide')
    document.querySelector('.gallery-screen').classList.add('hide')
    document.querySelector('.text-editor').value = meme.lines[meme.selectedLineIdx].txt

}

function onMoveToGalleryScreen() {
    document.querySelector('.editor-screen').classList.add('hide')
    document.querySelector('.gallery-screen').classList.remove('hide')
}

function drawText(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.size}px ${line.family}`;
    gCtx.textAlign = 'center'

    let x = line.x
    let y = line.y

        switch (line.align) {
            case 'left':
                x = 5
                gCtx.textAlign = 'left'
                break

            case 'center':
                x = gCanvas.width / 2
                gCtx.textAlign = 'center'
                break

            case 'right':
                x = gCanvas.width - 5
                gCtx.textAlign = 'right'
                break
        }

    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function onImgSelect(imgId) {
    setImg(imgId)
    gCurrImgId = imgId
    renderMeme()
}

function getCanvas() {
    return gCanvas
}
// ------------------ CRUD ------------------ //

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onCreateLine() {
    createLine()
    renderMeme()
}

function onDeleteLine(){
    deleteLine()
    renderMeme()
}

// ------------------ EDITOR BUTTONS & INPUTS ------------------ //

function onSetLineTxt(lineTxt) {
    setLineTxt(lineTxt)
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onAlignmentLCR(alignTo) {
    alignmentLCR(alignTo)
    renderMeme()
}

function onSetFontFamily(fontFamily) {
    setFontFamily(fontFamily)
    renderMeme()
}

function onPickFillColor(fillColor) {
    pickFillColor(fillColor)
    renderMeme()
}

function onPickStrokeColor(strokeColor) {
    pickStrokeColor(strokeColor)
    renderMeme()
}

function onLineUp(){
    lineUp()
    renderMeme()
}

function onLineDown(){
    lineDown()
    renderMeme()
}

function onSearchByKeywords(val) {
    console.log('val:', val)
}

// ------------------ SHARE & DOWNLOAD ------------------ //

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
}

function onShareImg() {
    const imgDataUrl = gCanvas.toDataURL('image/jpeg')
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    shareImg(imgDataUrl, onSuccess)
}
