"use client";

import { useEffect, useState } from "react";


export default function Countdown() {


  const [mounted,setMounted] = useState(false);


  const target =
    new Date("2026-09-05T17:00:00").getTime();



  const getTime = () => {


    const diff = target - Date.now();


    if(diff <= 0){

      return {
        days:0,
        hours:0,
        minutes:0,
        seconds:0
      };

    }


    return {

      days:Math.floor(
        diff/(1000*60*60*24)
      ),

      hours:Math.floor(
        (diff%(1000*60*60*24))
        /(1000*60*60)
      ),

      minutes:Math.floor(
        (diff%(1000*60*60))
        /(1000*60)
      ),

      seconds:Math.floor(
        (diff%(1000*60))
        /1000
      )

    };

  };



  const [time,setTime]=useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  });



  useEffect(()=>{


    setMounted(true);


    setTime(getTime());


    const interval=setInterval(()=>{

      setTime(getTime());

    },1000);



    return ()=>clearInterval(interval);


  },[]);





  const Card=({
    value,
    label
  }:{
    value:number;
    label:string;
  })=>(

    <div className="
    glass
    rounded-3xl
    p-8
    text-center
    shadow-xl
    ">

      <h2 className="
      text-5xl
      font-black
      text-pink-500
      ">
        
        {value}

      </h2>


      <p className="mt-2">
        {label}
      </p>


    </div>

  );




  return (

<section
id="countdown"
className="px-6 py-28"
>


<h2 className="
mb-14
text-center
text-5xl
font-black
gradient-text
">

Countdown 🎂

</h2>



<div className="
mx-auto
grid
max-w-5xl
grid-cols-2
gap-5
md:grid-cols-4
">


<Card 
value={mounted ? time.days : 0}
label="Days"
/>


<Card
value={mounted ? time.hours : 0}
label="Hours"
/>


<Card
value={mounted ? time.minutes : 0}
label="Minutes"
/>


<Card
value={mounted ? time.seconds : 0}
label="Seconds"
/>



</div>


</section>

  );

}