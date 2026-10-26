import { HERO_STATS } from "@/data/content";
import { Aurora } from "./Aurora";
import { ArrowIcon, GamepadIcon, HeadphonesIcon } from "./icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glowCyan} aria-hidden="true" />
      <div className={styles.glowPink} aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <Aurora
        blobs={[
          { size: 560, left: "10%", top: "-120px", color: "#0EA5E9" },
          { size: 520, right: "5%", bottom: "-160px", color: "#DB2777", delay: "-5s" },
          { size: 380, left: "45%", top: "30%", color: "#7C3AED", delay: "-9s" },
        ]}
      />
      <div className="scanbar" aria-hidden="true" />

      <div className={`${styles.inner} exit`}>
        <div className={styles.text}>
          <div className={styles.typeLine}>
            <span className="type">&gt; SYSTEM ONLINE // V SOLO HUB</span>
          </div>

          <h1 id="hero-title" className={`${styles.title} in`} style={{ animationDelay: ".15s" }}>
            <span className={`${styles.cyber} glitch c-cyan`} data-text="CYBER">
              CYBER
            </span>
            <br />
            <span className={`${styles.club} flick c-pink`}>CLUB</span>
            <span className="sr-only"> V SOLO — игровой клуб</span>
          </h1>

          <p className={`${styles.lead} in`} style={{ animationDelay: ".3s" }}>
            Игровой клуб V SOLO: общий зал и VIP room. Час — 800 тг, ночь до утра — 3 000 тг. Пополняй аккаунт и
            получай бонусы до +5 000 тг.
          </p>

          <div className={`${styles.actions} in`} style={{ animationDelay: ".45s" }}>
            <a className={`${styles.primary} btn cut`} href="#tariffs">
              СМОТРЕТЬ ТАРИФЫ
              <ArrowIcon className={styles.arrow} />
            </a>
            <a className={`${styles.ghost} ghost cut`} href="#bonus">
              ПОЛУЧИТЬ БОНУС
            </a>
          </div>

          <div className={`${styles.stats} in`} style={{ animationDelay: ".6s" }}>
            {HERO_STATS.map((s) => (
              <div key={s.label} className={`${styles.stat} ${s.pink ? styles.statPink : ""}`}>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={`${styles.statVal} ${s.pink ? "c-pink" : "c-cyan"}`}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.visual} in`} style={{ animationDelay: ".35s" }} aria-hidden="true">
          <div className={styles.radar}>
            <div className={`${styles.sweep} sweep`} />
            <div className={styles.vline} />
            <div className={styles.hline} />
            <div className={styles.ring1} />
            <div className={styles.ring2} />
          </div>
          <svg className={`${styles.orbitPink} spin`} viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="240" stroke="#F472B6" strokeOpacity=".55" strokeWidth="2" strokeDasharray="80 40 10 40" />
          </svg>
          <svg className={`${styles.orbitCyan} spin-rev`} viewBox="0 0 460 460" fill="none">
            <circle cx="230" cy="230" r="224" stroke="#22D3EE" strokeOpacity=".4" strokeWidth="1" strokeDasharray="2 8" />
          </svg>
          <div className={`${styles.pad} bob`}>
            <GamepadIcon className={styles.padSvg} />
          </div>
          <div className={`${styles.phones} bob`} style={{ animationDelay: "-2s" }}>
            <HeadphonesIcon className={styles.phonesSvg} />
          </div>
          <div className={styles.status}>
            <span className={`${styles.statusDot} blink`}>●</span> STATUS: ONLINE
            <span className={styles.statusMore}>
              <br />
              ZONE: ОБЩИЙ ЗАЛ / VIP
              <br />
              PING: [—] ms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
