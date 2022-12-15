'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I love pizza',
            size: 40,
            align: 'left',
            color: 'red'
        },{
            txt: 'I love food',
            size: 40,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(lineTxt){
    gMeme.lines[0].txt = lineTxt
}

// function _createMeme(){
//     return {
//         selectedImgId: 5,
//         selectedLineIdx: 0,
//         lines: [
//             {
//                 txt: '',
//                 size: 40,
//                 align: 'left',
//                 color: 'red'
//             }
//         ]
//     }
// }