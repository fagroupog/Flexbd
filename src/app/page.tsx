import Image from "next/image";
import BookingForm from "@/components/ui/booking-form";

export default function Home() {
  return (
    <>
      <section className="relative bg-[url('/hero-bg.jpg')] bg-center bg-cover bg-no-repeat h-[600px] md:h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-4xl font-bold text-white md:text-5xl mb-4">
              Hotel Sikder Residential
            </h1>
            <p className="text-xl text-white/90 md:text-2xl mb-6">
              Budget-friendly residential hotel in Mirpur-1, Dhaka
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/rooms"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                🛏️ View Rooms
              </a>
              <a
                href="/contact"
                className="border border-white/50 hover:border-white/75 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                📞 Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600 dark:text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.368c0-1.023-.402-1.953-1.012-2.48a9.042 9.042 0 101.503 2.48v1.368a2.25 2.25 0 002.25 2.25h11.25a2.25 2.25 0 002.25-2.25v-1.136c0-6.237-5.069-11.316-11.25-11.363V4.5a37.482 37.482 0 00-7.493-.228" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Rooms</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
                Well-appointed rooms with modern amenities for a relaxing stay.
              </p>
            </div>
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600 dark:text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.253 1.175.658 1.47l6.974 3.487a1.125 1.125 0 001.194-.167l3.958-5.817a1.125 1.125 0 00-.434-1.175L12.75 9.75v-3.375c0-.621-.253-1.175-.658-1.47l-6.974-3.487a1.125 1.125 0 00-.658.167l-3.958 5.817a1.125 1.125 0 00.434 1.175L7.5 12.375v3.375" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Wi-Fi & Parking</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
                Stay connected with complimentary high-speed internet and free secure parking.
              </p>
            </div>
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600 dark:text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.814-1.874 1.948-3.374L13.949 3.378c-.266-.466-.675-.726-1.201-.696A11.45 11.45 0 003.004 11.25a11.45 11.45 0 006.591 0c.526-.03.935.23 1.201.696z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breakfast Included</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
                Start your day right with our complimentary breakfast buffet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Check Availability
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-xl">
              Enter your dates to see room availability and rates
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Hotel Sikder?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Prime Location
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Located in Mirpur-1, close to Mirpur 10, National Botanical Garden,
                and Sher-e-Bangla Cricket Stadium.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Excellent Value
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Starting at just BDT 1,869 per night with all essential amenities
                included.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Trusted Hospitality
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                4.0-star rating from 215+ Google reviews - a trusted choice for
                travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Guest Reviews
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Mr. Rahman
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    January 15, 2024
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex space-x-1">
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                "The staff was incredibly friendly and helped us with every request.
                Very clean rooms and great location."
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Mrs. Islam
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    February 3, 2024
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex space-x-1">
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                    <span className="text-yellow-400 dark:text-yellow-300">★</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                "Nice and cozy rooms. The AC worked perfectly and the breakfast was
                delicious."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Ready to Book Your Stay?
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-4">
                  Experience comfort, convenience, and value at Hotel Sikder
                  Residential.
                </p>
              </div>
              <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-10 rounded-lg shadow-md transition-colors flex items-center gap-3"
              >
                Book Now →
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25l-8.25 8.25m0 0l8.25 8.25m-8.25-8.25V3.75a3.75 3.75 0 013.75-3.75h6.236c.966 0 1.87.522 2.342 1.305l.528.899a3.75 3.75 0 003.75 3.75z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}