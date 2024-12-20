import '/style.css'

let hint = true
$('#magazine').turn({ gradients: true, acceleration: true, when: { turning: () => { hint = false } } });

if (window.innerWidth > 1280) {
    document.getElementById("modelLink").className = "absolute top-12 w-[250px] h-[200px]"
    document.getElementById("image1").setAttribute("src", "images/1ps.png")
    document.getElementById("image2").setAttribute("src", "images/3ps.png")
    document.getElementById("image3").setAttribute("src", "images/2ps.png")
    document.getElementById("image4").setAttribute("src", "images/4ps.png")
    document.getElementById("image5").setAttribute("src", "images/5ps.png")
    document.getElementById("image6").setAttribute("src", "images/6ps.png")
}

setInterval(() => {
    if (hint == true) {
        $('#magazine').turn("peel", "tr");
    }
}, 1000)

setInterval(() => {
    if (hint == true) {
        $('#magazine').turn("peel", false);
    }
}, 2000)

setInterval(() => {
    document.getElementById("arrow").classList.toggle("invisible")
}, 1000)