const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")

let buttonVisible = false

const onClick = function() {
   if (buttonVisible == false) {
    document.getElementById("disclaimer").style.opacity = 1
    buttonVisible = true
   }
   else if (buttonVisible == true) {
    document.getElementById("disclaimer").style.opacity = 0
    buttonVisible = false
   }
}

button.addEventListener("click", onClick)