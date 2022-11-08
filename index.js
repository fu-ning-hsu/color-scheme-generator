document.getElementById("btn").addEventListener("click", function(e){
    e.preventDefault()
    const hexValue = document.getElementById("color-picker").value
    const hex = hexValue.substring(1)
    const modeList = document.getElementById("mode");
    const index = modeList.selectedIndex
    const mode = modeList.options[index].value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        const colorArr = data.colors
        renderColor(colorArr)
        })
})

function renderColor(colors) {
        let html = ""
        let hexHtml = ""
        for (let color of colors) {
            html +=`
            <span style="background-color:${color.hex.value}" ></span>`
            hexHtml +=`
            <p>${color.hex.value}</p>`
        }
        document.getElementById("color-scheme").innerHTML = html
        document.getElementById("hex-container").innerHTML = hexHtml
        
}