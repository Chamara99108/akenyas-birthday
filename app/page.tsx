import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import EventCard from "@/components/sections/EventCard";
import Gallery from "@/components/sections/Gallery";
import Timeline from "@/components/sections/Timeline";
import Navbar from "@/components/layout/Navbar";
import Wishes from "@/components/sections/Wishes";
import MusicPlayer from "@/components/effects/MusicPlayer";
import Confetti from "@/components/effects/Confetti";
import WhatsAppButton from "@/components/effects/WhatsAppButton";


export default function Home(){

return (

<main>


<Confetti />

<MusicPlayer />


<Navbar />

<Hero />

<Countdown />

<EventCard />

<Gallery />

<Timeline />

<Wishes />

<WhatsAppButton />

</main>

);

}