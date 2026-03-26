// Geting Back Management
const reverseBtn = document.getElementById("reverse")
let reverse = 1

reverseBtn.addEventListener("click", () => {
    reverse -= 2 * reverse
})

export {reverse}