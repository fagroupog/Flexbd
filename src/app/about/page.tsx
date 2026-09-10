import BookingForm from "@/components/ui/booking-form";

export default function About() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hotel Sikder Residential – হোটেল শিকদার আবাসিক
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              Welcome to Hotel Sikder Residential – হোটেল শিকদার আবাসিক, a
              warm and affordable home away from home in the heart of Mirpur-1,
              Dhaka. We offer comfort, convenience, and value at competitive rates.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              Our hotel is ideal for travelers, families, and business guests
              looking for comfortable accommodation at a reasonable price. We
              offer air-conditioned rooms, free Wi-Fi, free parking, breakfast,
              a pool, and room service.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              Its location in Shah Ali Bag, Mirpur-1 provides convenient access to
              Mirpur 10, the National Botanical Garden, Sher-e-Bangla Cricket
              Stadium, and local transport links. With a 4.0 rating from 215
              reviews, it is a trusted choice for visitors seeking a clean,
              convenient, and friendly stay in Dhaka.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Location
                </h3>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>📍 149/Ga, Shah Ali Bag, Mirpur-1</li>
                  <li>📮 Dhaka-1216, Bangladesh</li>
                  <li>📞 01861-140000</li>
                  <li>🔗 Plus Code: R924+9W Dhaka</li>
                </ul>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Info
                </h3>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>📞 Call: 01861-140000</li>
                  <li>🕐 Check-out: 12:00 PM</li>
                  <li>💰 Starting from BDT 1,869</li>
                  <li>⭐ 4.0 stars / 215 reviews</li>
                </ul>
              </div>
            </div>
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