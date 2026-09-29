export const BUSINESS = {
  name: "Prajapati Road Lines",
  phone: "+91 9839322072",
  phoneDisplay: "+91 98393 22072",
  phoneTel: "tel:+919839322072",
  whatsapp: "https://wa.me/919839322072",
  whatsappMessage: "Hello Prajapati Road Lines, I would like to enquire about transportation services.",
  experience: "26+",
  fleetSize: "15+",
  coverage: "PAN India",
  fleetType: "Own + Attached",
  address: {
    street: "Transport Nagar, Shaheedpath Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226010",
    country: "India",
    full: "Transport Nagar, Shaheedpath Road, Lucknow, Uttar Pradesh — 226010",
    googleMapsUrl: "https://www.google.com/maps/search/Transport+Nagar+Shaheedpath+Road+Lucknow+Uttar+Pradesh+226010",
  },
} as const;

export const WHATSAPP_URL = `${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Services",href: "#services" },
  { label: "Fleet",   href: "#fleet" },
  { label: "Team",    href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;
