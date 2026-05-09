import { Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full bg-white border-b py-2 px-4 hidden lg:flex justify-between items-center text-[13px] text-muted-foreground font-medium">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Mail size={14} className="text-primary" />
          <span>
            Email :{" "}
            <a
              href="mailto:info@islandfootballclub.com"
              className="hover:text-primary transition-colors"
            >
              info@islandfootballclub.com
            </a>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Phone size={14} className="text-primary" />
        <span>
          Call Us :{" "}
          <a href="tel:+2348033253625" className="font-bold text-foreground">
            +2348033253625
          </a>{" "}
          (Member Support)
        </span>
      </div>
    </div>
  );
}
