const header1 = document.getElementById("header1");
const rove = document.getElementById("rove");
const opa = document.getElementById("opa");
const lokasi = document.getElementById("lokasi");
const tanam = document.getElementById("tanam");

const lokasilist = [
  "Jakarta",
  "Banten",
  "Maluku",
  "Cirebon",
  "Teluk Benoa",
  "Bangka",
];

function mouseinout(elementid, change) {
  elementid.addEventListener("mouseenter", () => {
    elementid.classList.add(change);
  });
  elementid.addEventListener("mouseleave", () => {
    elementid.classList.remove(change);
  });
}

function showsubhead(triger_el1, change_el1, triger_el2, change_el2) {
  document.getElementById(triger_el1).addEventListener("mouseenter", () => {
    document.getElementById(change_el1).classList.replace("hidden", "block");
    document.getElementById(change_el2).classList.replace("block", "hidden");
  });

  document.getElementById(triger_el2).addEventListener("mouseenter", () => {
    document.getElementById(change_el2).classList.replace("hidden", "block");
    document.getElementById(change_el1).classList.replace("block", "hidden");
  });
  document.getElementById(change_el1).addEventListener("mouseenter", () => {
    header1.classList.add("bg-green-900");
  });
  document.getElementById(change_el2).addEventListener("mouseenter", () => {
    header1.classList.add("bg-green-900");
  });

  document.getElementById(change_el1).addEventListener("mouseleave", () => {
    document.getElementById(change_el1).classList.add("hidden");
    header1.classList.remove("bg-green-900");
  });

  document.getElementById(change_el2).addEventListener("mouseleave", () => {
    document.getElementById(change_el2).classList.add("hidden");
    header1.classList.remove("bg-green-900");
  });
}

mouseinout(rove, "text-green-400");
mouseinout(header1, "bg-green-900");

showsubhead("itemhead1", "subhead1", "itemhead2", "subhead2");

window.onscroll = function () {
  changehead();
};

function changehead() {
  if (document.documentElement.scrollTop > 20) {
    header1.classList.add("bg-green-900");
    opa.classList.replace("opacity-70", "opacity-80");
  } else {
    header1.classList.remove("bg-green-900");
    opa.classList.replace("opacity-80", "opacity-70");
  }
}

let counter = 0;
function incre() {
  counter = counter + 1;

  if (counter > 4) {
    counter = 0;
  }
  lokasi.innerHTML = lokasilist[counter];
  return counter;
}

let counter2 = 1000;

let myinterval2 = setInterval(incre2, 1);

function incre2() {
  counter2 = counter2 + 1;

  if (counter2 > 1400) {
    clearInterval(myinterval2);
    myinterval2 = setInterval(incre2, 10)
  } 
  if (counter2 > 1485) {
    clearInterval(myinterval2);
    myinterval2 = setInterval(incre2, 300)
  } 
  if (counter2 > 1500) {
    clearInterval(myinterval2);
    myinterval2 = setInterval(incre2, 2000)
  } 
  if (counter2 > 3000) {
    counter2 = 1000;
  }

  tanam.innerHTML = counter2;
  return counter2;
}

myinterval1 = setInterval(incre, 2000);

var map = L.map('map').setView([-6.310910847738213, 112.58451916538995], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-6.103475025969689, 106.75450281747555]).addTo(map);
var marker = L.marker([-6.724514387137422, 105.2965839379988]).addTo(map);
var marker = L.marker([-6.268507962288439, 108.3644072888276]).addTo(map);
var marker = L.marker([-8.72158859699206, 115.22071939964081]).addTo(map);
var popup = L.popup()
    .setLatLng([-6.103475025969689, 106.75450281747555])
    .setContent("we planted here")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);
