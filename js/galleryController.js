'use stirct'

function onInitImgs() {
    renderGallery()
}

function renderGallery() {
    const gImgs = getImgs()
    let strHtml = gImgs.map(img => `<img src="./img/${img.id}.jpg" onclick="onImgSelect(${img.id})">`)
    document.querySelector('.gallery-grid-container').innerHTML = strHtml.join('')
}

