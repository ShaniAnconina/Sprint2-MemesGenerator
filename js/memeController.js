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
        let lineIdx = 0
        meme.lines.forEach(line => {
            drawText(line, lineIdx)
            lineIdx++
        })
        // if (meme)
        // drawText(`${meme.lines[0].txt}`, gCanvas.width / 2, 0)
        // if (meme.lines[meme.lines.length - 1].txt && meme.lines.length !== 1) drawText(`${meme.lines[meme.lines.length - 1].txt}`, gCanvas.width / 2, gCanvas.height - 40)
    }
    document.querySelector('.editor-screen').classList.remove('hide')
    document.querySelector('.gallery-screen').classList.add('hide')
}

function onMoveToGalleryScreen() {
    document.querySelector('.editor-screen').classList.add('hide')
    document.querySelector('.gallery-screen').classList.remove('hide')
}

function drawText(line, lineIdx) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.size}px ${line.family}`;
    // gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'

    let x
    let y

    // if (lineIdx === 0) y = 0
    // else if (lineIdx === 1) y = gCanvas.height - 40
    // else y = gCanvas.height / 2
    switch (lineIdx) {
        case 0:
            y = 0
            gCtx.textBaseline = 'top'
            break

        case 1:
            y = gCanvas.height
            gCtx.textBaseline = 'bottom'
            break

        default:
            y = gCanvas.height / 2
            gCtx.textBaseline = 'middle'
            break
    }

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

// ------------------ CRUD ------------------ //

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onCreateLine() {
    createLine()
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

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
}