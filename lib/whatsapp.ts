const WA_NUMBER = "919839322072";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildEnquiryMessage(data: {
  name: string;
  phone: string;
  company?: string;
  pickup: string;
  destination: string;
  cargo: string;
  load?: string;
  vehicle?: string;
  message?: string;
}): string {
  return `Hello Prajapati Road Lines,

I would like to enquire about transportation.

Name: ${data.name}
Phone: ${data.phone}
Company: ${data.company || "N/A"}
Pickup: ${data.pickup}
Destination: ${data.destination}
Cargo: ${data.cargo}
Load/Requirement: ${data.load || "Not specified"}
Vehicle Preference: ${data.vehicle || "Not specified"}
Message: ${data.message || "N/A"}

Please share available transportation options and quotation.

Thank you.`;
}
