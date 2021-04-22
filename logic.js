const list_song = [
    {
        "song":"We are the champions",
        "album":"News of the World",
        "album_image":"https://images-na.ssl-images-amazon.com/images/I/810rfsma2tL._AC_SX425_.jpg",
        "audio_song": "./songs/Queen - We Are The Champions (1).mp3"
    },
    {
        "song":"Bohemian Rhapsody",
        "album":"A Night at the Opera",
        "album_image":"https://images-na.ssl-images-amazon.com/images/I/71zsO-uc34L._AC_SL1500_.jpg",
        "audio_song": "./songs/Queen – Bohemian Rhapsody (Official Video Remastered).mp3"
    },
    {
        "song":"The Show Must Go On",
        "album":"Innuendo",
        "album_image":"https://images-na.ssl-images-amazon.com/images/I/71op7gmxKLL._AC_SL1400_.jpg",
        "audio_song": "./songs/The Show Must Go On-Queen (HD).mp3"
    },
    {
        "song":"Under Pressure",
        "album":"Hot Space",
        "album_image":"https://images-na.ssl-images-amazon.com/images/I/81B1mbCh4VL.jpg",
        "audio_song": "./songs/Queen - Under Pressure.mp3"
    }
];

function set_songs(){
    var i;
    for(i = 0; i<4;i++){
        set_song(i);
        set_album(i);
        set_album_image(i);
    }
}

function set_song(id){
    const x = document.getElementById("song-name"+id);
    x.innerHTML = list_song[id]["song"];
}

function set_album_image(id){
    const x = document.getElementById("song-album"+id);
    x.innerHTML = list_song[id]["album"]; 
}

function set_album(id){
    const x = document.getElementById("song-album-icon"+id);
    x.src = list_song[id]["album_image"]; 
}

function set_playing(id){
    random_bg_color();
    set_playing_album(id);
    set_playing_song(id);
    set_playing_audio_song(id);
    load();
    play();
}

function set_playing_song(id){
    const x = document.getElementById("playing-song");
    x.innerHTML = list_song[id]["song"]; 
}

function set_playing_album(id){
    const x = document.getElementById("playing-album");
    x.src = list_song[id]["album_image"];
}

function set_playing_audio_song(id){
    const x = document.getElementById("playing-audio-song");
    x.src = list_song[id]["audio_song"];
}

function load(){
    const x = document.getElementById("myaudio").load();
}

function play(){
    const x = document.getElementById("myaudio").play();
}

function change_repeat(){
    const x = document.getElementById("repeat").src;
    if(x == 0){
        document.getElementById("repeat").src = 1;
    }else if(x == 1){
        document.getElementById("repeat").src = 2;
    }else{
        document.getElementById("repeat").src = 0;
    }
}

function change_speed(){
    var x = document.getElementById("speed").src;
    if(x.localeCompare("http://127.0.0.1:5500/img/seta1.jpg") == 0){
        speed(2);
        document.getElementById("speed").src = "http://127.0.0.1:5500/img/seta2.jpg";
    }else if(x.localeCompare("http://127.0.0.1:5500/img/seta2.jpg") == 0){
        speed(0.5);
        document.getElementById("speed").src = "http://127.0.0.1:5500/img/seta0.5.jpg";
    }else{
        speed(1);
        document.getElementById("speed").src = "http://127.0.0.1:5500/img/seta1.jpg";
    }
}

function speed(speed){
    const x = document.getElementById("myaudio");
    x.playbackRate = speed;
}

function random_bg_color() {

    // Get a number between 64 to 256 (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
  
    // Construct a color withe the given values
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
  
    // Set the background to that color
    document.getElementById("playing").style.background = bgColor;
}