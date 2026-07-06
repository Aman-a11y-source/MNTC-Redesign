"use client";

/**
 * TransitionLink
 * Intercepts navigation to run the close-curtain animation before pushing the new page route.
 * timings are synchronized to let the logo reveal completely, pause for readability, and then open.
 */

import { useRouter, usePathname } from "next/navigation";
import React from "react";

export const CLOSE_MS = 650;  // curtains slide IN (0.65s)
export const HOLD_MS  = 950;  // hold for logo reveal & pause (0.95s)
export const OPEN_MS  = 650;  // curtains slide OUT (0.65s)

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  "data-index"?: number | string;
  onBeforeNavigate?: () => void;
  style?: React.CSSProperties;
}

export default function TransitionLink({
  href,
  children,
  onBeforeNavigate,
  ...rest
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    onBeforeNavigate?.();

    const normCurrent = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const normTarget = href.endsWith("/") ? href.slice(0, -1) : href;
    
    if ((normCurrent || "/") === (normTarget || "/")) {
      return;
    }

    window.dispatchEvent(new CustomEvent("pt:close"));

    setTimeout(() => {
      router.push(href);
    }, CLOSE_MS + HOLD_MS);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
