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
    all.sort(() => Math.random() - 0.5)
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
    }, 100)
    this.classList.add("show")
    this.classList.remove("hide")
    const turned = document.querySelectorAll(".show")
    if (counter == 1) {
        addClick.bind(squares)(false)
        if (turned[0].dataset.value === turned[1].dataset.value) {
            setTimeout(() => {
                addAndRemove.bind(turned)("show", false)
                addAndRemove.bind(turned)("discovered", true)
                addClick.bind(squares)(true)
            }, 400)
        } else {
            setTimeout(() => {
                addAndRemove.bind(turned)("show", false)
                addAndRemove.bind(turned)("hide", true)
                turned.forEach(elm => elm.innerHTML = srcImage(undefined).icon)
                addClick.bind(squares)(true)
            }, 1200)
        }
        counter = 0
    } else {
        counter++
    }
}
function addAndRemove(type, value) {
    if (value) {
        this.forEach(elm => elm.classList.add(type))
    } else {
        this.forEach(elm => elm.classList.remove(type))
    }
}
function addClick(value) {
    const filter = []
    this.forEach(elm => {
        if (!elm.classList.contains("discovered")) {
            filter.push(elm)
        }
    })
    if (value) {
        filter.forEach(elm => elm.addEventListener("click", turn))
    } else {
        filter.forEach(elm => elm.removeEventListener("click", turn))
    }
}
// RESTART DO JOGO
document.querySelector("button").onclick = () => {
    squares.forEach(elm => {
        elm.classList.remove("show")
        elm.classList.remove("hide")
        elm.classList.remove("discovered")
        elm.innerHTML = srcImage(undefined).icon
        setInfoSquare.bind(squares)()
        show.bind(squares)()
        counter = 0
    })
}
