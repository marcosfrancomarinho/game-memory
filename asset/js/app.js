const squares = document.querySelectorAll(".square")
let counter = 0

window.onload = () => {
    setInfoSquare.bind(squares)()
    show.bind(squares)()
}

//INSERINDO DATASET (INFO) NO NOS QUADRADOS DO JOGO
function setInfoSquare() {
    const arr = links()
    for (let idx = 0; idx < this.length; idx++) {
        this[idx].setAttribute("data-value", arr[idx].value)
    }
}

//CRIACÃO DOS LINKS DAS IMAGENS EM POSIÇÃO ALEATORIAS
const srcImage = (value) => {
    return {
        src: `<img src ='./asset/images/image-0${value}.png'>`,
        value: value,
        icon: "&#9763"
    }
}
const loop = function () {
    while (this.length < 10) {
        const num = Math.floor(Math.random() * 10)
        if (this.indexOf(num) == -1) {
            this.push(num)
        }
    }
}
function links() {
    const image = []
    const arrOne = []
    const arrTwo = []
    loop.bind(arrOne)()
    loop.bind(arrTwo)()
    const all = [...arrOne, ...arrTwo]
    all.forEach(idx => {
        image.push(srcImage(idx))
    })
    return image
}

// REVELAR AS IMAGENS
const show = function () {
    this.forEach(elm => elm.addEventListener("click", turn))
}
function turn() {
    this.removeEventListener("click", turn)
    setTimeout(() => {
        this.innerHTML = srcImage(this.dataset.value).src
    },100)
    this.classList.add("show")
    this.classList.remove("hide")
    const turned = document.querySelectorAll(".show")
    if (counter == 1) {
        squares.forEach(elm => elm.removeEventListener("click", turn))
        if (turned[0].dataset.value == turned[1].dataset.value) {
            setTimeout(() => {
                turned[0].classList.remove("show")
                turned[1].classList.remove("show")
                turned[0].classList.add("discovered")
                turned[1].classList.add("discovered")
                squares.forEach(elm => elm.addEventListener("click", turn))
            }, 400)
        } else {
            setTimeout(() => {
                turned[0].classList.remove("show")
                turned[1].classList.remove("show")
                turned[0].classList.add("hide")
                turned[1].classList.add("hide")
                turned[0].innerHTML = srcImage(undefined).icon
                turned[1].innerHTML = srcImage(undefined).icon
                squares.forEach(elm => elm.addEventListener("click", turn))
            }, 1200)
        }
        counter = 0
    } else {
        counter++
    }
}
// RESTART DO JOGO

document.querySelector("button").onclick = () => {
    
}