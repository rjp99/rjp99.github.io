
images = ["GalaxyCluster.jpg", "InteractingGalaxies.jpg", "M51.jpg", "M104.jpg", "NGC1300.jpg", "NGC6217.jpg"];
alt = ["Galaxy Cluster", "Interacting Galaxies", "M 51", "M 104", "NGC 1300", "NGC 6217"];

window.onload = function load() {
  idx = Math.trunc (Math.random() * images.length)
  document.getElementById('galaxy').src = images[idx];
  document.getElementById('caption').innerHTML = alt[idx];
}
