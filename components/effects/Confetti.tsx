"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";


export default function Confetti(){


useEffect(()=>{


const timer=setTimeout(()=>{


confetti({

particleCount:150,

spread:100,

origin:{
y:0.6
}

});


},1000);



return ()=>clearTimeout(timer);



},[]);



return null;


}