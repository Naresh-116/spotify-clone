
console.log("Welcome to spotify")
//
// audioElement.play();
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songitems=Array.from(document.getElementsByClassName('songItem'));


// songs will be array
let songs=[

{songname:"NCS-1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songname:"NCS-2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songname:"NCS-3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songname:"NCS-4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songname:"NCS-5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},

]

songitems.forEach((element,i)=>
{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songhead")[0].innerText=songs[i].songname;


})

masterPlay.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0)
{
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}

else{
audioElement.pause();
masterPlay.classList.remove('fa-pause-circle');
masterPlay.classList.add('fa-circle-play');
gif.style.opacity=0;
}})




audioElement.addEventListener('timeupdate',()=>{

console.log('timeupdate');

// update seekbar

// in percentage
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

console.log(progress);

myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;

})

const makeAllPlays = ()=>{

    
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{


        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');

    })


}


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songindex =  parseInt(e.target.id);
        console.log(songindex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        // backtick is required for this  templ
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
audioElement.play();

masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');


    })
}
)
// 

document.getElementById('next').addEventListener('click',()=>
{

if(songindex>=4)
{
    songindex=0
}
else{

songindex+=1;
}

audioElement.src = `songs/${songindex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();

masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>
{

if(songindex<=0)
{
    songindex=0
}
else{

songindex-=1;
}

audioElement.src = `songs/${songindex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();

masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');
})
