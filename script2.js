console.log("welcome to spotify");

let song_index=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgrerassBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songItem"));
songs=[
    
    { songName:"salam-e-Ishq",filePath: "1.mp3", coverPath:"1.jpg"},
    { songName:"Trance by Mandala ",filePath: "2.mp3", coverPath:"2.jpg"},
    { songName:" They Mad LOWKEY PESCI",filePath: "3.mp3", coverPath:"3.jpg"},
    { songName:"Rich The Kid by Plug Walk",filePath: "4.mp3", coverPath:"4.jpg"},
    { songName:"Boom Shankar Trance By Aghori",filePath: "5.mp3", coverPath:"5.jpg"},
    { songName:" Sajanka - Sun Is Coming",filePath: "6.mp3", coverPath:"6.jpg"},
    { songName:"KANTARA (Psy-Trance)",filePath: "7.mp3", coverPath:"7.jpg"},
    { songName:" Pardes katena",filePath: "8.mp3", coverPath:"8.jpg"},
    { songName:"Mahishasura Mardini",filePath: "9.mp3", coverPath:"9.jpg"},
    { songName:"salamat by arjit singh",filePath: "10.mp3", coverPath:"10.jpg"}



]

songItems.forEach((element,i)=>{
   // console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})


// handle play /pouse click 

masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// listen to event 

audioElement.addEventListener('timeupdate', ()=> {
    //console.log('timeupdate');
    // update seek bar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    //myProgrerassBar.value=progress;


})

myProgrerassBar.addEventListener('change',()=>
{
    audioElement.currentTime= (myProgrerassBar.value * audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('song_item_play')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('song_item_play ')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{

    // console.log(e);
   // console.log(e.target);
   makeAllPlays();
   
   song_index=parseInt(e.target.id);
  
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

    audioElement.src=`${song_index+1}.mp3`;
    masterSongName.innerText=songs[song_index].songName;
    audioElement.play();
    gif.style.opacity=1;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(song_index>=9){
        song_index=0;
    }
    else
    {
    song_index+=1;
    }
    audioElement.src=`${song_index+1}.mp3`;
    masterSongName.innerText=songs[song_index].songName;
    audioElement.play();
    gif.style.opacity=1;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(song_index <= 0){
        song_index=0;
    }
    else
    {
    song_index-=1;
    }

    audioElement.src=`${song_index+1}.mp3`;
    masterSongName.innerText=songs[song_index].songName;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})