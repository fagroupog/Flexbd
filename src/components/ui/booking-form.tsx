"use client";

import { useState } from "react";
import { useTheme } from "@/components/ui/theme";

export default function BookingForm() {
  const { language } = useTheme();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0",
    roomType: "standard",
  });

  const t = (en: string, bn: string) => (language === "bn" ? bn : en);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      t("Booking submitted! We'll contact you shortly.", "বুকিং জমা হয়েছে! আমরা শিগগিরই যোগাযোগ করব।")
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            {t("Check-in Date", "চেক-ইন তারিখ")}
          </label>
          <input
            type="date"
            required
            value={formData.checkIn}
            onChange={(e) =>
              setFormData({ ...formData, checkIn: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            {t("Check-out Date", "চেক-আউট তারিখ")}
          </label>
          <input
            type="date"
            required
            value={formData.checkOut}
            onChange={(e) =>
              setFormData({ ...formData, checkOut: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            {t("Adults", "প্রাপ্তবয়স্ক")}
          </label>
          <select
            value={formData.adults}
            onChange={(e) =>
              setFormData({ ...formData, adults: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            {t("Children", "শিশু")}
          </label>
          <select
            value={formData.children}
            onChange={(e) =>
              setFormData({ ...formData, children: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {t("Room Type", "কক্ষের ধরন")}
        </label>
        <select
          value={formData.roomType}
          onChange={(e) =>
            setFormData({ ...formData, roomType: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        >
          <option value="standard">{t("Standard – BDT 1,869", "স্ট্যান্ডার্ড – ১,৮৬৯ টাকা")}</option>
          <option value="deluxe">{t("Deluxe – BDT 2,299", "ডিলাক্স – ২,২৯৯ টাকা")}</option>
          <option value="family">{t("Family – BDT 2,699", "ফ্যামিলি – ২,৬৯৯ টাকা")}</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
      >
        {t("Check Availability", "উপলব্ধতা চেক করুন")}
      </button>
    </form>
  );
}
