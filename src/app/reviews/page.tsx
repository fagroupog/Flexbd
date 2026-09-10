export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      title: "Excellent Service",
      content: "The staff was incredibly friendly and helped us with every request. Very clean rooms and great location.",
      author: "Mr. Rahman",
      date: "January 15, 2024"
    },
    {
      rating: 4,
      title: "Clean and Comfortable",
      content: "Nice and cozy rooms. The AC worked perfectly and the breakfast was delicious.",
      author: "Mrs. Islam",
      date: "February 3, 2024"
    },
    {
      rating: 5,
      title: "Great Value",
      content: "Good price for the quality. Very satisfied with the room and the location.",
      author: "Ahmed Khan",
      date: "March 10, 2024"
    },
    {
      rating: 4,
      title: "Reliable Accommodation",
      content: "Consistent service and clean facilities. Highly recommend for travelers.",
      author: "Fatima Begum",
      date: "March 22, 2024"
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 h-64 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Guest Reviews
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              ⭐ 4.0 out of 5
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0">
              Based on 215 Google reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < review.rating ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-600"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {review.author}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {review.date}
                    </p>
                  </div>
                </div>
                <h4 className="font-medium text-gray-800 dark:text-zinc-200 mb-2">
                  {review.title}
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}