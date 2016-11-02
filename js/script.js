var changePlus = function () {
  var plus = document.querySelector(".plus"),
      filter = document.querySelector(".filter");
      plus.addEventListener("click", function () {
        filter.classList.toggle("geen-display");
      });
};

changePlus();

plusToVinkje = function () {
  var plusje = document.querySelector(".plusje");
   plusje.addEventListener('click', function () {
    if (plusje.innerHTML === "+") {
      plusje.innerHTML = "+✓";
    }
    else {
      plusje.innerHTML = "+";
    };
  });
};
plusToVinkje();

var image = document.querySelectorAll("body section ul li section img");
//var image_tracker = "nietopgeslagen";

var change = function (that) {
        if(that.getAttribute("src") == "/img/empty.png"){
            that.src = "img/fill.png";
//            image_tracker = "opgeslagen";
        }
        else{
            that.src = "/img/empty.png";
//            image_tracker = "nietopgeslagen";
        }
}

for (var i = 0; i < image.length; i++){
    image[i].addEventListener("click", function(){
        change(this);
    });
}
