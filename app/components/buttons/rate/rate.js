const ratingRoom = document.getElementById('ratingRoom');
let stars = ratingRoom.childNodes;

for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseenter", function(event) {
    var prevStars = $(this).prevAll(".rating__star");
    var nextStars = $(this).nextAll(".rating__star");

    this.classList.add('rating__star_selected');

    for (var i = 0; i < prevStars.length; i++) {
      prevStars[i].classList.add('rating__star_selected')
    };
    for (var i = 0; i < nextStars.length; i++) {
      nextStars[i].classList.remove('rating__star_selected')
    };

  stars[i].addEventListener("click", function(event){
    var prevStars = $(this).prevAll(".rating__star");
    var nextStars = $(this).nextAll(".rating__star");

    this.classList.add('rating__star_selected');

    for (var i = 0; i < prevStars.length; i++) {
      prevStars[i].classList.add('rating__star_selected')
    };
    for (var i = 0; i < nextStars.length; i++) {
      nextStars[i].classList.remove('rating__star_selected')
    };
  });

  });
};
