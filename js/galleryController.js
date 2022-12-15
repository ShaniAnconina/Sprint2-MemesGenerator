'use stirct'

function onInitImgs() {
    renderGallery()
}

function renderGallery() {
    const gImgs = getImgs()
    let strHtml = gImgs.map(img => `<img src="./img/${img.id}.jpg" onclick="renderMeme(${img.id})">`)
    document.querySelector('.gallery-grid-container').innerHTML = strHtml.join('')
}

