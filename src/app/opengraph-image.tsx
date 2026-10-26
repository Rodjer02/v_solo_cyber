import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — игровой клуб: общий зал и VIP room`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** TTF с Google Fonts только для нужных символов; без сети — системный шрифт. */
async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const sub = "Общий зал и VIP room · бонусы до +5 000 тг";
  const price = "800 тг/час · ночь 3 000 тг";
  const wa = "БРОНЬ В WHATSAPP";
  const top = "> SYSTEM ONLINE // V SOLO HUB";

  const [display, sans] = await Promise.all([
    loadGoogleFont("Russo One", 400, "CYBERCLUB" + price + wa),
    loadGoogleFont("Exo 2", 600, sub + top + "V SOLO"),
  ]);

  const fonts: NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"] = [];
  if (display) fonts.push({ name: "Russo One", data: display, weight: 400, style: "normal" });
  if (sans) fonts.push({ name: "Exo 2", data: sans, weight: 600, style: "normal" });

  const displayFamily = display ? "Russo One" : "sans-serif";
  const sansFamily = sans ? "Exo 2" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#04050A",
          color: "#E6F1FF",
          fontFamily: sansFamily,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -200,
            top: -220,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle at center, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0.18) 40%, rgba(4,5,10,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -220,
            bottom: -260,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: "radial-gradient(circle at center, rgba(236,72,153,0.45) 0%, rgba(236,72,153,0.18) 40%, rgba(4,5,10,0) 70%)",
          }}
        />

        <div style={{ display: "flex", fontSize: 22, color: "#22D3EE" }}>{top}</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: displayFamily, fontSize: 150, lineHeight: 0.95, letterSpacing: 3 }}>
            <span style={{ color: "#22D3EE", textShadow: "0 0 30px rgba(34,211,238,0.9)" }}>CYBER</span>
            <span style={{ color: "#F472B6", textShadow: "0 0 30px rgba(244,114,182,0.9)", marginLeft: 36 }}>CLUB</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 18 }}>
            <div
              style={{
                display: "flex",
                padding: "8px 16px",
                border: "2px solid rgba(34,211,238,0.7)",
                color: "#A5F3FC",
                fontSize: 26,
                letterSpacing: 4,
                marginRight: 22,
              }}
            >
              V SOLO
            </div>
            <div style={{ fontSize: 32, color: "#B6C6D8" }}>{sub}</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26 }}>
          <div style={{ display: "flex", padding: "14px 26px", background: "#22D3EE", color: "#03141B", fontFamily: displayFamily }}>
            {price}
          </div>
          <div style={{ display: "flex", padding: "14px 26px", background: "#25D366", color: "#04210F", fontFamily: displayFamily }}>
            {wa}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
