import { useTheme } from "@/components/ui/theme";

export default function Header() {
  const { language, toggleLanguage } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
          >
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-500">
              Hotel Sikder
            </span>
            <span className="text-xs uppercase tracking-wide text-zinc-500">
              হোটেল শিকদার আবাসিক
            </span>
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            {language === "en" ? "🇬🇪" : "🇧🇩"}
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8">
            <a
              href="/"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              About Us
            </a>
            <a
              href="/rooms"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Rooms & Rates
            </a>
            <a
              href="/amenities"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Amenities
            </a>
            <a
              href="/gallery"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Gallery
            </a>
            <a
              href="/reviews"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Reviews
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              Contact / Book Now
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
