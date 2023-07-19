const header1 = document.getElementById('header1')
const rove = document.getElementById('rove')
const opa = document.getElementById('opa')
const lokasi = document.getElementById('lokasi')



const lokasilist = ["Jakarta", "Banten", "Maluku", "Cirebon", "Teluk Benoa", "Bangka"]



function mouseinout (elementid, change) {
    elementid.addEventListener("mouseenter", ()=>{
        elementid.classList.add(change)
    })
    elementid.addEventListener("mouseleave", ()=>{
        elementid.classList.remove(change)
    })
}

function showsubhead (triger_el1, change_el1, triger_el2, change_el2 ) {
    document.getElementById(triger_el1).addEventListener("mouseenter", ()=> {
        document.getElementById(change_el1).classList.replace("hidden", "block");
        document.getElementById(change_el2).classList.replace("block", "hidden" )

    });

    document.getElementById(triger_el2).addEventListener("mouseenter", ()=> {
        document.getElementById(change_el2).classList.replace("hidden", "block");
        document.getElementById(change_el1).classList.replace("block", "hidden" )

    });
    document.getElementById(change_el1).addEventListener("mouseenter", ()=> {
        header1.classList.add("bg-green-900")
    });
    document.getElementById(change_el2).addEventListener("mouseenter", ()=> {
        header1.classList.add("bg-green-900")
    });

    document.getElementById(change_el1).addEventListener("mouseleave", ()=> {
        document.getElementById(change_el1).classList.add("hidden");
        header1.classList.remove("bg-green-900")
    })

    document.getElementById(change_el2).addEventListener("mouseleave", ()=> {
        document.getElementById(change_el2).classList.add("hidden");
        header1.classList.remove("bg-green-900")
    })

    
}

mouseinout(rove, "text-green-400")
mouseinout(header1, "bg-green-900")

showsubhead("itemhead1", "subhead1", "itemhead2", "subhead2")

window.onscroll = function() {changehead()};

function changehead() {
  if (document.documentElement.scrollTop > 20) {
    header1.classList.add("bg-green-900");
    opa.classList.replace("opacity-70", "opacity-80");
    
  } else {
    header1.classList.remove("bg-green-900")
    opa.classList.replace("opacity-80", "opacity-70");
  }
}



lokasi.innerHTML = lokasilist[100]


