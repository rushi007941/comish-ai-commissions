import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary">Comish.AI</h3>
              <p className="text-background/70 mt-2">
                Empowering insurance brokers with intelligent commission management.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">hello@comish.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Demo</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 Comish.AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};