"use client";

import { useState } from "react";
import { Check, Play } from "lucide-react";

export default function RsvpButton(){
  const [going, setGoing] = useState(false);

  const toggleRsvp = () => {
    setGoing(!going);
    // TODO: integrate with backend to record RSVP
  };

  return (
    <button
      onClick={toggleRsvp}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 font-bold text-white shadow-xl hover:scale-110 transition"
    >
      {going ? (
        <>
          <Check size={20} />
          Going
        </>
      ) : (
        <>
          <Play size={20} />
          RSVP
        </>
        )
      }
    </button>
  );
}
