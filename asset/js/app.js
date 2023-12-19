let counter = 0
let first = null
let second = null
window.onload = () => {
    const squares = document.querySelectorAll(".square")
    setInfoSquare.bind(squares)()
    show.bind(squares)()
}

//INSERINDO DATASET NO NOS QUADRADOS DD JOGO
function setInfoSquare() {
    const arr = links()
    for (let idx = 0; idx < this.length; idx++) {
        this[idx].setAttribute("data-num", idx)
        this[idx].setAttribute("data-value", arr[idx].value)
    }
}

//CRIACÃO DOS LINKS DAS IMGENS EM POSIÇÃO ALEATORIAS
const srcImage = (value) => {
    return {
        src: `./asset/images/image-0${value}.png`,
        value: value
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
function show() {
    const arr = this
    const filter = []
    this.forEach(elm => {
        elm.addEventListener("click", function () {
            this.classList.add("show")
            this.innerHTML = `<img src = "${srcImage(this.dataset.value).src}">`
            if (counter % 2 == 0) {
                first = this.dataset.value
            } else {
                second = this.dataset.value
            }
            counter++
        })
    })
}


