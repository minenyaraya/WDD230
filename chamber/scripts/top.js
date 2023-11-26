const banner = document.querySelector('#top-page-banner');

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})


let date = new Date ();
console.log(date);
let year = date.getFullYear();
console.log(year);
document.querySelector(".year").textContent = year
let currentdate = document.lastModified;
console.log(currentdate);
document.querySelector(".highlight").textContent=currentdate

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastmodified").innerHTML = a;
}
