"use client";

import { useState } from "react";
import { ZONES, type ZoneKey } from "@/data/content";
import { perHour, tg } from "@/lib/format";
import { Aurora } from "./Aurora";
import { ClockIcon, DiamondIcon, MoonIcon, UsersIcon } from "./icons";
import styles from "./Tariffs.module.css";

export function Tariffs() {
  const [zone, setZone] = useState<ZoneKey>("hall");

  return (
    <section id="tariffs" className={styles.section} aria-labelledby="tariffs-title">
      <Aurora
        style={{ zIndex: -1 }}
        blobs={[
          { size: 600, left: "-320px", top: "40px", color: "#0284C7" },
          { size: 560, right: "-300px", bottom: "-40px", color: "#C026D3", delay: "-7s" },
        ]}
      />

      <div className={`${styles.head} reveal`}>
        <span className="kicker">[ 01 // PRICE ]</span>
        <h2 id="tariffs-title" className={`${styles.h2} c-pink`}>
          ТАРИФЫ
        </h2>
        <p className={styles.sub}>Бағалар / цены в тенге</p>
      </div>

      <div role="group" aria-label="Зона" className={styles.tabs}>
        {ZONES.map((z) => (
          <button
            key={z.key}
            type="button"
            className={`${styles.tab} ${z.key === "vip" ? styles.tabVip : ""} tap`}
            aria-pressed={zone === z.key}
            onClick={() => setZone(z.key)}
          >
            {z.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {ZONES.map((z) => {
          const vip = z.key === "vip";
          return (
            <div
              key={z.key}
              className={`${styles.card} ${vip ? styles.cardVip : ""} hud reveal`}
              data-active={zone === z.key}
            >
              <div className={`${styles.flow} flowline`} aria-hidden="true" />

              <div className={styles.cardHead}>
                {vip ? <DiamondIcon className={styles.cardIcon} /> : <UsersIcon className={styles.cardIcon} />}
                <h3 className={`${styles.cardTitle} ${vip ? "c-pink" : "c-cyan"}`}>{z.title}</h3>
              </div>

              <div className={styles.list}>
                {z.rows.map((r) => {
                  const note = perHour(r.price, r.hours);
                  return (
                    <div key={r.kz} className={`${styles.row} row ${vip ? "row-p" : ""}`}>
                      {r.icon === "clock" && <ClockIcon className={styles.rowIcon} />}
                      {r.icon === "moon" && <MoonIcon className={styles.rowIcon} />}
                      {r.icon === null && <span className={`${styles.tag} ${styles.tagDesktop}`}>{r.tag}</span>}
                      <span className={`${styles.tag} ${styles.tagMobile}`} aria-hidden="true">
                        {r.tag}
                      </span>
                      <div className={styles.rowText}>
                        <div className={styles.kz}>{r.kz}</div>
                        <div className={styles.ru}>
                          {r.ru}
                          {note && ` · ${note}`}
                        </div>
                      </div>
                      <div className={`${styles.price} ${vip ? "c-pink" : "c-cyan"}`}>
                        {r.price === null ? "[цена]" : tg(r.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
