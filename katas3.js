const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


const body = document.getElementsByTagName('body')
const div = document.getElementById('results')
    
function showResults(kata, resp) {
    const par = document.createElement('p')
    let str = `Kata ${kata}: ${resp}`
    par.innerText = str
    div.appendChild(par)
}

function kata1() {
    let arr = []
    for (let i = 1; i <= 25; i++){
        arr.push(i)
    }
    arr = arr.join(', ')
    showResults(1, arr)
    return arr
}

function kata2() {
    let arr = []
    for (let i = 25; i >= 1; i--) {
        arr.push(i)
    }
    arr = arr.join(', ')
    showResults(2, arr)
    return arr
}

function kata3() {
    let arr = []
    for (let i = -1; i >= -25; i--){
        arr.push(i)
    }
    arr = arr.join(', ')
    showResults(3, arr)
    return arr
}

function kata4() {
    let arr = []
    for (let i = -25; i <= -1; i++){
        arr.push(i)
    }
    arr = arr.join(', ')
    showResults(4, arr)
    return arr
}

function kata5() {
    let arr = []
    for (let i = 25; i >= -25; i--) {
        if (i % 2 !== 0) {
            arr.push(i)
        }
    }
    arr = arr.join(', ')
    showResults(5, arr)
    return arr
}

function kata6() {
    let arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            arr.push(i)
        }
    }
    arr = arr.join(', ')
    showResults(6, arr)
    return arr
}

function kata7() {
    let arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            arr.push(i)
        }
    }
    arr = arr.join(', ')
    showResults(7, arr)
    return arr
}

function kata8() {
    let arr = []
    for (let i = 100; i >= 1; i--) {
        if (i % 3 === 0) {
            arr.push(i)
        } else if (i % 7 === 0) {
            arr.push(i)
        }
    }
    arr = arr.join(', ')
    showResults(8, arr)
    return arr
}

function kata9() {
    let arr = []
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            arr.push(i)
        } 
    }
    arr = arr.join(', ')
    showResults(9, arr)
    return arr
}

function kata10() {
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        arr.push(sampleArray[i])
    }
    arr = arr.join(', ')
    showResults(10, arr)
    return arr
}

function kata11() {
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            arr.push(sampleArray[i])
        }
    }
    arr = arr.join(', ')
    showResults(11, arr)
    return arr
}

function kata12() {
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            arr.push(sampleArray[i])
        }
    }
    arr = arr.join(', ')
    showResults(12, arr)
    return arr
}

function kata13() {
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            arr.push(sampleArray[i])
        }
    }
    arr = arr.join(', ')
    showResults(13, arr)
    return arr
}

function kata14() {
    let arr = []
    for (let i = 0; i < sampleArray.length; i++) {
        arr.push(sampleArray[i] * sampleArray[i])
    }
    arr = arr.join(', ')
    showResults(14, arr)
    return arr
}

function kata15() {
    let sum = 0
    for (let i = 1; i <= 20; i++) {
        sum += i
    }
    showResults(15, sum)
    return sum
}

function kata16() {
    let sum = 0
    for (let i = 0; i < sampleArray.length; i++){
        sum += sampleArray[i]
    }
    showResults(16, sum)
    return sum
}

function kata17() {
    let menor = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++){
        if (menor > sampleArray[i]) {
            menor = sampleArray[i]
        }
    }
    showResults(17, menor)
    return menor
}

function kata18() {
    let maior = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++){
        if (maior < sampleArray[i]) {
            maior = sampleArray[i]
        }
    }
    showResults(17, maior)
    return maior
}

// /**
//  * Daqui em diante são os bônus, por sua conta e risco
//  */

// function kataBonus1() {
//     // implemente o código do kata bonus 1 aqui
// }

// function kataBonus2() {
//     // implemente o código do kata bonus 2 aqui
// }

// function kataBonus3() {
//     // implemente o código do kata bonus 3 aqui
// }

// function kataBonus4() {
//     // implemente o código do kata bonus 4 aqui
// }

// function kataBonus5() {
//     // implemente o código do kata bonus 5 aqui
// }


kata1(1)
kata2(2)
kata3(3)
kata4(4)
kata5(5)
kata6(6)
kata7(7)
kata8(8)
kata9(9)
kata10(10)
kata11(11)
kata12(12)
kata13(13)
kata14(14)
kata15(15)
kata16(16)
kata17(17)
kata18(18)

