let counter = 0
const game = [
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
]
window.onload = () => {
    const squares = document.querySelectorAll(".square")
    setImageInSquare.bind(squares)()
    show.bind(squares)()
}

//INSERINDO AS IMAGENS NO NOS QUADRADOS EM POSICIONAMENTO DIFERENTE A CADA RELOAD
function setImageInSquare() {
    const arr = links()
    for (let idx = 0; idx < this.length; idx++) {
        this[idx].children[0].src = arr[idx].src
        this[idx].setAttribute("data-num", idx)
        this[idx].setAttribute("data-value", arr[idx].value)
    }
}

//CRIACÃO DOS LINKS DAS IMGENS
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

// REVELAR AS IMAGENS E CHECAR
function show() {
    this.forEach(elm => {
        elm.addEventListener("click", function () {
            this.classList.add("show")
            setTimeout(() => {
                this.classList.remove("hide")
                this.children[0].style.display = "block"
                game[this.dataset.num] = this.dataset.value
            }, 200)
            setTimeout(() => {
                this.children[0].style.display = "none"
                this.classList.remove("show")
                this.classList.add("hide")
            }, 1000)
        })
    })
}



