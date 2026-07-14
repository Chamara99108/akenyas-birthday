import {
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

export default function EventCard() {
  return (
    <section className="px-6 py-20">

      <div className="glass mx-auto max-w-4xl rounded-[40px] p-12 shadow-xl">

        <h2 className="mb-10 text-center text-5xl font-black gradient-text">

          Event Details

        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="text-center">

            <Calendar className="mx-auto mb-3 text-pink-500" size={45}/>

            <h3 className="font-bold">

              September 05, 2026

            </h3>

          </div>

          <div className="text-center">

            <Clock className="mx-auto mb-3 text-purple-500" size={45}/>

            <h3>

              5:00 PM

            </h3>

          </div>

          <div className="text-center">

            <MapPin className="mx-auto mb-3 text-sky-500" size={45}/>

            <h3>

              At Home

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}