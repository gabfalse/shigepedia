export const generateWhatsappLink = (message) => {
  const phone = "6285162651533";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};