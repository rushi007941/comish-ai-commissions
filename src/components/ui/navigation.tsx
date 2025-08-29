import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 tw-bg-background/90 tw-backdrop-blur-md tw-border-b tw-border-border/50">
      <div className="tw-container tw-mx-auto tw-px-6">
        <div className="tw-flex tw-items-center tw-justify-between tw-h-16">
          {/* Logo */}
          <div className="tw-flex tw-items-center tw-gap-2">
            <div className="tw-w-8 tw-h-8 tw-bg-primary tw-rounded-lg tw-flex tw-items-center tw-justify-center">
              <span className="tw-text-white tw-font-bold tw-text-sm">C</span>
            </div>
            <span className="tw-text-xl tw-font-bold tw-text-foreground">Comish.AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="tw-hidden md:tw-flex tw-items-center tw-gap-8">
            <a href="#features" className="tw-text-foreground hover:tw-text-primary tw-transition-colors">Features</a>
            <a href="#pricing" className="tw-text-foreground hover:tw-text-primary tw-transition-colors">Pricing</a>
            <a href="#about" className="tw-text-foreground hover:tw-text-primary tw-transition-colors">About</a>
            <a href="#contact" className="tw-text-foreground hover:tw-text-primary tw-transition-colors">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="tw-hidden md:tw-flex tw-items-center tw-gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:tw-hidden tw-p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="tw-h-6 tw-w-6" /> : <Menu className="tw-h-6 tw-w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:tw-hidden tw-border-t tw-border-border/50 tw-py-4 tw-space-y-4">
            <a href="#features" className="tw-block tw-py-2 tw-text-foreground hover:tw-text-primary tw-transition-colors">Features</a>
            <a href="#pricing" className="tw-block tw-py-2 tw-text-foreground hover:tw-text-primary tw-transition-colors">Pricing</a>
            <a href="#about" className="tw-block tw-py-2 tw-text-foreground hover:tw-text-primary tw-transition-colors">About</a>
            <a href="#contact" className="tw-block tw-py-2 tw-text-foreground hover:tw-text-primary tw-transition-colors">Contact</a>
            <div className="tw-flex tw-flex-col tw-gap-2 tw-pt-4 tw-border-t tw-border-border/50">
              <Button variant="ghost" className="tw-justify-start">Login</Button>
              <Button className="tw-justify-start">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};