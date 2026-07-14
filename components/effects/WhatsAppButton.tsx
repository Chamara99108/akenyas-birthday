"use client";


export default function WhatsAppButton(){


const phoneNumber = "94770047112"; 
// Replace with your WhatsApp number
// Example Sri Lanka: 94771234567
// Remove + sign and spaces


const message =
"Hi \u2764\uFE0F\n\n" +
"We would like to join Akenya's 1st Birthday Celebration \uD83C\uDF82\n\n" +
"Name:\n" +
"Number of guests:\n\n" +
"Thank you \u2764\uFE0F";



const whatsappUrl =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;



return (

<a

href={whatsappUrl}

target="_blank"

rel="noopener noreferrer"

className="
fixed
bottom-6
left-6
z-50
flex
items-center
gap-2
rounded-full
bg-green-500
px-6
py-4
font-bold
text-white
shadow-xl
transition
hover:scale-110
"

>

💚 RSVP on WhatsApp

</a>

);

}