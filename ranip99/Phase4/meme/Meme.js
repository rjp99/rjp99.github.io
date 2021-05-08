 
images = ["meme1.jpeg", "meme2.jpeg", "meme3.jpeg", "meme4.jpeg", "meme5.jpeg", "meme6.jpeg"];
alt = ["Anime Mumble", "Typo Meme", "Psychology Button", "The Bard", "Bird?", "Lazy Dog"];

window.onload = function load() {
  idx = Math.trunc (Math.random() * images.length)
  document.getElementById('meme').src = images[idx];
  document.getElementById('caption').innerHTML = alt[idx];
  $("button").on("click",changeImage)
 
} 
function changeImage() {

  $('#meme').fadeOut(800).queue(function() {
    idx = Math.trunc (Math.random() * images.length)
    document.getElementById('meme').src = images[idx];
    document.getElementById('caption').innerHTML = alt[idx];
    $('#meme').dequeue();
    $('#meme').fadeIn(800);
  });

  
}