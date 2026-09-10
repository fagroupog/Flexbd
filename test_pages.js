const fs = require("fs");
const path = require("path");

const pages = [
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/rooms/page.tsx",
  "src/app/amenities/page.tsx",
  "src/app/gallery/page.tsx",
  "src/app/reviews/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/location/page.tsx",
];

const components = [
  "src/components/ui/theme.tsx",
  "src/components/ui/header.tsx",
  "src/components/ui/booking-form.tsx",
  "src/components/ui/footer.tsx",
];

console.log("=== Testing Pages ===");
pages.forEach((page) => {
  if (fs.existsSync(path.join(__dirname, page))) {
    console.log(`✓ ${page} exists`);
  } else {
    console.log(`✗ ${page} MISSING`);
  }
});

console.log("\n=== Testing Components ===");
components.forEach((comp) => {
  if (fs.existsSync(path.join(__dirname, comp))) {
    console.log(`✓ ${comp} exists`);
  } else {
    console.log(`✗ ${comp} MISSING`);
  }
});

console.log("\n=== Checking Layout ===");
const layoutPath = path.join(__dirname, "src/app/layout.tsx");
if (fs.existsSync(layoutPath)) {
  const layout = fs.readFileSync(layoutPath, "utf-8");
  const hasMetadata = layout.includes("Hotel Sikder Residential");
  const hasLanguageToggle = layout.includes("toggleLanguage");
  console.log(`Layout metadata: ${hasMetadata ? "✓" : "✗"}`);
  console.log(`Language toggle: ${hasLanguageToggle ? "✓" : "✗"}`);
}

console.log("\n=== Checking Globals CSS ===");
const cssPath = path.join(__dirname, "src/app/globals.css");
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, "utf-8");
  console.log(`CSS exists: ✓`);
  console.log(`Has Tailwind: ${css.includes("@tailwindcss") ? "✓" : "✗"}`);
}
