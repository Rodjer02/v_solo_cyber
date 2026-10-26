import QRCode from "qrcode";
import { waBookingLink } from "@/lib/whatsapp";

/** QR на чат WhatsApp, рендерится на сервере в SVG. */
export async function WaQr({ className }: { className?: string }) {
  const svg = await QRCode.toString(waBookingLink, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 0,
    color: { dark: "#86EFAC", light: "#00000000" },
  });
  return (
    <span
      className={className}
      role="img"
      aria-label="QR-код: написать в WhatsApp"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
