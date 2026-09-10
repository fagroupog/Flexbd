import BookingForm from "@/components/ui/booking-form";

export default function Contact() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Address
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      149/Ga, Shah Ali Bag, Mirpur-1, Dhaka-1216, Dhaka 1216, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:+8801861140000"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      01861-140000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Plus Code
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      R924+9W Dhaka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Check-out Time
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Book Your Stay
              </h2>
              <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl border border-gray-200 dark:border-zinc-700">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801861140000"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
            >
              📞 Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/NM4btcpi173SybtG8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
            >
              🗺️ Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}