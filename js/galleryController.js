'use stirct'

function onInitImgs() {
    renderGallery()
}

function renderGallery() {
    const gImgs = getImgs()
    // let strHtml =`
    // <label class="user-upload-img">
    // <input type="file" class="file-input btn" name="image" onchange="onImgInput(event)"/>
    // <img src="img/ass-image.PNG">
    // </label>
    // `
    
    let strHtml = gImgs.map(img => `<img src="./img/${img.id}.jpg" onclick="onImgSelect(${img.id})">`)
    document.querySelector('.gallery-grid-container').innerHTML = strHtml.join('')
}

function onSearchByKeywords(filterBy) {
    searchByKeywords(filterBy)
    renderGallery()
}

// ------------------ UPLOAD ------------------ //

function onImgInput(ev) {
    onUploadImgFromInput(ev,uploadImgToGallery)
        renderGallery()
}

function onUploadImgFromInput(ev,onImageReady){
    const reader = new FileReader()
    reader.onload = (event) => {
        let img = new Image()
        img.src = event.target.result
        img.onload = () => onImageReady(img)
        console.log('img:', img)
    }
    reader.readAsDataURL(ev.target.files[0])
}

