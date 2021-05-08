 
images = ["meme1.jpeg", "meme2.jpeg", "meme3.jpeg", "meme4.jpeg", "meme5.jpeg", "meme6.jpeg", "meme7.jpeg",
"meme8.jpeg", "meme9.jpeg", "meme10.jpeg", "meme11.jpeg", "meme12.jpeg", "meme13.jpeg", "meme14.jpeg", "meme15.jpeg", 
"meme16.jpeg", "meme17.jpeg", "meme18.jpeg", "meme19.jpeg", "meme20.jpeg", "meme21.jpeg", "meme22.jpeg", "meme23.jpeg",  "meme24.jpeg"];
alt = ["Anime Mumble", "Typo Meme", "Psychology Button", "The Bard", "Bird?", "Lazy Dog", "Introvert", "Inspiration", "Anime",
'Corona', 'Masked Robbery', 'Terminal', 'PHP', 'Stay Happy', 'Depression', 'Anime Traits', 'Smile', 'School', 'Meow', 'Anxiety', 
'Sleepy?', 'Lazy Much?', 'Concentration', 'Lockdown'];

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


// Sources:
// https://memes.com/blog/these-meditation-memes-will-help-you-take-a-nice-deep-breath
// https://memes.com/blog/these-meditation-memes-will-help-you-take-a-nice-deep-breath
// https://www.pinterest.com/meditationbee/funny-meditation-yoga-memes-meditationbeecom/
// https://10lilian.blogspot.com/2019/05/10-days-later-spongebob-meme.html
// https://www.reddit.com/r/memes/comments/i8kwxg/mindfulness_does_nothing/
// https://www.reddit.com/r/ProgrammerHumor/comments/6alus1/php_best_practices/
// https://www.ebaumsworld.com/pictures/programming-memes-for-tired-devs-who-need-a-distraction/86588808/
// https://www.wearethemighty.com/MIGHTY-SURVIVAL/coronavirus-memes-april-13/
// https://makeameme.org/meme/everytime-i-cough
// https://filmdaily.co/news/anime-quarantine-memes/
// https://www.reddit.com/r/Animemes/comments/e7x00s/sad_meme_2/
// https://www.pinterest.com/pin/748723506778810046/
// https://ahseeit.com/anime/?qa=tag/be-happy
// https://www.reddit.com/r/Animemes/comments/cshhv2/inspiring_anime/
// https://twitter.com/animememedaily/status/1236512794230603777
// https://cheezburger.com/8319021568/mindfulness-kitteh-will-show-you-teh-way
// https://cheezburger.com/8319021568/mindfulness-kitteh-will-show-you-teh-way