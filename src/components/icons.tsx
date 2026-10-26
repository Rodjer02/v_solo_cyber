import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base: P = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function WhatsAppIcon(props: P) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M3 21l1.7-4.7A8.6 8.6 0 1 1 8 19.7z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" />
    </svg>
  );
}

export function ArrowIcon(props: P) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2.4" {...base} strokeLinecap="square" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} strokeLinecap="square" {...props}>
      <path d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} strokeLinecap="square" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function GamepadIcon(props: P) {
  return (
    <svg viewBox="0 0 24 16" strokeWidth="0.55" {...base} stroke="#67E8F9" {...props}>
      <path d="M7 1h10a5 5 0 0 1 4.9 6l-.9 5a2.6 2.6 0 0 1-4.5 1.2L14.6 11H9.4l-1.9 2.2A2.6 2.6 0 0 1 3 12l-.9-5A5 5 0 0 1 7 1z" />
      <path d="M5.5 6h3M7 4.5v3" stroke="#F472B6" />
      <circle cx="16" cy="5" r=".7" stroke="#F472B6" />
      <circle cx="18" cy="7" r=".7" stroke="#F472B6" />
      <circle cx="10" cy="8.5" r=".9" />
      <circle cx="14" cy="8.5" r=".9" />
    </svg>
  );
}

export function HeadphonesIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.2" {...base} stroke="#F472B6" {...props}>
      <path d="M3 15v-3a9 9 0 0 1 18 0v3" />
      <path d="M3 15h3v6H4.5A1.5 1.5 0 0 1 3 19.5z" />
      <path d="M21 15h-3v6h1.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
  );
}

export function UsersIcon(props: P) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.6" {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M16 14.2c2.8.3 5 2.6 5 5.8" />
    </svg>
  );
}

export function DiamondIcon(props: P) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.6" {...base} {...props}>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20M9.5 3 8 9l4 12 4-12-1.5-6" />
    </svg>
  );
}

export function ClockIcon(props: P) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.6" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MoonIcon(props: P) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.6" {...base} {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
      <path d="M17 3v3M15.5 4.5h3" />
    </svg>
  );
}

export function GiftIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1" {...base} stroke="#22D3EE" {...props}>
      <rect x="3" y="9" width="18" height="4" />
      <path d="M5 13v8h14v-8M12 9v12" />
      <path d="M12 9C10 5 6.5 5 7 7.5S12 9 12 9zM12 9c2-4 5.5-4 5-1.5S12 9 12 9z" stroke="#F472B6" />
    </svg>
  );
}

export function DatabaseIcon(props: P) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </svg>
  );
}

export function TableIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...base} stroke="#22D3EE" {...props}>
      <path d="M2 14h20M5 14v7M19 14v7" />
      <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10l1-1a1.5 1.5 0 0 1 2 2l-2.5 3" stroke="#F472B6" />
      <path d="M4 8l2 1M5 4l2 3M17 5l-1 3M20 8l-2 1" stroke="#F472B6" />
    </svg>
  );
}

export function SpeakerIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...base} stroke="#22D3EE" {...props}>
      <path d="M13 21H8v-3H6a1 1 0 0 1-1-1v-3l-2-1 2-3.5A6.5 6.5 0 0 1 15.5 6" />
      <path d="M17 9.5a3 3 0 0 1 0 5M19.5 7.5a6 6 0 0 1 0 9" stroke="#F472B6" />
    </svg>
  );
}

export function TrashIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...base} stroke="#22D3EE" {...props}>
      <path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15" />
      <path d="M10 10v7M14 10v7" stroke="#F472B6" />
    </svg>
  );
}

export function PinIcon(props: P) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.6" {...base} {...props}>
      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props: P) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.6" {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="3" {...base} {...props}>
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

export function DoubleCheckIcon(props: P) {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" strokeWidth="1.6" {...base} {...props}>
      <path d="M1 5l3 3 6-7M6 8l1 0 6-7" />
    </svg>
  );
}

export function SendIcon(props: P) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="2.6" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
