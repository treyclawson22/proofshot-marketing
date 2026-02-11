"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePostHog } from "posthog-js/react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "default" | "small";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-display font-bold transition-all duration-200 rounded-full";

  const sizeStyles = {
    default: "px-8 py-[18px] text-lg",
    small: "px-6 py-3 text-base",
  };

  const variantStyles = {
    primary:
      "bg-orange text-white shadow-[var(--shadow-cta)] hover:bg-orange-hover hover:translate-y-[-2px] hover:shadow-[var(--shadow-cta-hover)] active:translate-y-0",
    secondary:
      "bg-transparent text-gray-900 border-2 border-gray-300 hover:border-gray-900",
    outline:
      "bg-transparent text-gray-900 border-2 border-gray-200 hover:border-gray-400",
  };

  const posthog = usePostHog();

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const isSignup = href.includes("signup");
    const handleClick = isSignup
      ? () => {
          posthog?.capture("signup_cta_clicked", {
            page: window.location.pathname,
          });
        }
      : undefined;
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={handleClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
