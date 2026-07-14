"use client";

import { useState } from "react";
import { Music, Pause, Play } from "lucide-react";


export default function MusicPlayer(){

const [playing,setPlaying]=useState(false);


const toggleMusic=()=>{

const audio =
document.getElementById(
"birthday-audio"
) as HTMLAudioElement;


if(playing){

audio.pause();

}else{

audio.play();

}


setPlaying(!playing);

};



return (

<>


<audio

id="birthday-audio"

src="/music/birthday.mp3"

loop

/>


<button

onClick={toggleMusic}

className="
fixed
bottom-6
right-6
z-50
flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-pink-500
to-purple-600
px-6
py-4
font-bold
text-white
shadow-xl
hover:scale-110
transition
"

>


{

playing

?

<>

<Pause size={20}/>

Pause

</>

:

<>

<Play size={20}/>

Music

</>

}


</button>


</>

);


}