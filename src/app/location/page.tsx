export default function Location() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Location & Directions
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Find Us
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
                    <span className="text-xl">🗺️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Nearby Attractions
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Mirpur 10, National Botanical Garden, Sher-e-Bangla Cricket Stadium,
                      and local transport links
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Google Maps
              </h2>
              <div className="h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.126957793954!2d90.3615!3d23.7770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0f3c5e3f0c1%3A0x1234567890abcdef!2sHotel%20Sikder%20Residential!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/NM4btcpi173SybtG8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}