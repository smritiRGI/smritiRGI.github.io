// Initially no song is selected
let SongImage = "";
let SongAudio = "";

let selectSong = (audioid,imageid) => {
    let wantToPlayImage = document.getElementById(imageid);
    let wantToPlayAudio = document.getElementById(audioid);
    // when a song is already selected
    if(SongImage.length!=0)
    {
        SongAudio.pause();
        SongAudio.controls = false;
        SongImage.style.display = "inline";
    }
    SongImage = wantToPlayImage;
    SongAudio = wantToPlayAudio;
    SongImage.style.display = "None";
    SongAudio.controls = "controls";
    // to activate timer buttons
    let timers = document.getElementsByClassName('timer');
    for(let i=0;i<timers.length;i++)
        timers[i].disabled = false;
}

// function to play a song for a particular duration
let songDuration = (time)=>{
    time = parseInt(time)*60*1000;
    SongAudio.loop = true;
    setTimeout(()=>{
        console.log(time);
        SongAudio.pause();
        SongAudio.controls = false;
        SongImage.style.display = "inline";
    },time);
}

