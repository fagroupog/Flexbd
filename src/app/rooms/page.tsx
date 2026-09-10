import BookingForm from "@/components/ui/booking-form";

export default function Rooms() {
  const rooms = [
    {
      name: "Standard Room",
      type: "Standard",
      price: "BDT 1,869/night",
      features: [
        "Air-conditioned",
        "Free Wi-Fi",
        "Free Parking",
        "Breakfast included",
        "Pool access",
        "Room service"
      ],
      image: "room-standard.jpg"
    },
    {
      name: "Deluxe Room",
      type: "Deluxe",
      price: "BDT 2,299/night",
      features: [
        "Air-conditioned",
        "Free Wi-Fi",
        "Free Parking",
        "Breakfast included",
        "Pool access",
        "Room service",
        "Lounger"
      ],
      image: "room-deluxe.jpg"
    },
    {
      name: "Family Room",
      type: "Family",
      price: "BDT 2,699/night",
      features: [
        "Air-conditioned",
        "Free Wi-Fi",
        "Free Parking",
        "Breakfast included",
        "Pool access",
        "Room service",
        "Two bedrooms"
      ],
      image: "room-family.jpg"
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Rooms & Rates
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-zinc-700"
              >
                <div className="h-48 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600 dark:text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0 .5 1.5m-.5-1.5h-9m9 0V3.75m-6 15.75v-15" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 dark:text-zinc-400 mb-4">
                  {room.type} Room
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">
                  {room.price}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {room.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-xs px-2 py-1 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-medium hover:underline"
                >
                  Book Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Book Your Stay Today
          </h2>
          <div className="max-w-lg mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}