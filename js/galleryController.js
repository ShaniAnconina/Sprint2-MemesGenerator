'use stirct'

function onInitImgs() {
    renderGallery()
}

function renderGallery() {
    const gImgs = getImgs()
    let strHtml = `
    <label class="user-upload-img">
    <input type="file" class="file-input btn" name="image" onchange="onImgInput(event)"/>
    <img src="img/ass-image.PNG">
    </label>
    `

    strHtml += gImgs.map(img => `<img src="${img.url}" onclick="onImgSelect('${img.url}',${img.id})">`).join('')
    document.querySelector('.gallery-grid-container').innerHTML = strHtml
}

function onSearchByKeywords(filterBy) {
    searchByKeywords(filterBy)
    renderGallery()
}

// ------------------ UPLOAD ------------------ //

function onImgInput(ev) {
    onUploadImgFromInput(ev, uploadImgToGallery)
}

function onUploadImgFromInput(ev, onImageReady) {
    const reader = new FileReader()
    reader.onload = (event) => {
        let img = new Image()
        img.src = event.target.result
        img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0])
}

