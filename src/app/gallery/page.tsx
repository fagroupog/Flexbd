import BookingForm from "@/components/ui/booking-form";

export default function Gallery() {
  const images = [
    "gallery-room1.jpg",
    "gallery-exterior.jpg",
    "gallery-food.jpg",
    "gallery-pool.jpg",
    "gallery-interior.jpg"
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Photo Gallery
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl shadow-md"
              >
                <div className="h-64 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600 dark:text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {["Rooms", "Exterior", "Food & Drink", "Pool", "Interior"][idx]}
                  </span>
                </div>
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