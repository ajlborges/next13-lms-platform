"use client";

import React from "react";
import {
  DHBWLogo,
  MicrosoftStartupsLogo,
  VotanLogo,
} from "@/components/ui/logos";
import Link from "next/link";

export function LogoFooter() {
  return (
    <footer
      className="md:h-[60px] h-12 bg-[#1D2B3A] fixed bottom-0 md:bottom-0 md:z-10 z-20 w-full flex flex-row items-center justify-start gap-12 md:px-20 px-8"
      aria-labelledby="footer-heading"
    >
      <div className="text-white/80 md:text-lg text-sm font-medium md:leading-[60px] whitespace-nowrap space-x-10 flex flex-row">
      <Link
          className="text-[#c3e4ff] md:text-md font-medium md:leading-[60px] whitespace-nowrap flex flex-row"
          target="_blank"
          href="/imprint"
        >
          Impressum
        </Link>
        <Link
          className="text-[#c3e4ff] md:text-md font-medium md:leading-[60px] whitespace-nowrap flex flex-row"
          target="_blank"
          href="/privacy-policy"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}

export function LegalFooter() {
  return (
    <footer className="h-36" aria-labelledby="footer-heading">
      <Link
        className="text-[#1D2B3A] text-xs font-medium md:leading-[60px]"
        target="_blank"
        href="/imprint"
      >
        Impressum
      </Link>
      <Link
        className="text-[#1D2B3A] text-xs font-medium md:leading-[60px]"
        target="_blank"
        href="/privacy-policy"
      >
        Datenschutz
      </Link>
    </footer>
  );
}
