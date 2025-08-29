import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="tw-py-16 tw-bg-foreground tw-text-background">
      <div className="tw-container tw-mx-auto tw-px-6">
        <div className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-8 tw-mb-12">
          {/* Company Info */}
          <div className="tw-space-y-6">
            <div>
              <h3 className="tw-text-2xl tw-font-bold tw-text-primary">Comish.AI</h3>
              <p className="tw-text-background/70 tw-mt-2">
                Empowering insurance brokers with intelligent commission management.
              </p>
            </div>
            <div className="tw-space-y-3">
              <div className="tw-flex tw-items-center tw-gap-3">
                <Mail className="tw-h-4 tw-w-4 tw-text-primary" />
                <span className="tw-text-sm">hello@comish.ai</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3">
                <Phone className="tw-h-4 tw-w-4 tw-text-primary" />
                <span className="tw-text-sm">+91 98765 43210</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3">
                <MapPin className="tw-h-4 tw-w-4 tw-text-primary" />
                <span className="tw-text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="tw-space-y-6">
            <h4 className="tw-text-lg tw-font-semibold">Product</h4>
            <ul className="tw-space-y-3">
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Features</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Pricing</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Demo</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="tw-space-y-6">
            <h4 className="tw-text-lg tw-font-semibold">Company</h4>
            <ul className="tw-space-y-3">
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">About Us</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Careers</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Blog</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="tw-space-y-6">
            <h4 className="tw-text-lg tw-font-semibold">Support</h4>
            <ul className="tw-space-y-3">
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Help Center</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Documentation</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="tw-border-t tw-border-background/20 tw-pt-8">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-gap-4">
            <p className="tw-text-background/70 tw-text-sm">
              © 2024 Comish.AI. All rights reserved.
            </p>
            <div className="tw-flex tw-items-center tw-gap-4">
              <a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">
                <Linkedin className="tw-h-5 tw-w-5" />
              </a>
              <a href="#" className="tw-text-background/70 hover:tw-text-primary tw-transition-colors">
                <Twitter className="tw-h-5 tw-w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};