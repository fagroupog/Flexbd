import BookingForm from "@/components/ui/booking-form";

export default function Amenities() {
  const amenities = [
    { icon: "📶", name: "Free Wi-Fi", description: "High-speed wireless internet throughout the property" },
    { icon: "☀️", name: "Air-Conditioned", description: "Comfortable climate control in all rooms" },
    { icon: "🍳", name: "Breakfast Included", description: "Daily hot breakfast buffet" },
    { icon: "🚗", name: "Free Parking", description: "Complimentary parking for guests" },
    { icon: "🏊", name: "Pool", description: "On-site swimming pool for relaxation" },
    { icon: "🍽️", name: "Room Service", description: "24/7 dining and beverage service" },
    { icon: "👨‍👩‍👧‍👦", name: "Family Friendly", description: "Spacious accommodations for families" }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Amenities
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-6 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Experience Comfort and Convenience
          </h2>
          <div className="max-w-lg mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}