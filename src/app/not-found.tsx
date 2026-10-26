import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="root"
      style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <span className="kicker">[ 404 // NOT FOUND ]</span>
        <h1
          className="c-pink"
          style={{ fontFamily: "var(--ff-display)", fontWeight: 400, fontSize: 56, lineHeight: 1, color: "var(--pink)" }}
        >
          СЕКТОР НЕ НАЙДЕН
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 420 }}>Зато общий зал и VIP room на месте.</p>
        <Link
          href="/"
          className="btn cut"
          style={{
            marginTop: 10,
            background: "var(--cyan)",
            color: "var(--cyan-ink)",
            textDecoration: "none",
            fontFamily: "var(--ff-display)",
            letterSpacing: "0.06em",
            padding: "16px 28px",
          }}
        >
          НА ГЛАВНУЮ
        </Link>
      </div>
    </main>
  );
}
