function select(element) {
    if (!(typeof element.className === "undefined") && element.className === "selected") {
        element.className = ""
    } else {
        document.querySelectorAll("#mark").forEach(elem => elem.className = "")
        element.className = "selected"
    }
}

function submit() {
    try {
        const mark = document.querySelector(".selected").innerText
        //document.getElementById("first-panel").style.visibility = "hidden"
        document.getElementById("first-panel").remove()
        document.getElementById("second-panel").style.display = "flex"
        document.getElementById("selection").innerHTML = `You selected ${mark} out of 5`
    } catch {}
}