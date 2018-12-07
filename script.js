var images = document.getElementsByClassName("image");
var counter = 1;

function replaceImg() {
  for (var i = 0; i< images.length; i++) {
    if (i === counter)
      images[i].classList.remove("hidden");
    else
      images[i].classList.add("hidden");
  }
  counter= (counter+1)%images.length
}

var timeout = setInterval(replaceImg, 5000);
