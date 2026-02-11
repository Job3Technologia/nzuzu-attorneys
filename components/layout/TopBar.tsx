import { Mail, Phone, MessageCircle } from "lucide-react";
import { site } from "@/content/site";

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={14} />
            {site.email}
          </a>
          <a href={`tel:${site.phone_tel}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={14} />
            {site.phone_local}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-secondary-foreground/80">Call Us For Consultation</span>
          <a
            href={site.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
