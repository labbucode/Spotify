console.log("welcome");
// Initialize the varibles
let songIndex = 0 ;
let audioElement = new Audio('10.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');

let songs = [
    {
        songName: "Aise Kyun", filePath: "folder/1.mp3", coverpath: "covers/1.jpg"
    },
    {
        songName: "Aise Kyun", filePath: "folder/1.mp3", coverpath: "covers/1.jpg"
    },
    {
        songName: "Aise Kyun", filePath: "folder/1.mp3", coverpath: "covers/1.jpg"
    },
    {
        songName: "Aise Kyun", filePath: "folder/1.mp3", coverpath: "covers/1.jpg"
    },
    {
        songName: "Aise Kyun", filePath: "folder/1.mp3", coverpath: "covers/1.jpg"
    },
    {
        songName: "Aise Kyun", filePath: "folder/1.mp3", coverpath: "covers/1.jpg"
    },
]

// handle play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity = 0;
    }
})


// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})