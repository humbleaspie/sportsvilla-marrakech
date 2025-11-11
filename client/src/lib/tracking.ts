declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export const trackWhatsAppClick = (location: string) => {
  // Call the Google Ads conversion tracking function
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion();
    console.log(`WhatsApp conversion tracked from: ${location}`);
  }
};
