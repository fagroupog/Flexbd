export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Hotel Sikder Residential</h3>
            <p className="text-sm text-zinc-400">
              হোটেল শিকদার আবাসিক
            </p>
            <p className="text-sm text-zinc-400 mt-2">
              Budget-friendly residential hotel in Mirpur-1, Dhaka
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/rooms" className="hover:text-white transition-colors">
                  Rooms & Rates
                </a>
              </li>
              <li>
                <a href="/amenities" className="hover:text-white transition-colors">
                  Amenities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Phone: 01861-140000</li>
              <li>Address: 149/Ga, Shah Ali Bag, Mirpur-1</li>
              <li>Plus Code: R924+9W Dhaka</li>
            </ul>
          </div>

          {/* Social / CTA */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-zinc-400 mb-4">
              Book your stay today!
            </p>
            <a
              href="tel:+8801861140000"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Hotel Sikder Residential – হোটেল শিকদার আবাসিক. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
