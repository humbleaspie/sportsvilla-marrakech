declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
    gtag_report_conversion_whatsapp: (url?: string) => boolean;
  }
}

export const trackWhatsAppClick = (location: string) => {
  // Call the Google Ads WhatsApp conversion tracking function
  if (typeof window !== 'undefined' && window.gtag_report_conversion_whatsapp) {
    window.gtag_report_conversion_whatsapp();
    console.log(`WhatsApp conversion tracked from: ${location}`);
  }
};
