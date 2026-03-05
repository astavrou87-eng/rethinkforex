"use client";

import type React from "react";

type StripeCheckoutButtonProps = {
  href?: string;
  value?: number;
  currency?: string;
  delayMs?: number;
  className?: string;
  children: React.ReactNode;
};

export default function StripeCheckoutButton({
  href = "https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00",
  value = 25.0,
  currency = "GBP",
  delayMs = 150,
  className = "",
  children,
}: StripeCheckoutButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.fbq === "function") {
        w.fbq("track", "InitiateCheckout", { value, currency });
      }
    } catch {
      // no-op
    }

    setTimeout(() => {
      window.location.href = href;
    }, delayMs);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}