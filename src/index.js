const header = document.getElementById('header')
const rove = document.getElementById('rove')



const lokasi = ["Jakarta", "Banten", "Maluku"]



function mouseover (elementid, change) {
    elementid.addEventListener("mouseover", ()=>{
        elementid.classList.add(change)
    })
    elementid.addEventListener("mouseout", ()=>{
        elementid.classList.remove(change)
    })
}

mouseover(rove, "text-green-400")
mouseover(header, "bg-black")