let counter = 0
let first = null
let second = null
window.onload = () => {
    const squares = document.querySelectorAll(".square")
    setInfoSquare.bind(squares)()
    show.bind(squares)()
}

//INSERINDO DATASET (INFO) NO NOS QUADRADOS DO JOGO
function setInfoSquare() {
    const arr = links()
    for (let idx = 0; idx < this.length; idx++) {
        this[idx].setAttribute("data-num", idx)
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
function show() {
    const arr = this
    this.forEach(elm => {
        elm.addEventListener("click", function () {
            this.classList.remove("hide")
            this.classList.add("show")
            setTimeout(() => {
                this.innerHTML = srcImage(this.dataset.value).src
            }, 200)
            setTimeout(() => {
                this.classList.remove("show")
                this.classList.add("hide")
                this.innerHTML = srcImage(undefined).icon
            }, 1500)
        })
    })
}
