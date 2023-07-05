const header1 = document.getElementById('header1')
const rove = document.getElementById('rove')



const lokasi = ["Jakarta", "Banten", "Maluku"]



function mouseinout (elementid, change) {
    elementid.addEventListener("mouseover", ()=>{
        elementid.classList.add(change)
    })
    elementid.addEventListener("mouseout", ()=>{
        elementid.classList.remove(change)
    })
}

function showsubhead (triger_el, change_el,) {
    document.getElementById(triger_el).addEventListener("mouseover", ()=> {
        document.getElementById(change_el).classList.remove("hidden")
    });
    document.getElementById(change_el).addEventListener("mouseover", ()=> {
        header1.classList.add("bg-green-900")
    });
    document.getElementById(change_el).addEventListener("mouseleave", ()=> {
        document.getElementById(change_el).classList.add("hidden");
        header1.classList.remove("bg-green-900")

    })
}

mouseinout(rove, "text-green-400")
mouseinout(header1, "bg-green-900")

showsubhead("itemhead1", "subhead1")
showsubhead("itemhead2", "subhead2")