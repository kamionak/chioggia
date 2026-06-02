// Mobilní menu
document.querySelector(".menu-toggle").onclick = function() {
    document.querySelector(".menu").classList.toggle("active");
};

// Lightbox
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

