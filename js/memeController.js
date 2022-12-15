'use stirct'

let gCanvas
let gCtx
let gCurrImgId

function onInitCanvas() {
    gCanvas = document.getElementById('meme-canvas')
    gCtx = gCanvas.getContext('2d')
    console.log(gCtx);
}

function renderMeme(imgId) {
    const meme = getMeme()
    const img = new Image()
    img.src = `./img/${imgId}.jpg`
    img.onload = function () {
        gCanvas.width = this.naturalWidth
        gCanvas.height = this.naturalHeight
        gCtx.drawImage(this, 0, 0)
        drawText(`${meme.lines[0].txt}`, gCanvas.width / 2, 0)
        if (meme.lines[meme.lines.length - 1].txt && meme.lines.length !== 1) drawText(`${meme.lines[meme.lines.length - 1].txt}`, gCanvas.width / 2, gCanvas.height - 40)
    }
    gCurrImgId = imgId
    document.querySelector('.editor-screen').classList.remove('hide')
    document.querySelector('.gallery-screen').classList.add('hide')
}

function onHideSection(){
    document.querySelector('.editor-screen').classList.add('hide')
    document.querySelector('.gallery-screen').classList.remove('hide')
}

function drawText(text, x, y) {
    // const meme = getMeme()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px impact';
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetLineTxt(lineTxt) {
    setLineTxt(lineTxt)
    renderMeme(gCurrImgId)
}

// function downloadCanvas(elLink) {
//     elLink.href = gCanvas.toDataURL()
//     elLink.download = `${gCurrImgId}.jpg`
// }