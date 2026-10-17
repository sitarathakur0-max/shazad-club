export const GYM_INFO = {
  name: "Shahzad Fitness Gym",
  category: "Gym and fitness training",
  address: "Factory Area Chowk, Sargodha, Pakistan",
  phone: "+92 300 3526215",
  phoneClean: "+923003526215",
  whatsappNumber: "923003526215",
  whatsappDisplay: "+92 300 3526215",
  email: "malikshahzad3526@gmail.com",
  facebookUrl: "https://www.facebook.com/p/Shahzad-Fitness-GYM-100046479386739/",
  trainerName: "Malik Shahzad Ahmed",
  city: "Sargodha",
  country: "Pakistan",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Hello Shahzad Fitness Gym, I would like to enquire about membership and training.";
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${GYM_INFO.whatsappNumber}?text=${msg}`;
}
