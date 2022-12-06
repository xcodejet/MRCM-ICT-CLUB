//* float header
let btn_margin = 0
setInterval(() => {
  if(btn_margin <= 10){
    document.getElementsByClassName('head-btn')[btn_margin].style.marginTop = "0px"
    btn_margin++}
}, 150)
/**
 let img = ["https://wallpaperaccess.com/full/2889825.jpg",
            "https://wallpaperaccess.com/full/2835167.jpg",
            "https://wallpaperaccess.com/full/2889827.jpg",
            "https://wallpaperaccess.com/full/266551.jpg",
            "https://wallpaperaccess.com/full/560112.jpg",
            "https://as2.ftcdn.net/v2/jpg/02/96/64/61/1000_F_296646140_btnypVWa1CHefYgC3EgoRLzO2Qh79ITa.jpg",
            "https://t4.ftcdn.net/jpg/02/96/86/77/240_F_296867752_K7PrDqR4qJq227OF6kJnk84VJqNJ4hdE.jpg",
            "https://t3.ftcdn.net/jpg/03/31/69/52/240_F_331695233_kPFk79XNSlNlNxjdmdCvjDyecktTVDi6.jpg",
            "https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg",
            "https://c1.wallpaperflare.com/preview/260/237/126/59687788344d1-thumbnail.jpg"]
 */
//* bg image changer
let img =  ["https://wallpaperaccess.com/full/2889825.jpg",
            "https://wallpaperaccess.com/full/2835167.jpg",
            "https://wallpaperaccess.com/full/2889827.jpg",
            "https://wallpaperaccess.com/full/266551.jpg",
            "https://wallpaperaccess.com/full/560112.jpg",
            "https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg"]
let i = 1
setInterval(() => {
    document.getElementsByClassName('slideshow')[0].style.backgroundImage = `url(${img[i]})`
    i++
    if(i >= 6){i = 0}
}, 5000)

// * on scroll fixed header
window.onscroll = function() {myFunction()}

var header = document.getElementById("header")
var sticky = header.offsetTop

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
}

//* mobile moe option popup

var more_op_state = false
function more_op(){
  if(more_op_state == false){
    document.getElementsByClassName('more-op')[0].style.display = "block"
    document.getElementById('inner-img').style.display = "none"
    more_op_state = true
  }else{
    document.getElementsByClassName('more-op')[0].style.display = "none"
    document.getElementById('inner-img').style.display = "block"
    more_op_state = false
  }
}

function register_animate(){
  window.open("login.html","_blank")
  console.warn("pakak")
}
/**
  if(more_op_state === 0){
    document.getElementsByClassName('more-op')[0].style.display = "block"
    document.getElementById('inner-img').style.display = "none"
  }else{
    document.getElementsByClassName('more-op')[0].style.display = "none"
    document.getElementById('inner-img').style.display = "block"
  }
 */