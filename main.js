import '/style.css'

$('#magazine').turn({ gradients: true, acceleration: true });

if (window.innerWidth > 1280) {
    for (let i = 3; i < 7; i++) {
        document.getElementById(`image${i}`).remove()
    }
    document.getElementById("image1").setAttribute("src", "images/fff2.png")
    document.getElementById("image2").setAttribute("src", "images/fff22.png")
}