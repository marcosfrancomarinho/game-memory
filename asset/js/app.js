const srcImage = (value) => `./asset/images/${value}.png`

const arrLinksImages = [
    srcImage("bootstrap"),
    srcImage("css"),
    srcImage("electron"),
    srcImage("firebase"),
    srcImage("html"),
    srcImage("javascript"),
    srcImage("jquery"),
    srcImage("mongo"),
    srcImage("node"),
    srcImage("react"),
]


window.onload = () => {
    const squares = document.querySelectorAll(".square")
    createSquare.bind(squares)()

}

function createSquare() {
}



function geratorNumber() {
    const arrOne = []
    const arrTwo = []
    const loop = function () {
        while (this.length < 10) {
            const num = Math.floor(Math.random() * 10)
            if (this.indexOf(num) == -1) {
                this.push(num)
            }
        }
    }
    loop.bind(arrOne)()
    loop.bind(arrTwo)()
    return [...arrOne, ...arrTwo]
}




