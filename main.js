const fullViewImg = document.querySelector(".img-full");
const thumbs = document.querySelector(".thumbs");
let eOld = null;

thumbs.addEventListener("click", function (event) {
  if (event.target.className == "img-thumb") {
    // Bisa pake ini
    // fullViewImg.src = event.target.src;
    const gambar = event.target.getAttribute("src");
    fullViewImg.setAttribute("src", gambar);
    fullViewImg.classList.add("fade");
    
    setTimeout(function () {
      fullViewImg.classList.remove("fade");
    }, 500);

    if(eOld != null){
        eOld.classList.remove('active');
    }
    event.target.classList.add('active');
    eOld = event.target;
  }
});
