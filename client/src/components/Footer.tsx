import { Instagram, Globe } from "lucide-react";
import { socialLinks } from "@/data/villa-content";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 VIP@Marrakech. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our Instagram"
              data-testid="link-instagram-footer"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our website"
              data-testid="link-website-footer"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm">Website</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
