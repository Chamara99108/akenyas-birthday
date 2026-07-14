"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Pencil, Trash2 } from "lucide-react";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


type Wish = {
  id: string;
  name: string;
  message: string;
};



export default function Wishes() {


  const [name,setName] = useState("");

  const [message,setMessage] = useState("");

  const [wishes,setWishes] = useState<Wish[]>([]);

  const [editingId,setEditingId] = useState<string | null>(null);

  const [loading,setLoading] = useState(false);



  // realtime wishes listener

  useEffect(()=>{


    const q = query(
      collection(db,"wishes"),
      orderBy("createdAt","desc")
    );


    const unsubscribe = onSnapshot(
      q,
      (snapshot)=>{


        const data = snapshot.docs.map((item)=>({

          id:item.id,
          ...item.data()

        })) as Wish[];


        setWishes(data);


      }
    );


    return ()=>unsubscribe();


  },[]);





  // add / update wish

  const saveWish = async()=>{


    if(!name.trim() || !message.trim()){

      alert("Please enter name and wish");

      return;

    }


    setLoading(true);



    try{


      if(editingId){


        await updateDoc(
          doc(db,"wishes",editingId),
          {

            name,
            message

          }
        );


        setEditingId(null);



      }else{


        await addDoc(
          collection(db,"wishes"),
          {

            name,
            message,
            createdAt:serverTimestamp()

          }
        );


      }



      setName("");

      setMessage("");



    }catch(error){

      console.log(error);

    }



    setLoading(false);


  };






  // edit

  const editWish=(wish:Wish)=>{


    setName(wish.name);

    setMessage(wish.message);

    setEditingId(wish.id);


    window.scrollTo({

      top:400,

      behavior:"smooth"

    });


  };






  // delete

  const deleteWish=async(id:string)=>{


    const confirmDelete =
      confirm("Delete this wish?");


    if(!confirmDelete){

      return;

    }



    await deleteDoc(
      doc(db,"wishes",id)
    );


  };







return (

<section
id="wishes"
className="
relative
overflow-hidden
px-6
py-24
"
>


{/* floating heart */}

<motion.div

animate={{

y:[0,-30,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="
absolute
left-10
top-20
text-6xl
"

>

❤️

</motion.div>





<h2

className="
mb-14
text-center
text-5xl
font-black
gradient-text
"

>

Birthday Wishes 💌

</h2>







{/* Form */}


<div

className="
mx-auto
max-w-xl
rounded-[35px]
bg-white/70
p-8
shadow-xl
backdrop-blur-xl
"

>


<input


value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Your Name"

className="
mb-4
w-full
rounded-xl
border
p-4
outline-none
"


/>





<textarea


value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Write your wish ❤️"

className="
mb-4
h-32
w-full
rounded-xl
border
p-4
outline-none
"


/>





<button

onClick={saveWish}

disabled={loading}

className="
rounded-full
bg-gradient-to-r
from-pink-500
to-purple-600
px-8
py-3
font-bold
text-white
hover:scale-105
transition
disabled:opacity-50
"

>


{

loading

?

"Saving..."

:

editingId

?

"Update Wish ✏️"

:

"Send Wish ❤️"

}



</button>




{

editingId &&

<button

onClick={()=>{

setEditingId(null);

setName("");

setMessage("");

}}

className="
ml-3
rounded-full
bg-gray-400
px-6
py-3
text-white
"

>

Cancel

</button>

}



</div>








{/* Wishes */}


<div

className="
mx-auto
mt-12
grid
max-w-6xl
gap-6
md:grid-cols-2
"

>


{

wishes.map((wish,index)=>(



<motion.div


key={wish.id}


initial={{

opacity:0,

y:40

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

delay:index*0.1

}}


viewport={{

once:true

}}


className="
rounded-[30px]
bg-white
p-7
shadow-xl
"


>



<Heart

className="
mb-4
fill-pink-500
text-pink-500
"

/>



<p

className="
leading-7
text-gray-700
"

>

{wish.message}

</p>





<h3

className="
mt-5
font-bold
text-purple-700
"

>

— {wish.name}

</h3>






<div

className="
mt-5
flex
gap-3
"

>


<button

onClick={()=>editWish(wish)}

className="
flex
items-center
gap-2
rounded-full
bg-purple-500
px-4
py-2
text-white
"

>

<Pencil size={16}/>

Edit

</button>





<button

onClick={()=>deleteWish(wish.id)}

className="
flex
items-center
gap-2
rounded-full
bg-red-500
px-4
py-2
text-white
"

>

<Trash2 size={16}/>

Delete

</button>


</div>



</motion.div>


))

}


</div>




</section>

);


}