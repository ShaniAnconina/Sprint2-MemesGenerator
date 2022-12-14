'use stirct'

function onInitImgs(){
    renderImgs()
}

function renderImgs(){
    const gImgs = getImgs()
    let strHtml = gImgs.map(img=>`
    <img src="./img/${img.id}.jpg">
    
    `)
    document.querySelector('.gallery-grid-container').innerHTML = strHtml.join('')
}