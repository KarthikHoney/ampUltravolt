import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 sm:mt-12 md:mt-16 bg-slate-100 dark:bg-slate-900 border-t border-slate-300 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <h1 className="text-slate-500 dark:text-gray-500 text-xs sm:text-sm">
          AmpUltraVolt ⚡
        </h1>

        {/* Copyright */}
        <p className="text-slate-500 dark:text-gray-500 text-xs sm:text-sm text-center">
          © 2026 AmpUltraVolt. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-2">
          <Link
            href="#"
            className="p-2 text-accent hover:text-primary hover:bg-secondary/30 rounded-lg transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>

          <Link
            href="#"
            className="p-2 text-accent hover:text-primary hover:bg-secondary/30 rounded-lg transition-all duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </footer>
  );
}
