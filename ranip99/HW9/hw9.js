images = ["agra_fort.jpg", "ajanta_ellora.jpeg", "akshardham_temple.jpg", "gateway_of_india.jpg",
"hawa_mahal.jpeg", "mehrangarh_fort.jpg", "mysore_palace.jpeg", "qutub_minar.jpg",
"sun_temple.jpg", "taj_mahal.jpeg", "victoria_memorial.jpg"];

alt = ["Agra Fort", "Ajanta Ellora", "Akshardham Temple", "Gateway of India",
"Hawa Mahal", "Mehrangarh Fort", "Mysore Palace", "Qutub Minar",
"Sun Temple", "Taj Mahal", "Victoria Memorial Hall"];
idx = 0;
time = 3000;
playing = false;

function start(){
  if (!playing){
    play = window.setInterval (load, 3000);
    playing = true;
  }
}

function stop(){
  window.clearInterval(play);
  playing = false;
}

function load(time) {
  idx++
  if (idx == images.length) {
    idx =0;
  }
  document.getElementById('pic').src = images[idx];
  document.getElementById('caption').innerHTML = alt[idx];

};

window.onload = start();
